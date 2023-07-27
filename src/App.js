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
    <div>
      <SearchComponent onSearch={handleSearch} />
      {user && <UserProfileComponent user={user} />}
    </div>
  );
};

export default App;







// import React from "react"
// import './index.css';
// import Git from "./Gitlog.png"
// import Sgit from "./sgitlog.png"

// function App() {
//   return (
//     <div className="App">
//       <div className="search">
//         <h3>User Search</h3>
//         <input
//           type="text"
//           className="searchbar"
//         ></input>
//       </div>
//       <div className="card">
//         <img src={Git} className="card-img"></img>
//         <h3 className="name">Name </h3>
//         <h4 className="email">email</h4>
//         <br></br>
//         <br></br>
//         <button type="submit" className="bt">
//           <img src={Git} className="btimg"></img>
//         </button>
//       </div>
      
//     </div>
//   );
// }

// export default App;
