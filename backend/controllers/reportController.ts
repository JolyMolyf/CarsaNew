import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import reportHelpers from '../services/helpers/reportHelpers';
import db from '../database/models';
import Logger from '../logger';

const getAllReportForCar = async (req: Request, res: Response) => {
  const car_id = req.params.car_id;
  const reports = await reportHelpers.getRecentCarReports(car_id);
  res.json(reports);
};

const saveAndUpdateReports = async (req: Request, res: Response) => {
  const reports = req.body;
  if (reports?.length === 0) {
    res.json({ error: 'No reports sent', code: 403 });
  } else {
    const result = await reportHelpers.createOrUpdateReports(reports);
    res.json({ ...result });
  }
};

const updateSingleReport = async (req: Request, res: Response) => {
  const updatedReport = await reportHelpers.updateSingleReport(req.body);
  return updatedReport;
};

const uploadReportImages = async (req: Request, res: Response) => {
  const reportId = req.params.reportId;

  try {
    //@ts-ignore
    var newImages = req.files?.map((file: Express.Multer.File) => file.filename) || [];
    const existingImages = (await db.Report.findByPk(reportId)).images || [];
    await db.Report.update({ images: [...existingImages, ...newImages] }, { where: { id: reportId } });
  } catch (e: any) {
    Logger.error(e);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message });
  }

  return res.sendStatus(StatusCodes.OK);
};

const deleteReport = async (req: Request, res: Response) => {
  const reportId = req.params.reportId;

  const result = await reportHelpers.deleteReportById(reportId);

  return result.success
    ? res.sendStatus(StatusCodes.OK)
    : res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: result.message });
};

export default {
  getAllReportForCar,
  saveAndUpdateReports,
  updateSingleReport,
  uploadReportImages,
  deleteReport
};
