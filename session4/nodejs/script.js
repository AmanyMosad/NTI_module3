// var validator = require('validator');
// console.log(validator.isEmail('foo@bar.com'))
fs = require('fs')
const user = { name: 'amany', age: '23'}
let writefile =(user,filename)=>{
    users.push(user)
    fs.writeFileSync(filename, JSON.stringify(users))
}

let readfile=(filename)=>{
    try{
        users = JSON.parse(fs.readFileSync(filename).toString())
    }
    catch(e){
        users=[]
        fs.writeFileSync(filename,'[]')
    }
}
try{
    readfile('data.json')
    writefile(user,'data.json')
    console.log("done")
}
catch(e){
    console.log("error")
}

