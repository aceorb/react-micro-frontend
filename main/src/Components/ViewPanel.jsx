import React, {lazy, Suspense} from 'react';
import { useSelector } from 'react-redux';

import Loader from "./Loader";
import Error from "./Error";

const componentMap = {
	ProductApp: lazy(() => import('product/ProductApp').catch((error) => {
		console.error("Component Failed Loading:", error);
		return { default: Error };
	}),),
	RegistrationFormApp: lazy(() => import('product/RegistrationFormApp').catch((error) => {
		console.error("Component Failed Loading:", error);
		return { default: Error };
	}),),
	FlowDiagramApp: lazy(() => import('flowdiagram/FlowDiagramApp').catch((error) => {
		console.error("Component Failed Loading:", error);
		return { default: Error };
	}),),
};
export default () => {
	const activeComponent = useSelector(state => state.activeComponent);
	const DynamicComponent = activeComponent ? componentMap[`${activeComponent.component}`] : null;
	return (
		<>
			<Suspense fallback={<Loader />}>
				{DynamicComponent && <DynamicComponent key={activeComponent.id} id={activeComponent.id} version={activeComponent.version}/>}
			</Suspense>
		</>

	);
};