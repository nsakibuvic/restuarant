import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const portalElements = document.getElementById("overlays");

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onCloseM} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElements
      )}
    </Fragment>
  );
};

export default Modal;
