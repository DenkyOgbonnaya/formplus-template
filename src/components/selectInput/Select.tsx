import { ChevronDownIcon } from "@heroicons/react/outline";
import { ChangeEvent, useState, ReactNode, FC, useEffect } from "react";

interface IProps {
  name: string | undefined;
  value: string | number;
  label: string;
  children: ReactNode;
  placeHolder?: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Select: FC<IProps> = ({
  name,
  value,
  label,
  children,
  placeHolder,
  changeHandler,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number>("");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (value) setSelectedOption(value);
  }, [value]);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    toggleShowList();
    changeHandler(e);
  };

  const toggleShowList = () => {
    setShowList((prev) => !prev);
  };
  const collapseDropdown = () => {
    setShowList(false);
  };
  return (
    <div className="relative p-3 border-[1px] border-solid my-3  w-full sm:p-3">
      <label
        className="absolute px-2 -top-[0.55rem] left-5 text-[color:var(--dark-grey)] bg-white text-xs mr-3"
        aria-label={label}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="w-full relative" tabIndex={0} onBlur={collapseDropdown}>
        <div aria-expanded={showList}>
          <div
            className="input bg-white text-sm font-heading w-full cursor-pointer"
            onClick={toggleShowList}
            data-testid="select-header"
          >
            {selectedOption ? (
              selectedOption
            ) : (
              <small className="text-sm text-gray-400">{placeHolder}</small>
            )}
          </div>
          <>
            <ChevronDownIcon
              className="w-5 h-5 bg-white absolute top-[0.1rem] right-2 text-[color:var(--dark-grey)] cursor-pointer"
              onClick={toggleShowList}
            />
          </>
        </div>

        {showList && (
          <div
            className="flex flex-col justify-between w-full border absolute bg-white z-10"
            onChange={handleSelect}
            role="list"
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
export default Select;
