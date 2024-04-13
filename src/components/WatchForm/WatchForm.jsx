import { Component } from 'react'
import './WatchForm.css'

export class WatchForm extends Component {

  state = {
    movieTitle: '',
    director: '',
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.movieTitle,
      director: this.state.director,
      isDone: false,
    })
    this.setState({
      movieTitle: '',
    })
  }

  render() {
    return (
      <form 
        className='watch-form'
        onSubmit={this.onFormSubmit}
      >
        <input 
          type="text"
          name='movieTitle'
          value={this.state.movieTitle}
          onChange={this.onInputChange}
        />
        <input 
          type="text"
          name='director'
          value={this.state.director}
          onChange={this.onInputChange}
        />
        <button className='btn'>Add</button>

      </form>
    )
  }
}

export default WatchForm