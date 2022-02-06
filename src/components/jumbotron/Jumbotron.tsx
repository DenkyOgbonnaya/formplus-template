import { FC } from "react";

interface IProps {
  message: string;
}
const Jumbotron: FC<IProps> = ({ message }) => {
  return (
    <div className="p-3 flex justify-center">
      <p className="text-sm font-heading font-semibold text-[color:var(--dark)]">
        {message}
      </p>
    </div>
  );
};

export default Jumbotron;
