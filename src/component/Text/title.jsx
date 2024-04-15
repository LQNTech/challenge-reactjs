import propTypes from "prop-types";

export const Title = ({ children, id }) => {
  return (
    <h1 data-testid={id} id={id}>
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: propTypes.string,
  id: propTypes.string,
};
