import React, { Component } from "react";
import PropTyeps from "prop-types";

const Star = (selected = false, onClick = f => f) => (
  <div className={selected ? "star seleced" : "star"} onClick={onClick} />
);

Star.PropTypes = {
  selected: PropTyeps.bool,
  onClick: PropTyeps.func
};

export default Star;
