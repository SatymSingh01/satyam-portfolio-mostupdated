import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Facturas Agent SaaS",
    category: "Agentic AI Browser Automation Platform",
    tools:
      "React, TypeScript, FastAPI, Supabase, Redis, Docker, WebSocket, CI/CD",
    image: "/images/FACTURAS.png",
  },
  {
    title: "ESG Document Analysis Platform",
    category: "AI-Powered Enterprise Intelligence Platform",
    tools:
      "React, Next.js, Flask, Supabase, Neo4j, Redis, GPT-4, LangChain, RAG, Docker",
    image: "/images/ESG.png",
  },
  {
    title: "CPL Automation Chatbot",
    category: "AI-Powered Academic Eligibility Assistant",
    tools:
      "Python, Flask, IBM Watsonx.ai, Watson Assistant, LangChain, Docker, IBM Cloud",
    image: "/images/IBM.webp",
  },
  {
    title: "Real Estate Property Agentic Chatbot",
    category: "AI-Powered Real Estate Property Assistant",
    tools:
      "Python, LangChain, OpenAI, TypeScript, React, Next.js, and LangGraph, Google Gemini, Gemini API, Gemini SDK.",
    image: "/images/REAL.webp",
  },
  {
    title: "Real Estate Property Agentic Chatbot",
    category: "AI-Powered Real Estate Property Assistant",
    tools:
      "Python, LangChain, OpenAI, TypeScript, React, Next.js, and LangGraph, Google Gemini, Gemini API, Gemini SDK.",
    image: "/images/REAL.webp",
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>

                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;