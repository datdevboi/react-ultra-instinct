import React from "react";
import styled from "styled-components";
import is from "styled-is";

// TODO ADD TRIGGER PROP TO RENDER
const ModalExample = styled.div`
  display: none; /* Hidden by default */
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 25; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${is("open")`display: flex`};
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 15px 15px;
  border: 1px solid #888;
  width: auto;
  position: absolute;
  height: auto;
`;

class ModalContainer extends React.Component {
  handleCloseClick = e => {
    e.preventDefault();
    if (e.target.id !== "content") {
      this.props.handleClose();
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleCloseClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleCloseClick);
  }
  render() {
    return (
      <ModalExample open={this.props.open}>
        {" "}
        {this.props.children}{" "}
      </ModalExample>
    );
  }
}

class Modal extends React.Component {
  static Header = props => <h1>{props.children}</h1>;

  render() {
    const triggerChild = React.Children.map(this.props.trigger, child => {
      return React.cloneElement(child, {
        onClick: this.props.handleOpenModal
      });
    });
    return (
      <div>
        {" "}
        {this.props.open && (
          <ModalContainer
            open={this.props.open}
            handleClose={this.props.handleCloseModal}
          >
            <ModalContent id="content">{this.props.children}</ModalContent>{" "}
          </ModalContainer>
        )}
        {triggerChild}{" "}
      </div>
    );
  }
}

export default Modal;
