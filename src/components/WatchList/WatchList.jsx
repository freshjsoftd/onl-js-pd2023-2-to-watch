import { Component } from 'react';
import WatchItem from '../WatchItem/WatchItem';

export class WatchList extends Component {
	render() {
		// console.log(this.props.movies);
		return (
			<>
				{this.props.movies.map((movie) => {
                    return (
                        <WatchItem 
                            key={movie.id}
                            movie={movie}
							onToggle={this.props.onToggle}
							onDelete={this.props.onDelete}
                        />
                    )
                })}
			</>
		);
	}
}

export default WatchList;
