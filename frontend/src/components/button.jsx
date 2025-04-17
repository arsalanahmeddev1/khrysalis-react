import { Link } from "react-router-dom";

const Button = ({
  children,
  onClick,
  path,
  className = "",
  type = "button", // default type
}) => {

  if (path) {
    return (
      <Link to={path} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
