import './Home.css';
import './ListFilm';
import ListFilm from './ListFilm';
import Slider1 from './video/gambar2.jpg'

function Home() {
 
    return (
      <div className="Home">
<img src={Slider1} alt="gambar"/>
        <div className="blueDiagonal"></div>

        <h2>New Release</h2>
          <div className="list-film">
            <ListFilm/>
          </div>
</div>
    );
  }
  
  export default Home;