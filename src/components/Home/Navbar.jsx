import React from "react";
import birthdayImg from "../../assets/home/BirthdayBuddyIcon.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    `relative py-2 text-[15px] font-medium transition-all duration-200
    ${
      isActive
        ? "text-[#5820C7] font-semibold"
        : "text-slate-600 hover:text-[#5820C7]"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      
      <div className="max-w-7xl mx-auto h-[72px] px-6 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 shrink-0"
        >
          <img
            src={birthdayImg}
            alt="BirthBuddy Logo"
            className="w-11 h-11 object-contain"
          />

          <p className="text-[23px] font-bold tracking-tight text-slate-900">
            Birth<span className="text-[#5820C7]">Buddy</span>
          </p>
        </NavLink>


        {/* ================= NAVIGATION ================= */}
        <ul className="hidden md:flex items-center gap-8 list-none">

          {/* HOME */}
          <li>
            <NavLink
              to="/"
              end
              className={navLinkStyle}
            >
              {({ isActive }) => (
                <>
                  Home

                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-[#5820C7]" />
                  )}
                </>
              )}
            </NavLink>
          </li>


          {/* FEATURES */}
          <li>
            <NavLink
              to="/features"
              className={navLinkStyle}
            >
              {({ isActive }) => (
                <>
                  Features

                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-[#5820C7]" />
                  )}
                </>
              )}
            </NavLink>
          </li>


          {/* HOW IT WORKS */}
          <li>
            <NavLink
              to="/how-it-works"
              className={navLinkStyle}
            >
              {({ isActive }) => (
                <>
                  How It Works

                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-[#5820C7]" />
                  )}
                </>
              )}
            </NavLink>
          </li>


          {/* PRICING */}
          <li>
            <NavLink
              to="/pricing"
              className={navLinkStyle}
            >
              {({ isActive }) => (
                <>
                  Pricing

                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-[#5820C7]" />
                  )}
                </>
              )}
            </NavLink>
          </li>


          {/* ABOUT */}
          <li>
            <NavLink
              to="/about"
              className={navLinkStyle}
            >
              {({ isActive }) => (
                <>
                  About

                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-[#5820C7]" />
                  )}
                </>
              )}
            </NavLink>
          </li>

        </ul>


        {/* ================= AUTH BUTTONS ================= */}
        <div className="flex items-center gap-3">

          {/* LOGIN */}
          <NavLink
            to="/login"
            className="
              h-10
              px-5
              flex
              items-center
              justify-center
              rounded-lg
              border
              border-[#D8CCFF]
              bg-white
              text-[#5820C7]
              text-sm
              font-semibold
              transition-all
              duration-200
              hover:bg-[#F7F3FF]
              hover:border-[#5820C7]
            "
          >
            Log In
          </NavLink>


          {/* SIGN UP */}
          <NavLink
            to="/signup"
            className="
              h-10
              px-5
              flex
              items-center
              justify-center
              rounded-lg
              bg-[#5820C7]
              text-white
              text-sm
              font-semibold
              shadow-sm
              transition-all
              duration-200
              hover:bg-[#4B1BAE]
              hover:shadow-md
              active:scale-[0.98]
            "
          >
            Sign Up
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;