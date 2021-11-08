import { monthCookie, yearCookie } from "./cookiecutter.js";

export const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// let monthToday = new Date().getMonth()
// let yearToday = new Date().getFullYear()
export let monthToday;
export let yearToday;
// const getMonthCookie = monthCookie;
// const getYearCookie = yearCookie;

function GetDateFromCookie() {
  if (!monthCookie && !yearCookie) {
    monthToday = new Date().getMonth();
    yearToday = new Date().getFullYear();
  } else {
    monthToday = monthCookie;
    yearToday = yearCookie;
  }
}
GetDateFromCookie();

var currentMonth = document.getElementById("Month");
var currentYear = document.getElementById("Year");

var rightArrow = document.getElementById("arrowRight");
var LeftArrow = document.getElementById("arrowLeft");

currentMonth.append(`${monthArr[monthToday]}`);
currentYear.append(`${yearToday}`);

function writeMonth() {
  currentMonth.innerHTML = `${monthArr[monthToday]}`;
}

function writeYear() {
  currentYear.innerHTML = `${yearToday}`;
}

function arrowLeft() {
  monthToday = parseInt(monthToday);
  yearToday = parseInt(yearToday);

  if (monthToday < 1) {
    monthToday = 11;
    yearToday = yearToday - 1;

    writeMonth();
    writeYear();
  } else {
    monthToday = monthToday - 1;

    writeMonth();
    writeYear();
  }

  setCookie("Month", monthToday);
  setCookie("Year", yearToday);

  location.reload();
}

function arrowRight() {
  monthToday = parseInt(monthToday);
  yearToday = parseInt(yearToday);
  if (monthToday > 10) {
    monthToday = 0;
    yearToday = yearToday + 1;

    writeMonth();
    writeYear();
  } else {
    monthToday = monthToday + 1;

    writeMonth();
    writeYear();
  }

  setCookie("Month", monthToday);
  setCookie("Year", yearToday);

  location.reload();
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

let newMonthToday = parseInt(monthToday);
let newYearToday = parseInt(yearToday);
export var fullDate = `${newMonthToday + 1}/${newYearToday}`.toString();

LeftArrow.addEventListener("click", arrowLeft);
rightArrow.addEventListener("click", arrowRight);
