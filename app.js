//Assignment # 21-25 

//Question - 1
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
alert("Hello "+firstName+" "+lastName);

//Question - 1
var usermobile = prompt("Enter the name of your favorite mobile");
var lengthofmobile = usermobile.length;
alert("My favorite Mobile is: "+usermobile+"\n"+"Length of String is: "+lengthofmobile);

//Question - 3
alert("Find index number of a letter in the word Pakistani");
var letter = prompt("Enter a letter ");
var letter=letter.toLowerCase();
var pakistani="Pakistani";
lengthOfPakistani = pakistani.length;
for (a=0;a<=lengthOfPakistani;a++){
    if(letter===pakistani[a]){
        alert("String: "+pakistani+"\n"+" Index of "+letter+" is "+a);
    }
}

//Question - 4
var word = "Hello World";
word=word.toLowerCase();
var lastWord="l";
var finalIndex ="";
lengthOfWord = word.length;
for (a=0;a<=lengthOfWord;a++){
    if(lastWord===word[a]){
        finalIndex=a;
    }
}
alert("Last Index of l is: "+finalIndex);

//Question - 5
alert("Find a Character on the given index Number in Pakistani");
var indexNo = prompt("Enter Index Number between 0 and 9");
var pakistani="Pakistani";
alert("String: "+pakistani+"\n"+"Character at Index "+indexNo+" : "+pakistani[indexNo]);

//Question - 6
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
alert("Hello "+firstName.concat(" ",lastName));

//Qauestion - 7
var firstWord = "Hyderabad";
var replaceWord = "Hyder";
var replaceWith = "Islam";
var numCharFirstWord = firstWord.length;
var numCharReplaceWord = replaceWord.length;
var numCharReplaceWith = replaceWith.length;
for (i=0; i<9; i++){
    if(firstWord.slice(i,i+numCharReplaceWord)===replaceWord){
        newWord = firstWord.slice(0,i)+replaceWith+firstWord.slice(i+numCharReplaceWord);
        alert("City: "+firstWord+"\n"+"After replacement :" + newWord);
    }
}

//Question - 8
var firstWord = "Ali and Sami are best friends. They play cricket and football together.";
var orignialMessage=firstWord;
var replaceWord = "and";
var replaceWith = "&";
var numCharFirstWord = firstWord.length;
var numCharReplaceWord = replaceWord.length;
var numCharReplaceWith = replaceWith.length;
for (i=0; i<numCharFirstWord; i++){
    if(firstWord.slice(i,i+numCharReplaceWord)===replaceWord){
        newWord = firstWord.slice(0,i)+replaceWith+firstWord.slice(i+numCharReplaceWord);
        
        firstWord=newWord;
    }
}
alert("Original Message: "+orignialMessage+"\n"+"After replacement :" + newWord);

//Question - 9

var stringValue = "472";
var numericValue =  parseInt(stringValue);
document.write("String :"+stringValue+"<br>");
document.write("Type :"+typeof(stringValue) +"<br>");
document.write("Value :"+numericValue+"<br>");
document.write("Type :"+typeof(numericValue) +"<br>");

//Question - 10
var userInput = prompt("Write something in lowercase");
var userInput1 = userInput.toUpperCase();
document.write("User input :"+userInput+"<br>");
document.write("Upper case :"+userInput1+"<br>");

//Question - 11

 var userInput = prompt("Write something");
 var userInput1 = userInput.toLowerCase();
 titleCase = userInput1.slice(0,1);
 titleCase = titleCase.toUpperCase();
 titleCase2 = userInput1.slice(1);
 finalTitleCase = titleCase.concat(titleCase2);
 alert(finalTitleCase);
document.write("User input :"+userInput+"<br>");
document.write("Title case :"+finalTitleCase+"<br>");

//Question - 12
var num = 35.36;
var num1 = num.toString();
var finalNum = num1.slice(0,2) +  num1.slice(3);
document.write("Number :"+num+"<br>"+"Result :"+finalNum);

//Question - 13
var userName = prompt("Enter user Name");
userNameLength = userName.length;
for (i=0; i<=userNameLength; i++){
    if ((userName[i]==="!") || (userName[i] ===".") || (userName[i]==="@") || (userName[i]===",")){
        alert("Please enter a valid user name")
    }
}

//Question - 14
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var checkItem = prompt("Welcome to ABC Bakery! What would you like to order");
checkItem=checkItem.toLocaleLowerCase();
var lengthOfItems = bakeryItems.length;

for (lengthOfItems; lengthOfItems>=0; lengthOfItems--){
    if (checkItem===bakeryItems[lengthOfItems]){
        alert("Cookies is available at index "+lengthOfItems+" in our Bakery");
            break;
        
    }
    else if (lengthOfItems===0) 
    {
        alert("Sorry "+checkItem+" is not available in our Bakery");
     
        
    }   
    }

//Question - 15

var message = prompt("Enter password"+"\n"+"a. It should contain alphabets and numbers" +"\n"+"b. It should not start with a number"+"\n"+ "c. It must at least 6 characters long");
var messageLength = message.length;
var found="False";
var found1="Ture"

for(i=0; i<messageLength;i++){
    if(message.charCodeAt(i)>=48 && message.charCodeAt(i)<=57){
        found="True";
    }
}
if(message.charCodeAt(0)>=48 && message.charCodeAt(0)<=57){
    found1="False";
}

if(found==="False" ||found1==="False"|| messageLength<6){
    alert("Invalid Password ");
}

//Question - 16
var univeristy ="University Of Karachi";
var arrayuniversity = univeristy.split(" ");
alert("Elements of Array: "+arrayuniversity);
var lengthOfUniversity = univeristy.length;
for (i=0; i<lengthOfUniversity; i++){
    document.write(univeristy[i]+"<br>");
}

//Question - 17

var userInput = prompt("Enter a string");
var lengthOfUserInput = userInput.length;
alert("Last character of the input : "+userInput[lengthOfUserInput-1]);

//Question - 18

var string = "The quick brown fox jumps over the lazy dog";
var string=string.toLowerCase();
var numCharString = string.length;
var occurance=0;
for (i=0; i<numCharString; i++){
         if(string.slice(i,i+3)==="the"){
             occurance = occurance+1;
         }
     }
alert("There are "+occurance+" occurance of the word 'the'");