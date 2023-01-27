import {PresetModel} from "../model/preset-model.js";
import Type from "../type.js";
import Text from "../text.js";
import Rest from "../provider/rest.js";

export default class PresetCollection
{
	#map = new Map();

	init(map)
	{
		this.clear();

		map.forEach((item, index) =>
		{
			if (item['id'] > 0)
			{
				let model = new PresetModel({
					fields : {
						id : Text.toNumber(item.id),
						code: item.code.toString(),
						type: item.type.toString(),
						active: item.active.toString(),
					},
				});

				this.#map.set(
					Text.toNumber(index),
					model
				)
			}
		});
	}

	refreshByFilter(filter)
	{
		return new Promise((resolve, reject) =>
		{
			const cmd = 'mft.preset.list';

			if(Object.keys(filter).length <= 0)
			{
				return Promise.reject({
					status: 'error',
					errors: [
						'filter is not set'
					],
				});
			}

			(new Rest({
				cmd,
				filter: {
					active: 'Y'
				}
			}))
			.then((result) =>
			{
				let presets = result.data.result.presets ?? null;

				if (Type.isArrayFilled(presets))
				{
					this.init(presets);
					this.#onChangeData();
				}

				resolve()
			})
			.catch(reject)
		});
	}

	#onChangeData()
	{
		// EventEmitter.emit(this,'PresetModel.Collection:onChangeData');
	}

	getById(id)
	{
		for (let model of this.#map.values())
		{
			if (model.getId() === Text.toNumber(id))
			{
				return model
			}
		}
	}

	getFieldsById(id)
	{
		return this.getById(id)?.getFields() || 0;
	}

	getByIndex(index)
	{
		return this.#map.get(Text.toNumber(index))
	}

	getFieldsByIndex(index)
	{
		return this.getByIndex(index)?.getFields() || 0;
	}

	count()
	{
		return this.#map.size;
	}

	clear()
	{
		this.#map.clear();

		return this;
	}
}