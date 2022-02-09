import { FC } from "react";
import { ITemplate } from "sharable/interface";
import Template from "../template/Template";
interface IProps {
  templates: ITemplate[];
}
const TemplateList: FC<IProps> = ({ templates }) => {
  return (
    <div className="w-full items-stretch flex flex-col sm:flex-row flex-wrap sm:justify-between">
      {templates.map((template) => (
        <div
          key={template.name}
          className="w-full mb-12 sm:w-[48%] lg:w-[31%] 2xl:w-[23%]"
        >
          <Template template={template} />
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
