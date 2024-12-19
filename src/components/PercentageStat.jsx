import PropTypes from "prop-types";
import { Component } from "react";

class PercentageStat extends Component {
  constructor(props) {
    super(props);
    this.label = props.label;
    this.score = props.score;
    this.total = props.total;
  }

  render() {
    return (
      <div>
        <h6>{this.label}</h6>
        <span>{Math.round((this.score / this.total) * 100)}%</span>
      </div>
    );
  }
}

function isNumeric(value) {
  const regex = /^(\+|-)?((\d*\.?\d+)|(\d+\.?\d*))$/;
  return (
    Number.isFinite(value) || (typeof value === "string" && regex.test(value))
  );
}

function isNonZero(value) {
  return +value !== 0;
}

function validatedType(...validators) {
  return function (props, propName, componentName) {
    const value = props[propName];

    const valid = validators.every((validator) => {
      if (typeof validator === "function") {
        const result = validator(value);
        return typeof result === "boolean" && result;
      }

      return false;
    });

    if (!valid) {
      return new Error(
        `Invalid prop \`${propName}\` passed to \`${componentName}\`. Validation failed.`
      );
    }
  };
}

PercentageStat.defaultProps = {
  label: "Class 0",
  score: 0,
  total: 1,
};

PercentageStat.propTypes = {
  label: PropTypes.string.isRequired,
  score: validatedType(isNumeric),
  total: validatedType(isNumeric, isNonZero),
};

export default PercentageStat;
