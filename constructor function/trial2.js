
//this keyword, ConstructorFunction, Globalscope,Methoods


// console.log(this)
// function myfun(){
//     console.log(this) 
// }

// let obj={
//     team:"Ipl",
//     print: function(){
//         console.log(this)
//     },
// }
// obj.print()

// this always refers global or window or custom object which you have created Or a parent object;

// function CreateObj(n,p,b){

// let obj={};
//     obj.name=n;
//    obj.price=p;
//    obj.brand=b;
//  return obj;
// }
// console.log(CreateObj("shoes","2000","nike"))

// function CreateObj(n,p,b){
//        this.name=n;
//     this.price=p;
//     this.brand=b;
    
// }

// let x=new CreateObj("shoes","2000","nike")
// console.log(x)

// function CreateObj(n,p,b){
//        this.name=n;
//     this.price=p;
//     this.brand=b;
//     this.print=function(){
//         console.log(this)
//     }
// }

// let x=new CreateObj("shoes","2000","nike")
// let y=new CreateObj("sliper","200","adidas")
// console.log(x)
// x.print()
// y.print()

// what new keyword do?
// it returns the object point newly created object.

// function Product(n,b,p){
//     this.name=n;
//     this.brand=b;
//     this.price=p
// }

// // its blueprint for Object
// // mould for object

//  Object literal-----let obj={}

// let arr=[];

// function submitProduct(e){
//     event.preventDefault()
//     let form=document.getElementById("products");
//     let name=form.name.value;
//     let brand=form.brand.value;
//     let price=form.price.value;

//     let p=new Product(name,brand,price)
//    console.log(p)
//     console.log(name,brand,price)
    
//     arr.push(p)
//     console.log(arr)
// }

//---CALL, APPLY, BIND--------------->>>>>>>>>>>

//DRY---->>>>do not repeat yourself;
// 

let bedroom ={
    name:"bedroom",
    purpose:"sleep",
    
};

let livingroom ={
    name:"Livingroom",
    purpose:"sleep",
    
};

let storeroom ={
    name:"Storeroom",
    purpose:"store",
  
};

function food(food){
    console.log(`Serving ${food} in ${this.name}`); //String literal
   //console.log("Serving"+food+"in"+this.name)
};

// food.call(bedroom,"Pizza");
// food.call(livingroom,"Pizza");
// food.call(storeroom,"Pizza");


  //you can by passing in function in call
//food.call(bedroom,"Pizza","samosa");


// food.apply(bedroom,["Pizza"]);
// food.apply(livingroom,["Pizza"]);
// food.apply(storeroom,["Pizza"]);

// you can in apply
// let arr=["Pizza","samosa"]
// food.call(bedroom,arr);

let f1=food.bind(bedroom,"Pizza");
let f2=food.bind(livingroom,"Pizza");
let f3=food.bind(storeroom,"Pizza");

//it can call function as many time as you want


f1()
f2()
f3()
console.log(f1,f2,f3)


