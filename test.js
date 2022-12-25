// let guy = `["www.google.com"]`

// guy = JSON.parse(guy)

// guy.push("www.myleads.com")

// guy = JSON.stringify(guy)

// console.log(typeof guy)


// function greetUser(greeting,name){
//     console.log(` ${greeting} , ${name} `)
// }

// greetUser("Howdy","Per Harald Borgen")

// function add(a,b){
//     return a + b
// }
// console.log(add(3 , 4))
// console.log(add(9 , 102))


// let myCourses = ["HTML","CSS","JAVASCRIPT"]

// const guy = (arr) =>{
//     for(let i=0; i < myCourses.length; i++){
//         console.log(arr[i])
//     }
// }
// guy(myCourses)

// localStorage.setItem("good","How are you")
// let get = localStorage.getItem("good")
// console.log(get)

// async function getstuff(){
//     const { Configuration, OpenAIApi } = require("openai");
//     const configuration = new Configuration({
//         apiKey: process.env.OPENAI_API_KEY,
//     });
//     const openai = new OpenAIApi(configuration);
//     const response = await openai.listFiles();
//     return response
// }
// console.log(getstuff())

// let first = 0;
// let second = 0;

// function increase(){
//     second += 1
//     if (second === 10){
//         first += 1
//         second -= second
//         second = 0
//     }
//     return `${first.toString().padStart(2, '0')} : ${second.toString().padStart(2, '0') }`
// }

// setInterval(() => {
//     //console.log(increase())
// }, 1000);
