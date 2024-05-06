import React from 'react';
import '../Pages/Card_About.css';
import image from '../assets/myPhoto.jpg';

const About = (props) => {

    return (
        <div className='flex flex-col justify-between w-full h-full' id='About'>
            <div className='p-14 bg-white w-11/12'>

            </div>
            <div className='bg-white flex flex-row justify-between pb-24 p-4' >
                <div className='w-11/12 flex-col flex justify-between md:flex-row '>
                    <div className='flex flex-col w-4/5 ml-5'>
                        <div className='Card_About_title'>
                            <p style={{ 'margin': '0px' , 'color':'#670000' , 'fontSize':'41px' }}>{props.title}</p>
                        </div>
                        <div className=' md:w-5/6 text-sm text-justify'>
                            <p>Hello! I'm Abhiram, a passionate software engineer currently working at PMV Company. With a focus on front-end development, I am deeply involved in the Uber project, utilizing technologies like React.js to create engaging user interfaces and seamless experiences.<br /><br /><br />
                            At PMV Company, I contribute to the innovation and enhancement of the Uber project, leveraging my expertise in React.js to drive front-end development forward. I thrive in collaborative environments, where I can bring creative solutions to complex challenges.<br /><br /><br />
                            My journey into the world of technology began at Sri Chaitanya PU College, where I laid the foundation for my academic pursuits. I furthered my education by earning a degree in Electronics and Communication Engineering from KSSEM, honing my skills and preparing myself for the dynamic field of software engineering.<br /> <br /> <br/>
                            I'm always eager to connect with like-minded professionals, collaborate on exciting projects, or simply chat about the latest trends in technology. Feel free to reach out to me through the contact information provided below.</p>
                        </div>
                        <div className='flex flex-col m-auto w-11/12 mt-5 mb-5 md:flex-row '>
                            <div>
                            <p className='Card_mention text-5xl pr-20 m-0'>01 Years</p>
                            <p className='Card_mention1  ' >of experience</p>
                            </div>
                            <div>
                            <p className='Card_mention text-5xl pr-20 m-0'>Uber</p>
                            <p className='Card_mention1'>Project I was involved in</p>
                            </div>
                        </div>
                    </div>
                    <div style={{'height':'70%'}} className='Card_About_My_image'>
                        <img style={{'height':'100%'}} className='w-4/5 object-cover h-5/6' src={image} alt='My_img' />
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default About;

