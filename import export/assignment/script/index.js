console.log("avs")

// random= https://www.themealdb.com/api/json/v1/1/random.php
// byname= https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata 

let All=async()=>{
    try{
        let url=`https://www.themealdb.com/api/json/v1/1/random.php`
        let res= await fetch(url)
        //console.log(res)
        let rec=await res.json()
        //console.log(rec.meals)
         append(rec.meals)
    }
    catch(err){
        console.log(err)
    }
}
All()

let append=(Data)=>{
    Data.forEach((el)=>{
        let box=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.strMealThumb
         
         box.append(img)

         document.getElementById("all_receipe").append(box)
    })
}


