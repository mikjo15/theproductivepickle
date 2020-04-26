import React from "react";
import Card from "./Card";
import pricing from "../pricing";

function Pricing() {
  return (
    <section>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">Quickly build an effective pricing table for your potential
          customers with this Bootstrap example. It's built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>

      <div className="container">
        <div className="card-deck mb-3 text-center">

          {pricing.map(tier => (
            <Card
              img={tier.img}
              title={tier.title}
              benefits={tier.benefits}
              price={tier.price}
            />
          ))}

        </div>
      </div>
    </section>
    )
}

export default Pricing;
