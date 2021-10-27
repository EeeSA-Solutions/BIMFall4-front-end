/* 
Vi vill ha ett betende som skapar antalet 
progressbars efter hur många kategorier som vi får in. 
(totalen ska alltid vara med).

SKapa en func som tar in 1lista med 2 listor i(exp och bud) och sen skapar divar.
Se till att värdena och categories namnen mappas så att "fixedcost 100/300 skrivs ut." 
*/




import {getDataByName} from "./fetches.js"
getDataByName("Calculate")
.then((res)=>{
res[0].forEach(element => {
    console.log(element)
    let cat = document.createElement("Div")
    cat.id=element.Category
    cat.className="summaryBudget"
    cat.innerHTML=`${element.Category} ${element.Amount}`
    cat.style.cssText="--progress: 0.5; --color:#f60; --label-color: white; --radius: .3"
    let pTag = document.createElement("p")
   // pTag.innerHTML=`${element.Category} ${element.Amount}`
   // cat.appendChild(pTag)
    const parentDiv =document.getElementById("summaryBudgetID")
    parentDiv.appendChild(cat)
});
})