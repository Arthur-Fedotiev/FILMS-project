import React from "react";
import PropTypes from "prop-types";

const FormMessage = ({type, children, ...rest}) => {
  const color = type === "error" ? "#9a3f38" : "#6597a7";
  console.log(color);
  return <div style={{color: color}}>{children}</div>;
};

FormMessage.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormMessage;
