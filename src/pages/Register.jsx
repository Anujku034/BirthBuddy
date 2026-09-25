import React from "react";
import {NavLink} from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  Eye,
  ArrowRight,
  Gift,
  CalendarDays,
  Heart,
  Users,
} from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7fb] via-white to-[#f1f5ff] flex items-center justify-center p-4 sm:p-6">

      {/* Main Container */}
      <div className="w-full max-w-7xl min-h-[700px] grid lg:grid-cols-2 overflow-hidden rounded-[32px] bg-white/70 backdrop-blur-xl shadow-[0_25px_80px_rgba(30,41,59,0.12)] border border-white">

        {/* ================= LEFT SECTION ================= */}
        <section className="relative hidden lg:flex flex-col justify-between overflow-hidden p-12 xl:p-16 bg-gradient-to-br from-[#fff7fb] via-[#f8f5ff] to-[#eef7ff]">

          {/* Decorative Blurs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-pink-200/30 blur-3xl" />

          <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl" />

          {/* Decorative Dots */}
          <div className="absolute top-32 right-24 w-3 h-3 rounded-full bg-pink-400" />
          <div className="absolute top-52 right-40 w-2 h-2 rounded-full bg-blue-400" />
          <div className="absolute bottom-32 left-20 w-3 h-3 rounded-full bg-purple-400" />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">

            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center shadow-lg shadow-pink-200">
              <Gift className="w-6 h-6 text-white" />
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Birth<span className="text-pink-500">Buddy</span>
            </h1>

          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-xl">

            <p className="mb-5 text-sm font-semibold tracking-widest uppercase text-pink-500">
              More than reminders
            </p>

            <h2 className="text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight text-slate-900">
              Celebrate
              <br />
              Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Special
              </span>
              <br />
              Moment
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-500">
              Join BirthBuddy and keep your loved ones close with
              timely birthday reminders, thoughtful wishes, and more.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">

              {/* Feature 1 */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 shrink-0 rounded-2xl bg-pink-100 flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-pink-500" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Never Miss a Birthday
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Get timely reminders for all important dates.
                  </p>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-500" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Stay Connected
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Celebrate and make your loved ones feel special.
                  </p>
                </div>

              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    All in One Place
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Manage and organize birthdays easily.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Quote */}
          <div className="relative z-10">

            <p className="text-lg italic font-semibold text-slate-500">
              “Small reminders,
              <br />
              stronger relationships.”
            </p>

          </div>

          {/* Bottom Decoration */}
          <div className="absolute -bottom-32 -left-20 w-[650px] h-56 bg-gradient-to-r from-purple-300/40 to-pink-300/40 rounded-[50%] rotate-[-5deg]" />

        </section>


        {/* ================= RIGHT SECTION ================= */}
        <section className="relative flex items-center justify-center p-6 sm:p-10 lg:p-14 bg-white">

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/40 rounded-full blur-3xl" />

          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" />


          {/* Register Form */}
          <div className="relative z-10 w-full max-w-md">

            {/* Heading */}
            <div className="mb-7">

              <h2 className="text-4xl font-black tracking-tight text-slate-900">
                Create Your Account 🎉
              </h2>

              <p className="mt-3 text-slate-500 leading-6">
                Join BirthBuddy and start celebrating the people
                who matter.
              </p>

            </div>


            {/* Form */}
            <div className="space-y-4">

              {/* Full Name */}
              <div>

                <label className="block mb-2 text-sm font-semibold text-slate-800">
                  Full Name
                </label>

                <div className="relative">

                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-13 pl-12 pr-4 rounded-2xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                  />

                </div>

              </div>


              {/* Email */}
              <div>

                <label className="block mb-2 text-sm font-semibold text-slate-800">
                  Email Address
                </label>

                <div className="relative">

                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-13 pl-12 pr-4 rounded-2xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                  />

                </div>

              </div>


              {/* Password */}
              <div>

                <label className="block mb-2 text-sm font-semibold text-slate-800">
                  Password
                </label>

                <div className="relative">

                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="w-full h-13 pl-12 pr-12 rounded-2xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                  />

                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600 transition" />

                </div>

              </div>


              {/* Password Requirements */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-4 py-3 rounded-xl bg-pink-50">

                <p className="text-xs text-slate-500">
                  <span className="text-pink-500 font-bold">✓</span>{" "}
                  At least 8 characters
                </p>

                <p className="text-xs text-slate-500">
                  <span className="text-pink-500 font-bold">✓</span>{" "}
                  One number
                </p>

                <p className="text-xs text-slate-500">
                  <span className="text-pink-500 font-bold">✓</span>{" "}
                  One uppercase letter
                </p>

                <p className="text-xs text-slate-500">
                  <span className="text-pink-500 font-bold">✓</span>{" "}
                  One special character
                </p>

              </div>


              {/* Confirm Password */}
              <div>

                <label className="block mb-2 text-sm font-semibold text-slate-800">
                  Confirm Password
                </label>

                <div className="relative">

                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full h-13 pl-12 pr-12 rounded-2xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                  />

                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600 transition" />

                </div>

              </div>


              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer pt-1">

                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-pink-500 cursor-pointer"
                />

                <span className="text-sm text-slate-500 leading-5">
                  I agree to the{" "}
                  <span className="text-blue-600 font-semibold">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 font-semibold">
                    Privacy Policy
                  </span>
                </span>

              </label>


              {/* Create Account Button */}
              <button className="group w-full h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-base shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3">

                Create Account

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

              </button>

            </div>


            {/* Divider */}
            <div className="flex items-center gap-4 my-7">

              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Or sign up with
              </span>

              <div className="h-px flex-1 bg-slate-200" />

            </div>


            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">

              <button className="h-13 rounded-2xl border border-slate-200 bg-white flex items-center justify-center gap-3 font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition">

                <span className="text-lg font-bold text-blue-500">
                  G
                </span>

                Google

              </button>


              <button className="h-13 rounded-2xl border border-slate-200 bg-white flex items-center justify-center gap-3 font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition">

                <span className="text-lg">
                  ●
                </span>

                GitHub

              </button>

            </div>


            {/* Login Link */}
            <p className="mt-7 text-center text-sm text-slate-500">

              Already have an account?{" "}

             <NavLink
                to="/login"
                className="
                    inline-flex items-center justify-center
                    px-6 py-2.5
                    rounded-xl
                    font-semibold
                    text-pink-500
                    bg-pink-50/70
                    border border-pink-200
                    shadow-sm
                    hover:bg-pink-500
                    hover:text-white
                    hover:border-pink-500
                    hover:shadow-lg
                    hover:shadow-pink-200
                    hover:-translate-y-0.5
                    active:translate-y-0
                    transition-all duration-300
                "
                >
                Login
           </NavLink>

            </p>

          </div>

        </section>

      </div>

    </div>
  );
};

export default Register;