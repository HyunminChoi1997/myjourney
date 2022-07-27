import React, { useState } from "react";
import { useSWRConfig } from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import CardModal from "./CardModal";
import { CreateCardButton } from "./styles";

function CardPost({ actionDetector, subject }) {
  const [showModal, setShowModal] = useState(false);

  const { cache } = useSWRConfig();
  const user = cache.get("sign");

  const modalOpenHandler = () => {
    if (user) {
      setShowModal(true);
    } else {
      return Swal.fire("Please Sign In", "로그인해주세요", "error");
    }
  };

  const closeHandler = () => {
    setShowModal(false);
  };

  return (
    <CreateCardButton>
      {showModal ? (
        <CardModal
          showModal={showModal}
          closeHandler={closeHandler}
          actionDetector={actionDetector}
          subject={subject}
        />
      ) : null}
      <span>New Flashcard</span>
      <FontAwesomeIcon
        className="postbutton"
        icon={faBook}
        size="5x"
        onClick={modalOpenHandler}
      />
    </CreateCardButton>
  );
}

export default CardPost;
