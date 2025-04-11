import { Link } from "react-router-dom";

const Button = ({ onClick, children, enabled, path }) => (
  <>
    {(onClick && (
      <button
        onClick={onClick}
        className={`text-white-false min-w-[141px] h-[46px] px-3 text-center rounded-[100px] ${
          enabled != children ? "bg-[#1B1B1B]" : "bg-custom-purple"
        }`}
      >
        {children}
      </button>
    )) || (
      <Link to={`${path}`}>
        <button
          className={`text-white-false min-w-[141px] h-[46px] px-3 text-center rounded-[100px] ${
            enabled != children ? "bg-[#1B1B1B]" : "bg-custom-purple"
          }`}
        >
          {children}
        </button>
      </Link>
    )}
  </>
);
export default Button;
