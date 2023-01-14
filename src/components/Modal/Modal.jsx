import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {

    componentDidMount() {
    window.addEventListener('keydown', this.handleEsc) 
  }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEsc);
    }

    handleEsc = (e) => {
        if (e.code === "Escape") {
            this.props.toggleModal();
        }
    }

    handleBackdrop = (e) => {
        if (e.currentTarget === e.target) {
            this.props.toggleModal();
        }
    }
    
    render() {
        return createPortal(<div className="overlay" onClick={this.handleBackdrop}>
            <div className="modal">
                <img src={this.props.src} alt="" />
            </div>
        </div>, modalRoot);
    }
}