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

localStorage.setItem("good","How are you")
let get = localStorage.getItem("good")
console.log(get)