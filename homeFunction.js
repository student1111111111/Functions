//Task1-->Створити функцію, яка за номером місяця повертає його назву.
let monthNum = parseInt(prompt('Enter the month number', ''))
if (monthNum < 1 || monthNum > 12)
    alert('You write a wrong month number')

let arrMonth = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
function returnMonNum(monthNum) {
    let a = arrMonth[monthNum - 1];
    document.write(`Your month is ${a}`);
}
returnMonNum(monthNum)

//Task2 Створити функцію, яка за номером тижня повертає кількість уроків(так, як у вас було у школі).
let dayNum = prompt('Enter the day number',"")
let arrDay = [5,6,7,5,4]
var getDayNum = function (dayNum){
   alert(arrDay[dayNum-1])
}
getDayNum(dayNum)

/* Task3 Створити окремі функції, які для 4 чисел знаходять:
1)суму;
2)добуток;
3)середнє арифметичне;
4)мінімальне значення.  */

let arrNum = []
for (let i = 0; i < 4; i++) {
    arrNum[i] = parseInt(prompt('Enter the numbers',"4")) 
}
var sum = 0
function getSum(arrNum){
    for (let i = 0; i < arrNum.length; i++) {
        sum += arrNum[i] 
    }
    document.write(`Sum is ${sum}`)
    document.write(`<br></br>`)
}
getSum(arrNum)
function getProduct(arrNum){
    var prod = 1
    for (let i = 0; i < arrNum.length; i++) {
        prod *= arrNum[i] 
    }
    document.write(`Product is ${prod}`)
    document.write(`<br></br>`)
}
getProduct(arrNum)
function getAvg(arrNum){
    var avg = sum/arrNum.length
    document.write(`Average is ${avg}`)
    document.write(`<br></br>`)
}
getAvg(arrNum)

function getMin(arrNum){
    var min = Math.min.apply(null, arrNum)
    document.write(`The min value is ${min}`) 
}
getMin(arrNum)     

//Task4 . Створити функцію, яка для одновимірного масиву знаходить кількість парних елементів
function getPairs (arrNum){
    var count = 0
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i]%2) {
            count++
        }
    document.write(`This is count of pairs ${count}`)    
    }
}
getPairs(arrNum) 


//Task 5 Створити функцію, якау масиві 0 заміняє на 1.
function getChange (arrNum){
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] == 0) 
            arrNum[i] = 1
    }        
}
getChange(arrNum)