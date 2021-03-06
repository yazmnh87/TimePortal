import React from "react";
import style from "styled-components";
import { useStateValue } from '../context/context'



export const ModalContainer = style.div`
  display: ${props => !props.visible ? 'none' : 'block'}; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4); 
`;
export const ModalContent = style.div`
border-radius: 5px;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
`;

export const Modal = () => {
  const [{modalVisible}, dispatch] = useStateValue()
  return <ModalContainer visible={modalVisible}>
      <ModalContent>
          <div>
              <label>Project Name</label>
              <input />
          </div>
      </ModalContent>
  </ModalContainer>;
};
