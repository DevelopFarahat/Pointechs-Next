import React from "react";
import FeaturesStyles from "../styles/features.module.scss";
import Image from "next/image";
import {TiUser} from "react-icons/ti";
function Features() {
  const featuresArr = [
    {
      id: 0,
      title: "Digital Loyalty Cards",
      details:
        "Let customers easily create a digital loyalty card with a single click and be automatically registered in your database.",
    },
    {
      id: 1,
      title: "Points, Stamps, and Discount Coupons Programs",
      details:
        "Offer customized loyalty programs, including points for spend, stamps for repeat visits, and discount coupons for specific spend levels.",
    },
    {
      id: 2,
      title: "Referral and New Customer Growth",
      details:
        "Encourage customers to refer friends and family with referral rewards, increasing your customer base and revenue.",
    },
    {
      id: 3,
      title: "Promotional Offers",
      details:
        "Publish your offers to all Pointechs users for maximum visibility.",
    },
    {
      id: 4,
      title: "Tiers Program",
      details:
        "Categorize customers based on spending to better understand and retain them.",
    },
    {
      id: 5,
      title: "Customer Analytics",
      details:
        "Monitor the performance of your loyalty program and track your customer's activities and generate reports about each transaction.",
    },
    {
      id: 6,
      title: "Business Information",
      details:
        "Publish your business information, including contact numbers and location, to all app users.",
    },
    {
      id: 7,
      title: "Customer Feedback",
      details:
        "Receive complaints and suggestions from customers and send notifications to keep them engaged, and let customers get notified automatically with any transaction.",
    },
  ];
  return (
    <div className={FeaturesStyles["features"]} id="our-features">
      <div>
      <section>
        <span></span>
        <h1>Features of Pointechs</h1>
      </section>
      <section>
        {featuresArr.map((feature)=>(
        <div key={feature.id} className={FeaturesStyles['feature']}>
          <div>
          <TiUser/>
          </div>
        <h6>{feature.title}</h6>
        <p>{feature.details}</p>
      </div>
        ))}

      </section>
      </div>
    </div>
  );
}

export default Features;
