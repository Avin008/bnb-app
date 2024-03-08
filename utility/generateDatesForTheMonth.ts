import { addDays, eachDayOfInterval, format } from "date-fns";

const generateDatesForTheMonth = (numOfDateToGenerate: number): Date[] => {
  const days = eachDayOfInterval({
    start: Date.now(),
    end: addDays(Date.now(), numOfDateToGenerate),
  });
  return days;
};

export default generateDatesForTheMonth;
