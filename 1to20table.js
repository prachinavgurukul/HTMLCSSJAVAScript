const container=document.querySelector("#container")
for (let i=1;i<=20;i++){
    let table=""
    for(let j=1;i<=10;j++){
        table+=`<p>${i}*${j}=${i*j}`
    }
        container.innerHTML+=`<div>${table}</div}`
}
container.style.display="grid"
container.style.gridTemplateColumn="repeat(10,1fr)"