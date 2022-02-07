import { FC } from "react";
import "./select.css";
interface IProps {
  value: string;
  name: string;
  label?: string;
}
const SelectOption: FC<IProps> = ({ name, value, label }) => {
  return (
    <>
      <div className="radio-item">
        <input type="radio" id={label} name={name} value={value} />
        <label htmlFor={label}>{label}</label>
        {/* <div>
          <label htmlFor={label}>{label}</label>
        </div> */}
      </div>
    </>
  );
};
export default SelectOption;
