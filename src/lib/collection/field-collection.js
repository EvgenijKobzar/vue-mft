import Type from "../type.js";
export default class FieldCollection
{
	#changedFields = new Map();
	#fields = new Map();

	#model = null;

	constructor(model)
	{
		this.#model = model;
	}

	getFields()
	{
		return Object.fromEntries(this.#fields);
	}

	getField(fieldName)
	{
		return this.#fields.get(fieldName);
	}

	setField(fieldName, value)
	{
		const oldValue = this.#fields.get(fieldName);
		this.#fields.set(fieldName, value);
		if (!this.#changedFields.has(fieldName) && oldValue !== value)
		{
			this.#changedFields.set(fieldName, oldValue);
		}

		return this;
	}

	isChanged()
	{
		return (this.#changedFields.size > 0);
	}

	clearChanged(savingFieldNames = null)
	{
		if (Type.isNil(savingFieldNames))
		{
			this.#changedFields.clear();
		}
		else
		{
			savingFieldNames.forEach((name) => {
				this.removeFromChanged(name)
			});
		}

		return this;
	}

	removeFromChanged(fieldName)
	{
		this.#changedFields.delete(fieldName);

		return this;
	}

	getChangedFields()
	{
		const changedFieldValues = {};

		this.#fields.forEach((value, key) => {
			if (this.#changedFields.has(key))
			{
				changedFieldValues[key] = value;
			}
		})

		return {...changedFieldValues};
	}

	getChangedValues()
	{
		const changedFieldValues = {};

		this.#changedFields.forEach((value, key) => {
			changedFieldValues[key] = value;
		})

		return {...changedFieldValues};
	}

	initFields(fields)
	{
		this.#fields.clear();
		this.clearChanged();
		if (Type.isObject(fields))
		{
			Object.keys(fields).forEach((key) => {
				this.#fields.set(key, fields[key])
			});
		}

		return this;
	}
}
