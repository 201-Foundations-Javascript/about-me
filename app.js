'use strict'

var MyName;
var MyAge;
var MyCity;
var MyPet;
var SoftwareDeveloper;

MyName= prompt( 'Is my name Bryant?').toLowerCase();
if(MyName === 'yes') {
    // console.log( MyName + ' my name is Bryant ')
    alert( MyName + ' my name is Bryant ')
}
else if(MyName === "no") {
    // console.log(MyName + ' was the wrong answer')
    alert(MyName + ' was the wrong answer')
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};

MyAge= prompt( 'Am I 34yrs old?').toLowerCase();
if(MyAge === 'yes') {
    // console.log( MyName + ' I am 34yrs old ')
    alert( MyAge + ' I am 34yrs old ')
}
else if(MyAge === "no") {
    // console.log(MyName + ' was the wrong answer')
    alert(MyAge + ' was the wrong answer')
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};

MyCity= prompt( 'Do I live in Tampa, Flordia?').toLowerCase();
if(MyCity === 'yes') {
    // console.log( MyName + ' was the wrong answer ')
    alert( MyCity + ' was the wrong answer')
}
else if(MyCity === "no") {
    // console.log(MyName + ' is the correct answer, I live in Seattle')
    alert(MyCity + ' is the correct answer, I live in Seattle')
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};

MyPet= prompt( 'Do I own a dog named Rampage?').toLowerCase();
if(MyPet === 'yes') {
    // console.log( MyName + ' I do own a dog named Rampage ')
    alert( MyPet + ' I do own a dog named Rampage ')
}
else if(MyPet === "no") {
    // console.log(MyName + ' was the wrong answer')
    alert(MyPet + ' was the wrong answer')
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};

SoftwareDeveloper= prompt( 'Am I a Software Developer?').toLowerCase();
if(SoftwareDeveloper === 'yes') {
    // console.log( MyName + '  was incorrect, I am in training to be one though ')
    alert( SoftwareDeveloper + ' was incorrect, I am in training to be one though.')
}
else if(SoftwareDeveloper === "no") {
    // console.log(MyName + ' was the right answer')
    alert(SoftwareDeveloper + ' was the right answer')
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};