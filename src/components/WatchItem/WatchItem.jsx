import { Component } from 'react';
import './WatchItem.css'

export class WatchItem extends Component {
  render() {
    console.log(this.props)
    return (
      <div 
        className={'watch-item ' + (this.props.movie.isDone ? 'done' : '')}
        onClick={() => {}}
      >
        <p className='content'>{this.props.movie.title}</p>
        <span className='delete-btn'>X</span>
      </div>
    )
  }
}

export default WatchItem