'use strict';

alert("please answer yes/no , n/y")

  
  let q1= prompt("do u think I'm over 18 ?").toLowerCase();
let ans=0;

switch(q1){

    case 'y' :
    case 'yes':
        ans++;
    alert("thats true")
    console.log("thats true");
    break;

   case 'no' :
   case 'n'  :
    alert("thats false")
    break;
   
}

let q2= prompt("do u think that I like mansaf ?").toLowerCase();

switch(q2){

    case 'y' :
    case 'yes':
        ans++;
    alert("thats true")
    console.log("thats true");
    break;
    
        


}


let q3= prompt("do u think I love game of thrones ?").toLowerCase();

switch(q3){
    case 'y' :
    case 'yes':
        ans++;
        alert("thats false")
        console.log("thats false");
        break;

    case 'no' :
     case 'n'  :
         alert("thats true")
         console.log("thats true")
         break;
}

let q4= prompt("is zarqa the capital of jordan?").toLowerCase();

switch(q4){
    case 'y' :
        case 'yes':
            ans++;
            alert("thats false")
            console.log("thats false");
            break;
    
        case 'no' :
         case 'n'  :
             alert("thats true")
             console.log("thats true")
             break;



}

let q5 =prompt("is mandi a jordanian meal ?")

    
    switch(q5){
        case 'y' :
            case 'yes':
                ans++;
                alert("thats false")
                console.log("thats false");
                break;
        
            case 'no' :
             case 'n'  :
                 alert("thats true")
                 console.log("thats true")
                 break;
    

}

  let i =0;
    for(i=0 ; i<4 ; i++)
    {
        let q5 =prompt("Guess what is my favorite number ?")
        if(q5 > 4){
            alert("the number is too high")
            console.log("the number is too high");
        }
        else if(q5<4){

            alert("number is too low")
            console.log("the number is too low");
        }

        else if (q5==4){
            ans++;
            alert("thats right ")
            console.log("thats right number is 4");
            break;
        }

    }

    alert("correct answer is 4")

    let j=0,m=0;
   const meal=['mansaf','maqlooba','rashoof', 'shawerma'];
     
    loop1:
    for(j=0; j<6; j++){

        let q7=prompt(" what is the traditional meal in jordan ? enter the name of it  1- Mansaf 2- Pizza 3- rashoof 4- Shawerma 5- maqlooba 6- Kimber 7-kebab").toLowerCase();
        
          loop2:
        for(k=0;k<meal.length();k++){
             if(meal[k]==q5){
                ans++;
                break loop1;
             }


        }
        
        

    }
    
alert("the correct answers are")
let b=0;
for(b=0; b<meal.length();b++){

    alert("the traditional meals are" + meal[b])
}


alert("your score out of 7 is " + ans)
let name1=prompt ("u r Welcome may u enter your name please ").toUpperCase();
console.log("nice name" + name1);
alert("nice name " + name1)