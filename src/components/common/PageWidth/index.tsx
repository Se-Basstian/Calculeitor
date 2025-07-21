import clsx from "clsx";
import type { ReactNode } from "react";
import style from "./style.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}
const PageWidth = ({ children, className }: Props) => {
  return <main className={clsx(style.PageWidth, className)}>{children}</main>;
};

export default PageWidth;
