'use strict'
var Welcome;
var GoodBye;
var MyName;
var MyAge;
var MyCity;
var MyPet;
var SoftwareDeveloper;
var NumberOfStatesLived;
var NumberOfQuestions = 7;
var TotalOfQuestionsRight = 0;
var GuessCount = 0;


Welcome = prompt('Welcome to my guessing game page where you get to test your knowledge of knwing me. What is your name?')
alert('Welcome and goodluck ' + Welcome);

MyName = prompt('Is my name Bryant?').toLowerCase();
if (MyName === 'yes') {
    // console.log( MyName + ' my name is Bryant ')
    alert(MyName + ' my name is Bryant ')
    TotalOfQuestionsRight++
}
else if (MyName === "no") {
    // console.log(MyName + ' was the wrong answer')
    alert(MyName + ' was the wrong answer')
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};

MyAge = prompt('Am I 34yrs old?').toLowerCase();
if (MyAge === 'yes') {
    // console.log( MyName + ' I am 34yrs old ')
    alert(MyAge + ' I am 34yrs old ')
    TotalOfQuestionsRight++
}
else if (MyAge === "no") {
    // console.log(MyName + ' was the wrong answer')
    alert(MyAge + ' was the wrong answer')
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};

MyCity = prompt('Do I live in Tampa, Flordia?').toLowerCase();
if (MyCity === 'yes') {
    // console.log( MyName + ' was the wrong answer ')
    alert(MyCity + ' was the wrong answer')
}
else if (MyCity === "no") {
    // console.log(MyName + ' is the correct answer, I live in Seattle')
    alert(MyCity + ' is the correct answer, I live in Seattle')
    TotalOfQuestionsRight++
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};

MyPet = prompt('Do I own a dog named Rampage?').toLowerCase();
if (MyPet === 'yes') {
    // console.log( MyName + ' I do own a dog named Rampage ')
    alert(MyPet + ' I do own a dog named Rampage ')
    TotalOfQuestionsRight++
}
else if (MyPet === "no") {
    // console.log(MyName + ' was the wrong answer')
    alert(MyPet + ' was the wrong answer')
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};

SoftwareDeveloper = prompt('Am I a Software Developer?').toLowerCase();
if (SoftwareDeveloper === 'yes') {
    // console.log( MyName + '  was incorrect, I am in training to be one though ')
    alert(SoftwareDeveloper + ' was incorrect, I am in training to be one though.')
}
else if (SoftwareDeveloper === "no") {
    // console.log(MyName + ' was the right answer')
    alert(SoftwareDeveloper + ' was the right answer')
    TotalOfQuestionsRight++
}

else {
    // console.log('You didn\'t enter anything useful')
    alert('You didn\'t enter anything useful')
};


do {
    var NumberOfStatesLivedQuestion = prompt('How many states have I lived in? 1-50');
    if (NumberOfStatesLivedQuestion == 11) {
        alert('Correct, I have lived in 11 states')
        TotalOfQuestionsRight++;
        break;
    }
    else if (NumberOfStatesLivedQuestion < 11) {
        alert('Sorry but that was to low')
    }
    else if (NumberOfStatesLivedQuestion > 11) {
        alert('Sorry that number was to high')
    }
    else {
        alert('What are you doing?')
    }
    GuessCount++
} while (GuessCount < 4);

do {
    var countries = ['united states', 'iraq', 'kuwait', 'spain', 'italy', 'france', 'rome', 'scotland', 'england', 'canada', 'oman',
        'saudia arabia', 'yemen', 'djibouti', 'ireland'];
    var guessCountries = prompt('What country have i visited?').toLowerCase();
    if (countries[0] === guessCountries || countries[1] === guessCountries || countries[2] === guessCountries ||
        countries[3] === guessCountries || countries[4] === guessCountries || countries[5] === guessCountries ||
        countries[6] === guessCountries || countries[7] === guessCountries || countries[8] === guessCountries ||
        countries[9] === guessCountries || countries[10] === guessCountries || countries[11] === guessCountries ||
        countries[12] === guessCountries || countries[13] === guessCountries || countries[14] === guessCountries) {
        alert('Yes I have been there')
        TotalOfQuestionsRight++
        break;
    }
    else if (!guessCountries) {
        alert('Please input a country')
    }
    else {
        alert('Sorry I have not been there')
    }
    GuessCount++
} while (GuessCount < 6);

alert('The countries i\'ve been to are the following ' + countries)


GoodBye = prompt('Thank you for testing your knowledge about me. Do you think you passed?')
alert('Of course you did!!!!!!');

alert(TotalOfQuestionsRight + ' out of ' + NumberOfQuestions)

