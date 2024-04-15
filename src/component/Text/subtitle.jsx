import propTypes from "prop-types";

export const Subtitle = ({ children, id }) => {
  return (
    <h3 data-testid={id} id={id}>
      {children}
    </h3>
  );
};

Subtitle.propTypes = {
  children: propTypes.string,
  id: propTypes.string,
};
