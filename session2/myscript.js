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

customers = getCustomers()
addbtn = document.querySelector('#addbBtn')
showAllBtn = document.querySelector('#showAllBtn')
showBtn=document.querySelector('#showBtn')
addBalanceBtn =document.querySelector('#addBalanceBtn')
withDrawBtn=document.querySelector('#withDrawBtn')
function getCustomers(){
    return(JSON.parse(localStorage.getItem('customers')) || [])
}
const saveCustomers = function(){
    localStorage.setItem('customers', JSON.stringify(customers))
}
function createNewElement(parent, element, txt='',attributes=[], classes='' ){
    myNewElement = document.createElement(element)
    if(classes!='') myNewElement.className=classes
    if(txt!='') myNewElement.innerText = txt
    if(attributes.length!=0){
        attributes.forEach(attribute=>{
            myNewElement.setAttribute(attribute.attrName,attribute.attrVal)
        })    
    }
    parent.appendChild(myNewElement)
    return myNewElement
}
const showAllCustomers = function(){
    customers = getCustomers()
    tableBody = document.querySelector('tbody')
    tableBody.innerText=''
    customers.forEach((customer, i)=>{
        // console.log(customer)
       
        let tr =  createNewElement(tableBody, 'tr')
        createNewElement(tr, 'td', customer.accNum)
        createNewElement(tr, 'td', customer.cName)
        createNewElement(tr, 'td', customer.balance)
        let btn = createNewElement(tr, 'td')
        createNewElement(btn, 'button', 'Edit', [{attrName:'data-cid', attrVal:customer.accNum}], 'btn btn-primary me-3 col-3 edit')
        createNewElement(btn, 'button', 'Delete', [{attrName:'data-cid', attrVal:customer.accNum}], 'btn btn-danger col-3 delete')
    })

    let myclass = document.getElementsByClassName('edit')

    for (var i = 0; i < myclass.length; i++)
    {
        myclass[i].addEventListener('click', function(e){
            if (this.innerText == "Edit")
            {
                editCustomer(this.getAttribute('data-cid'))
            }
            else
            {
                let id = this.getAttribute('data-cid')

                index = customers.findIndex((ele)=>{
                    return id==ele.accNum
                })
                
                let mytd = document.querySelectorAll('tbody tr')[index].querySelectorAll('td')
                let allKeys = Object.keys(customers[index])
            
                for (var i = 1; i < 3; i++)
                {
                    mytd[i].innerText=mytd[i].getElementsByTagName('input')[0].value
                    customers[index][allKeys[i]] = mytd[i].innerText
                }

                saveCustomers()

                this.innerText = "Edit"
            }
        })
    }
    
    myclass = document.getElementsByClassName('delete')
    
    for (var i = 0; i < myclass.length; i++)
    {
        myclass[i].addEventListener('click', function(e){
            deleteCustomer(this.getAttribute('data-cid'))
        })
    }
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

const deleteCustomer = function(id){
   customers = customers.filter((ele)=>{
         return id!=ele.accNum
    })

    saveCustomers()
    showAllCustomers()
}

const editCustomer = function(id){
    index= customers.findIndex((ele)=>{
        return id==ele.accNum
    })
    
    let mytd = document.querySelectorAll('tbody tr')[index].querySelectorAll('td')

    for (var i = 1; i < 3; i++)
    {
        let myval = mytd[i].innerText
        mytd[i].innerText = ''
        createNewElement(mytd[i], 'input', '',[{'attrName':'value', 'attrVal':myval}], '')
    }

    mytd[3].querySelector('td button').innerText = 'Save'
}

addBalanceBtn.addEventListener('click',function(e){
    showHide(addBalanceBtn, 'addbalance', 'Add Balance','Hide Adding')
})
withDrawBtn.addEventListener('click',function(e){
    showHide(withDrawBtn, 'withdraw', 'Withdraw','Hide withdraw')
})
function addBalance()
{
        
}