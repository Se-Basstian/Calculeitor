import clsx from "clsx";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={clsx(style.Header)}>
      <h1 className={clsx(style.Header__h1)}>Calculeitor</h1>
    </header>
  );
};

export default Header;
