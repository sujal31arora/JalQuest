import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌊 About JalQuest</h1>

      <p style={styles.paragraph}>
        <strong>JalQuest</strong> is a project born at <strong>HackX NIET</strong>, developed within 24 hours. It empowers users to contribute to <strong>water conservation</strong> through real-world tasks and get rewarded with digital points called <strong>Boonds 💎</strong>.
      </p>

      <h2 style={styles.subheading}>🛠️ Tech Stack</h2>
      <ul style={styles.list}>
        <li>⚛️ <strong>Frontend:</strong> React.js, Axios, React-Webcam</li>
        <li>☕ <strong>Backend:</strong> Spring Boot (Java), JPA, Hibernate</li>
        <li>🛢️ <strong>Database:</strong> PostgreSQL (Neon.tech)</li>
        <li>🚀 <strong>Deployment:</strong> Netlify (Frontend), Render (Backend)</li>
      </ul>

      <h2 style={styles.subheading}>📖 How to Use JalQuest</h2>
      <ul style={styles.list}>
        <li>
          📝 <strong>Tasks:</strong> View assigned eco-friendly challenges (like rainwater harvesting or leak fixing) and upload "Before" and "After" photos using your webcam.
        </li>
        <li>
          🏆 <strong>Leaderboard:</strong> This is currently a <em>preview-only section</em> and will be integrated with live task scores in upcoming updates.
        </li>
        <li>
          🎁 <strong>Redeem:</strong> Also in prototype stage — the idea is to convert Boonds into real-world rewards in the future.
        </li>
      </ul>

      <h2 style={styles.subheading}>🌱 Vision</h2>
      <p style={styles.paragraph}>
        JalQuest isn’t just a project — it’s a movement. By gamifying small yet meaningful conservation tasks, we make it easier and more fun for everyone to contribute towards a better planet 🌍.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "850px",
    margin: "50px auto",
    padding: "30px 25px 100px", // Extra bottom padding to avoid footer overlap
    backgroundColor: "#f0f8ff",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "Segoe UI, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "38px",
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: "25px",
    textAlign: "center",
  },
  subheading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#023e8a",
    marginTop: "40px",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "17px",
    color: "#444",
    marginBottom: "20px",
  },
  list: {
    fontSize: "16px",
    color: "#333",
    paddingLeft: "22px",
    listStyleType: "disc",
  },
};

export default About;
