import propTypes from "prop-types";

export const Title = ({ children }) => {
  return <h1>{children}</h1>;
};

Title.propTypes = {
  children: propTypes.string,
};
