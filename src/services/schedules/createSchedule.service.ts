import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entities";
import { Schedules } from "../../entities/shedule.entities";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async ({
  date,
  hour,
  propertieId,
  userid,
}: any) => {
  const schedulesRepository = AppDataSource.getRepository(Schedules);
  const propertyRepository = AppDataSource.getRepository(Property);
  const property = propertyRepository.findOneBy({
    id: userid,
  });

  if (!property) {
    throw new Error("not found");
  }
  if (hour > 18 || hour < 8) {
    throw new Error("We are closed");
  }

  const scheduleFind = await schedulesRepository.find();

  const schedule = schedulesRepository.create({
    date: new Date(date),
    hour: hour,
    propertieId,
    userid,
  });

  await schedulesRepository.save(schedule);

  return schedule;
};

export default createScheduleService;
