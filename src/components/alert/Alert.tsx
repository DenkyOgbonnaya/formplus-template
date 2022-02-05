import { FC } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

type alertType = "error" | "warning" | "success" | "message";
interface IProps {
  message: string;
  type: alertType;
}
interface IIcons {
  error: JSX.Element;
  warning: JSX.Element;
  success: JSX.Element;
  message: JSX.Element;
}

const Alert: FC<IProps> = ({ message, type }) => {
  const bgColors = {
    error: "bg-[#FFF4EA]",
    warning: "bg-[#FFF4EA]",
    success: "bg-[#FFF4EA]",
    message: "bg-[#FFF4EA]",
  };

  const textColors = {
    error: "#252525",
    warning: "#252525",
    success: "#252525",
    message: "#252525",
  };
  const iconsColors = {
    error: "#FC830A",
    warning: "#FC830A",
    success: "#FC830A",
    message: "#FC830A",
  };
  const icons: IIcons = {
    error: (
      <ExclamationCircleIcon
        className={`text-[${iconsColors[type]}] w-16 h-16 font-normal sm:w-8 sm:h-8`}
      />
    ),
    warning: (
      <ExclamationCircleIcon
        className={`text-[${iconsColors[type]}] w-16 h-16 font-normal sm:w-8 sm:h-8`}
      />
    ),
    success: (
      <ExclamationCircleIcon
        className={`text-[${iconsColors[type]}] w-16 h-16 font-normal sm:w-8 sm:h-8`}
      />
    ),
    message: (
      <ExclamationCircleIcon
        className={`text-[${iconsColors[type]} w-16 h-16 font-normal sm:w-8 sm:h-8`}
      />
    ),
  };

  const getAlertIcon = (type: alertType): JSX.Element => {
    return icons[type];
  };
  const getMessgeColor = (type: alertType): string => {
    return textColors[type];
  };
  const getBgColor = (type: alertType): string => {
    return bgColors[type];
  };
  return (
    <div role="alert" className={`flex p-4 ${getBgColor(type)} justify-center`}>
      {getAlertIcon(type)}
      <p
        className={`text-[${getMessgeColor(
          type
        )}] ml-5 text-sm self-center font-normal`}
        data-testid="alert-message"
      >
        {message}
      </p>
    </div>
  );
};

export default Alert;
