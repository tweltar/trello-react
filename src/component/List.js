import React, { useState, useEffect } from 'react';
import Card from './Card';
import './List.css';
import ListAction from './ListAction';
import Axios from 'axios';

const List = ({ list, setLists }) => {

    const [listTitle, setListTitle] = useState(list.title);
    const [isListActionOpen, setIsListActionOpen] = useState(false);

    const updateList = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const res = await Axios.put('/lists/' + list.id, {
                title: listTitle
            });
            const updatedList = res.data;
            setLists(prevLists => {
                const newLists = [...prevLists];
                const listIndex = newLists.findIndex(l => l.id === updatedList.id);
                newLists.splice(listIndex, 1, updatedList);
                setLists(newLists);
            });
        } catch (error) {
            console.log(error);
        }        
    }

    const archieveList = async () => {
        try {
            const archievedList = await Axios.put('/lists/change/list/' + list.id + '/status/' + 2);
            setIsListActionOpen(false);
            setLists(prevLists => setLists(prevLists.filter(l => l.id !== list.id)));
        } catch (error) {
            console.log(error);
        }
    };

    const deleteList = async () => {
        try {
            await Axios.delete('/lists/' + list.id);
            setIsListActionOpen(false);
            setLists(prevLists => setLists(prevLists.filter(l => l.id !== list.id)));
        } catch (error) {
            console.log(error);
        }
    }

    // className={`titleList${list.id}`}
    return (
        <>
            <div className="list">
                <form className="list-title" onSubmit={updateList}>
                    <input type="text" value={listTitle} onChange={ e => setListTitle(e.target.value)} />
                    <a href="#" onClick={() => {setIsListActionOpen(!isListActionOpen);}}><i className="fas fa-ellipsis-h"></i></a>
                </form>
                <div className="cards">{ list.cards && list.cards.map(c => <Card key={c.id} card={c} />) }</div>
                <div className="footer">
                    <div className="add-another">
                        <i className="fas fa-plus" style={{margin: 0+'px'+ 5+'px'}}></i>
                        <p>{ list.cards && list.cards.length !== 0 ? "Add another card" : "Add a card" }</p>
                    </div>
                    <i className="far fa-window-restore template"></i>
                </div>
                {
                    isListActionOpen ? 
                        <ListAction 
                            isListActionOpen={isListActionOpen} 
                            setIsListActionOpen={setIsListActionOpen}
                            archieveList={archieveList}
                            deleteList={deleteList} 
                        /> 
                    : <div></div>
                }
            </div>
        </>
    );
};

export default List;