import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setActiveComponent} from "../redux/actions";

export default () => {
  const dispatch = useDispatch();

  const menuItems = useSelector(state => state.menuItems);
  const globalState = useSelector(state => state.globalState);
  const selectedComponent = useSelector(state => state.selectedComponent);

  const onMenuClicked = (menuItem) => {
    dispatch(setActiveComponent(menuItem));
  }
  return  (
    <div className="bg-white shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
        <div className="flex items-center justify-center md:justify-center">
          <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
            {menuItems.map((item, index) => (
              <span
                key={index}
                onClick={() => onMenuClicked(item)}
                className={`${selectedComponent === item.id ? 'bg-red-100' : ''} px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 cursor-pointer`}
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-4">

            <a href="#" className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner">
              <span className="pl-1 text-gray-500 text-md">Global State:</span>
              <span className="pl-1 text-gray-500 text-md">{globalState}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}