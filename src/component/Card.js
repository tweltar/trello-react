import React from 'react';
import './Card.css';
import { CardModalConsumer } from './cardModalContext';

const Card = ({ card, setShowModal, setCardTitle, setRect }) => {

    const {id, title, description, checklists, accounts, labels} = card;
    
    return (
        <CardModalConsumer>
            {
                ({ShowCardModalFunction, CardIdFunction}) => {
                    return (
                        <div className="card-container" onClick={() => {
                            ShowCardModalFunction(true);
                            CardIdFunction(id);
                            console.log(ShowCardModalFunction + id);
                        }}>
                            <div className="card">
                                <div className="label-bar">
                                    { labels && labels.map(label => <div key={label.id} className="label-div" style={{backgroundColor: label.color}}></div>) }
                                </div>
                                <p>{title}</p>
                                <div className="card-details">
                                    <div className="checkListDesc">
                                        {description && <i className="fas fa-align-justify"></i>}
                                        {checklists && <i className="far fa-check-square"></i>}
                                    </div>
                                    <div className="cardmembers">
                                        { accounts && accounts.map(acc => {
                                            var nameArr = acc.name.trim().split(" ");
                                            return <div  key={acc.username} className="cardmem"><p>{nameArr[0].charAt(0)}{nameArr[nameArr.length -1].charAt(0)}</p></div>
                                        }) }
                                    </div>
                                </div>
                            </div>
                            <i className="far fa-edit" onClick={(e) => {
                                e.stopPropagation();
                                setShowModal(true);
                                setCardTitle(title);
                                const domRect = e.target.parentNode.childNodes[0].getBoundingClientRect();
                                setRect([domRect.top, domRect.left])
                            }}></i>
                        </div>
                    )
                    
                }
            }
        </CardModalConsumer>
    );  
}

export default Card;