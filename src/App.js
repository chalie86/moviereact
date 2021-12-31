import './App.css';
import React,{useState,useEffect} from  'react' 




function App() {
 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token'
                      

      }

    })
   


  }, [])




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
