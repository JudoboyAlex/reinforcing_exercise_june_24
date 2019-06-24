// # 003111 # 3 = 1 + 1 + 1
// # 813372 # 8 + 1 + 3 = 3 + 7 + 2
// # 17935 # 1 + 7 = 3 + 5
// # 56328116
// # Your task is to write a method luckCheck(str), which returns true if argument is string decimal representation of a lucky ticket number, or false for all other numbers. It should handle errors for empty strings or strings which don't represent a decimal number

function luckCheck(str){
    if (str === "" || /^[a-zA-Z]+$/.test(str)){
        return "Put numbers fool!"
    }  else {

    let items = str.toString().split('');
    let westSide = items.slice(0,Math.floor(str.toString().length / 2))
    let eastSide = items.slice(Math.ceil(str.toString().length / 2), str.toString().length)

    if (westSide.map(parseFloat).reduce((a,b) => a + b) === eastSide.map(parseFloat).reduce((a,b) => a + b)){
        return true
    } else if (westSide.map(parseFloat).reduce((a,b) => a + b) !== eastSide.map(parseFloat).reduce((a,b) => a + b)){
        return false
    } 
  }
}

console.log(luckCheck(813372))
console.log(luckCheck(222222))
console.log(luckCheck(17935))
console.log(luckCheck(4778423))
console.log(luckCheck(""))
console.log(luckCheck("Hello"))




 
 
