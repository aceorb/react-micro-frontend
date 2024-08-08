export const SET_MENU_ITEMS = 'SET_MENU_ITEMS';
export const SET_ACTIVE_COMPONENT = 'SET_ACTIVE_COMPONENT';
export const SET_GLOBAL_STATE = 'SET_GLOBAL_STATE';

export const SET_SELECTED_COMPONENT = 'SET_SELECTED_COMPONENT';

export const setMenuItems = items => ({
	type: SET_MENU_ITEMS,
	payload: items,
});

export const setActiveComponent = componentName => ({
	type: SET_ACTIVE_COMPONENT,
	payload: componentName,
});

export const setGlobalState = item => ({
	type: SET_GLOBAL_STATE,
	payload: item,
});

export const setSelectedComponent = componentId => ({
	type: SET_SELECTED_COMPONENT,
	payload: componentId,
});