import ErrorCollection from "../collection/error-collection.js";
import FieldCollection from "../collection/field-collection.js";


export default class Model
{
	#fieldCollection = null;
	#errorCollection = null;

	constructor()
	{
		this.#errorCollection = new ErrorCollection(this);
		this.#fieldCollection = new FieldCollection(this);
	}

	getErrorCollection(): ErrorCollection
	{
		return this.#errorCollection;
	}

	getFields(): {}
	{
		return this.#fieldCollection.getFields();
	}

	getField(fieldName: string): any
	{
		return this.#fieldCollection.getField(fieldName);
	}

	setField(fieldName: string, value: any): Model
	{
		this.#fieldCollection.setField(fieldName, value);

		return this;
	}

	setFields(fields): Model
	{
		Object.keys(fields).forEach((key) => {
			this.setField(key, fields[key]);
		});

		return this;
	}

	initFields(fields: {}): Model
	{
		this.#fieldCollection.initFields(fields);

		return this;
	}

	removeField(fieldName): Model
	{
		this.#fieldCollection.removeField(fieldName);

		return this;
	}

	isChanged(): boolean
	{
		return this.#fieldCollection.isChanged();
	}

	getId()
	{
		return this.getField('id');
	}
}