import React from "react";
import './Modal.css'

const Modal = (props) => {

    const closeModal = () =>{
        props.setIsOpenModal(false);
    }
    
    let personage = props.character.split("/");
    let starship;
    if(personage[4] == ''){
        starship = 'none';
    }
    else{
        starship = personage[4];
    }

    return (
        <div className={props.isOpenModal ? "modal active" : "modal"} onClick={closeModal}>
            <div className="modal_content">
                <img className="modal_img" src={props.path} alt='photo'/>
                <div className="description">
                    <div className="char_descrip" ><span>Name: </span>{personage[0]}</div>
                    <div className="char_descrip" ><span>Species: </span>{personage[1]}</div>
                    <div className="char_descrip" ><span>Homeworld: </span>{personage[2]}</div>
                    <div className="char_descrip" ><span>Title episode: </span>{personage[3]}</div>
                    <div className="char_descrip" ><span>Spaceships: </span>{starship}</div>
                </div>
                
            </div>
        </div>

    );
}

export default Modal;