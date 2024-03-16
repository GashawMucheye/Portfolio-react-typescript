import { FC } from 'react';
import './Services.css';
const Services: FC = () => {
  return (
    <div className="services_page">
      <h2 id="service_heading">
        My <span>services</span>
      </h2>
      <main className="main_service">
        <section className="service">
          <h2>Web Design</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis amet
            rem iure in aliquid assumenda fugiat consequuntur ad, quo quos optio
            neque! Eum obcaecati fugit pariatur accusantium. Earum, recusandae
            quis?
          </p>
          <button>Read More</button>
        </section>
        <section className="service">
          <h2>Web Development</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis amet
            rem iure in aliquid assumenda fugiat consequuntur ad, quo quos optio
            neque! Eum obcaecati fugit pariatur accusantium. Earum, recusandae
            quis?
          </p>
          <button>Read More</button>
        </section>
        <section className="service">
          <h2>Create Moble Apps</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            deserunt aliquid, rem maxime reiciendis ex odit, delectus qui animi
            optio ea officiis aspernatur praesentium dolor aperiam ad obcaecati.
            Obcaecati, at!
          </p>
          <button>Read More</button>
        </section>
        <section className="service">
          <h2>Create Moble Apps</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            deserunt aliquid, rem maxime reiciendis ex odit, delectus qui animi
            optio ea officiis aspernatur praesentium dolor aperiam ad obcaecati.
            Obcaecati, at!
          </p>
          <button>Read More</button>
        </section>
      </main>
    </div>
  );
};

export default Services;
