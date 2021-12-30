import './App.css';
import React,{useState} from  'react' 




function App() {
 
  const [movies, setMovies] = useState([]);




  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
      </header>
      <div className="layout">
      <div>Movie List</div>
      <div>
        {
          movies.map(movie => {
            return <h2>{movie}</h2>
          })
        }

      </div>
      <div>Movie details</div>
      </div>
    </div>
  );
}

export default App;
