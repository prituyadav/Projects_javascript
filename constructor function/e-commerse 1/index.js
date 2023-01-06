function Abc(n,c,i,p,g,s){
 this.name =n;
 this.category = c;
 this.image = i;
 this.price =p ;
 this.gender=g ;
 this.sell =s ;
}

function myfunction(e){
    e.preventDefault()

    let form=document.querySelector("form")

    let name=form.name.value;
    let categary=form.category.value;
    let image=form.image.value;
    let price=form.price.value;
    let gender=form.gender.value;
    let sell=form.sold.value;

    //console.log(name,categary,image,price,gender,sell)

    let s1=new Abc(name,categary,image,price,gender,sell)

    let arr=JSON.parse(localStorage.getItem("Products")) || []

    arr.push(s1)

    localStorage.setItem("Products", JSON.stringify(arr))
}