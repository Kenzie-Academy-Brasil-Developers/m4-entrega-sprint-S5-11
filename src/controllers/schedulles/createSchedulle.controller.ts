import { Request, Response } from "express";
import createScheduleService from "../../services/schedules/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  try {
    const schedule = req.body;

    schedule.userid = req.user.id;

    const createSchedule = await createScheduleService(schedule);

    return res.status(201).json(createSchedule);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }
};

export default createScheduleController;
