


// const url="https://reqres.in/api/users"

// fetch(url)

// .then(function(res){
//     res.json().then(function(resp){
//          console.log(resp.data)
//     })
// })
// .catch(function(reject){
//     console.log("not loaded")
// })

// .then(function(res){
//     return res.json()
// })
// .then(function(res){
//     console.log(res.data)
// })
// .catch(function(reject){
//     console.log("not loaded")
// })

// async function makedata(){
//     try{
//         let res=await fetch(url)
//         let user=await res.json()
//         let x=user.data
//         append(x);
//         console.log(x)
//     }
//     catch(err){
//          console.log(err)
//     }
// }

// makedata()

// // append(user.data);  wrong

// function append(data){
//     data.forEach(function(el){
//         let img=document.createElement("img")
//         img.src=el.avatar;

//         let h2=document.createElement("h2")
//         h2.innerText=el.first_name;

//         let p=document.createElement("p")
//         p.innerText=el.email;

//         let div=document.createElement("div")
//        div.append(img,h2,p);


//     let container=document.getElementById("container");
//     container.append(div);

//     });
// }

// ----->2nd api-------------

const url="https://fakestoreapi.com/products";

fetch(url)

async function makedata(){
    try{
        let res=await fetch(url)
        let user=await res.json();
        console.log(user)
        append(user)
    }
    catch(err){
         console.log(err)
    }
}

makedata()

function append(data){
        data.forEach(function(el){
            let img=document.createElement("img")
            img.src=el.image;
    
            let h2=document.createElement("h2")
            h2.innerText=el.title;
    
            let p=document.createElement("p")
            p.innerText=el.description;
    
            let div=document.createElement("div")
           div.append(img,h2,p);
    
    
        let container=document.getElementById("container");
        container.append(div);
    
        });
    }