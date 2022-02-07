import { Select, SelectOption } from "components";
import { ChangeEvent, FC } from "react";

interface IProps {
  sortHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SortFilters: FC<IProps> = ({ sortHandler }) => {
  const categoriesFilter = ["All", "Education", "E-Commerce", "Health"];
  const ordersFilter = ["Default", "Ascending", "Descending"];
  const dateFilter = ["Default", "Ascending", "Descending"];

  const generateid = () => {
    return `${Math.random() * 10}-${Math.random() * 5}`;
  };
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
            value=""
            changeHandler={sortHandler}
            placeHolder="Category"
          >
            {categoriesFilter.map((category) => (
              <SelectOption
                key={generateid()}
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
            value=""
            changeHandler={sortHandler}
            placeHolder="Order"
          >
            {ordersFilter.map((order) => (
              <SelectOption
                key={generateid()}
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
            value=""
            changeHandler={sortHandler}
            placeHolder="Date"
          >
            {dateFilter.map((order) => (
              <SelectOption
                key={generateid()}
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
