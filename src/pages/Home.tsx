import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
// import About from './About';

// import Contact from './Contact';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
const Home: FC = () => {
  const navgate = useNavigate();

  const handleNavgateAbout = (): void => {
    navgate('./About');
  };
  return (
    <div className="home_page">
      <section className="home_class">
        <div className="home">
          <h2>
            Hello, <span>I'm</span>
          </h2>
          <h1>
            <span>Gashaw</span> Mucheye
          </h1>
          <h2>
            {/* <span>Full</span> Stack <span>Developer</span> */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Full Stack Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Mern Stack Developer',
                1000,
                'React Native Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, rerum fuga Lorem ipsum,
            dolor sit amet consectetur adipisicing
          </p>
          <div id="home_icons">
            <FaLinkedin id="linkdin_icon" />
            <FaFacebook id="face_icon" />
            <FaWhatsapp className="whatsup_icon" />
          </div>
          <button className="home_btn" onClick={handleNavgateAbout}>
            About Me
          </button>
        </div>

        <img
          // src="https://plus.unsplash.com/premium_photo-1661768664580-b47eb9433c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZ1bGwlMjBzdGFjayUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
          src="src/images/senay.jpg"
          alt="my_img"
        />
      </section>
      {/* <section className="2">
        <About />
      </section> */}
      {/* <section className="3">
        <Contact />
      </section>
      <section className="4">projects</section>
      <section className="5">services</section>
      <section className="5">skills</section> */}
    </div>
  );
};

export default Home;
