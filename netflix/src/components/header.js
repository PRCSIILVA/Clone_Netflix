import React from "react";
import './header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' :''}>
            <div className="header--logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png?20170904093427" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuario"/>
                </a>
            </div>
        </header>
    );
}