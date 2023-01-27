export default class Type
{
	static isArrayFilled(value: any): boolean
	{
		return this.isArray(value) && value.length > 0;
	}
	static isArray(value: any): boolean
	{
		return !Type.isNil(value) && Array.isArray(value);
	}

	static isNumber(value: any): boolean
	{
		return !Number.isNaN(value) && typeof value === 'number';
	}
}