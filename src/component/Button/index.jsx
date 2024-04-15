import propTypes from "prop-types";

export const Button = ({ children, id, onClick, type = "button" }) => {
  return (
    <button data-testid={id} id={id} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
  type: propTypes.oneOf(["button", "input", "reset", undefined]),
  id: propTypes.string,
};
