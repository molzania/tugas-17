//api key: https://api.themoviedb.org/3/movie/now_playing?api_key=9e0de5499870264659308848dbad6b2a
import {useState, useEffect} from 'react';

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
    <div key={index}>
        <h3>{item.original_title}</h3>
        <img src={item.backdrop_path} alt="poster"/>
        <p>Tanggal Rilis: {item.release_date}</p>


    </div>
))}
</>


    );
  }
  
  export default ListFilm;