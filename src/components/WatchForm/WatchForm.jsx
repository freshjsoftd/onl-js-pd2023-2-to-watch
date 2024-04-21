// import { useState } from 'react'
import { useField} from '../../hooks'
import './WatchForm.css'

function WatchForm({onSubmit}){

  // const [movieTitle, setMovieTitle] = useState('');
  // const [director, setDirector] = useState('');
  const title = useField('');
  const director = useField('');

  // const onInputChange = (event) => {
  //   if(event.target.name === 'movieTitle'){
  //     setMovieTitle(event.target.value)
  //   }
  //   if(event.target.name === 'director'){
  //     setDirector(event.target.value)
  //   }
  // }

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      title: title.value,
      director: director.value,
      isDone: false,
    })
    // setMovieTitle('');
    // setDirector('');
  }

    return (
      <form 
        className='watch-form'
        onSubmit={onFormSubmit}
      >
        <input 
          type="text"
          name='title'
          {...title}
        />
        <input 
          type="text"
          name='director'
          {...director}
        />
        <button className='btn'>Add</button>

      </form>
    )
  }

export default WatchForm