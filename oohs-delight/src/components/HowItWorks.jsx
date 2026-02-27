import React from "react";

const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #a855f7, #7c3aed)",
    title: "Research Suburbs",
    description: "Wonder twenty hunted and put income set desire expect. Am cottage calling.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    title: "Instant Valuation",
    description: "Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #e879f9, #c026d3)",
    title: "Track Property",
    description: "Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.",
  },
];

const DottedLine = () => (
  <div
    style={{
      flex: 1,
      borderTop: "2px dashed #d1d5db",
      margin: "0 12px",
      marginTop: "-48px", // align with icon center
    }}
  />
);

export default function HowItWorks() {
  return (
    <section
      style={{
        padding: "80px 40px",
        textAlign: "center",
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#111827",
          marginBottom: "56px",
        }}
      >
        How it works?
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {steps.map((step, i) => (
          <React.Fragment key={step.title}>
            {/* Step */}
            <div style={{ width: "160px", flexShrink: 0 }}>
              {/* Icon */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "20px",
                  background: step.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#111827",
                  margin: "0 0 8px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#6b7280",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>

            {/* Connector */}
            {i < steps.length - 1 && (
              <div
                style={{
                  flex: 1,
                  paddingTop: "36px", // centers on icon
                }}
              >
                <div
                  style={{
                    borderTop: "2px dashed #d1d5db",
                    position: "relative",
                  }}
                >
                  {/* Two dots */}
                  {[0, 1].map((dot) => (
                    <div
                      key={dot}
                      style={{
                        position: "absolute",
                        top: "-5px",
                        left: dot === 0 ? "30%" : "65%",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#d1d5db",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
