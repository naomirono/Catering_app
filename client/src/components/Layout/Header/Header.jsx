import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoImage from "/src/assets/CateringLogo2.png";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    setAuthenticated(true);
    navigate("/login"); // Navigate to '/login'
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    // This could redirect the user to a sign-up page or show a modal
    navigate("/SignUpOne"); // Navigate to '/SignUpOne'
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto custom-container flex items-center justify-between">
        <div>
          <img
            src={LogoImage}
            alt="Chef Connect Logo"
            className="h-12 w-auto"
          />
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-orange-500 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-orange-500 hover:underline"
              >
                Chef
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-orange-500 hover:underline"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-orange-500 hover:underline"
              >
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          {userInfo ? (
            <>
              <img
                src={userInfo.profilePic}
                alt="User Profile"
                className="h-12 w-12 rounded-full mr-2"
              />
              <span className="text-lg font-semibold">{userInfo.name}</span>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="border text-white px-6 py-1.5 rounded-full focus:outline-none"
              >
                Log In
              </button>
              <button
                onClick={handleSignUp}
                className="bg-orange-500 text-white px-4 py-1.5 ml-6 rounded-full focus:outline-none"
              >
                Join Us
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
