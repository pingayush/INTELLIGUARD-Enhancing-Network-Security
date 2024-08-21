import React from "react";
import { ServicesList } from "../helpers/ServiceList";
import ServiceItem from "../components/ServiceItem";
import "../styles/Service.css";

function Service() {
  return (
    <div className="services">
      <h1 className="servicesTitle">Our Services</h1>
      <div className="servicesList">
        {ServicesList.map((servicesItem, key) => {
          return (
            <ServiceItem
              key={key}
              image={servicesItem.image}
              name={servicesItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Service;
