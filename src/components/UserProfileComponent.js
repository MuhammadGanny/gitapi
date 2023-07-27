import React, { useState } from 'react';

const UserProfileComponent = ({ user }) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const handleEyeClick = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <div className="card">
      <div>
        <img src={user.avatar_url} alt="User Avatar" className="card-img"  />
        <h2>{user.name || user.login}</h2>
        <p>{user.email || 'Email not available'}</p>
        <span className="eye-icon" onClick={handleEyeClick}>
          &#128065;
        </span>
      </div>
      {showAdditionalInfo && (
        <div>
          <p>Followers: {user.followers || 0}</p>
          <p>Following: {user.following || 0}</p>
          <p>Public Repositories: {user.public_repos || 0}</p>
          <p>Bio: {user.bio || 'No bio available'}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfileComponent;
