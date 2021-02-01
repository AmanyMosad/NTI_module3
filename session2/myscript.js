//see fn edit,delete,search in session1
//get index and object in array using foreach,find,findindex,find
// arr = [
//     {id:5, name:'a'},
//     {id:9, name:'b'},
//     {id:7, name:'c'},
//     {id:11, name:'d'},
//     {id:3, name:'e'},
// ]

// arr.forEach((element, i) => {
//     console.log(element, ` => ${i}`)
// });

// x = arr.findIndex( (a) =>{
//     return a.id == 7
// })
// console.log(x)

// x = arr.filter(function(a){
//     return a.name=="a";
// });
// console.log(x);

// const getByTitle= function(name) {
//     x = arr.filter(task=>{
//         return task.name==name
//     })
//     return x
// }

// console.log( getByTitle("c"))

// const getByTitle= function(name) {
//     x = arr.find(task=>{
//         return task.name==name
//     })
//     return x
// }

// console.log( getByTitle("c"))
/****************************************************************************/
//bank system

btnNames=[];
document.querySelectorAll('button').forEach((btn, i)=>{
    btnNames[i] = btn.innerText;
})
console.log(btnNames);

customers = getCustomers()
addbtn = document.querySelector('#addbBtn')
showAllBtn = document.querySelector('#showAllBtn')
showBtn=document.querySelector('#showBtn')
function getCustomers(){
    return(JSON.parse(localStorage.getItem('customers')) || [])
}
const saveCustomers = function(){
    localStorage.setItem('customers', JSON.stringify(customers))
}
const showAllCustomers = function(){
    customers = getCustomers()
    tableBody = document.querySelector('tbody')
    tableBody.innerText=''
    customers.forEach(customer=>{
        // console.log(customer)
        let tr = document.createElement('tr')
        td = document.createElement('td')
        td.textContent = customer.accNum
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = customer.cName
        tr.appendChild(td)
        td = document.createElement('td')
        td.textContent = customer.balance
        tr.appendChild(td)
        tableBody.appendChild(tr)
    })
    // console.log(customers)
}
const addCustomer = function(customer){
    if(customer.cName.length!=0 && customer.balance.length!=0 && !isNaN(customer.balance) && isNaN(customer.cName) ){
    customers.push(customer)
    saveCustomers()
    }
}
const showHide = function(btnName,sectionId,txt1, txt2) {

    document.querySelectorAll('button').forEach((btn, i)=>{
        if(btnName.id != btn.id) btn.innerText = btnNames[i];
    })
    document.querySelectorAll('section').forEach((section, index)=>{
        if(index!=0) {section.classList.add('d-none')
    }
    })
    if(btnName.innerText == txt1 ){
        btnName.textContent=txt2
        document.querySelector(`#${sectionId}`).classList.remove('d-none');
    }else{
        btnName.textContent=txt1
    }
    
}
addbtn.addEventListener('click', function(){
    showHide(addbtn, 'addCustomer', 'Add Customer','Hide Customer')
})
showAllBtn.addEventListener('click',function(e){
    showHide(showAllBtn, 'allCustomers', 'show All Customer','Hide customers')
    showAllCustomers();
})
document.querySelector('#addForm').addEventListener('submit',function(e){
    e.preventDefault()
    const ele = this.elements
    let user = {
        accNum : Date.now(),
        cName: ele.cName.value,
        balance: ele.balance.value
    }

    addCustomer(user)
    this.reset()
})
showBtn.addEventListener('click', function(){
    showHide(showBtn, 'searchForm', 'show Customer','Hide Customer')
})

const search = function(cid){
    let customer = customers.find(cus=>{
        return cus['accNum']==cid
    })
    return customer
}

document.querySelector('.searchsubmit').addEventListener('submit',function(e){
  e.preventDefault()
  mycustomer=search(this.elements.search.value)
  if(mycustomer!=undefined){
  document.querySelector('#singleCustomer').classList.remove('d-none');
  singletabel= document.querySelector('.singletabel')
  singletabel.innerText=''
      let tr = document.createElement('tr')
      td = document.createElement('td')
      td.textContent = mycustomer.accNum
      tr.appendChild(td)
      td = document.createElement('td')
      td.textContent = mycustomer.cName
      tr.appendChild(td)
      td = document.createElement('td')
      td.textContent = mycustomer.balance
      tr.appendChild(td)
      singletabel.appendChild(tr)
  }
})
