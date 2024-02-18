 //  ******   Welcome Message: ********

  // function welcomeMessage(){
  //   let userName = prompt("Enter Your Name:");
  //   let result = "welcome"+ " "+ userName + "!";
  //   console.log(result);
  // };
  // welcomeMessage();


// ************ Quote Generator: ***********
 
let quote = ["No one can make you feel inferior without your consent.", "Not all those who wander are lost.", "Nothing is certain except for death and taxes.","That's one small step for a man, a giant leap for mankind.","The love of money is the root of all evil."];
function quoteFunction(){
  const randomIndex = Math.floor(Math.random() * quote.length);
  const randomQut = quote[randomIndex];
  console.log(randomQut)
}
quoteFunction();

 
// **************Random Number Generator: **********

  // function RandomNumber(){
  //   let num = Math.ceil(Math.random() * 100); //also can you use floor.
  //   console.log(num);
  // }
  // RandomNumber();
                   
                  //  OR 
    
    // function RandomNumber(){
    //   let num = Math.floor(Math.random() * 6) + 1;
    //   console.log(num);
    // };
    // RandomNumber();              
  



