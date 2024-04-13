import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
// import Mouse from './components/Mouse';
// import Cat from './components/Cat';

export class App extends Component {
	state = {
		movies: [],
	};

  componentDidMount(){
    const movies = JSON.parse(localStorage.getItem('movies'));
    if(!movies){
      this.setState({
        movies: [],
      })
    }else{
      this.setState({
        movies: [...movies]
      })
    }
	
  }

//   componentDidUpdate(){
// 	console.log('Component was updated')
//   }

	toggleToWatch = (id) => {
		// console.log(this)
		this.setState((state) => {
			const movies = state.movies.map((movie) => {
				if (movie.id !== id) {
					return movie;
				}
				return { ...movie, isDone: !movie.isDone };
			});
			this.saveMovies(movies);
			return {
				movies,
			};
		});
	};

	// toggleBindToWatch = this.toggleToWatch.bind(this)

	addMovie = (movie) => {
		movie.id = nanoid();
		this.setState((state) => {
			const movies = [...state.movies, movie];
      this.saveMovies(movies);
      return {
        movies
      }
		});
	};

	deleteMovie = (id) => {
		this.setState((state) => {
			const movies =  state.movies.filter((movie) => movie.id !== id);
      this.saveMovies(movies);
      return {
        movies
      }
		});
	};

	saveMovies = (arrMovies) => {
		localStorage.setItem('movies', JSON.stringify(arrMovies));
	};

	render() {
		return (
			<>
				<WatchList
					movies={this.state.movies}
					onToggle={this.toggleToWatch}
					onDelete={this.deleteMovie}
				/>
				<WatchForm onSubmit={this.addMovie} />
        {/* <Mouse render={(mouse) => <Cat mouse={mouse}/>}/> */}
        {/* <Mouse>
          {(mouse) => <Cat mouse={mouse}/>}
        </Mouse> */}
			</>
		);
	}
}

export default App;
