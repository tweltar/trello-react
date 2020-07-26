import React, { useState, useEffect } from 'react';
import './CardModal.css';
import Axios from 'axios';

const CardModal = ({cardId, cardTitle, setCardTitle, updateCardTitle}) => {

    const [card, setCard] = useState([]);
    const [description, setDescription] = useState(card.description);
    const [comment, setComment] = useState();
    
    const fetchCard = async () => {
        try {
            const res = await Axios.get('/cards/' + cardId);
            setCard(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCard();
    }, []);

    return ( 
        <div>
            {
                card &&     
        <div className="card-bg">
            <div className="card-popup">
                <div className="card-header">
                    <i className="far fa-credit-card card-icon"></i>
                    <form className="card-title-bar" onSubmit={updateCardTitle}>
                        <input type="text" className="card-title" value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} />
                        <p>in list <a href="#" style={{textDecoration: "underline", fontSize: "small"}}>{ card.list && card.list.title}</a></p>
                    </form>
                </div>
                <div className="card-row">
                    <div className="card-col">
                        <div className="addtoCard">
                            {
                                card.accounts && card.accounts.map(acc => {
                                    var nameArr = acc.name.trim().split(" ");
                                    return <div key={acc.username} className="cardmem"><p>{nameArr[0].charAt(0)}{nameArr[nameArr.length -1].charAt(0)}</p></div>
                                })
                            }
                            {
                                card.labels && <div className="labels">
                                    <h4>Labels</h4>
                                    <div className="labels-body">
                                        {
                                            card.labels.map(label => {
                                                return <div className="label" style={{backgroundColor: label.color}}><p>{label.name}</p></div>
                                            })
                                        }
                                        <a href="#"><i class="fas fa-plus"></i></a>
                                    </div>
                                </div>
                            }
                            {/* <!-- <div className="due-date">
                                <h4>Due Date</h4>
                            </div> --> */}
                        </div>
                        <div className="description">
                            <div className="header">
                                <div>
                                    <i className="fas fa-align-justify card-icon"></i>
                                    <h3>Description</h3>    
                                </div>
                            </div>
                            <textarea placeholder="Add a more detailed description..." onChange={e => setDescription(e.target.value)}>{description}</textarea>
                            <div className="save-desc">
                                <a href="#">Save</a>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                        {
                            card.checklists && <div className="checklist">
                            <div>
                                <i className="fas fa-check-double card-icon" style={{marginTop: 40+'px'}}></i>
                                <div className="header">
                                    <h3 className="check-title" style={{cursor: "pointer"}}>{card.checklists}</h3>
                                    <div className="check-buttons">
                                        <a href="#" className="buttons">Hide completed items</a>
                                        <a href="#" className="buttons" style={{marginLeft: 10+'px'}}>Delete</a>
                                    </div>
                                    <textarea class="check-hide"></textarea>
                                </div>
                            </div>
                            <div className="save-check">
                                <a href="#">Save</a>
                                <i className="fas fa-times" id="check-close"></i>
                            </div>              
                            <div className="checklist-body">
                                {
                                    card.checklists.map(cl => {
                                        return (
                                            <div className="check">
                                                <input type="checkbox" />
                                                <label>{cl.item}</label>
                                            </div>
                                        );
                                    })
                                }
                                <a href="#" className="add-check buttons">Add an item</a>
                            </div>
                        </div>}
                        <div className="activity">
                            <div className="header">
                                <div>
                                    <i className="fas fa-list-ul card-icon"></i>
                                    <h3>Activity</h3>
                                </div>
                                <div>
                                    <a href="#" className="buttons">Hide Details</a>
                                </div>
                            </div>  
                            <div className="activity-body">
                                <div className="comment-section">
                                    <img src="././asserts/ttb.jpg" alt="profile" id="profile" />
                                    <textarea className="comment" placeholder="Write a comment..." onChange={e => setComment(e.target.value)}>{comment}</textarea>
                                </div>
                                <div className="activities"></div>
                            </div>
                        </div>
                    </div>  
                    <div className="card-col">
                        <h4>Add to card</h4>
                        <a href="#" className="buttons"><i className="far fa-user card-option-icon"></i>Members</a>
                        <a href="#" className="buttons" id="label"><i className="fas fa-tag card-option-icon"></i>Label</a>
                        <a href="#" className="buttons"><i className="fas fa-check-double card-option-icon"></i>Checklist</a>
                        <a href="#" className="buttons"><i className="far fa-clock card-option-icon"></i>Due Date</a>
                        <a href="#" className="buttons"><i className="fas fa-paperclip card-option-icon"></i>Attachment</a>
                        <a href="#" className="buttons"><i className="fas fa-window-maximize card-option-icon"></i>Cover</a>
                        <h4>Power-ups</h4>
                        <a href="#" className="buttons">Get Power-Ups</a>
                        <p style={{fontSize: "smaller", color: "rgba(25, 25, 25, 0.5)"}}>Get unlimited Power-Ups, plus much more.</p>
                        <a href="#" className="upgrade-team"><i className="fas fa-suitcase" style={{marginRight: 1+'px'}}></i>Upgrade Team</a>
                        <h4>Actions</h4>
                        <a href="#" className="buttons"><i className="fas fa-arrow-right card-option-icon"></i>Move</a>
                        <a href="#" className="buttons"><i className="far fa-copy card-option-icon"></i>Copy</a>
                        <a href="#" className="buttons"><i className="far fa-window-restore card-option-icon"></i>Make Template</a>
                        <a href="#" className="buttons"><i className="far fa-eye card-option-icon"></i>Watch<span><i className="fas fa-check-square"></i></span></a>
                        <div className="seperator"></div>
                        <a href="#" className="buttons"><i className="fas fa-archive card-option-icon"></i>Archieve</a>
                        <a href="#" className="buttons"><i className="fas fa-share-alt card-option-icon"></i>Share</a>
                    </div>
                </div>
                <div className="close">+</div>
            </div>
        </div>

            }
        </div>
        
        // card &&
    );
};

export default CardModal;