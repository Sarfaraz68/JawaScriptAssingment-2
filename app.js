// //Assignment # 21-25 

// //Question - 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert("Hello "+firstName+" "+lastName);

// //Question - 1
// var usermobile = prompt("Enter the name of your favorite mobile");
// var lengthofmobile = usermobile.length;
// alert("My favorite Mobile is: "+usermobile+"\n"+"Length of String is: "+lengthofmobile);

// //Question - 3
// alert("Find index number of a letter in the word Pakistani");
// var letter = prompt("Enter a letter ");
// var letter=letter.toLowerCase();
// var pakistani="Pakistani";
// lengthOfPakistani = pakistani.length;
// for (a=0;a<=lengthOfPakistani;a++){
//     if(letter===pakistani[a]){
//         alert("String: "+pakistani+"\n"+" Index of "+letter+" is "+a);
//     }
// }

// //Question - 4
// var word = "Hello World";
// word=word.toLowerCase();
// var lastWord="l";
// var finalIndex ="";
// lengthOfWord = word.length;
// for (a=0;a<=lengthOfWord;a++){
//     if(lastWord===word[a]){
//         finalIndex=a;
//     }
// }
// alert("Last Index of l is: "+finalIndex);

// //Question - 5
// alert("Find a Character on the given index Number in Pakistani");
// var indexNo = prompt("Enter Index Number between 0 and 9");
// var pakistani="Pakistani";
// alert("String: "+pakistani+"\n"+"Character at Index "+indexNo+" : "+pakistani[indexNo]);

// //Question - 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert("Hello "+firstName.concat(" ",lastName));

// //Qauestion - 7
// var firstWord = "Hyderabad";
// var replaceWord = "Hyder";
// var replaceWith = "Islam";
// var numCharFirstWord = firstWord.length;
// var numCharReplaceWord = replaceWord.length;
// var numCharReplaceWith = replaceWith.length;
// for (i=0; i<9; i++){
//     if(firstWord.slice(i,i+numCharReplaceWord)===replaceWord){
//         newWord = firstWord.slice(0,i)+replaceWith+firstWord.slice(i+numCharReplaceWord);
//         alert("City: "+firstWord+"\n"+"After replacement :" + newWord);
//     }
// }

// //Question - 8
// var firstWord = "Ali and Sami are best friends. They play cricket and football together.";
// var orignialMessage=firstWord;
// var replaceWord = "and";
// var replaceWith = "&";
// var numCharFirstWord = firstWord.length;
// var numCharReplaceWord = replaceWord.length;
// var numCharReplaceWith = replaceWith.length;
// for (i=0; i<numCharFirstWord; i++){
//     if(firstWord.slice(i,i+numCharReplaceWord)===replaceWord){
//         newWord = firstWord.slice(0,i)+replaceWith+firstWord.slice(i+numCharReplaceWord);
        
//         firstWord=newWord;
//     }
// }
// alert("Original Message: "+orignialMessage+"\n"+"After replacement :" + newWord);

// //Question - 9

// var stringValue = "472";
// var numericValue =  parseInt(stringValue);
// document.write("String :"+stringValue+"<br>");
// document.write("Type :"+typeof(stringValue) +"<br>");
// document.write("Value :"+numericValue+"<br>");
// document.write("Type :"+typeof(numericValue) +"<br>");

// //Question - 10
// var userInput = prompt("Write something in lowercase");
// var userInput1 = userInput.toUpperCase();
// document.write("User input :"+userInput+"<br>");
// document.write("Upper case :"+userInput1+"<br>");

// //Question - 11

//  var userInput = prompt("Write something");
//  var userInput1 = userInput.toLowerCase();
//  titleCase = userInput1.slice(0,1);
//  titleCase = titleCase.toUpperCase();
//  titleCase2 = userInput1.slice(1);
//  finalTitleCase = titleCase.concat(titleCase2);
//  alert(finalTitleCase);
// document.write("User input :"+userInput+"<br>");
// document.write("Title case :"+finalTitleCase+"<br>");

// //Question - 12
// var num = 35.36;
// var num1 = num.toString();
// var finalNum = num1.slice(0,2) +  num1.slice(3);
// document.write("Number :"+num+"<br>"+"Result :"+finalNum);

// //Question - 13
// var userName = prompt("Enter user Name");
// userNameLength = userName.length;
// for (i=0; i<=userNameLength; i++){
//     if ((userName[i]==="!") || (userName[i] ===".") || (userName[i]==="@") || (userName[i]===",")){
//         alert("Please enter a valid user name")
//     }
// }

// //Question - 14
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var checkItem = prompt("Welcome to ABC Bakery! What would you like to order");
// checkItem=checkItem.toLocaleLowerCase();
// var lengthOfItems = bakeryItems.length;

// for (lengthOfItems; lengthOfItems>=0; lengthOfItems--){
//     if (checkItem===bakeryItems[lengthOfItems]){
//         alert("Cookies is available at index "+lengthOfItems+" in our Bakery");
//             break;
        
//     }
//     else if (lengthOfItems===0) 
//     {
//         alert("Sorry "+checkItem+" is not available in our Bakery");
     
        
//     }   
//     }

// //Question - 15

// var message = prompt("Enter password"+"\n"+"a. It should contain alphabets and numbers" +"\n"+"b. It should not start with a number"+"\n"+ "c. It must at least 6 characters long");
// var messageLength = message.length;
// var found="False";
// var found1="Ture"

// for(i=0; i<messageLength;i++){
//     if(message.charCodeAt(i)>=48 && message.charCodeAt(i)<=57){
//         found="True";
//     }
// }
// if(message.charCodeAt(0)>=48 && message.charCodeAt(0)<=57){
//     found1="False";
// }

// if(found==="False" ||found1==="False"|| messageLength<6){
//     alert("Invalid Password ");
// }

// //Question - 16
// var univeristy ="University Of Karachi";
// var arrayuniversity = univeristy.split(" ");
// alert("Elements of Array: "+arrayuniversity);
// var lengthOfUniversity = univeristy.length;
// for (i=0; i<lengthOfUniversity; i++){
//     document.write(univeristy[i]+"<br>");
// }

// //Question - 17

// var userInput = prompt("Enter a string");
// var lengthOfUserInput = userInput.length;
// alert("Last character of the input : "+userInput[lengthOfUserInput-1]);

// //Question - 18

// var string = "The quick brown fox jumps over the lazy dog";
// var string=string.toLowerCase();
// var numCharString = string.length;
// var occurance=0;
// for (i=0; i<numCharString; i++){
//          if(string.slice(i,i+3)==="the"){
//              occurance = occurance+1;
//          }
//      }
// alert("There are "+occurance+" occurance of the word 'the'");


//Assignment #26-30

//Question 1
// var positiveInteger = +prompt("Enter a positive Integer");
// if (positiveInteger<0){
//     document.write("This is not positive integer")
// }
// else{
// document.write("Number :"+positiveInteger+"<br>");
// document.write("Round Off Value :"+Math.round(positiveInteger)+"<br>");
// document.write("Floor Value :"+Math.floor(positiveInteger)+"<br>");
// document.write("Ceiling :"+Math.ceil(positiveInteger)+"<br>");
// }

//Quesion - 2

// var NegFloatingInteger = +prompt("Enter a positive Integer");
//  if (NegFloatingInteger>0){
//      document.write("This is not a negative integer")
//  }
//  else{
//  document.write("Number :"+NegFloatingInteger+"<br>");
//  document.write("Round Off Value :"+Math.round(NegFloatingInteger)+"<br>");
//  document.write("Floor Value :"+Math.floor(NegFloatingInteger)+"<br>");
//  document.write("Ceiling :"+Math.ceil(NegFloatingInteger)+"<br>");
//  }

//Question - 3
// var number = +prompt("Enter a number"); 
// var absoluteValue = Math.abs(number);
// document.write("The absolute value of "+number+" is "+absoluteValue);

//Question - 4
// var randomNumber = Math.random();
// randomNumber=randomNumber*6;
// randomNumber=Math.ceil(randomNumber);
// if (randomNumber===0){randomNumber=1}
// alert("Random dice value is: "+randomNumber);

//Question - 5
// var randomCoinValue ="";
// var randomNumber = Math.ceil(Math.random()*2);
// if (randomNumber===1){randomCoinValue="Tail"}
// if (randomNumber===2){randomCoinValue="Head"}
// alert(randomNumber+"\n"+"Random Coin Value is: "+randomCoinValue);

//Question - 6
// var randomNumber = Math.ceil(Math.random()*100);
// alert("Random Number between 1 and 100: "+randomNumber);

//Question - 7
// var weight=prompt("Enter Your Weight in Kilograms")
// var weight = parseFloat(weight);
// alert("The Weight of user is :"+weight+"Kilograms")

//Question - 8
// var secretNumber=+prompt("Enter a number between 1 and 10")
// var randomNumber = Math.ceil(Math.random()*10);
// if (randomNumber===secretNumber){
// alert("We Win!!!!!");
// }
// else{alert("Try Again")}

//Assignment # 31-34

//Question - 1
//document.write(Date());

//Question - 2
// var date = new Date();
// var Month = date.getMonth()
// if (Month===0){currentMonth="January"}
// else if(Month===1){currentMonth="February"}
// else if(Month===2){currentMonth="March"}
// else if(Month===3){currentMonth="April"}
// else if(Month===4){currentMonth="May"}
// else if(Month===5){currentMonth="June"}
// else if(Month===6){currentMonth="July"}
// else if(Month===7){currentMonth="August"}
// else if(Month===8){currentMonth="September"}
// else if(Month===9){currentMonth="October"}
// else if(Month===10){currentMonth="November"}
// else if(Month===11){currentMonth="December"}
// document.write("Current Month is : "+currentMonth);

//Question - 3
// var date = new Date();
// var day = date.getDay();
// if (day===0){today="Sun"}
// else if (day===1){today="Mon"}
// else if (day===2){today="Tue"}
// else if (day===3){today="Wed"}
// else if (day===4){today="Thu"}
// else if (day===5){today="Fri"}
// else if (day===6){today="Sat"}
// document.write("Today is :"+today)

//Question - 4
// var date = new Date();
// var day = date.getDay();
// if (day===0 || day===6){"It's Fun Day today"}

//Questiion - 5
// var date = new Date()
// var totalDaysNow = date.getDate();
// if (totalDaysNow<=15){document.write("First Fifteen Days of the Month")}
// else if(totalDaysNow>=16){document.write("Last Fifteen Days of the Month")}

//Questiion - 6
// var d = new Date();
// var milisecFrom1970=d.getTime();
// document.write("Current Date :"+d+"<br>");
// document.write("Elapsed Milliseconds since January 1, 1970 :"+milisecFrom1970+"<br>");
// document.write("Elapsed Minuets since January 1, 1970 :"+((milisecFrom1970/1000)/60)+"<br>");

//Questin - 7
// var d = new Date();
// var currentHour = d.getHours();
// if (currentHour>=11){amOrPM="PM"}
// else{amOrPM="AM"}
// alert("It's "+ amOrPM);

//Questin - 8
// var laterDate =  new Date("December, 31, 2020");
// alert("Later date : "+laterDate);


//Questin - 9
// var ramadanDate = new Date("April 24 2020");
// var todayDate = new Date();
// var miliRamdan = ramadanDate.getTime();
// var miliToday = todayDate.getTime();
// var miliDiff = miliToday - miliRamdan;
// var totalDays = Math.round(miliDiff/(1000*60*60*24));
// alert("1st Ramadan in 2020 : "+ramadanDate+"\n"+"Today Date : "+todayDate+"\n"+totalDays+" have passed since 1st Ramadan in 2020"); 

//Questin - 10
// var referenceDate = new Date("December 5 22:50:16 2015");
// //referenceDate.setHours(22,50);
// var beginDate = new Date("January 1 2015");
// var miliReferenceDate = referenceDate.getTime();
// var miliBeginDate = beginDate.getTime();
// var miliDiff = miliReferenceDate-miliBeginDate;
// var totalSeconds = Math.round(miliDiff/(1000)); // in the question it further divided by 60 we get minutes not seconds
// alert("Our reference date : "+referenceDate+"\n"+totalSeconds+" seconds have passed since the begining of 2015"); 

//Questin - 11
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// var ChangeHour = currentHour - 1;
// document.write("Current Date : "+currentDate+"<br>");
// currentDate.setHours(ChangeHour);
// document.write("1 hour ago, it was "+currentDate+"<br>");

//Questin - 12
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var ChangeYear = currentYear - 100;
// document.write("Current Date : "+currentDate+"<br>");
// currentDate.setFullYear(ChangeYear);
// document.write("100 years back it was: "+currentDate+"<br>");

//Questin - 13

// var yourAge = +prompt("Enter your age in years ");
// var currentDate = new Date();
// var yearOfCurrentDate = currentDate.getFullYear();
// var yourAgeResult = yearOfCurrentDate - yourAge;
// document.write(" Your age :"+yourAge+"<br>")
// document.write("Your year of birth is :"+yourAgeResult+"<br>")

//Questin - 14

var customerName = "ABC Company";
var currentMonth = "January";
var numberUnits= 410;
var chargePerUnit = 16;
var netAmount =0;
var latePayment = 350;
var netAmount = chargePerUnit*numberUnits;
var grossAmount = netAmount+latePayment;
var heading="K-Electric Bill"
document.write(heading.fontsize(6).bold()+"<br>"+"<br>");
document.write("Customer Name :"+customerName+"<br>");
document.write("Current Month :"+currentMonth+"<br>");
document.write("Number of Units :"+numberUnits+"<br>");
document.write("Charges Per Unit :"+chargePerUnit+"<br>"+"<br>"+"<br>");
document.write("Net Amount payable (within due date) :"+netAmount+"<br>");
document.write("Late Payment Surcharge :"+latePayment+"<br>");
document.write("Gross Amount payable (after due date) :"+grossAmount+"<br>");







 







