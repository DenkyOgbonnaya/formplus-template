import { FC } from "react";

interface IProps {
  category: string;
  total: string | number;
}
const TemplateCounter: FC<IProps> = ({ category, total }) => {
  return (
    <div className="flex justify-between">
      <p className="font-heading font-normal text-lg text-[color:var(--light-dark)]">
        {category}
      </p>
      <small className="font-heading font-normal text-sm text-[color:var(--grey)]">
        {total} templates
      </small>
    </div>
  );
};

export default TemplateCounter;
