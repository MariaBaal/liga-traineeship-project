import { ChangeEventHandler, MouseEvent } from 'react';
import './SearchInput.css';
import { SearchInputProps } from './SearchInput.types';
import IconSearch from 'app/taskList/components/TaskItem/icons/IconSearch';
import IconDelete from 'app/taskList/components/TaskItem/icons/IconDelete';

export function SearchInput({ onChange, value, onReset }: SearchInputProps) {
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);

  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onReset) onReset();
  };

  return (
    <div className="search">
      <div className="icon-search">
        <IconSearch />
      </div>
      <input
        className="search__input"
        type="text"
        placeholder="Поиск"
        value={value}
        onChange={onSearchInputChange}></input>
      <button className="close" onClick={onResetBtnClick}>
        <IconDelete />
      </button>
    </div>
  );
}
