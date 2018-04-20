import React from "react";
import PropTypes from "prop-types";
import { darken } from "polished";
import BaseBtn from "./../../internalComponents/BtnBase";

const Btn1 = BaseBtn.extend`
  color: black;
  background: ${darken(0.1, "#fff")};
  font-weight: 100;

  svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  rect {
    fill: none;
    stroke: ${props => props.borderStroke};
    stroke-width: 3;
    stroke-dasharray: 422, 0;
  }

  &:hover {
    background: white;
    font-weight: 900;
    letter-spacing: 1px;

    & svg rect {
      stroke-width: 6;
      stroke-dasharray: 15, 310;
      stroke-dashoffset: 48;
      transition: all 2.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

class Button extends React.Component {
  handleHref = () => {};
  render() {
    const { children } = this.props;
    return (
      <Btn1 {...this.props}>
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        {children}
      </Btn1>
    );
  }
}

Button.defaultProps = {
  borderStroke: "red"
};

Button.propTypes = {
  borderStroke: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;