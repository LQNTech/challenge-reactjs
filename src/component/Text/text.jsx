import propTypes from "prop-types";

export const Text = ({ children, id }) => {
  return (
    <p data-testid={id} id={id}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: propTypes.string,
  id: propTypes.string,
};
