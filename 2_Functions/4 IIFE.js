// Immediate Invoked Function Expressions
// Why use
// => Immediate excuted fun. but 
// with Global scope ke pollution se problem hoti 
// jo bhi global me declaration or variable ko bata ne ke liye

(function mesg() {
    // Named IIFE
    console.log("DB connected!");
})();

(()=>{
    //Simple IIFE
    console.log("DB connected TWO!");
})()

((name)=>{
    console.log(`DB connected! ${name}` );
})("MySQL") // ("") this is originally call 
