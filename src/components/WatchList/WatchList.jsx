// import { useState } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import WatchItem from '../WatchItem/WatchItem';
import { MovieContext } from '../../context';

function WatchList({ string }) {
	
   const {arrMovies} = useContext(MovieContext)

	return (
		<>
			{arrMovies.map((movie) => {
				return (
					<WatchItem
						key={movie.id}
						movie={movie}
						// onToggle={onToggle}
						// onDelete={onDelete}
					/>
				);
			})}
			{string} 
		</>
	);
}

WatchList.propTypes = {
	movies: PropTypes.array,
	// onToggle: PropTypes.func.isRequired,
	// onDelete: PropTypes.func.isRequired,
}

WatchList.defaultProps = {
	string: 'Hello',
}

export default WatchList;
