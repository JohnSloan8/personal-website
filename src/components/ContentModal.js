import { Modal } from "react-responsive-modal";
export const NewsModal = ({ open, onCloseModal, img, title, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div className="box_inner">
        <div className="description_wrap" style={{ padding: "30px" }}>
          <div className="news_popup_informations">
            <div className="image">
              <img src={img} alt="" />
            </div>
            <br />
            <div className="details" style={{ marginBottom: "20px" }}>
              {date && <span>{date}</span>}
              <h3>{title ? title : `VS Code Gets New JavaScript Debugger`}</h3>
              <div></div>
            </div>
            <div className="text">
              <p>
                Yo!!!!!!!!
              </p>
              <p>
                In today’s digital world, your website is the first interaction
                consumers have with your business. That's why almost 95 percent
                of a user’s first impression relates to web design. It’s also
                why web design services can have an immense impact on your
                company’s bottom line.
              </p>
              <p>
                That’s why more companies are not only reevaluating their
                website’s design but also partnering with Kura, the web design
                agency that’s driven more than $2.4 billion in revenue for its
                clients. With over 50 web design awards under our belt, we're
                confident we can design a custom website that drives sales for
                your unique business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const PhDtext = `
Designed, developed and tested four versions of a bespoke e-learning platform which used the expressions of an animated avatar to provide corrective feedback to language learners. Analysed the resulting text and audio data and published peer-review research for each version.
`

const MAtext = `
Investigated the use of non-verbal signals - facial expressions and gaze direction - as a means of providing corrective feedback to learners. Received 1st class honours.
`

const Teachingtext = `
Founded and ran an after school English academy in Seoul. Passed the advanced level TOPIK (Test Of Proficiency In Korean), level 5 - CEFR C1 equivalent. Taught business English at Samsung, LG and Doosan.
`

export const HomeModal = ({ open, onCloseModal, img, title, logo, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div className="box_inner">
        <div className="description_wrap" style={{ padding: "30px" }}>
          <div className="news_popup_informations">
            <div className="image">
              <img src={logo} alt="" />
            </div>
            <div className="image">
              <img src={img} alt="" />
            </div>
            <br />
            <div className="details" style={{ marginBottom: "20px" }}>
              {date && <span>{date}</span>}
              <h3>{title ? title : `No title`}</h3>
              <div></div>
            </div>
            <div className="hidden_content">
              <div className="popup_informations">
                <div className="description">
                  {title === "PhD Computer Science" ? PhDtext : ``}
                  {title === "MA Linguistics" ? MAtext : ``}
                  {title === "Teaching & Learning" ? Teachingtext : ``}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
