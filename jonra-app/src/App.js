import React, { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom"
import Board from "./pages/Board"
// import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ErrorPage from "./pages/Error"
import PageNotFound from "./pages/PageNotFound"
import Logout from "./pages/Logout"

const Navbar = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Home</a>
        {username && (
          <div className="navbar-profile">
            <div
              className="profile-icon"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            {showDropdown && (
              <div className="profile-dropdown">
                <div className="dropdown-item">{username}</div>
                <a href="/settings" className="dropdown-item">Settings</a>
                <a href={`/logout/${username}`} className="dropdown-item">Logout</a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

const AppLayout = ({ children, username }) => {
  return (
    <div className="app-container">
      <Navbar username={username} />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="home/:name/">
            <Route index element={<Home />}/>
            <Route path="board/:id" element={<Board />}/>
            <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="logout/:name" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to the Jonra Homepage!
//         </p>
//         <a
//           className="App-link"npm
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React Reference
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends React.Component {
//
//   state = { details: [], }
//
//   componentDidMount() {
//
//     let data;
//     axios.get('http://localhost:8000/home/jonathan')
//         .then(res => {
//           data = res.data;
//           this.setState({
//             details: data
//           })
//         })
//         .catch(err => { })
//   }
//
//
//   render() {
//     return (
//       <div>
//           <div>
//               <h2>Username</h2>
//               <b>{this.state.details["Username"]}</b>
//               <h2>Available Boards</h2>
//               <b>{this.state.details["Available Boards"]}</b>
//           </div>
//       </div>
//     )
//   }
// }

export default App;
