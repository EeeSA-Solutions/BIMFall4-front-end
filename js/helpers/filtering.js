import { getMonthNow, getYearNow } from "./date.js";

export function filterCurrentMonthYear(arr) {
  let filterMonth = arr.filter(
    (date) => new Date(date.Date).getMonth() === getMonthNow()
  );
  let filterYear = filterMonth.filter(
    (year) => new Date(year.Date).getFullYear() === getYearNow()
  );

  return filterYear;
}
