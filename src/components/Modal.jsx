import React, { useEffect } from "react";
import styled from "styled-components";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useState } from "react";

const ModalContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  width: 380px;
  height: 870px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease;
  z-index: 2;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 200px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalMain = styled.div`
  width: 100%;
  height: 570px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled(MdOutlineKeyboardDoubleArrowLeft)`
  position: absolute;
  top: 50%;
  right: 0;
  font-size: 42px;
  cursor: pointer;
  transform: translate(-50%, -50%);
`;

const ModalFooter = styled.div`
  width: 100%;
  height: 100px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = ({ onClose, isOpen }) => {
  const [plantName, setPlantName] = useState("");

  useEffect(() => {
    const selectedPlant = localStorage.getItem("selectedPlant");
    setPlantName(selectedPlant || "");
  }, []);

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalHeader>
        <h2>{plantName}</h2>
      </ModalHeader>

      <ModalMain>
        <h3>식물 설명</h3>
      </ModalMain>

      <ModalFooter>
        <h3>푸터 부분</h3>
      </ModalFooter>

      <CloseButton onClick={onClose} />
    </ModalContainer>
  );
};

export default Modal;
