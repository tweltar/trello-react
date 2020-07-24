import React, {useState, useEffect} from 'react';
import './Wrapper.css';
import Axios from 'axios';
import List from './List';
import AddAnotherList from './AddAnotherList';

const Wrapper = () => {
    const [lists, setLists] = useState([]);

    const fetchLists = async () => {
        try {
            const res = await Axios.get("/lists");
            setLists(res.data);
        } catch (error) {
            setLists([]);
            console.log(error);
        }
    };

    const addNewList = list => {
        setLists(prevList => setLists([...prevList, list]));
    }

    useEffect(() => {
        fetchLists();
    }, []);

    return (
        <section className="content">
            {
                lists && lists.map(l => l.status !== 2 && <List key={l.id} list={l} setLists={setLists} /> )
            }
            <AddAnotherList addNewList={addNewList} />
        </section>
    );
};

export default Wrapper;