import React from 'react'
import  FAQsStyles from "../styles/FAQs.module.scss";
import Accordion from 'react-bootstrap/Accordion';
function FAQS() {
  const FAQsArr = [
    {id:0,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:1,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:2,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:3,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:4,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:5,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:6,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:7,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:8,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:9,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:10,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
    {id:11,q:'How does it work?',a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum. Quis blandit turpis cursus in hac habitasse. Libero volutpat sed cras ornare arcu dui vivamus. Porttitor lacus luctus accumsan tortor posuere. Sit amet justo donec enim. Enim facilisis gravida neque convallis. Fames ac turpis egestas sed tempus urna et. Consequat semper viverra nam libero justo laoreet sit amet. Quis varius quam quisque id diam vel. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.'},
  ]
  return (
    <>
      <div className={FAQsStyles['faqs-img']}></div>
      <div>
        <div>
          <section>
            <span></span>
            <h1>Frequently Asked Questions</h1>
          </section>
          <section>
            {FAQsArr.map((faq)=>(
          <Accordion defaultActiveKey={faq.id == 0 ? "0" :-1} key={faq.id} className={FAQsStyles['FAQ-accordion']}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{faq.q}</Accordion.Header>
            <Accordion.Body>
              {faq.a}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
            ))}

          </section>
        </div>
      </div>
    </>
  )
}

export default FAQS