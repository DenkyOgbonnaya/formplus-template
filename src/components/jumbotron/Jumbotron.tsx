import { FC } from "react";

interface IProps {
  message: string;
}
const Jumbotron: FC<IProps> = ({ message }) => {
  return (
    <div className="p-3 flex justify-center" role="alert">
      <p className="text-sm font-heading font-semibold text-[color:var(--dark)]" data-testid="jumbotron-message">
        {message}
      </p>
    </div>
  );
};

export default Jumbotron;
