import { Select, SelectOption } from "components";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { ISortState } from "sharable/interface";

interface IProps {
  sortHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  sortState: ISortState;
}
const SortFilters: FC<IProps> = ({ sortState, sortHandler }) => {
  const [state, setState] = useState<ISortState>({
    order: "",
    category: "",
    date: "",
  });
  const categoriesFilter = ["All", "Education", "E-Commerce", "Health"];
  const ordersFilter = ["Default", "Ascending", "Descending"];
  const dateFilter = ["Default", "Ascending", "Descending"];

  useEffect(() => {
    setState(sortState);
  }, [sortState]);

  return (
    <>
      <div className="flex w-full justify-between">
        <div className="w-[32%] flex" data-testid="custom-select">
          <span className="text-sm self-center text-[color:var(--light-grey)]">
            Sort By:
          </span>
          <Select
            name="category"
            label="Category"
            value={sortState.category}
            changeHandler={sortHandler}
            placeHolder="Category"
          >
            {categoriesFilter.map((category) => (
              <SelectOption
                key={category}
                label={category}
                value={category}
                name="category"
              />
            ))}
          </Select>
        </div>
        <div className="w-[32%] flex" data-testid="custom-select">
          <Select
            name="order"
            label="Order"
            value={sortState.order}
            changeHandler={sortHandler}
            placeHolder="Order"
          >
            {ordersFilter.map((order) => (
              <SelectOption
                key={order}
                label={order}
                value={order}
                name="order"
              />
            ))}
          </Select>
        </div>
        <div className="w-[32%] flex" data-testid="custom-select">
          <Select
            name="date"
            label="Date"
            value={state.date}
            changeHandler={sortHandler}
            placeHolder="Date"
          >
            {dateFilter.map((order) => (
              <SelectOption
                key={order}
                label={order}
                value={order}
                name="date"
              />
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

export default SortFilters;
