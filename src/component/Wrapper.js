import React, {useState, useEffect} from 'react';
import './Wrapper.css';
import Axios from 'axios';
import List from './List';
import AddAnotherList from './AddAnotherList';
import CardAction from './CardAction';
import { CardModalProvider } from './cardModalContext';
import CardModal from './CardModal';

const Wrapper = () => {
    const [lists, setLists] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [cardTitle, setCardTitle] = useState();
    const [rect, setRect] = useState([0, 0]);
    const [showCardModal, setShowCardModal] = useState(false);
    const [cardId, setCardId] = useState('1');

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

    const updateCardTitle = async (e) => {
        e.preventDefault();
        try {
            const cardRes = await Axios.get('/cards/' + cardId);
            const card = cardRes.data;
            const res = await Axios.put('/cards/' + card.list.id + '/' + cardId, {
                title: cardTitle,
                description: card.description
            })
            setCardTitle(res.data.title);
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLists();
    }, []);

    return (
        <section className="content">
            {
                lists && lists.map(l => l.status !== 2 && 
                    <CardModalProvider value={{ ShowCardModalFunction: setShowCardModal, CardIdFunction: setCardId, Id: cardId }} key={l.id}>
                        <List list={l} setLists={setLists} setShowModal={setShowModal} setCardTitle={setCardTitle} setRect={setRect} />
                    </CardModalProvider> )
            }
            <AddAnotherList addNewList={addNewList} />
            {
                showModal && <CardAction setShowModal={setShowModal} cardId={cardId} cardTitle={cardTitle} updateCardTitle={updateCardTitle} setCardTitle={setCardTitle} rect={rect} />
            }
            {
                
                showCardModal && <CardModal cardId={cardId} cardTitle={cardTitle} setCardTitle={setCardTitle} updateCardTitle={updateCardTitle} />
            }
        </section>
    );
};

export default Wrapper;