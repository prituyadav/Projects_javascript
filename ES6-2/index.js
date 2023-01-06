class person{
    constructor(n){
        this.name=n;
        // this.print=function(){
        //     console.log(this.name)
        }
        print(){
            console.log(this.name)
        }
}


let p1=new person("abc")
console.log(p1)


class stack{
    constructor(){
        this.length=0;
        this.stack=[];
    }
    push(x){
        this.stack[this.length]=x;
        this.length++
    }
    pop(){
        if(this.length!=0){
            this.stack.pop()
            this.length--
        }
    }
    peek(){
        console.log(this.stack[this.length-1])
    }
}

let s1=new stack()
s1.push(2)
s1.push(23)
s1.push(24)
s1.push(25)
s1.peek()
s1.pop()
s1.pop()

s1.peek()

console.log(s1)


class Mobile{
    constructor(c,s){
        this.camera=c;
        this.sim=s;
    }
}

class Smartphone extends Mobile{
    constructor(c,s,bt,b){
        super(c,s);
        this.battery=bt;
        this.brand=b;
    }
}

let m1=new Smartphone("20px","Jio",5000,"iphone")

console.log(m1)
