import { getDataByName } from "../fetches.js";
import {
  getDifferValue,
  getSiblingValue,
  getTotal,
} from "../helpers/calculate.js";

export const buildSummaryObj = async () => {
  return await getDataByName("Calculate").then((res) => {
    const totalBudget = getTotal(res[1], "Amount");
    const totalExpense = getTotal(res[0], "Amount");
    const totalRemainingBudget = totalBudget - totalExpense;
    const detailedExpense = buildDetailedObj(res[0]);
    const detailedBudget = buildDetailedObj(res[1]);
    const detailedRemainingBudget = buildDetailedRemainingObj(
      detailedBudget,
      detailedExpense
    );
    const summaryObj = {
      totalBudget: totalBudget,
      totalExpense: totalExpense,
      totalRemainingBudget: totalRemainingBudget,
      detailedExpense: detailedExpense,
      detailedBudget: detailedBudget,
      detailedRemainingBudget: detailedRemainingBudget,
    };
    return summaryObj;
  });
};

const buildDetailedObj = (obj) => {
  const detailedObj = {
    Groceries: getSiblingValue(obj, "Category", "Groceries", "Amount"),
    Transport: getSiblingValue(obj, "Category", "Transport", "Amount"),
    Entertainment: getSiblingValue(obj, "Category", "Entertainment", "Amount"),
    Other: getSiblingValue(obj, "Category", "Other", "Amount"),
  };
  return detailedObj;
};
const buildDetailedRemainingObj = (obj1, obj2) => {
  const detailedObj = {
    Groceries: getDifferValue(obj1, obj2, "Groceries"),
    Transport: getDifferValue(obj1, obj2, "Transport"),
    Entertainment: getDifferValue(obj1, obj2, "Entertainment"),
    Other: getDifferValue(obj1, obj2, "Other"),
  };
  return detailedObj;
};
