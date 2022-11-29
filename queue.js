class queue{
    constructor(){
        this.queue=[]
    }
adding(element){
    this.queue.push(element)
}
removing(element){
    this.queue.shift(element)
}
}
let Queue=new queue
Queue.adding(50)
Queue.adding(60)
Queue.removing()
console.log(Queue)