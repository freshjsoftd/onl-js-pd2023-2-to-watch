import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getMoviesAction } from '../../store/actions/movieActions';
import WatchItem from '../WatchItem/WatchItem';

function WatchList() {

	const dispatch = useDispatch();

	const movies = useSelector((state) => state.moviesList.movies);
	const actors = useSelector((state) => state.actorsList.actors);
	console.log(actors)


	useEffect(() => {
		dispatch(getMoviesAction())
	}, [dispatch]);
	return (
		<>
			{movies.map((movie) => {
				return (
					<WatchItem
						key={movie.id}
						movie={movie}
						// onToggle={onToggle}
						// onDelete={onDelete}
					/>
				);
			})}
		</>
	);
}

// WatchList.propTypes = {
// 	movies: PropTypes.array,
// 	// onToggle: PropTypes.func.isRequired,
// 	// onDelete: PropTypes.func.isRequired,
// }

// WatchList.defaultProps = {
// 	string: 'Hello',
// }

/* function mapStateToProps({movies}){
	return {
		movies,
	}
} */

// const mapStateToProps = ({ movies }) => ({ movies });

// const mapDispatchToProps = {
// 	getMovies,
// 	toggleMovie,
// };

// function mapDispatchToProps(dispatch){
// 	return {
// 		getMovies: (movies) => dispatch(getMovies(movies))
// 	}
// }

export default WatchList;
