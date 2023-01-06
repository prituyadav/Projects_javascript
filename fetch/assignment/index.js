

const url="http://www.omdbapi.com/?i=tt3896198&apikey=a27b7ca4";

fetch(url)
console.log(fetch(url))

async function makedata(){
    try{
        let movie=await fetch(url)
        console.log(movie)
        let movies=await movie.json()
       console.log(movies)
       append(movies)
        
    }
    catch(err){
        console.log(err)
    }
}

makedata()

function append(data){
    let div=document.createElement("div")

    let img=document.createElement("img")
    img.src=data.url

    let title=document.createElement("p")
    title.innerText=data.Title




    div.append(img,title)

    let box=document.getElementById("container")
    box.append(div)


}




