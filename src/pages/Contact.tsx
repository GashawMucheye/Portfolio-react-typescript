import { FC, useRef, useState } from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';

import { FaFacebook, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
//
const Contact: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // 'service_yo6g5ym',
        import.meta.env.VITE_SERVICE_EMAILJS,
        // 'template_6qq73re',
        import.meta.env.VITE_TEMPLATE_EMAILJS,
        // form.current,
        // 'z2cH9INylXX9w6xyk'
        import.meta.env.VITE_APIKEY_EMAILJS
      )
      .then(
        (result) => {
          console.log(result.text);
          // toast.success('Message sent succcefully');
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail('');
    setName('');
    setMessage('');
    // setPhone('');
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <div className="input_class">
            <input
              type="text"
              name="user_name"
              id="text"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="input_class">
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="input_class">
            <input
              type="text"
              name="text"
              id="user_phone"
              placeholder="Enter Your Celephone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div>
            <textarea
              placeholder="Type Your Short Message"
              // type="text"
              name="message"
              id="textarea"
              cols={25}
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
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
