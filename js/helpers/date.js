export const getDefaultDateForInput = () => {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;
  return today;
};

export function getMonthNow() {
  const today = new Date();
  let month = today.getMonth();
  return month;
}
export function getYearNow() {
  const today = new Date();
  let year = today.getFullYear();
  return year;
}
