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
const getproducts = async() => {
    const myTable = document.getElementById('myDataTable')
    try{
        const data = await fetch('https://backtest.achilleseg.com/api/ProductsUpdated?lang_id=1&page=0&limit=12')
        
        const jsonData = await data.json()

        const product_data = jsonData.result.product_data
        const headers = ['products_id', 
        'products_price',
        'final_price',
        'products_name',
        'products_description',
        'default_images'
        ]
        product_data.forEach((product) => {
            tr = createNewElement(myTable, 'tr')
            headers.forEach(head=>{
                if(head=='default_images'){
                    attributes = [
                        { attrName:'src', attrVal:`https://backtest.achilleseg.com/${product[head]}`}
                        
                    ]
                    createNewElement(tr, 'img','',attributes,'img-fluid')
                }
                else
                createNewElement(tr, 'td', product[head])       
             
            })
        });
    }
    catch(e){
        tr = createNewElement(myTable,'tr')
        attributes = [
            { attrName:'colspan', attrVal:6}
        ]
        createNewElement(tr, 'td', e.message,attributes, "alert alert-danger bg-danger text-white h2")
    }
}
getproducts()

