import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
export default function Contact() {
  return (
    <section className="contact-wrapper">
        <div className="paddings innerWidth flexCenter contact-container">
            <div className=" flexColStart left-contact">
                <span className='orangeText'>Contact Us</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>we are here to help you with any difficulties and ambiguity</span>

                <div className="flexColStart contact">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>

                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+251235638</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>


                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>

                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>+251235638</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>


                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>

                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>+251235638</span>
                                </div>
                            </div>
                            <div className="flexCenter button"> Now</div>
                        </div>


                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>

                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video</span>
                                    <span className='secondaryText'>+251235638</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="right-contact">
                <div className='image-container'>
                <img src="./contact.jpg" alt="contact" />
                </div>
            </div>
        </div>
    </section>
  )
}
