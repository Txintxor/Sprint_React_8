import { useLocation } from "react-router-dom";

const Pelis = () => {
  const location = useLocation();
  let pelis = [];
  pelis.push(location.state);
  return <></>;
};

export default Pelis;
