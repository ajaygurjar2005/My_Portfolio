import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [storeValues, setStorevalues] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const onChangeValue = (e) => {
    setStorevalues({...storeValues,[e.target.name]:e.target.value})
  }
  const fetchData = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(storeValues),
      });
      if(response.status == 200){
        alert('Send Message Succesfully')
      }
      else{
        alert('Something Went problem')
      }
    }
    catch(err){
      console.log(err)
    }
  }
  console.log(storeValues,'store')

  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}
    >
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <form>
                        <div className="row" style={{fontSize:'15px'}}>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                onChange={(e)=>onChangeValue(e)}
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required=""
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                onChange={(e)=>onChangeValue(e)}
                                placeholder="Your Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="mobile"
                                id="subject"
                                onChange={(e)=>onChangeValue(e)}
                                placeholder="mobile no"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                onChange={(e)=>onChangeValue(e)}
                                placeholder="Subject"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message"
                                required
                                onChange={(e)=>onChangeValue(e)}
                                defaultValue={""}
                              />
                            </div>
                          </div>
              
                          <div className="col-md-12 text-center">
                            <div
                              type="text"
                              onClick={(e)=>fetchData(e)}
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead" style={{fontSize:'16px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis dolorum dolorem soluta quidem expedita aperiam
                        aliquid at. Totam magni ipsum suscipit amet? Autem nemo
                        esse laboriosam ratione nobis mollitia inventore?
                      </p>
                      <ul className="list-ico" style={{fontSize:'14px'}}>
                        <li>
                          <span className="bi bi-geo-alt" /> Sewapura , Jaipur
                        </li>
                        <li>
                          <span className="bi bi-phone" />  6378717003
                        </li>
                        <li>
                          <span className="bi bi-envelope" />{" "}
                          ajaygurjar7003@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <Link href="">
                            <span className="ico-circle">
                              <i className="bi bi-facebook" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span className="ico-circle">
                              <i className="bi bi-instagram" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span className="ico-circle">
                              <i className="bi bi-twitter" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span className="ico-circle">
                              <i className="bi bi-linkedin" />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
