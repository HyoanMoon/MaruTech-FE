import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    desc: "Lorem ipsum dolor, sit amet elit. Porro, eveniet ex et ducimus laborum non labore ipsum saepe!"
  },

  {
    icon: "ri-code-ai-line",
    title: "Web Design",
    desc: "Lorem ipsum dolor, sit amet elit. Porro, eveniet ex et ducimus laborum non labore ipsum saepe!"
  },

  {
    icon: "ri-java-line",
    title: "Java",
    desc: "Lorem ipsum dolor, sit amet elit. Porro, eveniet ex et ducimus laborum non labore ipsum saepe!"
  },

  {
    icon: "ri-database-line",
    title: "Oracle",
    desc: "Lorem ipsum dolor, sit amet elit. Porro, eveniet ex et ducimus laborum non labore ipsum saepe!"
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-container">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save Time managing your business with</h2>
          <h2 className="highlight"> our best services</h2>
        </div>

        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
