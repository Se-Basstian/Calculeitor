import clsx from "clsx";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={clsx(style.Footer)}>
      <p className={clsx(style.Footer__p)}>
        © 2025 Calculeitor creado por <b>Se-Basstian</b>. Contacto:
        p.sebastian.23.11.99@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
