// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../api/movie-service';
import {toggleMovie, delMovie} from '../../store/actions/movieActions'
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
    api.delete(`/watch/${id}`)
        .then(({statusText}) => console.log(statusText))
        .catch((error) => console.log(error))
    dispatch(delMovie(id))
  }

  const onMovieToggle = () => {
    const updatedMovie = {...movie, isDone: !movie.isDone}
    api.put(`/watch/${id}`, updatedMovie)
        .then(({data}) => dispatch(toggleMovie(data.id)))
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