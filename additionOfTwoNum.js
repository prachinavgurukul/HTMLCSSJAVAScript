const input1=document.querySelector(".input1")
const input2=document.querySelector(".input2")
const submitBtn=document.querySelector(".Submitbtn")
const result=document.querySelector("#container")
submitBtn.addEventListener("click",()=>{
    console.log(input1.value)
    console.log(input2.value)
    // alert(Number(input1.value)+Number(input2.value))
    const res=(Number(input1.value)+Number(input2.value))
    result.innerHTML=""
    result.innerHTML += ` Result is ${res}`
})