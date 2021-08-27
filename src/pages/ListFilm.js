//api key: https://api.themoviedb.org/3/movie/now_playing?api_key=9e0de5499870264659308848dbad6b2a
import {useState, useEffect} from 'react';
import './ListFilm.css'

function ListFilm() {

    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=9e0de5499870264659308848dbad6b2a"
          );
          const data = await response.json();
          setPost(data);
          console.log(response)
          console.log(data);
        };
        fetchData();
      }, []);
    return (
<>
{post.results && post.results.map((item, index) => (
    <div className="film" key={index}>
       <img src={item.poster_path} alt="poster" className="poster"/>
        <h3>{item.title}</h3>
        <p>Tanggal Rilis: {item.release_date}</p>


    </div>
))}
</>


    );
  }
  
  export default ListFilm;