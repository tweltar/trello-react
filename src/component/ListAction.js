import React, { useEffect, useRef } from 'react';
import './ListAction.css';

const ListAction = ({ isListActionOpen, setIsListActionOpen, archieveList, deleteList }) => {

    const myRef = useRef(null);

    const clickOutsideListAction = (e) => {
        if (!myRef.current.contains(e.target)) {
            setIsListActionOpen(false);
        }
    };

    useEffect(() => {
        isListActionOpen ? 
            document.addEventListener('click', clickOutsideListAction)
        :
            document.removeEventListener('click', clickOutsideListAction);
        return () => {
            document.removeEventListener('click', clickOutsideListAction);
        }
    }, [clickOutsideListAction, isListActionOpen]);

    return (
        <div className="update-List" ref={myRef}>
            <div className="p-div">
                <p>List Actions</p>
                <i className="fas fa-plus"></i>
            </div>
            <div className="list-separator"></div>
            <a href="#">Add Card...</a>
            <a href="#">Copy List...</a>
            <a href="#">Move List...</a>
            <a href="#">Watch</a>
            <div className="list-separator"></div>
            <a href="#">Sort By...</a>
            <div className="list-separator"></div>
            <a href="#">Move All Cards in This List...</a>
            <a href="#">Archive All Cards in This List...</a>
            <div className="list-separator"></div>
            <a href="#" onClick={archieveList}>Archive This List...</a>
            <a href="#" onClick={deleteList}>Delete This List...</a>
        </div>
    );
};

export default ListAction;
