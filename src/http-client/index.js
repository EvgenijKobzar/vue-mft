export default class httpClient
{
	static get(url, data, callback)
	{
		return new Promise((resolve, reject) =>
		{
			const xhr = new XMLHttpRequest();

			xhr.onreadystatechange = () => {
				const readyState = xhr.readyState;

				if (readyState === 4)
				{
					resolve(JSON.parse( xhr.responseText ))
				}
			};

			let queryString = '';
			if (typeof data === 'object')
			{
				for (let propertyName in data)
				{
					queryString += (queryString.length === 0 ? '' : '&') + propertyName + '=' + encodeURIComponent(data[propertyName]);
				}
			}

			if (queryString.length !== 0) {
				url += (url.indexOf('?') === -1 ? '?' : '&') + queryString;
			}

			xhr.open('GET', url, true);
			xhr.send(null);
		})
	}
}