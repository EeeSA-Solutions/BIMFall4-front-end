export const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December']
    
let monthToday = new Date().getMonth()
let yearToday = new Date().getFullYear()

var currentMonth = document.getElementById("Month")
var currentYear = document.getElementById("Year")

var rightArrow = document.getElementById("arrowRight")
var LeftArrow = document.getElementById("arrowLeft")

currentMonth.append(`${monthArr[monthToday]}`)
currentYear.append(`${yearToday}`)

function writeMonth(){
    currentMonth.innerHTML = `${monthArr[monthToday]}` 
}

function writeYear(){
    currentYear.innerHTML = `${yearToday}`
}

function arrowLeft(){
    if(monthToday < 1){
        monthToday = 11
        yearToday = yearToday -1

        writeMonth()
        writeYear()
    }
    else{
        monthToday = monthToday -1
        writeMonth()
        writeYear()
    }
}

function arrowRight(){
    if(monthToday > 10){
        monthToday = 0
        yearToday = yearToday +1

        writeMonth()
        writeYear()
    }
    else{
        monthToday = monthToday +1
        writeMonth()
        writeYear()
    }
}

LeftArrow.addEventListener("click", arrowLeft)
rightArrow.addEventListener("click", arrowRight)