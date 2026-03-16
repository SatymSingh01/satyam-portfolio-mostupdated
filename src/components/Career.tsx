import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          {/* Experience 1 */}
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer Co-op</h4>
                <h5>Aosenuma</h5>
              </div>
              <h3>April 2025 – September 2025</h3>
            </div>

            <p>
              Building production-grade AI systems including Agentic AI
              workflows, RAG pipelines, and FastAPI microservices. Working with
              LangChain, OpenAI GPT-4, and containerized deployments using
              Docker and Kubernetes to power enterprise AI applications.
            </p>
          </div>


          {/* Experience 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer I</h4>
                <h5>LTIMindtree</h5>
              </div>
              <h3>2021 – 2023</h3>
            </div>

            <p>
              Developed enterprise-grade applications for Paramount Pictures
              using Angular, Python, and SQL Server. Built scalable APIs,
              optimized database queries, and contributed to CI/CD pipelines
              ensuring reliable deployments and high system availability.
            </p>
          </div>


          {/* Experience 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Engineer Trainee</h4>
                <h5>LTIMindtree</h5>
              </div>
              <h3>2021</h3>
            </div>

            <p>
              Began professional career working on full-stack development using
              Angular, JavaScript, and Python. Collaborated with cross-functional
              teams to build internal tools and gained experience in production
              support, debugging, and enterprise application development.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;