import React from 'react';
import '../Pages/Card_Experience.css';
import { FaExternalLinkAlt } from "react-icons/fa";
const Experience = (props) => {

    return (
        <div className='Card_Main_Experience pt-8'>
            <div className='flex flex-col justify-between m-auto w-11/12'>
                <div className='Card_experience '>
                    <p style={{ 'margin': '0px', 'paddingBottom': '5%' }}>{props.title}</p>
                </div>
                <div className='Card_Design flex flex-row justify-between pb-4'>
                    <div className='flex flex-col'>
                        <div className='Card_Design_web_Experience text-3xl m-0'>
                            <p style={{ 'margin': '0px'  }} >{props.description}</p>
                        </div>
                        <div className='Card_Design_date m-0 text-base'>
                            <p>{props.date}</p>
                        </div>
                    </div>
                    <div className='Card_Extrnal flex justify-center items-center'>
                        <p><FaExternalLinkAlt /></p>
                    </div>
                </div>
              
                <div className='Card_Design flex flex-row justify-between pb-4'>
                    <div className='flex flex-col '>
                        <div className='Card_Design_web_Experience text-3xl m-0'>
                            <p style={{ 'margin': '0px' , 'paddingTop':'10%'}} >{props.description1}</p>
                        </div>
                        <div className='Card_Design_date m-0 text-base'>
                            <p>{props.date1}</p>
                        </div>
                    </div>
                    <div className='Card_Extrnal pt-8'>
                        <p><FaExternalLinkAlt /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

