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
    demo: "",
    github: "",
    technologies: [],
    date: "",
  });
  const onOpenModal = (
    img,
    title,
    website,
    demo,
    github,
    technologies,
    date
  ) => {
    setOpen(true);
    setModalValue({ img, title, website, demo, github, technologies, date });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({
      img: null,
      title: "",
      website: "",
      demo: "",
      github: "",
      technologies: [],
      date: "",
    });
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
                              backgroundImage:
                                "url(/img/hero/ABAIR-front-page-1.webp)",
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
                          <span>Web Development</span>
                          <h3>ABAIR website</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              "img/news/abair.gif",
                              "ABAIR Website",

                              "https://abair.ie",
                              "",
                              "https://github.com/phonlab-tcd/abair-main-website",
                              [
                                "Node",
                                "React",
                                "Next.js",
                                "Web Speech API",
                                "Supabase",
                              ]
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/ISL-card-game-shot.webp)",
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
                          <span>Web Application</span>
                          <h3>Irish Sign Language Game</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              "img/news/isl.gif",
                              "ISL Game",

                              "https://isl-card-flip-game.netlify.app/",
                              "",
                              "https://github.com/JohnSloan8/isl-card-flip-game",
                              ["Node", "React"]
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/Bat-Screenshot-Chat-Page.webp)",
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
                          <h3>Irish Irregular Verb Chatbot</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              "img/news/bat.gif.gif",
                              "Bat Mírialta",

                              "https://bat-mirialta.abair.ie",
                              "",
                              "https://github.com/phonlab-tcd/bat-mirialta",
                              [
                                "Node",
                                "React",
                                "TypeScript",
                                "PostgreSQL",
                                "Express",
                              ]
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/VirtualGaeltachtScreenshot.webp)",
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
                          <h3>Metaverse &apos;as Gaeilge&apos;</h3>
                        </div>
                        <a
                          className="kura_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              "img/news/VirtualGaeltachtManyScreens.webp",
                              "Metaverse 'as Gaeilge'",
                              "",
                              "",
                              "https://github.com/JohnSloan8/virtual-gaeltacht",
                              [
                                "Node",
                                "three.js",
                                "WebRTC",
                                "Express",
                                "mongodb",
                              ]
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/DSDScheduleScreenshot.webp)",
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
                              `img/news/DSDScheduleSimplification.webp`,
                              "DSDAC Training Schedule",
                              "",
                              "",
                              "https://github.com/JohnSloan8/dsd-schedule",
                              ["Django", "chart.js"]
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/ExpressiveAvatarSaoirseImage.webp)",
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
                              "",
                              "",
                              "https://github.com/JohnSloan8/erle-sandbox",
                              ["Blender", "Django", "three.js", "PostreSQL"]
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/three_saoirses.webp)",
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
                              `img/news/ERLEDemo.gif`,
                              "Emotional Response Language Education",
                              "",
                              "",
                              "",
                              [
                                "Django",
                                "three.js",
                                "Blender",
                                "PostgreSQL",
                                "NLTK",
                                "spaCy",
                                "Web Speech API",
                                "Cereproc Speech Synthesis SDK",
                              ]
                            )
                          }
                        ></a>
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
        demo={modalValue.demo}
        github={modalValue.github}
        technologies={modalValue.technologies}
        date={modalValue.date}
      />
    </Fragment>
  );
};

export default News;
