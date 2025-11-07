import "./Intro.css";
import intro from "../../../assets/img/intro.png";

const Intro = () => {
  return (
    <section className="intro-section pt100 pb50">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 intro-text mb-5 mb-lg-0">
            <h2 className="sp-title">
              We are builders of<span> excellence </span>
            </h2>
            <p>
              Elite Construction was established in 2011, with its roots tracing
              back to 1981. With nearly four decades of experience, the company
              has evolved into a fully integrated civil engineering enterprise.
              Over the years, Elite Construction has successfully executed a
              wide range of civil engineering projects, showcasing expertise,
              commitment, and innovation. Guided by a strong foundation of
              knowledge and craftsmanship, the company continues to deliver
              quality, precision, and excellence across every endeavor..
            </p>
            <a href="#" className="site-btn sb-dark">
              See Project
            </a>
          </div>
          <div className="col-lg-5 pt-4">
            <img src={intro} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
