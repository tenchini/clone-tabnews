import React, { useState } from "react";

export default function Home() {
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverGithub, setHoverGithub] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/viniciustenchini";
  const githubUrl = "https://github.com/tenchini";

  const fullText = "EM CONSTRUÇÃO...";

  const inlineStyles = {
    pageContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#121212",
    },
    mainContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    link: {
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "block",
      opacity: 0.7,
    },
    footer: {
      width: "100%",
      padding: "20px 0",
      textAlign: "center",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      marginTop: "auto",
    },
    footerText: {
      color: "#666666",
      letterSpacing: "0.05em",
      padding: "0 20px",
    },
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");

        body {
          margin: 0;
          padding: 0;
          background-color: #121212;
          font-family: "Share Tech Mono", monospace;
          overflow-x: hidden;
        }
      `}</style>

      <style jsx>{`
        /* --- RESPONSIVIDADE --- */

        .responsive-title {
          position: relative;
          font-weight: bold;
          text-align: center;
          color: #ffffff;
          margin-bottom: 3rem;

          /* A Mágica: Impede a quebra de linha */
          white-space: nowrap;

          /* Mobile (iPhone SE e outros pequenos) */
          font-size: 1.1rem; /* Levemente menor para caber em 320px */
          letter-spacing: 0.15em;
        }

        .icons-container {
          display: flex;
          z-index: 2;
          gap: 25px;
        }

        .responsive-icon {
          width: 40px;
          height: 40px;
        }

        .responsive-footer-text {
          font-size: 0.65rem;
        }

        /* Tablet e Desktop (> 768px) */
        @media (min-width: 768px) {
          .responsive-title {
            font-size: 1.5rem;
            letter-spacing: 0.2em;
          }

          .icons-container {
            gap: 40px;
          }

          .responsive-icon {
            width: 50px;
            height: 50px;
          }

          .responsive-footer-text {
            font-size: 0.75rem;
          }
        }

        /* --- ANIMAÇÕES --- */

        @keyframes gentle-breathing {
          0% {
            opacity: 0.5;
            transform: translate(0, 0);
            filter: blur(0.5px);
          }
          50% {
            opacity: 0.7;
            transform: translate(-2px, 1px);
            filter: blur(1px);
          }
          100% {
            opacity: 0.5;
            transform: translate(0, 0);
            filter: blur(0.5px);
          }
        }

        @keyframes gentle-breathing-reverse {
          0% {
            opacity: 0.5;
            transform: translate(0, 0);
            filter: blur(0.5px);
          }
          50% {
            opacity: 0.7;
            transform: translate(2px, -1px);
            filter: blur(1px);
          }
          100% {
            opacity: 0.5;
            transform: translate(0, 0);
            filter: blur(0.5px);
          }
        }

        .text-glitch {
          position: relative;
          display: inline-block;
        }

        .text-glitch::before,
        .text-glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          pointer-events: none;
        }

        .text-glitch::before {
          text-shadow: -2px 0 rgba(0, 255, 249, 0.7);
          animation: gentle-breathing 5s infinite ease-in-out alternate;
          left: -1px;
        }

        .text-glitch::after {
          text-shadow: 2px 0 rgba(255, 0, 193, 0.7);
          animation: gentle-breathing-reverse 6s infinite ease-in-out alternate;
          left: 1px;
        }
      `}</style>

      <div style={inlineStyles.pageContainer}>
        <main style={inlineStyles.mainContent}>
          <div className="responsive-title">
            <h1
              className="text-glitch"
              data-text={fullText}
              style={{ margin: 0 }}
            >
              {fullText}
            </h1>
          </div>

          <div className="icons-container">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...inlineStyles.link,
                opacity: hoverLinkedin ? 1 : 0.7,
                transform: hoverLinkedin ? "scale(1.1)" : "scale(1)",
                filter: hoverLinkedin
                  ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                  : "none",
              }}
              onMouseEnter={() => setHoverLinkedin(true)}
              onMouseLeave={() => setHoverLinkedin(false)}
            >
              <svg
                className="responsive-icon"
                viewBox="0 0 448 512"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...inlineStyles.link,
                opacity: hoverGithub ? 1 : 0.7,
                transform: hoverGithub ? "scale(1.1)" : "scale(1)",
                filter: hoverGithub
                  ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                  : "none",
              }}
              onMouseEnter={() => setHoverGithub(true)}
              onMouseLeave={() => setHoverGithub(false)}
            >
              <svg
                className="responsive-icon"
                viewBox="0 0 512 512"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V420c-51.7 11.3-62.6-21.9-62.6-21.9-8.4-21.5-20.6-27.2-20.6-27.2-16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9-41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9-1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.2 15.8 0 31.7 2.1 46.5 6.2 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.2 29.6 19.2 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
              </svg>
            </a>
          </div>
        </main>

        <footer style={inlineStyles.footer}>
          <div
            style={inlineStyles.footerText}
            className="responsive-footer-text"
          >
            © {new Date().getFullYear()} Criado por Vinicius Tenchini. Todos os
            direitos reservados.
          </div>
        </footer>
      </div>
    </>
  );
}
