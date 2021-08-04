'use strict';

alert("please answer yes/no , n/y")

  
  let q1= prompt("do u think I'm over 18 ?").toLowerCase();


switch(q1){

    case 'y' :
    case 'yes':
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
    alert("thats true")
    console.log("thats true");
    break;
    
        


}


let q3= prompt("do u think I love game of thrones ?").toLowerCase();

switch(q3){
    case 'y' :
    case 'yes':
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
                alert("thats false")
                console.log("thats false");
                break;
        
            case 'no' :
             case 'n'  :
                 alert("thats true")
                 console.log("thats true")
                 break;
    

}

let name1=prompt ("u r Welcome may u enter your name please ").toUpperCase();
console.log("nice name" + name1);
alert("nice name " + name1)