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

account={
    name:null,
    income:0,
    taxes:0
    setname:function(name){
        return this.name=name 
    }
}
let add =function(x){
    account.income+=x
    account.taxes+=(x*0.1)

}

function reset(){
    account.income=0
    account.taxes=0
}

function show(){
    console.log(`${account.name}-${account.income}-${account.taxes}`)
}
add(100)
show()
reset()
show()
