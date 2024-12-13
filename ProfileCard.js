// src/ProfileCard.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; // Correct import for Bootstrap Button


const ProfileCard = ({ profile, onSummaryClick }) => {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);

  const handleSummaryClick = () => {
    setIsSummaryVisible(!isSummaryVisible);
    onSummaryClick(profile);
  };

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <h2>{profile.name}</h2>
      <p className="role">{profile.role}</p>
      <p>{profile.description}</p>
      <Button onClick={handleSummaryClick}>Summary</Button>

      {isSummaryVisible && (
        <div className="profile-summary">
          <p><strong>Location:</strong> {profile.location}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
