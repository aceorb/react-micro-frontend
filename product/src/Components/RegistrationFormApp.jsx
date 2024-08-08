import RegistrationFormV1 from "./v1/RegistrationForm";
import RegistrationFormV2 from "./v2/RegistrationForm";
import NotFoundVersion from "./NotFoundVersion";
import useSetSelectedComponent from "../hooks/useSetSelectedComponent";

const components = {
  v1: RegistrationFormV1,
  v2: RegistrationFormV2
};

export default ({id, version}) => {
  useSetSelectedComponent(id);

  const Component = components[version] || null;
  return Component ? <Component /> : <NotFoundVersion/>;
}