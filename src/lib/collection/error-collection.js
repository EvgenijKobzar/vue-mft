export default class ErrorCollection
{
	#errors = new Map();
	#model = null;

	constructor(model)
	{
		this.#model = model;
	}

	getErrors()
	{
		return Object.fromEntries(this.errors);
	}

	setError(code, text)
	{
		this.#errors.set(code, {
			code,
			text
		});
		this.#model.onErrorCollectionChange();

		return this;
	}

	removeError(code)
	{
		if (this.#errors.has(code))
		{
			this.#errors.delete(code);
		}
		this.#model.onErrorCollectionChange();

		return this;
	}

	clearErrors()
	{
		this.#errors.clear();
		this.#model.onErrorCollectionChange();

		return this;
	}

	hasErrors()
	{
		return this.#errors.size > 0;
	}
}