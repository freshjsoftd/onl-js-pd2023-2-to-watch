// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {toggleMovieAction, delMovieAction} from '../../store/actions/movieActions'
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

export const WatchItem = ({movie }) => {

  const dispatch = useDispatch();


  const {id, title, director} = movie;

  const onMovieDelete = (event) => {
    event.stopPropagation();
    dispatch(delMovieAction(id))
  }

  const onMovieToggle = () => {
    dispatch(toggleMovieAction({...movie, isDone: !movie.isDone}))
  }

    return (
      <div 
        className='watch-item'
        style={toggleBackground(movie)}
        onClick={onMovieToggle}
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