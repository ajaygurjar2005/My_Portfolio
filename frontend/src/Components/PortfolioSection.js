import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioSection = () => {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">Portfolio</h3>
                    <p className="subtitle-a">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="line-mf" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="work-box">
                    <a
                      href="img/work-1.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <div className="work-img">
                        <img
                          src="img/work-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Lorem impsum dolor</h2>
                          <div className="w-more">
                            <span className="w-ctegory">Web Design</span> /{" "}
                            <span className="w-date">18 Sep. 2018</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <Link to={''}>
                              {" "}
                              <span className="bi bi-plus-circle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a
                      href="img/work-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <div className="work-img">
                        <img
                          src="img/work-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Loreda Cuno Nere</h2>
                          <div className="w-more">
                            <span className="w-ctegory">Web Design</span> /{" "}
                            <span className="w-date">18 Sep. 2018</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <Link to={''}>
                              {" "}
                              <span className="bi bi-plus-circle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a
                      href="img/work-3.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <div className="work-img">
                        <img
                          src="img/work-3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Mavrito Lana Dere</h2>
                          <div className="w-more">
                            <span className="w-ctegory">Web Design</span> /{" "}
                            <span className="w-date">18 Sep. 2018</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <Link to={''}>
                              {" "}
                              <span className="bi bi-plus-circle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a
                      href="img/work-4.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <div className="work-img">
                        <img
                          src="img/work-4.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Bindo Laro Cado</h2>
                          <div className="w-more">
                            <span className="w-ctegory">Web Design</span> /{" "}
                            <span className="w-date">18 Sep. 2018</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <Link>
                              {" "}
                              <span className="bi bi-plus-circle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a
                      href="img/work-5.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <div className="work-img">
                        <img
                          src="img/work-5.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Studio Lena Mado</h2>
                          <div className="w-more">
                            <span className="w-ctegory">Web Design</span> /{" "}
                            <span className="w-date">18 Sep. 2018</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <Link to={''}>
                              {" "}
                              <span className="bi bi-plus-circle" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <Link
                      href="img/work-6.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                    >
                      <div className="work-img">
                        <img
                          src="img/work-6.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Studio Big Bang</h2>
                          <div className="w-more">
                            <span className="w-ctegory">Web Design</span> /{" "}
                            <span className="w-date">18 Sep. 2017</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <Link to="javascript:void(0)">
                              {" "}
                              <span className="bi bi-plus-circle" />
                            </Link>
                          </div>
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

export default PortfolioSection
