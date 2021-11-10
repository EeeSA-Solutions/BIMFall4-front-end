// import { calculateBudgets } from "./workhorse.js";
// import { filterCurrentMonthYear } from "./helpers/filtering.js";
// import { getDataByName } from "./fetches.js";
// import generateTable from "./components/tableGenerator.js";

// async function calculateBudgetsAndExpense() {
//   let budgetsUnfilterd = await getDataByName("budget");
//   let expensesUnfilterd = await getDataByName("Expense");
//   let budgetsFilterd = await filterCurrentMonthYear(budgetsUnfilterd);
//   let expensesFilterd = await filterCurrentMonthYear(expensesUnfilterd);
//   let result = calculateBudgets(budgetsFilterd, expensesFilterd);
//   return result;
// }
// calculateBudgetsAndExpense().then((result) => {
//   generateTable([result[0]], "remaining");
//   generateTable([result[1]], "budget");
//   generateTable([result[2]], "expense");
// });
