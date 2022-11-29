const box=document.querySelector('#container')
const Button = document.querySelector('#Button')
const Button1 = document.querySelector('#Button1')
let Boolean = true
const displayFunction = () => {
    Boolean ? Button.innerHTML = `sort` : Button.innerHTML = `unsort`
    Boolean ? data():sorting()
}
let displayData=(result)=>{
    box.innerHTML=''
    result.map((item)=>{
        box.innerHTML+=`<div id='box2'>
        <h1>${item.title}</h1>
        <img src=${item.image} />
        <p>${item.description}</p>
        <button>$${item.price}</button>

        </div>`
    })
}
box.style.display='grid'
box.style.gridTemplateColumns='repeat(4,1fr)'


api='https://fakestoreapi.com/products'
var data=async()=>{
    let response=await fetch(api)
    let result= await response.json()
    displayData(result)
}
data()

var sorting=()=>{
    let api='https://fakestoreapi.com/products'
    let data=async()=>{
        let response=await fetch(api)
        let result= await response.json()
        console.log(result)
        result.sort((a,b)=>{
        return a.price-b.price;
        })
        displayData(result)
    }
    data()
}
var unsort=()=>{
    let api1='https://fakestoreapi.com/products'
    let data1=async()=>{
        let response1=await fetch(api1)
        let result1= await response1.json()
        console.log(result1)
        result1.sort((a,b)=>{
        return b.price-a.price;
        })
        displayData(result1)
    }
    data1()
}
displayFunction()
Button.addEventListener('click', () => {
    Boolean = !Boolean
    box.innerHTML = ''
    displayFunction()
})