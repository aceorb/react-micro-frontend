import React, {lazy, Suspense} from 'react';
import { useSelector } from 'react-redux';
import Loader from "./Loader";

const componentMap = {
	ProductApp: lazy(() => import('product/ProductApp')),
	RegistrationFormApp: lazy(() => import('product/RegistrationFormApp')),
	FlowDiagramApp: lazy(() => import('flowdiagram/FlowDiagramApp')),
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