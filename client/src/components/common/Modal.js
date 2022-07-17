import React from "react";
import { ModalBackdrop, ModalView } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ open, closeHandler, children }) {
  return (
    <ModalBackdrop open={open}>
      <ModalView>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="close"
          size="3x"
          onClick={closeHandler}
        />
        {children}
      </ModalView>
    </ModalBackdrop>
  );
}

export default Modal;
