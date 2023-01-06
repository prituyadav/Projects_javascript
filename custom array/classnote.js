// // what is iheritance?
// // eyes color in yor family 
// // Height 
// // baldness
// // parent's property
// // homosapians--->Monkey



// // Why Inheritance?

// //Cat family:- Tiger, lion , panther, leopard, cheetah

// // const cat ={
// //     name:"cat",
// //     legs:4,
// //     fur:true,
// //     tail:true,
// //     type:"animal",
// // }
// // // const tiger ={
// // //     name:"cat",
// // //     legs:4,
// // //     fur:true,
// // //     tail:true,
// // //     type:"animal",
// // // }
// // // const lion ={
// // //     name:"cat",
// // //     legs:4,
// // //     fur:true,
// // //     tail:true,
// // //     type:"animal",
// // // }

// // const tiger=Object.create(cat);
// // tiger.name="tiger";
// // console.log(tiger);

// // const student={
// //     batch:"Web 17",
// //     intitute:"Masai School",
// //     unit:3,
// //     course:"FSWD",
// // }

// // const s1=Object.create(student,{name:{value:"sanjay"}});
// // console.log(s1)

// //Nike product(brand, logo, seller) -----from flipcart

// // const Nikesame={
// //     brand:"Nike",
// //     logo:"url",
// //     seller:"flipcart",
// // };

// // const shoes=Object.create(Nikesame,{name:{value:"shoe"}})
// // console.log(shoes)

// // function Product(){
// //   this.brand="nike",
// //   this.log="url",
// //   this.seller="flipcart"
// // }

// // let p1=new Product()
// // console.log(p1)

// function Product(n){
//     this.Name=n
//     this.brand="nike",
//     this.log="url",
//     this.seller="flipcart"
//   }
// Product.prototype.discount=function(){
//     console.log("50% discount")
// }


// Product.prototype.changetype=function(type){
//    this.type=type;

// }

// Product.prototype.price=1000

// let p1=new Product("Shoes")
// let p2=new Product("Sneakers")

// p1.changetype("t-shirt")
// p2.discount();
// console.log()
// console.log(p2)


let arr=[1,2,3];
console.log(arr)

let arr2=new Array(1,2,3)
console.log(arr2)

function myArray(){
    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    })

    this.length=arguments.length;
    for(let i=0; i<arguments.length; i++){
        this[i]=arguments[i];
    }
}

let arr3=new myArray(1,2,3,4,5);
console.log(Object.values(arr3))

myArray.prototype.पुश=function (value){
    this[this.length]=value;
    this.length++;
};

myArray.prototype.पॉप=function (value){
    delete this[this.length-1];
    this.length--;
};
myArray.prototype.छापना=function (value){
   console.log(Object.values(this))
};

arr3.पुश(234)

arr3.पुश("we")

arr3.पुश("ed3w")
arr3.पॉप()
arr3.छापना()
arr3.छापना()
arr3.छापना()


