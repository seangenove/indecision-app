import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            <p className="author__subtitle">Developed by Sean Genove</p>
        </div>
    </div>
);

Header.defaultProps = {
    title: "Indecision"
}

export default Header;