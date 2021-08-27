import './Home.css';
import './ListFilm';
import ListFilm from './ListFilm';

function Home() {
 
    return (
      <div className="Home">
        <h2>New Release</h2>
          <div className="list-film">
            <ListFilm/>
          </div>
</div>
    );
  }
  
  export default Home;