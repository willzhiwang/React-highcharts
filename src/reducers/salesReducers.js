const initialState = {
	id: '',
	title: '',
	image: '',
	subtitle: '',
	brand: '',
	reviews: [],
	retailer: '',
	details: [],
	tags: [],
	sales: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return {
				...state,
				...action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
