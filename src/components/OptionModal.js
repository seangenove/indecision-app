import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        closeTimeoutMS={200}
        contentLabel="Selected option"
        ariaHideApp={false}
        onRequestClose={props.handleClearSelectedOption}
        className="modal"
    >
        <h3
            className="modal__title"
        >
            Selected Option
        </h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button
            className="button modal__button"
            onClick={props.handleClearSelectedOption}
        >
            Okay
        </button>
    </Modal>
);

export default OptionModal
