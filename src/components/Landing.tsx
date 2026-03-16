import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* Name Section */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              Satyam
              <br />
              <span>Singh</span>
            </h1>
          </div>

          {/* Role Section */}
          <div className="landing-info">
            <h3>An</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>

            <h2>
              <div className="landing-h2-info">GenAI</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>

            <p className="landing-description">
              I build production-grade AI systems, agentic workflows, and
              scalable backend platforms using Python, FastAPI, LangChain,
              and cloud-native technologies.
            </p>

          </div>

        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;