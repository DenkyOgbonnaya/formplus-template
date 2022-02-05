import { FC } from "react";
import Template, { ITemmplate } from "../template/Template";
interface IProps {
  temlates: ITemmplate[];
}
const TemplateList: FC<IProps> = ({ temlates }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row flex-wrap sm:justify-between">
      {temlates.map((template) => (
        <div key={template.id} className="w-full mb-12 sm:w-[31%]">
          <Template title={template.title} description={template.description} />
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
