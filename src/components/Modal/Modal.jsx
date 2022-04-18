import React  from "react";
import {Backdrop, Content} from 'components/Modal/Modal.styled';

export const ModalWindow = (props) =>  {




    

    


        return (
            <>
                <Backdrop className="modal-window-back-drop">
                    <Content className="modal-window-content">{props.children}</Content>
                </Backdrop>
            </>
            
        )
    
}