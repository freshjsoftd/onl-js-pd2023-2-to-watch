import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import RingLoader from 'react-spinners/RingLoader';
import './App.css';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
import api from './api/movie-service';
import { MovieContext } from './context';

function App() {
	const [arrMovies, setArrMovies] = useState([]);

	useEffect(() => {
		api.get('/').then(({ data }) => {
			if (!data) {
				setArrMovies([]);
			} else {
				setArrMovies(data);
			}
		});
	}, []);

	function toggleToWatch(id) {
		const updatedMovie = arrMovies.find((movie) => movie.id === id);
		updatedMovie.isDone = !updatedMovie.isDone;
		console.log(updatedMovie);
		api.put(`/${id}`, updatedMovie).then(({ data }) => {
			setArrMovies(
				arrMovies.map((movie) => {
					return movie.id !== id ? movie : data;
				})
			);
		});
	}

	const addMovie = (movie) => {
		api.post('/', movie).then(({ data }) => {
			console.log(data);
			const newMovies = [...arrMovies, data];
			setArrMovies(newMovies);
		});
	};

	const deleteMovie = (id) => {
		api.delete(`/${id}`).then(({ status }) => console.log(status));
		const newMovies = arrMovies.filter((movie) => movie.id !== id);
		setArrMovies(newMovies);
	};

	return (
		<>
			<MovieContext.Provider value={{
				arrMovies,
				onToggle: toggleToWatch,
				onDelete: deleteMovie,
				}}>
				{arrMovies.length === 0 && (
					<RingLoader color='red' size='300' />
				)}
				<WatchList
					// movies={arrMovies}
					// onToggle={toggleToWatch}
					// onDelete={deleteMovie}
					// string='Hi'
				/>
				<WatchForm onSubmit={addMovie} />
			</MovieContext.Provider>
		</>
	);
}

export default App;
