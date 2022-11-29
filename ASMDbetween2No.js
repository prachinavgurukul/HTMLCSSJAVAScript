// var a=document.querySelector("#inputbox1")
// var b=document.querySelector(".inputbox2")
// var c=document.querySelector("#submbutton")
// var d()=>{
//     alert(a.value+b.value)
// }

// const input1=document.querySelector("#input1")
// const input2=document.querySelector("#input2")
// // const submitbtn = document.querySelector("#submitbtn")
// // const input3=document.querySelector("#inut3")
// // const input4=document.querySelector("#input4")
// const submitbtn = document.querySelector(".submitbtn")
//  const addTwoElements=()=>{
//     alert(Number(input1.value)+Number(input2.value))
//     // alert(Number(input1.value)-Number(input2.value))
//     // alert(Number(input1.value)*Number(input2.value))
//     // alert(Number(input1.value)/Number(input2.value))

//  }
// submitbtn.addEventListener('click',addTwoElements)



const Input1=document.querySelector('#input1')
const Input2=document.querySelector('#input2')
const submitbtn=document.querySelector('#submitbtn')
const data=()=>{
    alert(Number(Input1.value)+Number(Input2.value))
}
submitbtn.addEventListener('click',data)



const submitbtn1=document.querySelector('#submitbtn1')
const data1=()=>{
    alert(Number(Input1.value)-Number(Input2.value))
}
submitbtn1.addEventListener('click',data1)




const submitbtn2=document.querySelector('#submitbtn2')
const data2=()=>{
    alert(Number(Input1.value)*Number(Input2.value))
}
submitbtn2.addEventListener('click',data2)





const submitbtn3=document.querySelector('#submitbtn3')
const data3=()=>{
    alert(Number(Input1.value)/Number(Input2.value))
}
submitbtn3.addEventListener('click',data3)