const hey = hello => {
    console.log(`hello`)
}
hey()

const stfu = hush => {
    console.log(`shhhhhh`)

}
stfu()

// myNum =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const even = evenNum => {
//     if (myNum % 2 === 0)
//     console.log ("these are even")
// }

function callME(myNum, f1, f2) {
    if (myNum% 2 === 0) {
        f1();
    }else if  (myNum %2 !== 0) {
        f2();
    }else{
        console.log(`nope`)
    }
}

callME(3, hey, stfu)