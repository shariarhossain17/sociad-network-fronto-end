import { useSelector } from "react-redux";

const SearchBox = () => {
    const toggle = useSelector((state) => state.search.toggle);
  return (
    <div className={` absolute left-[60px] top-0 h-[100vh]  flex w-[400px] shadow-lg`}>
      <div>
        <h1>This is sidebar</h1>
      </div>
    </div>
  );
};

export default SearchBox;
