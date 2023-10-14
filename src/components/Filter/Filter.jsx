import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterLabel } from './Filter.styled';
import { changeValue } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={filter}
        onChange={evt => dispatch(changeValue(evt.target.value))}
        type="text"
      />
    </FilterLabel>
  );
};
