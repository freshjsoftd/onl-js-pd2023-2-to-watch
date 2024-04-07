import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';

export class App extends Component {
	state = {
		movies: [
			{
				id: 1,
				title: 'Movie 1',
				isDone: false,
			},
			{
				id: 2,
				title: 'Movie 2',
				isDone: false,
			},
			{
				id: 3,
				title: 'Movie 3',
				isDone: false,
			},
			{
				id: 4,
				title: 'Movie 4',
				isDone: false,
			},
		],
	};

	toggleToWatch = (id) => {
		// console.log(this)
		this.setState({
			movies: this.state.movies.map((movie) => {
				if (movie.id !== id) {
					return movie;
				}
				return { ...movie, isDone: !movie.isDone };
			}),
		});
	};

	// toggleBindToWatch = this.toggleToWatch.bind(this)

	addMovie = (movie) => {
		movie.id = nanoid();
		this.setState({
			movies: [...this.state.movies, movie],
		});
	};

	render() {
		return (
			<>
				<WatchList
					movies={this.state.movies}
					onToggle={this.toggleToWatch}
				/>
				<WatchForm onSubmit={this.addMovie}/>
			</>
		);
	}
}

export default App;
