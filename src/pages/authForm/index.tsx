import { useState } from 'react';
import {
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  FormOutlined
} from '@ant-design/icons';
import './styles.css';

const API_URL = 'http://82.202.168.156:5000';

function Authorization() {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

  const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const json = await res.json();
        if (!res.ok) throw new Error(json.message || 'Login failed');
        console.log(json);
        alert('Login successful!');
        
      } catch (err) {
        alert((err as Error).message);
      } finally {
        setLoading(false);
        setEmail('');
        setPassword('');
      }
    };

    return (
      <form onSubmit={handleLogin} autoComplete="on">
        <label className="input-wrapper">
          <MailOutlined />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            autoComplete="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="input-wrapper">
          <LockOutlined />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            required
            minLength={6}
            autoComplete="current-password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePassword}
            aria-label="Toggle password visibility"
            tabIndex={-1}
          >
            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </button>
        </label>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Loading…' : 'Log in'}
        </button>
      </form>
    );
  };

  const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);

    const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, firstName, lastName, password })
        });

        const json = await res.json();
        if (!res.ok) throw new Error(json.message || 'Registration failed');
        console.log(json);

        alert('Registration successful!');
      } catch (err) {
        alert((err as Error).message);
      } finally {
        setLoading(false);
        setEmail('');
        setFirstname('');
        setLastname('');
        setPassword('');
      }
    };

    return (
      <form onSubmit={handleRegister} autoComplete="on">
        <label className="input-wrapper">
          <MailOutlined />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            autoComplete="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="input-wrapper">
          <FormOutlined />
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            required
            autoComplete="given-name"
            pattern="^[A-Za-zА-Яа-яЁё]+$"
            title="Only letters allowed"
            className="input"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>

        <label className="input-wrapper">
          <FormOutlined />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            required
            autoComplete="family-name"
            pattern="^[A-Za-zА-Яа-яЁё]+$"
            title="Only letters allowed"
            className="input"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>

        <label className="input-wrapper">
          <LockOutlined />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            required
            minLength={6}
            autoComplete="new-password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePassword}
            aria-label="Toggle password visibility"
            tabIndex={-1}
          >
            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </button>
        </label>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Loading…' : 'Register'}
        </button>
      </form>
    );
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>Test task</h2>

        <div className="tab-switcher">
          <button
            className={activeTab === 'signin' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('signin')}
          >
            Log in
          </button>
          <button
            className={activeTab === 'signup' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('signup')}
          >
            Register
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'signin' ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
    </div>
  );
}

export default Authorization;
