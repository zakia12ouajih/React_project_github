import React from "react"
import axios from "axios";

export default function RecentRelease(){
   
   const [animelist,setAnimeList] = React.useState([])
      React.useEffect(()=>{
      axios.get("https://gogoanime.consumet.org/recent-release")
      .then((response) => setAnimeList(response.data))
      .catch(err=>console.log(err))
   },[])
   return (
      <>
      <div className="container bg-light">
            <div class="row">
            {animelist.map((item)=>
               <div class="col-md-3">
                  <div class="card text-start">
                     <img className="img-fluid card-img-top" src={item.animeImg} alt="Title"/>
                     <div class="card-body">
                        <h5 class="card-title">{item.animeTitle}</h5>
                        <p class="card-text">New Episode: {item.episodeNum}</p>
                        <p class="card-text">Sub or Dub: {item.subOrDub}</p>
                        <button type="button" class="btn btn-primary" >Discover more</button>
                     </div>
                  </div>
               </div>
                     )}
               
            </div>
            
            
         </div>
      </>
   )
}