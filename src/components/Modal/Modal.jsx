import React, { Component }  from "react";

export class ModalWindow extends Component  {

state = {
    modalActive: false,
}



    componentDidUpdate (prevProps) {
        if (prevProps.modalContent !== this.props.modalContent) {
            this.setState({modalActive: true})
        }

    }


    render () {


        return (
            <>
                {this.state.modalActive && <div>Модалка по ссылке {this.props.modalContent}</div>}
            </>
            
        )
    }
}