import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../swiperSliderProps";
import { NewsModal } from "./ContentModal";

const News = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    website: "",
    github: "",
    technologies: [],
    date: "",
  });
  const onOpenModal = (img, title, website, github, technologies, date) => {
    setOpen(true);
    setModalValue({ img, title, website, github, technologies, date });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", website: "", github: "", technologies: [], date: "" });
  };

  return (
    <Fragment>
      <div className="kura_tm_section" id="news">
        <div className="kura_tm_news">
          <div className="container">
            <div className="kura_tm_main_title">
              <span>Portfolio</span>
              <h3>Selected Works</h3>
            </div>
            <div className="news_list wow fadeInUp" data-wow-duration=".7s">
              <div className="slick-container">
                <div className="slick-wrapper">
                  <Swiper {...newsSlider}>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/VirtualGaeltachtScreenshot.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Virtual Environment</span>
                          <h3>Metaverse 'as Gaeilge'</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              "img/news/VirtualGaeltachtManyScreens.png",
                              "Metaverse 'as Gaeilge'",
                              "virtual-gaeltacht.com",
                              "github.com/JohnSloan8/virtual-gaeltacht",
                              ["Node", "three.js", "WebRTC", "Express", "mongodb"]
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Kura is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Kura, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/DSDScheduleScreenshot.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>UX Design</span>
                          <h3>DSDAC Training Schedule</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/DSDScheduleSimplification.png`,
                              "DSDAC Training Schedule",
                              "virtual-gaeltacht.com",
                              "github.com/JohnSloan8/virtual-gaeltacht",
                              ["Node", "three.js", "WebRTC", "Express", "mongodb"]
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Kura is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Kura, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/ExpressiveAvatarSaoirseImage.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Avatar Creation</span>
                          <h3>Saoirse: An Expressive Avatar</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              "/img/news/output.gif",
                              "Saoirse: An Expressive Avatar",
                              "virtual-gaeltacht.com",
                              "github.com/JohnSloan8/virtual-gaeltacht",
                              ["Node", "three.js", "WebRTC", "Express", "mongodb"]
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Kura is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Kura, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/three_saoirses.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>E-learning Platform</span>
                          <h3>Emotional Response Language Education</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/4.jpg`,
                              "Perfecto Tests Progressive Web Apps",
                              "virtual-gaeltacht.com",
                              "github.com/JohnSloan8/virtual-gaeltacht",
                              ["Node", "three.js", "WebRTC", "Express", "mongodb"]
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Kura is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Kura, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="kura_tm_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
        website={modalValue.website}
        github={modalValue.github}
        technologies={modalValue.technologies}
        date={modalValue.date}
      />
    </Fragment>
  );
};

export default News;
