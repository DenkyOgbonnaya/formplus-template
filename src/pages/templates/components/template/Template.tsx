import { FC } from "react";

export interface ITemmplate {
  id?: string | number;
  title: string;
  description: string;
}
const Template: FC<ITemmplate> = ({ title, description }) => {
  return (
    <>
      <div className="w-full shadow-lg rounded-sm">
        <div className="p-5 bg-[color:var(--white)] pb-10">
          <p className="text-2xl mb-4 font-medium font-heading"> {title} </p>
          <p className="text-sm text-[color:var(--light-dark)] font-normal font-sans">
            {" "}
            {description}{" "}
          </p>
        </div>

        <div className="p-5 bg-[color:var(--white-smoke)]">
          <button className="button text-sm font-normal text-[color:var(--green)] font-heading">
            Use Template
          </button>
        </div>
      </div>
    </>
  );
};

export default Template;
