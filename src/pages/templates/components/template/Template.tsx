import { FC, MouseEvent } from "react";
import { ITemplate } from "sharable/interface";
import { truncateWords } from "utils/helpers";

export interface IProps {
  template: ITemplate;
  useHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}
const Template: FC<IProps> = ({ template, useHandler }) => {
  return (
    <>
      <div className="w-full shadow-lg rounded-sm flex flex-col justify-between overflow-hidden h-full">
        <div className="p-5 bg-[color:var(--white)] pb-10">
          <p className="text-2xl mb-4 font-medium font-heading">
            {" "}
            {template.name}{" "}
          </p>
          <p className="text-sm text-[color:var(--light-dark)] font-normal font-sans">
            {" "}
            {truncateWords(template.description, 100)}{" "}
          </p>
        </div>

        <div className="p-5 bg-[color:var(--white-smoke)]">
          <button
            className="button text-sm font-normal text-[color:var(--green)] font-heading"
            onClick={useHandler}
          >
            Use Template
          </button>
        </div>
      </div>
    </>
  );
};

export default Template;
