
import { useSelector, useDispatch } from 'react-redux';
import {useState, } from "react";

import {setGlobalState} from "../redux/actions";
export default () => {
	const dispatch = useDispatch();
	const globalState = useSelector(state => state.globalState);

	const [inputValue, setInputValue] = useState(globalState);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleUpdateGlobalState = () => {
		dispatch(setGlobalState(inputValue));
	}

	return(
		<div className="flex w-full justify-center items-center p-6 space-x-6 bg-white rounded-xl hover:shadow-sm transform transition duration-500">
			<div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
				<input name="state" className="bg-gray-100 outline-none" type="text" placeholder="Input..."
							 value={inputValue}
							 onChange={handleInputChange}/>
			</div>
			<div onClick={handleUpdateGlobalState} className="bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
				<span>Update</span>
			</div>
		</div>
	)
}