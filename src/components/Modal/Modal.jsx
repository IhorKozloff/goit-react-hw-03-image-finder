import React  from "react";
import {Backdrop, Content, ModalCloseBtn} from 'components/Modal/Modal.styled';

export const ModalWindow = ({children, onCloseClick}) =>  {

        return (
            <>
                <Backdrop className="modal-window-back-drop">
                <ModalCloseBtn 
                    type="button" 
                    className="modal-close-btn" 
                    onClick={() => {
                                onCloseClick(false)
                            }}>X
                </ModalCloseBtn>
                    <Content className="modal-window-content">{children}</Content>
                </Backdrop>
            </>
            
        )
    
}