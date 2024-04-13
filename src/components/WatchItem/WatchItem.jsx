import { Component } from 'react';
import './WatchItem.css'

export class WatchItem extends Component {

  onMovieDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.movie.id)
  }

  // componentDidMount(){
  //   this.idInter = setInterval(() => console.log(`${Date.now()}`), 5000);
  // }

  // componentWillUnmount(){
  //   console.log('Clear interval')
  //   clearInterval(this.idInter)
  // }
 
  render() {
    // console.log(this.props)
    const {id, title, director, isDone} = this.props.movie;
    const onToggle = this.props.onToggle;
    return (
      <div 
        className={'watch-item ' + (isDone ? 'done' : '')}
        onClick={() => onToggle(id)}
      >
        <p className='content'>{title} {director}</p>
        <span 
          className='delete-btn'
          onClick={this.onMovieDelete}
        >X
        </span>
      </div>
    )
  }
}

export default WatchItem