import React from 'react';
import '../Pages/Card_Expertise.css';

const Expertise = (props) => {

    return (
        <div className='Card_Main_Protfolio flex w-full bg-white mb-24 mt-24 rounded-xl '>
            <div className='Card_Card_main'>
                <div className='Card_Expertise_title text-3xl w-3/5'>
                    <p>{props.title}</p>
                </div>
                <div className='Card_Expertise_sentence text-lg w-11/12'>
                    <p>{props.sentence}</p>
                </div>
            </div>
        </div>
    );
};

export default Expertise;

