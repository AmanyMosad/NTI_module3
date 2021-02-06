const yargs = require('yargs')
yargs.command({
    command:'add',
builder:{
    title:{
        
        type:'string',
        demandOption:true
    },
    content:{
        demandOption:true,
        type:'string'
    },
    type:{
        demandOption:true,
        type:'string'
    }
},
    handler(argv){
console.log(argv)
    }
})
yargs.parse()