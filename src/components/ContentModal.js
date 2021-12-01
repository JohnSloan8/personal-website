import { Modal } from "react-responsive-modal";

const metaversetext = `A virtual environment allowing real time interaction between users with a focus on non-verbal signals. 
`
const DSDtext = `An interactive, aesthetically pleasing and functional redesign of a complex training timetable. 
`
const saoirseText = `An expressive avatar with speech synthesis and accurate lip sync. 
`
const erleText = `. 
`
export const NewsModal = ({ open, onCloseModal, img, title, website, github, technologies, date }) => {
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
              <h3>{title ? title : `no title`}</h3>
            </div>
            <div className="text" id="infoText">
              <p>
                {title === "Metaverse 'as Gaeilge'" ? metaversetext : ``}
                {title === "DSDAC Training Schedule" ? DSDtext : ``}
                {title === "Saoirse: An Expressive Avatar" ? saoirseText : ``}
                {title === "Emotional Response Language Education" ? erleText : ``}
              </p>
              <p>website: <a href="vitual-gaeltacht.com">{website}</a></p>
              <p>Github: <a href="vitual-gaeltacht.com">{github}</a></p>
              <p>Technologies:</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const PhDtext = `
Designed, developed and tested four versions of Emotional Response Language Education (ERLE), a bespoke e-learning platform which uses the expressions of an animated avatar to provide corrective feedback to language learners. Analysed the resulting text and audio data and published peer-review research for each version. Demonstrated that use of ERLE over 8 weeks leads to significant reductions in grammatical and lexical errors made by ESL learners.
`

const MAtext = `
Investigated the use of non-verbal signals - facial expressions and gaze direction - as a means of providing corrective feedback to learners. Received 1st class honours.
`

const Teachingtext = `
Founded and ran an after school English academy in Seoul. Passed the advanced level TOPIK (Test Of Proficiency In Korean, level 5 - CEFR C1 equivalent). Taught business English at Samsung, LG and Doosan.
`

export const HomeModal = ({ open, onCloseModal, img, title, logo, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div className="box_inner">
        <div className="description_wrap" style={{ padding: "30px" }}>
          <div className="news_popup_informations">
          {title !== "Teaching & Learning" ? <div className="image"><img src="/img/hero/university-college-dublin-logo.jpg" alt="" /></div> : '' }
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
