//clouser
// counter=0
// let increment =function(){
//      return counter++
// }
// let decrement= function(){
//     return counter--
// }
// let getcount= function(){
//     return counter
// }


// const mycounter=(x=15)=>{
//      return{
//          increment(y) {x=x+y; console.log(x)},
//          decrement(y) {x=x-y; console.log(x)},
//          getvalue() {return x;}
//      } 
// }
// x=mycounter()
// x.increment(5)
// x.decrement(5)
// console.log(x.getvalue())

// setTimeout(()=>{
//     console.log("hello")
// },1500)

// console.log("amany")

// const mycallback=(num)=>{
//     setTimeout(()=>{
//         if(typeof(num)=='string'){
//             console.log(num)
//         }
//         else
//         console.log('error')
//     },2000)
// }
// mycallback('5')



// const myCallBack = (num, cb) =>{
//     setTimeout(()=>{
//         if(typeof num == 'number'){
//             cb( num, undefined)
//         }
//         else{
//             cb(undefined,'Error data must be number')
//         }
//     }, 2000)
// }


// myCallBack('5', ( data, error)=>{
//     if(error) console.log(error)
//     else console.log(data)
// })

//prommises
// const myPromise=(num)=> {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             typeof num == 'number'?
//                 resolve(num)
//                 :
//                 reject('error not a number')
//         },3000)
//      })
// }
// myPromise(7).then(
//     (response) => {
//     return response+3
//     }
// )

// console.log("amany")   

//async-await
// const myPromise=(num)=> {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             typeof num == 'number'?
//                 resolve(num)
//                 :
//                 reject('error not a number')
//         },3000)
//      })
// }

// const myCall = async () =>{
//     try{
//     x = await myPromise('5')
//     y = x+17
//     console.log(y)
// }
// catch(e){
//     console.log('ana fe catch ',e)
// }
// }
// myCall

// myCall()

// .then(
//     (response) => {
//     return response+3
//     }
// )

//oop
// class person{
//     constructor(fname,lsname,age){
//         this.fname=fname;
//         this.lsname=lsname;
//         this.age=age
//     }
//     getFullName(){
//            return (`firstname:${this.fname}-lastname:${this.lsname}`)
//     }
//     getYearOfBirth(){
//              return 2021-this.age
//     }
// }

// class student extends person{
//     constructor(fname,lsname,age,subject=[]){
//         super(fname,lsname,age)
//        this.subject=subject
//     }
//     showAllSubject(){
//         this.subject.forEach(element => {
//             console.log(`subjectName:${Object.keys(element)[0]}-grade:${Object.values(element)[0]}`)
//         });
//     }
// }
// class teacher extends person{
//     constructor(fname,lsname,age,salary){
//         super(fname,lsname,age)
//         this.salary=salary
//     }
//     getNetSallary(){
//         return this.salary*0.9
//     }
// }
// p=new person("Amany","Mosaad",23)
// console.log(p.getFullName())
// console.log(p.getYearOfBirth())
// n=new student("Amany","Mosaad",23,[{"math":"good"},{"arabic":"fail"}])
// n.showAllSubject()
// n=new teacher("Amany","Mosaad",23,50000)
// console.log(n.getNetSallary())
