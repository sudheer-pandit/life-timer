let isDOBOpen= false;
let dateOfBirth = -1;
const setting= document.getElementById("setting")
const settingContent = document.getElementById(" settingContent")
const initialText = document.getElementById("initialText")
const afterText = document.getElementById("afterDOBBtnText")
const doubleBtn= document.getElementById("dobbutton")
let dobInput = document.getElementById("dobinput")
const years = document.getElementById("years")
const months = document.getElementById("months")
const days = document.getElementById("days")
const hours = document.getElementById("hours")
const munutes= document.getElementById("minutes")
const seconds= document.getElementById("seconds")

const makeTwoDigitNo= function(number){
    return number>9?number : `0${number}`
}

const toggleDateOfBirthSelector= ()=>{
    if(isDOBOpen){ 
    settingContent.classList.add("hide")
    
    }
    else{
        settingContent.classList.remove("hide")
    }
    isDOBOpen= !isDOBOpen;
    // console.log("toggle",isDOBOpen)

}
    const updateAge=()=>{
        const currentDate= new Date()
        // console.log(currentDate)
        const dateDiff = currentDate-dateOfBirth;
        const year = Math.floor(dateDiff/(1000*60*60*24*365))
        const month = Math.floor((dateDiff/(1000*60*60*24*365))%12)
        const day = Math.floor(dateDiff/(1000*60*60*24))%30;
        const hour = Math.floor(dateDiff/(1000*60*60))%24 
        const minute = Math.floor(dateDiff/(1000*60))%60; 
        const second = Math.floor(dateDiff/(1000))%60; 

        years.innerHTML=makeTwoDigitNo( year);
        months.innerHTML=makeTwoDigitNo(month);
        days.innerHTML=makeTwoDigitNo(day);
       hours.innerHTML=makeTwoDigitNo(hour);
        minutes.innerHTML=makeTwoDigitNo(minute);
        seconds.innerHTML=makeTwoDigitNo(second);

    }
    

let setDOBHandle=()=>{
    // dateOfBirth = dobInput.value;
    const dateString= dobInput.value;
    dateOfBirth= dateString? new Date(dateString):null;
    // console.log(dateOfBirth);
    // const year = localStorage.getItem("year")
    // const  month = localStorage.getItem("month")
    // const date = localStorage.getItem("date")
    // // const hour = localStorage.getItem("hour")
    // if(year&& month && date){
    //     console.log({
    //         year, month, date
    //     })
    //     dateOfBirth = new Date(year ,month, date)
    // }
    
    if( dateOfBirth !== -1){

        localStorage.setItem("year",dateOfBirth.getFullYear())
        localStorage.setItem("month",dateOfBirth.getMonth())
        localStorage.setItem("date",dateOfBirth.getDate())

        // localStorage.setItem("hour",dateOfBirth.gethour())
        // localStorage.setItem("minute",dateOfBirth.getminute())
        // localStorage.setItem("second",dateOfBirth.getsec())
        initialText.classList.add("hide")
        afterText.classList.remove("hide")
        setInterval(()=> updateAge(),1000)
        // updateAge();
    }else {
    
       afterText.classList.add("hide")
       initialText.classList.remove("hide")

    }
}

// setDOBHandle();
//    setting.addEventListener("click",toggleDateOfBirthSelector)
 setting.addEventListener("click",toggleDateOfBirthSelector)
 doubleBtn.addEventListener("click",setDOBHandle)