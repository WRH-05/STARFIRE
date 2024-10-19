'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

// Separate components for better organization
const Header = () => (
  <header className="bg-white bg-opacity-90 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <Image src="/starfire-logo.svg" alt="Starfire Logo" width={40} height={40} />
        <span className="ml-2 text-2xl font-bold text-[#465685]">Starfire</span>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          {['Home', 'About Us', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-[#465685]">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

const Footer = () => (
  <footer className="bg-white bg-opacity-90 py-4">
    <div className="container mx-auto text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Starfire. All rights reserved. |{' '}
      <Link href="/privacy" className="hover:text-[#465685]">Privacy Policy</Link> |{' '}
      <Link href="/terms" className="hover:text-[#465685]">Terms of Service</Link>
    </div>
  </footer>
)

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Store the token in localStorage or a secure cookie
        localStorage.setItem('token', data.token);
        // Redirect to a protected route or update the UI
        console.log('Login successful');
      } else {
        // Handle login error
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-[#465685] flex flex-col relative">
    {/* Background pattern */}
    <div 
      className="absolute inset-0 z-0 bg-repeat opacity-10"
      style={{
        backgroundImage: `url('/Outubro_Rosa_-_Unidas_Pela_Vida_e_Pela_Esperanca_1.jpg')`,
        backgroundSize: '100px 100px'
      }}
    ></div>
    
    {/* Content */}
    <div className="relative z-10 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex flex-col lg:flex-row border-4 border-[#465685]">
          {/* Login Form */}
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">Welcome</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#465685] focus:border-[#465685]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              {/* Password input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#465685] focus:border-[#465685]"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
              {/* Remember me and Forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#465685] focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-[#465685] hover:text-[#3a4a6f]">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-[#465685] hover:from-pink-600 hover:to-[#3a4a6f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out"
              >
                Sign In
              </button>
            </form>
            {/* Social login options */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['Google', 'Facebook'].map((provider) => (
                  <button
                    key={provider}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with {provider}</span>
                    {provider === 'Google' ? (
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side Content */}
          <div className="lg:w-1/2 bg-gradient-to-br from-pink-400 to-[#465685] p-8 flex flex-col justify-center items-center">
            <Image src="/breast-cancer-ribbon.svg" alt="Breast Cancer Awareness Ribbon" width={150} height={150} className="mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Join Our Community</h3>
            <p className="text-gray-200 text-center mb-6">
              Create an account to access exclusive resources, join support groups, and stay updated on the latest breast cancer research and events.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#465685]"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}