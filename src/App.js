import './App.css';
import React,{useState,useEffect} from  'react' 
import MovieList from './component/movie-list';




function App() {
 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 902a4b6d4a107f67b44425ede81b0b1d8ababc06'
                      

      }

    }).then(resp => resp.json())
      .then(resp => setMovies(resp))
      .catch(error => console.log(error))
  }, [])

 const movieClicked = movie => {
    console.log(movie.title)
 }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <MovieList movies = {movies} movieClicked={movieClicked}></MovieList>
      <div>Movie details</div>
      </div>
    </div>
  );
}

export default App;
