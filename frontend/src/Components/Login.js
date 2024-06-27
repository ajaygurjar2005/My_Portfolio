import axios from "axios";
import React, { useState } from "react";

const Login = ({ setIsAuthenticate }) => {
  const [storeValues, setStorevalues] = useState({
    email: "",
    password: "",
  });

  const onChangeValue = (e) => {
    setStorevalues({ ...storeValues, [e.target.name]: e.target.value });
  };
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/admin",
        storeValues
      );

      if (response.status == 200) {
        alert("Login Succesfully");
        setIsAuthenticate(true);
      } else {
        console.log(response.data.msg);
        alert(response.data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                      <h5 className="title-left">Login to Dashboard</h5>
                    </div>
                    <div>
                      <form>
                        <div className="row" style={{ fontSize: "15px" }}>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                onChange={(e) => onChangeValue(e)}
                                placeholder="Enter Your Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="password"
                                id="subject"
                                onChange={(e) => onChangeValue(e)}
                                placeholder="Enter your password"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-12 text-center">
                            <div
                              type="text"
                              onClick={(e) => fetchData(e)}
                              className="button button-a button-big button-rouded"
                            >
                              Submit
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Admin Login</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead" style={{ fontSize: "16px" }}>
                        To Access a admin panel you will Enter the Email and
                        password to Login to Admin Panel
                      </p>
                      <ul className="list-ico" style={{ fontSize: "14px" }}>
                        <li>
                          <span className="bi bi-geo-alt" /> Admin Panel
                        </li>
                        <li>
                          <span className="bi bi-phone" /> Dashboard
                        </li>
                        <li>
                          <span className="bi bi-envelope" /> Hint
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

export default Login;
