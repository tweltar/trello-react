import React, { useState } from 'react';
import './CardAction.css';
import Axios from 'axios';

//style="top: ${top}px; left: ${left}px;"
const CardAction = ({ setShowModal, cardId, cardTitle, setCardTitle, updateCardTitle, rect }) => {

    return (
        <div className="card-editor-modal">
            <div className="card-editor" style={{top: rect[0]+'px', left: rect[1]+'px'}}>
                <form className="card-editor-col1" onSubmit={updateCardTitle}>
                    <input value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} />
                    <div>
                        <a href="#">Save</a>
                        <i className="fas fa-plus closeCardEdit"></i>
                    </div>
                </form>
                <div className="card-editor-col2">
                    <a href="#"><i className="fas fa-tag"></i>Edit Labels</a>
                    <a href="#"><i className="far fa-user card-option-icon"></i>Change Members</a>
                    <a href="#"><i className="fas fa-arrow-right card-option-icon"></i>Move</a>
                    <a href="#"><i className="far fa-copy card-option-icon"></i>Copy</a>
                    <a href="#"><i className="far fa-clock card-option-icon"></i>Change Due Date</a>
                    <a href="#"><i className="fas fa-archive card-option-icon"></i>Archive</a>
                    <a href="#"><i className="far fa-trash-alt card-option-icon"></i>Delete</a>
                </div>
            </div>
        </div>
    );
};

export default CardAction;