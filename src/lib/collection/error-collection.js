import Model from "../model/model.js";

export default class ErrorCollection
{
	errors: Map = new Map();
	model: Model;

	constructor(model: Model = {})
	{
		this.model = model;
	}

	getErrors()
	{
		return Object.fromEntries(this.errors);
	}

	setError(code: string, text: string): ErrorCollection
	{
		this.errors.set(code, {
			code,
			text
		});
		this.model.onErrorCollectionChange();

		return this;
	}

	removeError(code: string): ErrorCollection
	{
		if (this.errors.has(code))
		{
			this.errors.delete(code);
		}
		this.model.onErrorCollectionChange();

		return this;
	}

	clearErrors(): ErrorCollection
	{
		this.errors.clear();
		this.model.onErrorCollectionChange();

		return this;
	}

	hasErrors()
	{
		return this.errors.size > 0;
	}
}