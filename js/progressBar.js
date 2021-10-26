/* 
Vi vill ha ett betende som skapar antalet 
progressbars efter hur många kategorier som vi får in. 
(totalen ska alltid vara med).

SKapa en func som tar in 1lista med 2 listor i(exp och bud) och sen skapar divar.
Se till att värdena och categories namnen mappas så att "fixedcost 100/300 skrivs ut." 
*/




import {getDataByName} from "./fetches.js"
getDataByName("Calculate").then((res)=>console.log(res))