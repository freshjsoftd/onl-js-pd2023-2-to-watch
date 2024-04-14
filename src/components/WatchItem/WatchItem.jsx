// import { useEffect } from 'react';
import './WatchItem.css'

const divStyles = {
    color: 'white',
  }

function toggleBackground(movie){
  return {
    ...divStyles,
    backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod'
  }
}

export const WatchItem = ({movie, onToggle, onDelete}) => {

  const {id, title, director} = movie;

  // useEffect(() => {
  //   console.log('Hello')
  //   return () => {
  //     console.log('Bye')
  //   }
  // }, [])

  const onMovieDelete = (event) => {
    event.stopPropagation();
    onDelete(id)
  }
    return (
      <div 
        className='watch-item'
        style={toggleBackground(movie)}
        onClick={() => onToggle(id)}
      >
        <p className='content'>{title} produced by {director}</p>
        <span 
          className='delete-btn'
          onClick={onMovieDelete}
        >X
        </span>
      </div>
    )
  }

export default WatchItem