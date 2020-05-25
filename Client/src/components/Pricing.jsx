import React from "react";
import Card from "./Card";
import pricing from "../pricing";

function Pricing() {
  return (
    <section id="pricing" className="mx-3">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 text-center">
        <h1 className="display-4">How can I help you?</h1>
        <p className="lead mx-lg-7">
          Let me help you boost your sales, by writing compelling sales copy or
          articles for your site, make a beautiful website for your content, or
          the lot, where you get both content and website.
        </p>
      </div>

      <div className="container">
        <div className="card-deck mb-3 text-center">

          {pricing.map((tier, index) => (
            <Card
              key={index}
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
