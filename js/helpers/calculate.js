import { filterCurrentMonthYear } from "./filtering.js";
import { getDataByName } from "../fetches.js";

export async function calculateBudgetsAndExpense() {
  let budgetsUnfilterd = await getDataByName("budget");
  let expensesUnfilterd = await getDataByName("Expense");
  let budgetsFilterd = await filterCurrentMonthYear(budgetsUnfilterd);
  let expensesFilterd = await filterCurrentMonthYear(expensesUnfilterd);
  let result = calculateBudgets(budgetsFilterd, expensesFilterd);
  return result;
}

export const calculateBudgets = (arr, earr) => {
  let totalRemainingGroceries = 0;
  let totalRemainingFixedCosts = 0;
  let totalRemainingEntertainment = 0;
  let totalRemainingTransport = 0;
  let totalRemainingOther = 0;
  let totalBudgetGroceries = 0;
  let totalBudgetFixedCosts = 0;
  let totalBudgetEntertainment = 0;
  let totalBudgetTransport = 0;
  let totalBudgetOther = 0;
  let totalExpenseGroceries = 0;
  let totalExpenseFixedCosts = 0;
  let totalExpenseEntertainment = 0;
  let totalExpenseTransport = 0;
  let totalExpenseOther = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Category === "Groceries") {
      totalRemainingGroceries += arr[i].Amount;
      totalBudgetGroceries += arr[i].Amount;
    } else if (arr[i].Category === "Fixed Cost") {
      totalRemainingFixedCosts += arr[i].Amount;
      totalBudgetFixedCosts += arr[i].Amount;
    } else if (arr[i].Category === "Entertainment") {
      totalRemainingEntertainment += arr[i].Amount;
      totalBudgetEntertainment += arr[i].Amount;
    } else if (arr[i].Category === "Transport") {
      totalRemainingTransport += arr[i].Amount;
      totalBudgetTransport += arr[i].Amount;
    } else if (arr[i].Category === "Other") {
      totalRemainingOther += arr[i].Amount;
      totalBudgetOther += arr[i].Amount;
    } else {
      i++;
    }
  }
  for (let j = 0; j < earr.length; j++) {
    if (earr[j].Category === "Groceries") {
      totalRemainingGroceries -= earr[j].Amount;
      totalExpenseGroceries += earr[j].Amount;
    } else if (earr[j].Category === "Fixed Cost") {
      totalRemainingFixedCosts -= earr[j].Amount;
      totalExpenseFixedCosts += earr[j].Amount;
    } else if (earr[j].Category === "Entertainment") {
      totalRemainingEntertainment -= earr[j].Amount;
      totalExpenseEntertainment += earr[j].Amount;
    } else if (earr[j].Category === "Transport") {
      totalRemainingTransport -= earr[j].Amount;
      totalExpenseTransport += earr[j].Amount;
    } else if (earr[j].Category === "Other") {
      totalRemainingOther -= earr[j].Amount;
      totalExpenseOther += earr[j].Amount;
    } else {
      j++;
    }
  }
  var returnArray = [
    {
      "Groceries Budget": totalRemainingGroceries,
      "FixedCosts Budget": totalRemainingFixedCosts,
      "Entertainment Budget": totalRemainingEntertainment,
      "Transport Budget": totalRemainingTransport,
      "Other Budget": totalRemainingOther,
    },
    {
      "Your total Groceries": totalBudgetGroceries,
      "Your total FixedCosts": totalBudgetFixedCosts,
      "Your total Entertainment": totalBudgetEntertainment,
      "Your total Transport": totalBudgetTransport,
      "Your total Other": totalBudgetOther,
    },
    {
      "Your total Groceries": totalExpenseGroceries,
      "Your total Fixedcosts": totalExpenseFixedCosts,
      "Your total Entertainment": totalExpenseEntertainment,
      "Your total Transport": totalExpenseTransport,
      "Your total Other": totalExpenseOther,
    },
  ];
  return returnArray;
};

export const getTotal = (array, prop) => {
  const amount = array
    .map((item) => {
      return item[prop];
    })
    .reduce((prev, curr) => prev + curr, 0);
  return amount;
};
export const getSiblingValue = (array, keyLookup, valueLookup, keyReturn) => {
  const filteredArray = array.filter((item) => {
    return item[keyLookup] === valueLookup;
  });
  const returnValue = filteredArray.map((item) => {
    return item[keyReturn];
  });
  //if there's no value - return 0
  if (returnValue[0]) {
    return returnValue[0];
  } else return 0;
};

export const getDifferValue = (obj1, obj2, propKey) => {
  const combinedArr = [obj1, obj2];
  const differ = combinedArr
    .map((obj) => {
      return obj[propKey];
    })
    .reduce((prev, curr) => prev - curr);
  return differ;
};
