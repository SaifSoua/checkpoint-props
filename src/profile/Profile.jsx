import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  const { fullName, bio, profession, children, handleName } = props;

  const handleClick = (e) => handleName(fullName);
  return (
    <div
      className="card"
      style={{
        background: "#FF7F50",
        maxWidth: " 600px",
        margin: "auto",
        textalign: "center",
      }}
    >
      <h2
        style={{
          color: "#F0E68C",
          textAlign: "center",
        }}
      >
        Name
      </h2>
      <h4>{fullName}</h4>
      <h2
        style={{
          color: "#F0E68C",
          textAlign: "center",
        }}
      >
        Profession
      </h2>
      <h4> {profession} </h4>
      <h2
        style={{
          color: "#F0E68C",
          textAlign: "center",
        }}
      >
        Biography
      </h2>
      <p> {bio}</p>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {children}
      </div>
      <br />

      <button>
        <a href="#!" onClick={handleClick} style={{ color: "#A0522D" }}>
          Full Name
        </a>
      </button>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "default fullName",
  profession: "default profession",
  bio: " default bio",
};
Profile.propTypes = { profil: PropTypes.string.isRequired };

export default Profile;
