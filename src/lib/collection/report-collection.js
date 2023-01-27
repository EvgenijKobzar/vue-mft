import Collection from "./collection.js";
import ReportModel from "../model/report-model.js";

export default class ReportCollection extends Collection
{
	getModelClass()
	{
		return ReportModel;
	}

	getRestCmd()
	{
		return 'mft.report.list';
	}
}