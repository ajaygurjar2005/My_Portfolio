
import React, { useEffect, useState } from "react";

const Category = () => {
  const [storeValues, setStorevalues] = useState({
    category: "",
  });

  const onChangeValue = (e) => {
    setStorevalues({ ...storeValues, [e.target.name]: e.target.value });
  };
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storeValues),
      });
      if (response.status == 200) {
        alert("Category create succesfully");
      } else {
        alert("Something Went problem");
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
                      <h5 className="title-left">Send Message Us</h5>
                    </div>
                    <div>
                      <form>
                        <div className="row" style={{ fontSize: "15px" }}>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="category"
                                onChange={(e) => onChangeValue(e)}
                                className="form-control"
                                id="name"
                                placeholder="Enter Your Category"
                                required=""
                              />
                            </div>
                          </div>

                          <div className="col-md-12 text-center">
                            <div
                              type="text"
                              onClick={(e) => fetchData(e)}
                              className="button button-a button-big button-rouded"
                            >
                              Add Category
                            </div>
                          </div>
                        </div>
                      </form>
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

export default Category;
