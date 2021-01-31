//string
// fname="amany"
// lname="mosaad"
// console.log(fname,'',lname)
// console.log(`${fname}+${lname}-${5+4}`)
// console.log("amany"+" mosad");

//function

// function add(x,y){
//     return x+y;
// }
// let add= function(x,y=0){
//     return x+y
// }
// console.log(add(5))
//EX:fn getperc if notdef *10% if def num*perc
// function getPercentage(number,percent=10){
    // if(percent){
    //     return number*percent/100
    // }
    // else return number*0.1
    // if(arguments.length>1)
    //       return number*percent/100
    // else return number*0.1
//     return number*percent/100
// }
// console.log(getPercentage(100,30))

//arrow function
// let user={
//     name:"amany",
//     // age:23,
//     yofbirth: 1997,
//     job:"engineer",
//     getAge: function(year){
//         return year-this.yofbirth
//     }

// }
// function test(){
//     user.name="ahmed"
// }
// test()
// console.log(`${user.name} ${user.age} ${user.job}`)
// let getData= function(x){
//     console.log(`${x.name} ${x.getAge(2021)} ${x.job}`)
// }
// getData(user)

//don't know what is the problem?!
// let x=(y)=>{
//     console.log(`${y.name} ${y.getAge(2021)} ${y.job}`)
// }
// x(user)
//EX:
// account={
//     name:"amany",
//     income:0,
//     taxes:0
// }
// let add =function(x){
//     account.income+=x
//     account.taxes+=(x*0.1)

// }

// function reset(){
//     account.income=0
//     account.taxes=0
// }

// function show(){
//     console.log(`${account.name}-${account.income}-${account.taxes}`)
// }
// add(100)
// show()
// reset()
// show()

//convert previous example using functions in object

//array
// x=[1,2,3,4]
// console.log("first")
// for(i=0; i<x.length; i++){
//     console.log(x[i])
// }
// console.log("second")
// x.push(5)
// x.unshift(0)
// for(i=0; i<x.length; i++){
//     console.log(x[i])
// }
// console.log("third")
// x.pop()
// x.shift()
// for(i=0; i<x.length; i++){
//     console.log(x[i])
// }
// console.log("FORTH")

// x.forEach(element => {
//     element+=5
//     console.log(element)
// });

// console.log("fifth")
// for(i=0; i<x.length; i++){
//     console.log(x[i])
// }

//final example!!!!!
// console.log(Date.now())
// let taskTypes = ['type 1', 'type 2', 'type 3', 'type 4']
// let tasks = JSON.parse(localStorage.getItem('tasks')) || []
// const validateData = function(item, validationObj){
//     let errors = []
//     options = Object.keys(validationObj)
//     options.forEach(option => {
//         if(option == 'required'){
//             if(!item || item == '') errors.push('required')
//         }
//         else if(option == 'unique'){
//             tasks.forEach(task=>{
//                 if((task[validationObj[option]])==item)
//                      errors.push('unique')
//              })
//         }
//         else if(option =='minlength'){
//             value = validationObj[option]
//             if(item.length<value) errors.push(`minimum length must be more than ${value}`)
//         }
//         else if(option == 'maxlength'){
//             value = validationObj[option]
//             if(item.length>value) errors.push(`maximum length must be less than ${value}`)

//         }
//     });
//        return errors 
// }
// const addNewTask = function(id, title, content, type, status=false){
//     const task={ id, title, content, type,status }
//     myValidators = {
//       id: validateData(id,{required:true}),
//       title :validateData(title,{required:true, minlength:5, maxlength:20 }),
//       content:validateData(content,{required:true, minlength:15 }),
//       type:validateData(type,{required:true})
//     }
//     myValidatorsKeys = Object.keys(myValidators)
//     validationErrFlag = false
//     myValidatorsKeys.forEach(key=>{
//         if(myValidators[key].length>0)validationErrFlag=true
//     })
//     if(validationErrFlag){
//         console.log(myValidators)
//     }
//     else{
//         tasks.push(task)
//             localStorage.setItem('tasks', JSON.stringify(tasks))
//         }
// }
// const showAllTask = function(){
//     console.log(tasks)
// }


// addNewTask(Date.now(),'abcdef','anbvcgjuiytrfghb','c')
// showAllTask()

/***********************task session1 *************************/
let customers = JSON.parse(localStorage.getItem('customers')) || []

let addCustomer=function(id, balance=0){
    check=false
    customers.forEach(customer => {
        if(customer.id==id){
          console.log(id+" already exists")
         check=true
    }})
    if(!check){
    let customer = {id, balance};
    customers.push(customer)
    }
}

let addBalance= function(id,balance){
    checkadd=false
    if(!isNaN(balance)&&balance>0){
    customers.forEach(customer => {
        if(customer.id==id){
            
            customer.balance+=balance
            checkadd=true
        }   

    });
        if(!checkadd)
        console.log("invalid id="+id)
    }
    else
       console.log("must add value more than 0 and numeric")
}
let withdrawBalance= function(id,value){
    if(!isNaN(value)&&value>0){
        blnCustomerFound = false
    customers.forEach(customer => {
        if(customer.id==id){
            blnCustomerFound = true;
            if(customer.balance>=value){
                customer.balance-=value
            }
            else
                console.log("id="+id+" has not enough balance")
        }   
       
    });
    if (!blnCustomerFound)
        console.log("id="+id+" not found.");
   } 
   else
       console.log("value must be more than 0 and numeric")
}


let show= function(){
      console.log(customers)
}


let search=function(id){
    checksearch=false
    customers.forEach(customer => {
        if(customer.id==id){
          console.log(customer)
          checksearch=true
        }

})
if(!checksearch)
    console.log("id="+id+" not found")
}


addCustomer(1,10000)
addCustomer(2,100)
addBalance(1,10000)
withdrawBalance(1,20000)
withdrawBalance(2,20000)
search(5)
show()
localStorage.setItem('customers', JSON.stringify(customers))

