import axios from "axios";

export default class Rest
{
	#endpoint = 'http://m.ft24.ru/rest';
	constructor(options): Promise
	{
		let {cmd, fields} = options;

		return axios({
			method: 'get',
			baseURL: this.#endpoint,
			url: cmd,
			params: {
				fields
			}
		})
	}
}