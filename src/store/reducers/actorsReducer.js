import { actorsState } from '../../model/initialStates';

const initialState = {
	actors: actorsState,
};

export default function actorsReducer(state = initialState, { type }) {
	switch (type) {
		default:
			return state;
	}
}
