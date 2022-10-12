import axios from "axios";
import React from "react";

const baseURL = "https://swapi.dev/api/planets/";

export default function Blog() {
  const [post, setPost] = React.useState([]);
  const [people, setPeople] = React.useState(null);
  

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.results);
      //console.log(response.data.results)
    });
  }, []);

console.log(post)

  return (
    
    
    <div className='name'>
      <h1>Planets</h1>
        <div>
            <button onClick={()=> setPeople(people)}></button>
        </div>
      {
        post.map((data, i)=>{
            return(
                <div className="idiv" key= 'i'>
                    <p><b>name</b> : {data.name}</p>
                    <p><b>rotation_period</b> : {data.rotation_period}</p>
                    <p><b>orbital_period</b> : {data.orbital_period}</p>
                    <p><b>diameter</b> : {data.diameter}</p>
                    <p><b>climate</b> : {data.climate}</p>
                    <p><b>gravity</b> : {data.gravity}</p>
                    <p><b>surface_water</b> : {data.surface_water}</p>
                    <p><b>population</b> : {data.population}</p>
                    <p><b>residents</b> : {data.residents}</p>
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
