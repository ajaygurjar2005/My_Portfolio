import React from 'react'

const About = () => {
  return (
          <section id="about" className="about-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-sm-6 col-md-5">
                            <div className="about-img">
                              <img
                                src="img/testimonial-2.jpg"
                                className="img-fluid rounded b-shadow-a"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-7" style={{fontSize:'22px'}}>
                            <div className="about-info">
                              <p>
                                <span className="title-s" style={{fontSize:'22px'}} >Name: </span>{" "}
                                <span>Ajay Gurjar</span>
                              </p>
                              <p>
                                <span className="title-s" style={{fontSize:'22px'}}>Profile: </span>{" "}
                                <span>full stack developer</span>
                              </p>
                              <p>
                                <span className="title-s" style={{fontSize:'22px'}}>Email: </span>{" "}
                                <span>Ajay Gurjar</span>
                              </p>
                              <p>
                                <span className="title-s" style={{fontSize:'22px'}}>Phone: </span>{" "}
                                <span>6378717003</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="skill-mf">
                          <p className="title-s" style={{fontSize:'22px'}}>Skill</p>
                          <span className=''style={{fontSize:'18px'}}>HTML</span>{" "}
                          <span className="pull-right">85%</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span style={{fontSize:'18px'}}>CSS3</span>{" "}
                          <span className="pull-right">75%</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span style={{fontSize:'18px'}}>PHP</span>{" "}
                          <span className="pull-right">50%</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span style={{fontSize:'18px'}}>JAVASCRIPT</span>{" "}
                          <span className="pull-right">90%</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "90%" }}
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="about-me pt-4 pt-md-0">
                          <div className="title-box-2">
                            <h5 className="title-left" style={{fontSize:'24px'}}>About me</h5>
                          </div>
                          <p className="lead"style={{fontSize:'16px'}}>
                            Curabitur non nulla sit amet nisl tempus convallis
                            quis ac lectus. Curabitur arcu erat, accumsan id
                            imperdiet et, porttitor at sem. Praesent sapien
                            massa, convallis a pellentesque nec, egestas non
                            nisi. Nulla porttitor accumsan tincidunt.
                          </p>
                          <p className="lead"style={{fontSize:'16px'}}>
                            Mauris blandit aliquet elit, eget tincidunt nibh
                            pulvinar a. Vivamus suscipit tortor eget felis
                            porttitor volutpat. Vestibulum ac diam sit amet quam
                            vehicula elementum sed sit amet dui. porttitor at
                            sem.
                          </p>
                          <p className="lead">
                            Nulla porttitor accumsan tincidunt. Quisque velit
                            nisi, pretium ut lacinia in, elementum id enim.
                            Nulla porttitor accumsan tincidunt. Mauris blandit
                            aliquet elit, eget tincidunt nibh pulvinar a.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default About
