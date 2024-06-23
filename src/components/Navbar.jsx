import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter.count);
  
  return <div>this is nav bar count : {count}</div>;
};

export default Navbar;
