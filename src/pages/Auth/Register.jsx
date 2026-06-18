import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

const rules = [
  { id: 'length',  label: 'At least 8 characters',           test: (p) => p.length >= 8 },
  { id: 'upper',   label: 'One uppercase letter (A-Z)',       test: (p) => /[A-Z]/.test(p) },
  { id: 'lower',   label: 'One lowercase letter (a-z)',       test: (p) => /[a-z]/.test(p) },
  { id: 'number',  label: 'One number (0-9)',                 test: (p) => /[0-9]/.test(p) },
  { id: 'special', label: 'One special character (!@#$...)',  test: (p) => /[^A-Za-z0-9]/.test(p) },
];

const getStrength = (passed) => {
  if (passed === 5) return { label: 'Strong', color: 'bg-green-500', width: 'w-full' };
  if (passed >= 3)  return { label: 'Medium', color: 'bg-yellow-400', width: 'w-3/5' };
  if (passed >= 1)  return { label: 'Weak',   color: 'bg-red-400',    width: 'w-1/5' };
  return { label: '', color: '', width: 'w-0' };
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword]         = useState('');
  const [focused, setFocused]           = useState(false);
  const [error, setError]               = useState('');
  const [loading, setLoading]           = useState(false);

  const { registerUser, updateUserProfile, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const passed   = rules.filter((r) => r.test(password)).length;
  const allValid = passed === rules.length;
  const strength = getStrength(passed);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!allValid) return;
    setError('');
    setLoading(true);

    const name  = e.target.name.value;
    const email = e.target.email.value;

    try {
      await registerUser(email, password);
      await updateUserProfile(name);
      navigate('/');
    } catch (err) {
      setError(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      setError(friendlyError(err.code));
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Create Account</h2>
      <p className="text-gray-500 text-sm mb-7">Join ZapShift and start shipping today</p>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#CAEB66] focus:ring-2 focus:ring-[#CAEB66]/30 transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#CAEB66] focus:ring-2 focus:ring-[#CAEB66]/30 transition"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+880 1XXX XXXXXX"
            className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#CAEB66] focus:ring-2 focus:ring-[#CAEB66]/30 transition"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={`w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 transition pr-11 ${
                password.length === 0
                  ? 'border-gray-300 focus:border-[#CAEB66] focus:ring-[#CAEB66]/30'
                  : allValid
                  ? 'border-green-400 focus:border-green-400 focus:ring-green-100'
                  : 'border-red-300 focus:border-red-400 focus:ring-red-100'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Strength bar */}
          {password.length > 0 && (
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">Password strength</span>
                <span className={`text-xs font-semibold ${passed === 5 ? 'text-green-600' : passed >= 3 ? 'text-yellow-600' : 'text-red-500'}`}>
                  {strength.label}
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`} />
              </div>
            </div>
          )}

          {/* Rules checklist */}
          {(focused || password.length > 0) && (
            <ul className="mt-3 flex flex-col gap-1.5 bg-gray-50 rounded-xl p-3 border border-gray-100">
              {rules.map((rule) => {
                const ok = rule.test(password);
                return (
                  <li key={rule.id} className="flex items-center gap-2 text-xs">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] flex-shrink-0 ${ok ? 'bg-green-500' : 'bg-gray-300'}`}>
                      {ok ? '✓' : ''}
                    </span>
                    <span className={ok ? 'text-green-700 font-medium' : 'text-gray-500'}>{rule.label}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" required className="mt-0.5 accent-[#CAEB66]" />
          <span className="text-xs text-gray-500 leading-relaxed">
            I agree to the{' '}
            <a href="#" className="text-[#03373D] font-semibold hover:underline">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="text-[#03373D] font-semibold hover:underline">Privacy Policy</a>
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={!allValid || loading}
          className={`w-full font-bold py-2.5 rounded-xl transition-all duration-200 ${
            allValid && !loading
              ? 'bg-[#CAEB66] hover:bg-[#b5dc2a] text-black cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs">or sign up with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Google */}
        <button
          type="button"
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Sign up with Google
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{' '}
        <Link to="/auth/login" className="text-[#03373D] font-semibold hover:underline">
          Sign In
        </Link>
      </p>
    </section>
  );
};

const friendlyError = (code) => {
  switch (code) {
    case 'auth/email-already-in-use': return 'This email is already registered.';
    case 'auth/invalid-email':        return 'Please enter a valid email address.';
    case 'auth/weak-password':        return 'Password is too weak.';
    default:                          return 'Something went wrong. Please try again.';
  }
};

export default Register;
