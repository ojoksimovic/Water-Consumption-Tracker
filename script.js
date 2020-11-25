// variables or elements

var startButton = document.querySelector('#button-start');
var startBox = document.querySelector('#start');
var userInfoBox = document.querySelector('#user-info');
var letsGoButton = document.querySelector('#button-letsgo');
var trackerBox = document. querySelector('#tracker');
var completeBox = document.querySelector('#complete')
var ageField = document.querySelector('#age');
var weightField = document.querySelector('#weight');
var exerciseField = document.querySelector('#exercise');
var alienYes = document.querySelector('#alien-yes');
var alienNo = document.querySelector('#alien-no');
var alienContainer = document.querySelector('#alien-container');
var humanContainer = document.querySelector('#human-container')
var goalValue = document.querySelector('#goal-value');
var totalValue = document.querySelector('#total-value');
var log330mL = document.querySelector('#water330mL');
var log500mL = document.querySelector('#water500mL');
var log750mL = document.querySelector('#water750mL');
var log1000mL = document.querySelector('#water1000mL');
var logOther = document.querySelector('#buttonOther2');
var inputOther = document.querySelector('#other');
var alienImg = document.querySelector('#alien-img');
var humanImg = document.querySelector('#human-img');
var overlay = document.querySelector('#overlay-container');
var letsGoAgainButton = document.querySelector('#button-letsgo-again');
var mobileMenuButton = document.querySelector('#mobile-menu-button');
var logger = document.querySelector('#logger');
var mobileTotal = document.querySelector('#mobile-total');
var mobileGoal = document.querySelector('#mobile-goal');
var title = document.querySelector('#title');





var alien = "no";
var age = ageField.value;
var weight = weightField.value;
var exercise = exerciseField.value;
var waterTotal = 0;
var waterGoal = 2000;
var waterPercentage;

// event listeners

startButton.addEventListener('click', showUserInfo);
startButton.addEventListener('click', preventSubmit);
letsGoButton.addEventListener('click', showTracker);
letsGoButton.addEventListener('click', preventSubmit);
alienNo.addEventListener('click', alienIsNo);
alienYes.addEventListener('click', alienIsYes);

log330mL.addEventListener('click', preventSubmit);
log330mL.addEventListener('click', add330);

log500mL.addEventListener('click', preventSubmit);
log500mL.addEventListener('click', add500);

log750mL.addEventListener('click', preventSubmit);
log750mL.addEventListener('click', add750);

log1000mL.addEventListener('click', preventSubmit);
log1000mL.addEventListener('click', add1000);

logOther.addEventListener('click', preventSubmit);
logOther.addEventListener('click', addOther);

letsGoAgainButton.addEventListener('click', preventSubmit);
letsGoAgainButton.addEventListener('click', showUserInfo);

mobileMenuButton.addEventListener('click', toggleMobileMenu);

// functions

function preventSubmit(event){
    //Prevents form from submitting
    event.preventDefault();
}

function showUserInfo() {
    startBox.className = "hidden box";
    completeBox.className = "hidden box";
    trackerBox.className = "hidden box";
    overlay.classList = "overlay hidden";
    userInfoBox.className = "visible box";
    waterTotal = 0;
    totalValue.innerHTML = "0 mL"
    alienImg.style.backgroundSize = "100% 0%";
    humanImg.style.backgroundSize = "100% 0%";
    mobileTotal.innerHTML = "Total: 0 mL";
    
    
    console.log("complete");
    
}

function showTracker() {
    userInfoBox.className = "hidden box";
    trackerBox.className = "visible box";
    console.log(humanContainer.style.height);
    console.log("testing");
    if (humanContainer.style.height == "350px") {
        logger.className = "hidden";
    }
    age = ageField.value;
    weight = weightField.value;
    exercise = exerciseField.value;
    console.log("age: " + age);
    console.log("weight: " + weight);
    console.log("exercise: " + exercise);
    waterCalculation();
}

function alienIsNo() {
    alien = "no";
    alienContainer.className = "hidden";
    humanContainer.className = "";
}

function alienIsYes() {
    alien = "yes";
    humanContainer.className = "hidden";
    alienContainer.className = "";
}

function waterCalculation() {
    waterGoal = ((2.20462 * weight * 1/2) + (exercise * 0.4)) * 29.5735;
    console.log("Water Goal: " + waterGoal);
    goalValue.innerHTML = waterGoal.toFixed(0) + " mL";
    mobileGoal.innerHTML = "Goal: " + waterGoal.toFixed(0) + " mL";
    
}

function add330() {
    waterTotal = waterTotal + 330;
    updateWater();
    toggleMobileMenu();
}

function add500() {
    waterTotal = waterTotal + 500;
    updateWater();
    toggleMobileMenu();
}

function add750() {
    waterTotal = waterTotal + 750;
    updateWater();
    toggleMobileMenu();
}

function add1000() {
    waterTotal = waterTotal + 1000;
    updateWater();
    toggleMobileMenu();
}

function addOther() {
    waterTotal = waterTotal + Number(inputOther.value);
    inputOther.value = "";
    updateWater();
    toggleMobileMenu();
}
function updateWater() {
    if (waterTotal < waterGoal) {
        totalValue.innerHTML = waterTotal.toFixed(0) + " mL";
        mobileTotal.innerHTML = "Total: " + waterTotal.toFixed(0) + " mL";
        waterPercentage = ((waterTotal/waterGoal)*100).toFixed(0);
        alienImg.style.backgroundSize = "100% " + waterPercentage + "%";
        humanImg.style.backgroundSize = "100% " + waterPercentage + "%";
            
            
} else {
        totalValue.innerHTML = waterTotal.toFixed(0) + " mL";
        mobileTotal.innerHTML = "Total: " + waterTotal.toFixed(0) + " mL";
        alienImg.style.backgroundSize = "100% 100%";
        humanImg.style.backgroundSize = "100% 100%";
        overlay.className = "overlay";
        completeBox.className = "visible box";
}}

function toggleMobileMenu() {
    var humanSize = window.getComputedStyle(humanContainer).getPropertyValue("height");
    if (humanSize == "350px") { 
    var loggerProp = window.getComputedStyle(logger).getPropertyValue("display"); 
    if (loggerProp == "none"){
    mobileTotal.className = "hidden";
    mobileGoal.className = "hidden";
    humanContainer.className = "hidden";
    alienContainer.className = "hidden";
    title.className = "hidden";
    logger.style.display = "flex";
    }
        if (loggerProp == "flex"){
    mobileTotal.className = "";
    mobileGoal.className = "";
            if (alien == "no") {
    humanContainer.className = "";}
            if (alien == "yes"){
    alienContainer.className = "";}
    title.className = "";
    logger.style.display = "none";
    }}
}