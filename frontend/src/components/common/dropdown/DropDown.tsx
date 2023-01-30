import { useState, useEffect, useMemo } from 'react';
import './DropDown.scss';

interface Props {
  placeholder: string;
  options: Array<any>;
  onChange?: any;
  outerOption?: any;
  initialValue?: string;
  disabled?: boolean;
}

const DropDown = (props: Props) => {
  const { options, outerOption, onChange, placeholder, initialValue, disabled } = props;
  const [selectedOption, setSelectedOption] = useState<string>(
    initialValue ? initialValue : placeholder ? `Choose  ${placeholder}` : 'Choose option'
  );
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleClick = () => {
    if (options.length > 0 && !disabled) {
      setIsOpened(!isOpened);
    }
  };

  useEffect(() => {
    if (outerOption === '' || !outerOption) {
      setSelectedOption(`Choose  ${placeholder}`);
    }
  }, [outerOption]);

  const handleItemSelect = (item: { id: number; label: string; name: string }) => {
    setSelectedOption(item?.label ?? item.name);
    setIsOpened(!isOpened);
    onChange(item, placeholder);
  };

  useEffect(() => {
    const isInOptions = !!!(
      options.filter((option) => {
        return option.name === selectedOption || option.label === selectedOption;
      }).length > 0
    );

    if (isInOptions) {
      setSelectedOption(placeholder ? `Choose  ${placeholder}` : 'Choose option');
    }
  }, [options]);

  return (
    <div className={`dropdown ${options.length > 0 && !disabled ? '' : 'inactive-dropdown'}`}>
      <div className="dropdown-input" onClick={handleClick}>
        <p>{outerOption?.[placeholder] ? outerOption?.[placeholder] : selectedOption}</p>
        <span className="material-icons dropdown-input-arrow">expand_more</span>
      </div>
      <div className={`dropdown-menu  ${isOpened ? '' : 'dropdown-menu-hidden'}`}>
        {options.map((item, index: number) => {
          return (
            <div
              key={index}
              className="dropdown-menu-item"
              onClick={() => {
                handleItemSelect(item);
              }}>
              {!item?.inactive && (item?.label ?? item.name)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DropDown;
