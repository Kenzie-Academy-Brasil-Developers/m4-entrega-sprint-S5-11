import { Request, Response } from "express";
import listScheduleService from "../../services/schedules/listSchedule.service";

const listScheduleControler = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const schedule = await listScheduleService(id);

    return res.status(200).json(schedule);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        massage: error.message,
      });
    }
  }
};

export default listScheduleControler;
