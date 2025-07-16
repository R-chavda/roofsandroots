import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="wrapper">
      <div className="paddings innerWidth flexColCenter about-us-container">
        <h1 className="primaryText">About Us – Roof & Roots</h1>
        <p className="secondaryText about-us-intro">
          At Roof & Roots, we are revolutionizing the way people find their
          homes. Our mission is to simplify the real estate experience, making
          it more accessible, transparent, and enjoyable for everyone.
        </p>
        <p className="secondaryText about-us-intro">
          We believe that finding a place to call home should be a seamless
          journey. Our platform connects you with a diverse range of properties,
          providing all the tools and information you need to make confident
          decisions. From cozy apartments to sprawling estates, your next
          chapter starts here.
        </p>

        <h2 className="primaryText sub-heading">Developer</h2>
        <div className="team-members-grid">
          <div className="flexColCenter team-member-card">
            <img
              loading="lazy"
              src="./Rahul.png"
              alt="Chavda Rahul"
              className="member-photo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/100x100/A0C4FF/000000?text=User";
              }}
            />
            <span className="member-name">Rahul Chavda</span>
            <a href="mailto:chavdarahul915@gmail.com" className="member-email">
              📩 chavdarahul915@gmail.com
            </a>
            <span className="member-enrollment">
              🆔 Enrollment No: 220210107006
            </span>
          </div>
        </div>

        <h2 className="primaryText sub-heading">📸 Project Logo</h2>
        <div className="project-logo-section">
          <img
            loading="lazy"
            src="./blacklogo.png"
            alt="Project Logo / Team Photo"
            className="project-logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/300x200/F2A65A/FFFFFF?text=Placeholder";
            }}
          />
        </div>

        <h2 className="primaryText sub-heading">🧰 Technologies Used</h2>
        <ul className="tech-list">
          <li>
            <strong>Frontend:</strong> React.js, HTML5, CSS, Tailwind
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Database:</strong> MongoDB
          </li>
          <li>
            <strong>Auth:</strong> Auth0 + JWT
          </li>
          <li>
            <strong>Maps:</strong> Leaflet API
          </li>
        </ul>

        <h2 className="primaryText sub-heading">📍 College Information</h2>
        <p className="college-info">
          📚 Government Engineering College, Bhavnagar
          <br />
          Affiliated to Gujarat Technological University
        </p>

        <h2 className="primaryText sub-heading">👤 About Me</h2>
        <div className="about-me-section">
          <p className="secondaryText">
            Hi, I'm Chavda Rahul, the creator and developer behind Roof & Roots.
            I am passionate about building web applications and solving
            real-world problems with technology. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
