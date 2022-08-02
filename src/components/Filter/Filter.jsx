import React from "react";
import './Filter.css'


const Filter = (props) => {

    let option = ['Name', 'Homeworld', "Species", "Episodes", "Spaceships"];

    return (
        <div className="filter_block">
            <div className="home"><span>Home</span>/Characters</div>
            <div className='filter'>
            <input 
                type="text"
                placeholder='Search'
                className='search_input'
                onChange={(event) => props.setValue(event.target.value)} />

            <div className="select">
                <div className={props.isActiveSelector ? "arrow active" : "arrow"} onClick={props.setSelector}>
                    <div className="arrow_part"></div>
                </div>
                Filter
                <div className={props.isActiveSelector ? "block_option active" : "block_option"}>
                    {option.map((currency => (<div className='option' onClick={ev => props.settingDirect(currency)}>{currency}</div>)))}
                </div>

            </div>
        </div>
        </div>

    );
}

export default Filter;