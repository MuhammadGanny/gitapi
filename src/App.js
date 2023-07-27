import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import UserProfileComponent from './components/UserProfileComponent';


const App = () => {
  const [user, setUser] = useState(null);

  const handleSearch = (searchText) => {
    // Call the GitHub API to search for user profile
    if (searchText.trim().length > 0) {
      fetch(`https://api.github.com/users/${searchText}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error(error);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  };

  return (
    <div className="main">
      <SearchComponent onSearch={handleSearch} />
      {user && <UserProfileComponent user={user} />}
    </div>
  );
};

export default App;








