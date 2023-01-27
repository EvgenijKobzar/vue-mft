import Collection from "./collection.js";
import {PresetModel} from "../model/preset-model.js";

export default class PresetCollection extends Collection
{
	getModelClass()
	{
		return PresetModel;
	}

	getRestCmd()
	{
		return 'mft.preset.list';
	}
}