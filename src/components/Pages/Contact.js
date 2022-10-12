import axios from "axios";
import React from "react";

const baseURL = "https://swapi.dev/api/starships/";

export default function Contact() {
  const [post, setPost] = React.useState([]);
  
  

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.results);
      //console.log(response.data.results)
    });
  }, []);

console.log(post)

  return (
    
    
    <div className='name'>
      <h1>Starship</h1>
      {
        post.map((data, i)=>{
            return(
                <div className="idiv" key= 'i'>
                    <p><b>name</b> : {data.name}</p>
                    <p><b>model</b> : {data.model}</p>
                    <p><b>manufacturer</b> : {data.manufacturer}</p>
                    <p><b>length</b> : {data.length}</p>
                    <p><b>max_atmosphering_speed</b> : {data.max_atmosphering_speed}</p>
                    <p><b>crew</b> : {data.crew}</p>
                    <p><b>passengers</b> : {data.passengers}</p>
                    <p><b>cargo_capacity</b> : {data.cargo_capacity}</p>
                    <p><b>consumables</b> : {data.consumables}</p>
                    <p><b>hyperdrive_rating</b> : {data.hyperdrive_rating}</p>
                    <p><b>MGLT</b> : {data.MGLT}</p>
                    <p><b>starship_class</b> : {data.starship_class}</p>
                    <p><b>pilots</b> : {data.pilots}</p>
                    <p><b>films</b> : {data.films}</p>
                    <p><b>created</b> : {data.created}</p>
                    <p><b>edited</b> : {data.edited}</p>
                    <p><b>url</b> : {data.url}</p>
                </div>
            )
        })
      }
    </div>
  );
}