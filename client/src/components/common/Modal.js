import React from "react";
import { ModalBackdrop, ModalView } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ open, closeHandler, children }) {
  return (
    <ModalBackdrop open={open}>
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="close"
        size="3x"
        onClick={closeHandler}
        style={{ color: "black", marginBottom: "10px" }}
      />
      <ModalView>{children}</ModalView>
    </ModalBackdrop>
  );
}

export default Modal;
