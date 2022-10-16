import React from "react";
import "./contact.css"
const Contact = () => {
	return (
<section className="section section-contact js-section">
<h1 class="contact_title">contact me</h1>
  <div class="row row-center">
      <div class="span-8 columns">
      </div>
  </div>

  <div class="row row-center">

      <div class="span-8 span-l-6 columns ">

          <div class="section-contact-para-wrapper">

              <p class="section-contact-para">전화번호</p>
			  <p>010-7156-3224</p>

          </div>


          <div class="section-contact-btn-wrapper">

              <a href="mailto:rndemr@gmail.com" class=" section-contact-btn"><i class="fa fa-envelope section-contact-btn-icon btn-icon" aria-hidden="true"></i>Message me</a>
              
          </div>

          <div class="section-contact-para-small">
              <p class="section-contact-para-small">Send an email to me: <span class="email">rndemr@gmail.com</span></p>
          </div>


      </div>

  </div>
</section>
		
		
	);
  }
  
  
  export default Contact;
  