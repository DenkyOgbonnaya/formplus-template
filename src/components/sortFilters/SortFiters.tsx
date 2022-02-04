import { SelectInput } from "components";
import { ChangeEvent, FC } from "react";

interface IProps {
  sortHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}
const SortFilters: FC<IProps> = ({ sortHandler }) => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="w-[32%] flex" data-testid="custom-select">
          <span className="text-sm self-center text-[color:var(--light-grey)]">
            Sort By:
          </span>
          <SelectInput
            name="category"
            label="Category"
            value=""
            changeHandler={sortHandler}
            placeHolder="Category"
          >
            <option value="text 1">text 1</option>
            <option value="text 2">text 2</option>
          </SelectInput>
        </div>
        <div className="w-[32%] flex" data-testid="custom-select">
          <SelectInput
            name="order"
            label="Order"
            value=""
            changeHandler={sortHandler}
            placeHolder="Order"
          >
            <option value="text 1">text 1</option>
            <option value="text 2">text 2</option>
          </SelectInput>
        </div>
        <div className="w-[32%] flex" data-testid="custom-select">
          <SelectInput
            name="date"
            label="Date"
            value=""
            changeHandler={sortHandler}
            placeHolder="Date"
          >
            <option value="text 1">text 1</option>
            <option value="text 2">text 2</option>
          </SelectInput>
        </div>
      </div>
    </>
  );
};

export default SortFilters;
