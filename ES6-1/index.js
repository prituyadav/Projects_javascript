
// let p_url=`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=Masai&regionCode=in&key[…]ziKnGqp-wJcZoZuyWom_CNt55M&part=snippet&chart=mostPopular`

// let popularData=async ()=>{
//         let res = await fetch(p_url)
//         //let data=await res.json()
//         console.log(res)

// }




//================================================================================================================= .>

//api===AIzaSyBk3Bak1jB47L7hvM5kdexT9TvRlRMwrvY

let api="AIzaSyBk3Bak1jB47L7hvM5kdexT9TvRlRMwrvY"

// let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}`

//fetch(url);
let search = async ()=>{
    try{
        let query=document.getElementById("query").value;
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api}`
    let res= await fetch(url)
    let data= await res.json()
    
    append(data.items)
    //console.log(data.items)
    }
    catch(error){
        console.log(error)
    }
   

}

   
// {/* <iframe width="560" height="315"
 //src="https://www.youtube.com/embed/hXra5d1E8aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

let append = (data)=>{
   let container=document.getElementById("container");
   
    container.innerHTML = null
    
// console.log(data)

 data.forEach(({id:{videoId},snippet:{title,thumbnails}})=>{
      //console.log(videoId,title)
     
      let frame=document.createElement("iframe");
      frame.src=`https://www.youtube.com/embed/${videoId}`;
       frame.allow="fullscreen";
       let image=document.createElement("img")
       image.src=thumbnails.default.url;
       image.style.width="600";
       image.style.height="400";
       
      let h3=document.createElement("h3");
      h3.innerText=title;

      let box=document.createElement("div")

      let video={
          title,
          videoId,
      }
      box.onclick=()=>{
          playvideo(video);
      }
      

      box.append(image,h3)
      

      container.append(box)
 })

 
}

let playvideo=(video)=>{
    localStorage.setItem("Video",JSON.stringify(video))
    window.location.href="video.html"
}

//

// let popularData=async ()=>{
//     let p_url=`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=Masai&regionCode=in&key[…]ziKnGqp-wJcZoZuyWom_CNt55M&part=snippet&chart=mostPopular`
//         let res = await fetch(p_url)
//         let data=res.json()
//         console.log(data)

// }


let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&locale=IN&q=mostPopular%202&key=AIzaSyDmAkJGVwdOMutf9vUHR3glBuk-cYJhTtY`

     fetch(url)
    .then((res)=>{
        res = res.json()
        return res
    }).then((data)=>{
        append(data.items)
    }).catch((err)=>{
        console.log(err)
    })




