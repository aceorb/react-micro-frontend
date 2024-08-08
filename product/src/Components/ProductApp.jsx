
import ProductV1 from "./v1/Product";
import ProductV2 from "./v2/Product";
import NotFoundVersion from "./NotFoundVersion";
import useSetSelectedComponent from "../hooks/useSetSelectedComponent";

const components = {
	v1: ProductV1,
	v2: ProductV2
};
export default ({id, version}) => {
	useSetSelectedComponent(id);

	const Component = components[version] || null;
	return Component ? <Component /> : <NotFoundVersion/>;
}