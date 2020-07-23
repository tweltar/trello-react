import React, { useState, useEffect, useRef } from 'react';
import './AddAnotherList.css';
import Axios from 'axios';

const AddAnotherList = ({addNewList}) => {

    const [isDisplaying, setIsDisplaying] =  useState(false);
    const [listTitle, setListTitle] = useState("");

    const myRef = useRef(null);

    const closeAddAnotherList = (e) => {
        
        if (myRef.current.contains(e.target)) {
            console.log('contains');
            return;
        } else {
            setIsDisplaying(false);
            console.log('not contain');
        }
    };

    const clickAddNewList = async (e) => {
        e.preventDefault();
        
        if (listTitle !== "") {
            try {
                const list = await Axios.post('/lists', {
                    title: listTitle,
                    position: 1,
                    status: 1
                });
                addNewList(list.data);
            } catch (error) {
                console.log(error);
            }
        }  
    };

    useEffect(() => {
        isDisplaying ?
            document.addEventListener('click', closeAddAnotherList)
        :
            document.removeEventListener('click', closeAddAnotherList);
        return () => {document.removeEventListener('click', closeAddAnotherList)}
    }, [isDisplaying]);

    return (
        isDisplaying ? 
        <div className="last-list" ref={myRef}>
            <form className="new-list" onSubmit={(e) => {
                e.stopPropagation();
                clickAddNewList(e);
            }}>
                <input autoFocus type="text" placeholder="Enter list title..." id="list-title" onChange={(e) => {setListTitle(e.target.value);}} />
                <div>
                    <a href="#" onClick={(e) => {
                        e.stopPropagation()
                        clickAddNewList(e);
                    }}>Add List</a>
                    <i onClick={() => {setIsDisplaying(false);}} className="fas fa-plus"></i>
                </div>
            </form>
        </div> 
        : 
        <div className="last-list" onClick={() => {setIsDisplaying(true);}}>
            <div className="add-another">
                <i className="fas fa-plus" style={{margin: 0+'px'+ 5+'px'}}></i>
                <p>Add another list</p>
            </div>
        </div>
    );
}

export default AddAnotherList;