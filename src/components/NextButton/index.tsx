import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => (
  <button type="button" className={styles.button} {...rest}>
    {children}
  </button>
);

export default Button;
