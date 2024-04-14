import { Component } from 'react';
import WatchItem from '../WatchItem/WatchItem';

export class WatchList extends Component {
	// state = {
	// 	count: 0,
	// };

	// static getDerivedStateFromProps(props, state) {
	// 	if (props.movies.length !== state.count) {
	// 		return {
	// 			count: props.movies.length,
	// 		};
	// 	}
	// }

	render() {
		console.log(this.props.movies);
		// console.log(this.state.count);
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
					);
				})}
			</>
		);
	}
}

export default WatchList;
