import { useState } from "react";
import { HomeModal } from "./ContentModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
  });
  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({ img, title });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "" });
  };
  return (
    <div className="kura_tm_section" id="home">
      <div className="kura_tm_hero">
        <div className="container">
          <div className="content">
            <div className="left">
              <span className="name">John Sloan</span>
              <h3 className="job">Teacher, Linguist, Software Engineer</h3>
              <div className="services">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/hero/phd-progression.jpeg",
                          "PhD Computer Science",
                          "/img/hero/university-college-dublin-logo.jpg"
                        )
                      }
                    >
                      <img className="image" src="/img/service/1.jpg" alt="" />
                      <span>PhD Computer Science</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/hero/johnsEnglishExpressions.png",
                          "MA Linguistics",
                          "/img/hero/university-college-dublin-logo.jpg"
                      )
                      }
                    >
                      <img className="image" src="/img/service/2.jpg" alt="" />
                      <span>MA Linguistics</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal("/img/hero/teachingPic.jpg", "Teaching & Learning")
                      }
                    >
                      <img className="image" src="/img/service/3.jpg" alt="" />
                      <span>Teaching & Learning</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>10+</h3>
                      <span>
                        Years of
                        <br />
                        Teaching
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>5+</h3>
                      <span>
                        Years of
                        <br />
                        Software Engineering
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <img src="/img/thumbs/3-4.jpg" alt="" />
                <div
                  className="main"
                  style={{ backgroundImage: "url(img/hero/JohnTedCropped.jpg)" }}
                ></div>
                <div
                  className="shape"
                  style={{ backgroundImage: "url(img/hero/codeScreenshot.png)" }}
                ></div>
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomeModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
      />
    </div>
  );
};

export default Home;
