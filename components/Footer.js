import styles from "./Footer.module.css";

export default function Footer({ logo, logoAlt }) {
  return (
    <footer className={styles.footer} data-sb-field-path=".footer">
      <img
        src={logo || "/logo-netlify.svg"}
        alt={logoAlt || "Netlify Logo"}
        className={styles.logo}
        data-sb-field-path=".footer.logo"
      />
    </footer>
  );
}
