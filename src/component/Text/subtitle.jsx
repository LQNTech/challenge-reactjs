import propTypes from "prop-types";

export const Subtitle = ({ children }) => {
  return <h3>{children}</h3>;
};

Subtitle.propTypes = {
  children: propTypes.string,
};
