import React from 'react'

const Header = ({title}) =>{
    return(
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">Este proyecto ilustra a los personajes de la famosa serie Rick and Morty</p>
                </div>
            </div>
        </header>
    );
}
export default Header