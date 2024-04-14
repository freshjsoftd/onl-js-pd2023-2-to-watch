import { useState } from 'react'
import './WatchForm.css'

function WatchForm({onSubmit}){

  const [movieTitle, setMovieTitle] = useState('');
  const [director, setDirector] = useState('');

  const onInputChange = (event) => {
    if(event.target.name === 'movieTitle'){
      setMovieTitle(event.target.value)
    }
    if(event.target.name === 'director'){
      setDirector(event.target.value)
    }
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      title: movieTitle,
      director: director,
      isDone: false,
    })
    setMovieTitle('');
    setDirector('');
  }

    return (
      <form 
        className='watch-form'
        onSubmit={onFormSubmit}
      >
        <input 
          type="text"
          name='movieTitle'
          value={movieTitle}
          onChange={onInputChange}
        />
        <input 
          type="text"
          name='director'
          value={director}
          onChange={onInputChange}
        />
        <button className='btn'>Add</button>

      </form>
    )
  }

export default WatchForm