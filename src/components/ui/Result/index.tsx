import clsx from "clsx";
import type { ReactNode } from "react";
import style from "./style.module.css";

interface Props {
  children: ReactNode;
}
const Result = ({ children }: Props) => {
  return (
    <div className={clsx(style.Result)}>
      <h3 className={clsx(style.Result__h3)}>Resultado:</h3>
      <p className={clsx(style.Result__p)}>{children}</p>
    </div>
  );
};

export default Result;
