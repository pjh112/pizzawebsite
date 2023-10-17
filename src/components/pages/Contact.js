import React from 'react'
import { useState } from "react";


function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
  }
return (
<div className="col-md-6 d-flex align-items-stretch">
<div className="info-wrap w-100 p-lg-5 p-4 img">
  <h3>Contact us</h3>
  <p className="mb-4">
    Let us know of any questions or concerns! 
  </p>
  <div className="dbox w-100 d-flex align-items-start">
    <div className="icon d-flex align-items-center justify-content-center">
      <span className="fa fa-map-marker"></span>
    </div>
    <div className="text pl-3">
      <p>
        <span>Address:</span> 4823 W Pratt Street, Baltimore MD 21201
      </p>
    </div>
  </div>
  <div className="dbox w-100 d-flex align-items-center">
    <div className="icon d-flex align-items-center justify-content-center">
      <span className="fa fa-phone"></span>
    </div>
    <div className="text pl-3">
      <p>
        <span>Phone:</span>410-428-9033
        <a href="tel://4104289033"></a>
      </p>
    </div>
  </div>
  <div className="dbox w-100 d-flex align-items-center">
    <div className="icon d-flex align-items-center justify-content-center">
      <span className="fa fa-paper-plane"></span>
    </div>
    <div className="text pl-3">
      <p>
        <span>Email:</span>
        <a href="Papitospizza@gmail.com">
          Papitospizza@gmail.com
        </a>
      </p>
    </div>
  </div>
 
    </div>
  </div>


)
    
}

  

                  
                

export default Contact;
