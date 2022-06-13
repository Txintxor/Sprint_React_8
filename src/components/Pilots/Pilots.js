import { useLocation } from "react-router-dom";

const Pilots = () => {
  const location = useLocation();
  let pilots = [];
  pilots.push(location.state);
  return <></>;
};

export default Pilots;
