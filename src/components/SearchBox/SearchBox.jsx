import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input value={value} onChange={handleFilter} type="text" />
    </div>
  );
}
