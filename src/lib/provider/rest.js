import axios from "axios";

export default class Rest
{
	#endpoint = 'http://m.ft24.ru/rest';
	constructor(options)
	{
		const cmd = options.cmd;
		const params = {};
		const filter = options.filter ?? false;
		const fields = options.fields ?? false;

		if (filter)
		{
			params.filter = filter
		}
		else if (fields)
		{
			params.fields = fields
		}

		return axios({
			method: 'get',
			baseURL: this.#endpoint,
			url: cmd,
			params: params
		})
	}
}