import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faPinterest,  faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Pages/Home/Home.css';


const Footer = () => {
const [emailID , setEmailID] = useState("");
const [ name , setName] = useState("");
const [ Subject , setSubject] = useState("");
const [ Message , setMessage] = useState("");

function onchangeName(e) {
    let val = e.target.value;
    setName(val);
}

function onchangeEmail(e) {
    let val = e.target.value;
    setEmailID(val);
}

function onchangeSubject(e) {
    let val = e.target.value;
    setSubject(val);
}

function onchangeMessage(e) {
    let val = e.target.value;
    setMessage(val);
    
}

function onChangeSend(e) {
    let result = {
      "Name" : name ,
      "Email ID": emailID,
      "Subject": Subject,
      "Message": Message
    }
    console.log(result);
  }


    return (
        <div className='Home_start '>
            <div className='Home_about_me w-auto h-auto m-auto justify-between flex-col flex '>
                <div className=' w-11/12 m-auto mt-10 '>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='text-white text-4xl w-3/5 md:text-white md:text-2xl md:w-full md:pb-8 '>
                            <p>Do you want to know more about me?</p>
                        </div>
                        <div className='Home_download w-1/5 text-center '>
                            <p style={{ 'margin': '0px', 'padding': '10px' }}>Download CV</p>
                        </div>
                    </div>
                    <div className='Home_con mt-10 mb-5'>
                        <p className='Home_Contact'>Contact Me</p>
                    </div>
                    <div className='flex  flex-col justify-between mb-10 md:flex-row'>
                        <input className='input' type="text" placeholder="Your Name" onChange={onchangeName}  value={name}/>
                        <input className='input' type="text" placeholder="Email" onChange={onchangeEmail} value={emailID}/>
                        <input className='input' type="text" placeholder="Subject" onChange={onchangeSubject} value={Subject}/>
                    </div>
                    <div className='flex w-full mt-3 mb-10'>
                        <textarea className="input1" placeholder="Message" rows={5} onChange={onchangeMessage} value={Message}></textarea>
                    </div>
                    <div className='Home_Send text-center text-xs p-4 mt-3 mb-8'>
                        <p onClick={onChangeSend} >Send Message</p>
                    </div>
                    <div className='flex flex-row justify-between m-auto mb-3'>
                        <div className='flex flex-row justify-between w-2/5 items-center text-center'>
                            <div className='icons flex w-12 h-10 text-lg justify-center items-center '>
                            <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div className='icons flex w-12 h-10 text-lg justify-center items-center'>
                            <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div className='icons flex w-12 h-10 text-lg justify-center items-center'>
                            <FontAwesomeIcon icon={faPinterest} />
                            </div>
                            <div className='icons flex w-12 h-10 text-lg justify-center items-center'>
                            <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                        <div>
                            <p className='Home_copyright text-white text-xs '>
                              copyright @2024 All rights reserved   
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
