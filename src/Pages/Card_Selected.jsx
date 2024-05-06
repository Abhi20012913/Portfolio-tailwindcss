import React, { useState } from 'react';
import './Card_Selected.css';
import { FiPlus } from "react-icons/fi";

const Selected = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div
                className='Card_Main_Selected'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='Card_main_image_selected'>
                    <img className='gallerys' src={props.image} alt='gallery1' />
                </div>

                {isHovered && (
                    <div className='Card_Main_Selected_overlay'>
                        <div onClick={handleClick}>
                            <FiPlus />
                        </div>
                    </div>
                )}
            </div>
            {showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={handleCloseModal}>&times;</span>
                        <img className='modal-image' src={props.image} alt='gallery1' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Selected;
