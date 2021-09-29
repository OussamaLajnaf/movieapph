
import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import MovieList from './components/MovieList';
import { moviesdata } from './data';
import Footer from './components/Footer'
function App() {
  const [movies, setMovies] = useState(moviesdata)
  return (
    <div className="App">
     <MovieList list={movies}/>
     <Add/>
     <Footer/>
    </div>
  );
}

export default App;
