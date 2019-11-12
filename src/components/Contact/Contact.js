import React from "react";
import ContactPic from "../..//assets/images/contact1.jpeg";

function Contact() {
  return (
    <section id="content" className="section-content">
      <div className="container text-center ">
        <div className="row">
          <div className="col-4">
            <img src={ContactPic} alt="Contact details" />
          </div>
          <div className="col-8">
            <h2>Contact Us</h2>
            <ul className="list-unstyled alt">
              <li>
                <b>Information / General enquires - </b>snickanalytics@gmail.com
              </li>
              <li>
                <b>Phone# - </b> 02 8068 9856
              </li>
              <li>
                <div className="row">
                  <div className="mx-auto">
                    We are based in <b>Sydney, Australia</b>.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
