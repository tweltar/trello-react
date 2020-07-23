import React from 'react';
import './NavTwo.css';

const NavTwo = () => {
    return (
        <section className="board-header">
            <div className="board-details-one">
                <p className="board-title">Trello</p>
                <a href="#" className="detail"><i className="far fa-star" style={{margin: 0}}></i></a>
                {/* <p>&#124;</p> */}
                <a href="#" className="detail"><p>FE</p><p className="free">Free</p></a>
                <a href="#" className="detail"><i className="fas fa-user-friends"></i><p>Team Visible</p></a>
                <a href="#" className="boardmembers"></a>
                <a href="#" className="detail">Invite</a>
            </div>
            <div className="board-details-two">
                <a href="#" className="detail"><i className="fas fa-concierge-bell"></i><p>Butler</p></a>
                <a href="#" className="detail"><i className="fab fa-google-drive"></i><p>Google Drive</p></a>
                <a href="#" className="detail"><i className="fas fa-ellipsis-h"></i><p>Show Menu</p></a>
            </div>
        </section>
    )
}

export default NavTwo;