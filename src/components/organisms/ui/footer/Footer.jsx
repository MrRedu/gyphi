import styles from "./Footer.module.css";
import { Code, Github } from "lucide-react";
export const Footer = () => {
  const list = [
    {
      title: "Dev",
      href: "https://github.com/MrRedu",
      icon: <Github size={20} />,
    },
    {
      title: "Code",
      href: "https://github.com/MrRedu/gyphi",
      icon: <Code size={20} />,
    },
  ];

  return (
    <footer className={styles["footer"]}>
      <ul className={styles["list"]}>
        {list.map(({ title, href, icon }) => (
          <li key={title} className={styles["list-item"]}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={styles["list-item-link"]}
            >
              {icon}
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className={styles["dev-information"]}>
        <p>
          Made by{" "}
          <a href="https://github.com/MrRedu" target="_blank" rel="noreferrer">
            MrRedu 🤺
          </a>
        </p>
      </div>
      <div className={styles["copyright"]}>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  );
};
Footer.propTypes = {};
