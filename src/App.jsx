import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import RingLoader from 'react-spinners/RingLoader';
import './App.css';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
// import Mouse from './components/Mouse';
// import Cat from './components/Cat';

function App() {
	const [arrMovies, setArrMovies] = useState([]);

	// useEffect(() => {
	// 	const movies = JSON.parse(localStorage.getItem('movies'));
	// 	if (!movies) {
	// 		setArrMovies([]);
	// 	} else {
	// 		setArrMovies(movies);
	// 	}
	// }, []);
	useEffect(getFromStorage, []);

	function getFromStorage() {
		const movies = JSON.parse(localStorage.getItem('movies'));
		if (!movies) {
			setArrMovies([]);
		} else {
			setArrMovies(movies);
		}
	}

	function toggleToWatch(id) {
		const movies = arrMovies.map((movie) => {
			if (movie.id !== id) {
				return movie;
			}
			return { ...arrMovies, isDone: !movie.isDone };
		});
		setArrMovies((movies) => movies);
		saveMovies(movies);
	}

	const addMovie = (movie) => {
		movie.id = nanoid();
		const movies = [...arrMovies, movie];
		setArrMovies(movies);
		saveMovies(movies);
	};

	const deleteMovie = (id) => {
		const movies = arrMovies.filter((movie) => movie.id !== id);
		setArrMovies(movies);
		saveMovies(movies);
	};

	const saveMovies = (movies) => {
		localStorage.setItem('movies', JSON.stringify(movies));
	};

	return (
		<>
			{arrMovies.length === 0 && <RingLoader color='red' size='300' />}
			<WatchList
				movies={arrMovies}
				onToggle={toggleToWatch}
				onDelete={deleteMovie}
			/>
			<WatchForm onSubmit={addMovie} />
		</>
	);
}

export default App;
