import { FC } from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
// s
const Contact: FC = () => {
  return (
    <main className="main_contact">
      <h2 id="contact_heading">
        Contact <span>Me</span>
      </h2>
      <div className="contact_screen">
        <section className="contact_info">
          <div style={{ marginBlock: '6em' }}>
            <h2>
              Fell Free {} <span>To Contact</span>
            </h2>
            <div>
              <h4>
                <FaPhone style={{ fontSize: '30px', color: 'green' }} />
                phone:+972545599401
              </h4>

              <h4>
                <MdEmail style={{ fontSize: '30px', color: '#f5f5f5' }} />
                Email:gashaw2533@gmail.com
              </h4>
            </div>
            <div className="contact_icons">
              <FaLinkedin id="linkdin_icon" />
              <FaFacebook id="face_icon" />
              <FaWhatsapp className="whatsup_icon" />
            </div>
          </div>
        </section>
        <form>
          <div className="input_class">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="input_class">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="input_class">
            <input
              type="text"
              name="text"
              id="phone"
              placeholder="Enter Your Celephone"
            />
          </div>
          <div>
            <textarea
              placeholder="Type Your Short Message"
              name="textarea"
              id="textarea"
              cols={25}
              rows={10}
            ></textarea>
          </div>
          <div>
            <button id="submit_btn">Send Message</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
