import React, { useState } from 'react';
import { Link } from 'react-router';

const ForgotPassword = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect Firebase sendPasswordResetEmail
    setSent(true);
  };

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 w-full">
      <div className="mb-6">
        <Link
          to="/auth/login"
          className="text-sm text-[#03373D] hover:underline font-medium flex items-center gap-1"
        >
          ← Back to Sign In
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-1">Forgot Password?</h2>
      <p className="text-gray-500 text-sm mb-7">
        Enter your email and we'll send you a reset link.
      </p>

      {sent ? (
        <div className="bg-[#f7fde8] border border-[#CAEB66] rounded-xl px-5 py-4 text-sm text-gray-700">
          ✅ Reset link sent! Check your email inbox and follow the instructions.
          <div className="mt-4">
            <Link
              to="/auth/login"
              className="text-[#03373D] font-semibold hover:underline text-sm"
            >
              Back to Sign In →
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#CAEB66] focus:ring-2 focus:ring-[#CAEB66]/30 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#CAEB66] hover:bg-[#b5dc2a] text-black font-bold py-2.5 rounded-xl transition-all duration-200"
          >
            Send Reset Link
          </button>
        </form>
      )}

      <p className="text-center text-sm text-gray-500 mt-6">
        Don't have an account?{' '}
        <Link to="/auth/register" className="text-[#03373D] font-semibold hover:underline">
          Register
        </Link>
      </p>
    </section>
  );
};

export default ForgotPassword;
