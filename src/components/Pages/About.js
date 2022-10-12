import axios from "axios";
import React from "react";

const baseURL = "https://swapi.dev/api/people/";

export default function About() {
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
      <h1>People</h1>
      {
        post.map((data, i)=>{
            return(
                <div className="idiv" key= 'i'>
                    <p><b>name</b> : {data.name}</p>
                    <p><b>height</b> : {data.height}</p>
                    <p><b>mass</b> : {data.mass}</p>
                    <p><b>hair_color</b> : {data.hair_color}</p>
                    <p><b>skin_color</b> : {data.skin_color}</p>
                    <p><b>eye_color</b> : {data.eye_color}</p>
                    <p><b>birth_year</b> : {data.birth_year}</p>
                    <p><b>gender</b> : {data.gender}</p>
                    <p><b>homeworld</b> : {data.homeworld}</p>
                    <p><b>films</b> : {data.films}</p>
                    <p><b>species</b> : {data.species}</p>
                    <p><b>vehicles</b> : {data.vehicles}</p>
                    <p><b>starships</b> : {data.starships}</p>
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
/* <h1>{post.count}</h1>
      <p>{post.next}</p>
      <p>{post.results[0][0]}</p>*/