import {SET_MENU_ITEMS, SET_ACTIVE_COMPONENT, SET_GLOBAL_STATE, SET_SELECTED_COMPONENT} from './actions';

const initialState = {
	menuItems: [],
	activeComponent: null,
	globalState: '0',
	selectedComponent:''
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MENU_ITEMS:
			return { ...state, menuItems: action.payload };
		case SET_ACTIVE_COMPONENT:
			return { ...state, activeComponent: action.payload };
		case SET_GLOBAL_STATE:
			return { ...state, globalState: action.payload };
		case SET_SELECTED_COMPONENT:
			return { ...state, selectedComponent: action.payload };
		default:
			return state;
	}
};

export default rootReducer;