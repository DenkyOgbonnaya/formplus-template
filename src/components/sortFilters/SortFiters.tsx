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
  const categoriesFilter = ["All", "Education", "E-commerce", "Health"];
  const ordersFilter = ["Default", "Ascending", "Descending"];
  const dateFilter = ["Default", "Ascending", "Descending"];

  useEffect(() => {
    setState(sortState);
  }, [sortState]);

  return (
    <div className="flex flex-col justify-between sm:flex-row">
      <p className=" self-start font-normal text-sm text-[color:var(--light-grey)] sm:self-center">Sort By:</p>

      <div
        className="w-full  flex self-start sm:w-[28%]"
        data-testid="custom-select"
      >
        <Select
          name="category"
          label="Category"
          value={sortState.category}
          changeHandler={sortHandler}
          placeHolder="Order"
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
      <div
        className="w-full  flex self-start sm:w-[28%]"
        data-testid="custom-select"
      >
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
      <div className="w-full  flex sm:w-[28%]" data-testid="custom-select">
        <Select
          name="date"
          label="Date"
          value={state.date}
          changeHandler={sortHandler}
          placeHolder="Date"
        >
          {dateFilter.map((order) => (
            <SelectOption key={order} label={order} value={order} name="date" />
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SortFilters;
