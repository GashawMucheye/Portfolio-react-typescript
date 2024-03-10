import { FC } from 'react';
import './About.css';
const About: FC = () => {
  return (
    <div className="about_page">
      <section>
        <div id="img_div">
          <img
            src="https://plus.unsplash.com/premium_photo-1661768664580-b47eb9433c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZ1bGwlMjBzdGFjayUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="pic1"
          />
        </div>
        <div>
          <h3>
            About
            <span>Me</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            asperiores! Rerum accusamus fugit commodi optio quo magni deserunt
            suscipit dolorem enim sint, delectus, dolore voluptatum sit amet
            esse. Quia exercitationem possimus ea? Reiciendis, dolorem incidunt
            soluta facilis voluptatibus totam iure repudiandae amet, quisquam,
            nostrum placeat?
          </p>
          <div>
            <button id="id_resume" className="btn">
              DownLoad CV
            </button>
            <button className="btn">Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
