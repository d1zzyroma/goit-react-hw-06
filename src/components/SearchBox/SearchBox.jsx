import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice"; 
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.input}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
