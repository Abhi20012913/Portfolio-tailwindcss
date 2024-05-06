import React, { useState } from 'react';
import '../Home/Home.css';
import Card_Navbar from '../Card_Navbar.jsx';
import Footer from '../Card_footer.jsx';
import './Contact.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { message } from 'antd';

const Contact = () => {

    const [Message, setMessage] = useState("");
    const [emailID, setEmailID] = useState("");
    const [name, setName] = useState("");
   const[Subject, setSubject] = useState("");
    function onchangeName(e) {
        let val = e.target.value;
        setName(val);
    }

    function onchangeEmail(e) {
        let val = e.target.value;
        setEmailID(val);
    }

    function onchangeMessage(e) {
        let val = e.target.value;
        setMessage(val);

    }
    function onchangeSubject(e) {
        let val = e.target.value;
        setSubject(val);
    }
    
    function onchangesubmit(e) {
        let result ={
            'Name' : name,
            'EmailID': emailID,
            'Message': message,
            'Subject': Subject
        }
        console.log(result);
    }

    return (
        <div className='Home_start'>
            <Card_Navbar />
            <div className='my_protfolio' style={{ 'paddingBottom': '4%' }}>
                <p >Contact Us</p>
            </div>
            <div className='bg-white flex  flex-col justify-between' >
                <div className='w-11/12  mx-auto'>
                    <div className=' text-2xl Card_Contact_Get_in_Touch'>
                        <p>Get in Touch</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col justify-between'>
                            <div className='Card_Contact_textArea'>
                                <textarea className="border-2 border-solid border-gray-100 rounded-none pl-5 text-sm w-full p-1 " placeholder="Enter Message" rows={8} onChange={onchangeMessage} value={Message}></textarea>
                            </div>
                            <div className='flex flex-row mb-4'>
                                <div className='Card_contact_input1'>
                                    <input className='border-2 border-solid border-gray-100 rounded-none pl-5 text-sm w-full p-1 ' type="text" placeholder="Your Name" onChange={onchangeName} value={name} />

                                </div>
                                <div className='Card_contact_input2' >
                                    <input className='border-2 border-solid border-gray-100 rounded-none pl-5 text-sm w-full p-1 '  type="text" placeholder="Email" onChange={onchangeEmail} value={emailID} />

                                </div>
                            </div>
                            <div className='Card_Contact_Subject'>
                            <input className='border-2 border-solid border-gray-100 rounded-none pl-5 text-sm w-full p-1 ' type="text" placeholder="Subject" onChange={onchangeSubject} value={Subject}/>
                            </div>
                        </div>
                        <div className='Send_Contact11'>
                       <p onClick={onchangesubmit}> SEND</p>
                    </div>
                        <div className='Card_Contact_second'>
                         <div className='Card_Contact_second_home'>
                            <div className='Card_Contact_icone'>
                            <IoHomeOutline />
                            </div>
                            <div className='Card_Space_contact'>
                                <p className='Contact_address'>Banglore,India.</p>
                                <p className='Contact_pincode'>Btm layout, 560076</p>
                            </div>
                         </div>
                         <div className='Card_Contact_second_home'>
                         <div className='Card_Contact_icone'>
                            <FaTabletAlt /> 
                            </div>
                            <div  className='Card_Space_contact'>
                                <p className='Contact_address'>+91-7022960030</p>
                                <p className='Contact_pincode'>Mon to Fri 9am to 6pm</p>
                            </div>
                         </div>
                         <div className='Card_Contact_second_home'>
                         <div className='Card_Contact_icone'>
                         <MdOutlineMailOutline /> 
                            </div>
                            <div  className='Card_Space_contact'>
                                <p className='Contact_address'>Abhiram2913@gmail.com</p>
                                <p className='Contact_pincode'>Send us your query anytime!</p>
                            </div>
                         </div>
                        </div>
                    </div>
                    <div className='Send_Contact  p-2.5 px-8 py-3 pr-16  text-sm w-4 mb-24 cursor-pointer tracking-widest border-2 border-solid border-red-800'>
                       <p onClick={onchangesubmit}> SEND</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
