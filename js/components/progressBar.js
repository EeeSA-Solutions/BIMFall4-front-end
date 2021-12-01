/* 
Vi vill ha ett betende som skapar antalet 
progressbars efter hur många kategorier som vi får in. 
(totalen ska alltid vara med).

SKapa en func som tar in 1lista med 2 listor i(exp och bud) och sen skapar divar.
Se till att värdena och categories namnen mappas så att "fixedcost 100/300 skrivs ut." 
*/

import { getDataByName } from "../fetches.js";

getDataByName("Calculate").then((res) => {
  totalExpenseBudget(res);
  res[1].forEach((budgetElement) => {
    let cat = document.createElement("Div");
    cat.style.cssText = "--progress: 0; --color:#f60; --radius: .3";
    cat.className = "summaryBudget1";
    cat.innerHTML = `${budgetElement.Category} 0/${budgetElement.Amount}`;
    res[0].forEach((expele) => {
      if (expele.Category == budgetElement.Category) {
        cat.innerHTML = `${budgetElement.Category} ${expele.Amount}/${budgetElement.Amount}`;
        let value = expele.Amount / budgetElement.Amount;
        let value2 = value > 1 ? 1 : value;
        cat.style.setProperty("--progress", value2);
        cat.style.setProperty("--color", getColor(value2));
      }
    });
    const parentDiv = document.getElementById("summaryBudgetID");
    parentDiv.appendChild(cat);
  });
});

function getColor(value) {
  return value < 0.6
    ? "var(--progressbarBlue)"
    : value < 1
    ? "var(--progressbarOrange)"
    : "var(--progressbarRed)";
}

const totalExpenseBudget = (arrayOfBudExp) => {
  let totalExp = 0;
  let totalBud = 0;
  arrayOfBudExp[0].forEach((exp) => {
    arrayOfBudExp[1].forEach((bud) => {
      if (exp.Category == bud.Category) totalExp += exp.Amount;
    });
  });
  arrayOfBudExp[1].forEach((bud) => {
    totalBud += bud.Amount;
  });
  if (totalBud > 0) {
    let cat = document.createElement("Div");
    cat.style.cssText =
      "--progress: 0; --color:#f60;  --radius: .3;  font-weight: bold;";
    cat.id = "summaryTotalId";
    cat.className = "summaryBudget1";
    let value = totalExp / totalBud;
    let value2 = value > 1 ? 1 : value;
    cat.style.setProperty("--progress", value2);
    cat.style.setProperty("--color", getColor(value2));
    const parentDiv = document.getElementById("summaryBudgetID");
    cat.innerHTML = `Total: ${totalExp}/${totalBud}`;
    parentDiv.appendChild(cat);
  }
};
