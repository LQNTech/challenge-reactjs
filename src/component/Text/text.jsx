import propTypes from "prop-types";

export const Text = ({ children }) => {
  return <p>{children}</p>;
};

Text.propTypes = {
  children: propTypes.string,
};
