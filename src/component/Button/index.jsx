import propTypes from "prop-types";

export const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
  type: propTypes.oneOf(["button", "input", "reset", undefined]),
};
