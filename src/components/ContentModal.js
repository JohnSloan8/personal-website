import { Modal } from "react-responsive-modal";

const metaversetext = `A virtual environment for Irish allowing real time, multi-modal interaction between users through embodied avatars. 
`
const DSDtext = `A simplification of a complex and cluttered running schedule into an interactive, aesthetically pleasing and functional single page application. 
`
const saoirseText = `An expressive avatar rigged on Blender and animated in-brower with speech synthesis and accurate lip sync. 
`
const erleText = `A mobile, e-learning platform developed for my PhD research which enabled teachers to provide learners with feedback on spoken production through the expressions and gaze of an avatar. 
`
export const NewsModal = ({ open, onCloseModal, img, title, website, demo, github, technologies, date }) => {
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
              <div className="padding-top-lg">
                {website !== "" && <p>Website: <a href={website}>{website}</a></p>}
                {demo !== "" && <p>Demo: <a href={demo}>{demo}</a></p>}
                {github !== "" && <p>Github: <a href={github}>{github}</a></p>}
                <p className="kura_tm_main_title padding-top-lg"><span className="margin-bottom-none">Built With:</span></p>
                <ul className="padding-left-lg">
                  {technologies.map( (t) => 
                  <li className="bullet-tech">{t}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const PhDtext = `
Designed, developed and user tested four versions of Emotional Response Language Education (ERLE), a bespoke e-learning platform which uses the expressions of an animated avatar to provide corrective feedback to language learners. Conducted numerous empirical studies with learners in East Asia, analysed the resulting text and audio data and published peer-review research for each version of ERLE. Demonstrated that use of the platform over 8 weeks leads to significant reductions in grammatical and lexical errors made by ESL learners.
`

const MAtext = `
Investigated the use of non-verbal signals - facial expressions and gaze direction - as a means of providing corrective feedback to learners. Conducted an empirical study on this form of feedback with Brazilian English learners in Dublin. Received 1st class honours.
`

const Teachingtext = `
Founded and ran an after school English academy in Seoul. Passed the advanced TOPIK (Test Of Proficiency In Korean, level 5 - CEFR C1 equivalent). Taught business English at Samsung, LG and Doosan.
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
