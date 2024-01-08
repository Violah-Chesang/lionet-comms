import React from 'react';
import './contact.css';
// import icon from "../../../../src/images/contact-avartar.svg";

export default function Contact() {
  return (
    <div className='contact' id='contact'>
        <div className='contact-cover'>
            <div className='contact-heading'>
                <h1 className='contact-title'>We would like to hear from you!</h1>
            </div>
            <div className='contact-row'>
                <div className='contact-form-col'>
                    <div className='lionet-form'>
                        <label htmlFor='name'>Name: </label><br />
                        <input type='text' id='name' name='name' placeholder='John Doe'/> <br />

                        <label htmlFor='email'>Email: </label><br />
                        <input type='email' id='email' name='email' placeholder='johndoe@email.com'/> <br />

                        <label htmlFor='comment'>Comment/Inquiry: </label><br/>
                        <textarea placeholder='Enter your comment or inquiry'></textarea><br />

                        <button>Submit</button>
                    </div>
                </div>

                <div className='contact-form-col'>
                    <div className='contact-description-info'>
                        <div className='contact-form-desc-cover'>
                            <div className='contact-details-info'>
                                {/* <div className='contact-icon'><img src={icon} alt='mobile user'/></div> */}
                                <h3 className='contact-col-title'>Company Name</h3>
                                <p className='contact-col-desc'>Lionet Communications Limited</p>
                            </div>

                            <div className='contact-details-info'>
                                <h3 className='contact-col-title'>Email</h3>
                                <p className='contact-col-desc'>info@lionetcommunications.co.ke</p>
                            </div>

                            <div className='contact-details-info'>
                                <h3 className='contact-col-title'>Phone Number</h3>
                                <p className='contact-col-desc'>+254 707 445162</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='contact-form'>

            </div>
            <div className='contact-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.790949017234!2d36.75357007496564!3d-1.3002716986873792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTgnMDEuMCJTIDM2wrA0NScyMi4xIkU!5e0!3m2!1sen!2ske!4v1704296063169!5m2!1sen!2ske" width="1080" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='lionet'></iframe>
             </div> */}

        </div>
    </div>
  )
}
