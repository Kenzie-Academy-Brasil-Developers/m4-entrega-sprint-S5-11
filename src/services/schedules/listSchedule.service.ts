import AppDataSource from "../../data-source";
import { Schedules } from "../../entities/shedule.entities";

const listScheduleService = async (id: any): Promise<Schedules[]> => {
  const scheduleRepository = AppDataSource.getRepository(Schedules);

  const schedules = await scheduleRepository.find();

  const scheduleFOreach = schedules.filter((element) => {
    return element.propertieId === id;
  });

  console.log(scheduleFOreach);

  if (schedules.length === 0) {
    throw new Error("Schedule not found");
  }

  return scheduleFOreach;
};

export default listScheduleService;
