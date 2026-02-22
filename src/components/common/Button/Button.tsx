import styles from "./button.module.css";

const Button = ({
  text,
  Icon,
  buttonStyles,
  containerStyles,
  onClick,
}: {
  text: String;
  Icon?: React.ElementType;
  buttonStyles?: React.CSSProperties;
  containerStyles?: React.CSSProperties;
  onClick?: () => void;
}) => {
  return (
    <div style={containerStyles} onClick={onClick} className={styles.button}>
      {Icon && <Icon style={buttonStyles} />}
      {text}
    </div>
  );
};

export default Button;
