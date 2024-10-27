// import { nanoid } from 'nanoid';
// import RingLoader from 'react-spinners/RingLoader';
import './App.css';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';

function App() {
	return (
		<div className='container'>
			<WatchList />
			<WatchForm />
		</div>
	);
}

export default App;
