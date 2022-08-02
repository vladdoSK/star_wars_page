import React, { useState } from "react";
import './Character.css';
import state from "../../state/state";
import Modal from "../Modal/Modal";

const Character = (props) => {

    const [isOpenModal, setIsOpenModal] = useState(false);


    let path;
    let character = props.character.split("/");


    if (character[0] == "Luke Skywalker") {
        path = state.luke;
    }
    if (character[0] == "C-3PO") {
        path = state.C_3PO;
    }
    if (character[0] == "R2-D2") {
        path = state.R2_D2;
    }
    if (character[0] == "Darth Vader") {
        path = state.Darth_Vader;
    }
    if (character[0] == "Leia Organa") {
        path = state.Leia_Organa;
    }
    if (character[0] == "Owen Lars") {
        path = state.Owen_Lars;
    }
    if (character[0] == "Beru Whitesun lars") {
        path = state.Beru_Whitesun;
    }
    if (character[0] == "R5-D4") {
        path = state.R5_D4;
    }
    if (character[0] == "Biggs Darklighter") {
        path = state.Biggs_Darklighter;
    }
    if (character[0] == "Obi-Wan Kenobi") {
        path = state.Obi_Wan;
    }
    //-------------------PAGE 2-----------------
    if (character[0] == "Anakin Skywalker") {
        path = state.Anakin_Skywalker;
    }
    if (character[0] == "Wilhuff Tarkin") {
        path = state.Wilhuff_Tarkin;
    }
    if (character[0] == "Chewbacca") {
        path = state.Chewbacca;
    }
    if (character[0] == "Han Solo") {
        path = state.Han_Solo;
    }
    if (character[0] == "Greedo") {
        path = state.Greedo;
    }
    if (character[0] == "Jabba Desilijic Tiure") {
        path = state.Jabba_Desilijic_Tiure;
    }
    if (character[0] == "Wedge Antilles") {
        path = state.Wedge_Antilles;
    }
    if (character[0] == "Jek Tono Porkins") {
        path = state.Jek_Tono_Porkins;
    }
    if (character[0] == "Yoda") {
        path = state.Yoda;
    }
    if (character[0] == "Palpatine") {
        path = state.Palpatine;
    }

    //-------------------PAGE 3-----------------
    if (character[0] == "Boba Fett") {
        path = state.Boba_Fett;
    }
    if (character[0] == "IG-88") {
        path = state.IG_88;
    }
    if (character[0] == "Bossk") {
        path = state.Bossk;
    }
    if (character[0] == "Lando Calrissian") {
        path = state.Lando_Calrissian;
    }
    if (character[0] == "Lobot") {
        path = state.Lobot;
    }
    if (character[0] == "Ackbar") {
        path = state.Ackbar;
    }
    if (character[0] == "Mon Mothma") {
        path = state.Mon_Mothma;
    }
    if (character[0] == "Arvel Crynyd") {
        path = state.Arvel_Crynyd;
    }
    if (character[0] == "Wicket Systri Warrick") {
        path = state.Wicket_Systri_Warrick;
    }
    if (character[0] == "Nien Nunb") {
        path = state.Nien_Nunb;
    }


    const openIMG = () => {
        setIsOpenModal(true);
    }

    return (
        <div className="blockChar">
            <div className="character" >
                <img className="img_char" src={path} alt="photo" onClick={openIMG} />
                <div className="sub_photo">{character[0]}</div>
            </div>

            <Modal setIsOpenModal={setIsOpenModal} 
            isOpenModal={isOpenModal} 
            character={props.character}
            path={path}
            
            />
        </div>
    );
}

export default Character;