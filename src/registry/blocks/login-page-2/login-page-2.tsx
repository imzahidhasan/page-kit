"use client";

import { Eye, EyeOff, Mail, Lock, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={cn("h-screen flex relative overflow-hidden")}>
      {/* Full Page Background Pattern */}
      <div className={cn("absolute inset-0 bg-gray-50 dark:bg-gray-950")}>
        <div className={cn("absolute inset-0 opacity-5 dark:opacity-10")}>
          <div
            className={cn("absolute inset-0")}
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* Content Container with max-width */}
      <div className={cn("w-full max-w-[1600px] mx-auto flex relative z-10")}>
        {/* Left Side - Login Form */}
        <div
          className={cn("w-full lg:w-1/2 flex items-center justify-center p-8")}
        >
          <motion.div
            className={cn("w-full max-w-md relative z-10")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo/Brand */}
            <div className={cn("mb-8")}>
              <p className={cn("text-gray-600 text-center dark:text-gray-400")}>
                Sign in to continue to your account
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className={cn("space-y-3 mb-6")}>
              <motion.button
                type="button"
                className={cn(
                  "w-full flex items-center justify-center gap-3 px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200 font-medium"
                )}
                whileTap={{ scale: 0.98 }}
              >
                <svg className={cn("w-5 h-5")} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </motion.button>

              <motion.button
                type="button"
                className={cn(
                  "w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-900 dark:bg-white border border-gray-900 dark:border-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-white dark:text-gray-900 font-medium"
                )}
                whileTap={{ scale: 0.98 }}
              >
                <Github className={cn("w-5 h-5")} />
                Continue with GitHub
              </motion.button>
            </div>

            {/* Divider */}
            <div className={cn("relative mb-6")}>
              <div className={cn("absolute inset-0 flex items-center")}>
                <div
                  className={cn(
                    "w-full border-t border-gray-300 dark:border-gray-700"
                  )}
                />
              </div>
              <div className={cn("relative flex justify-center text-sm")}>
                <span
                  className={cn(
                    "px-2 bg-gray-50 dark:bg-gray-950 text-gray-500 dark:text-gray-400"
                  )}
                >
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form className={cn("space-y-4")}>
              <div>
                <label
                  htmlFor="email"
                  className={cn(
                    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  )}
                >
                  Email address
                </label>
                <div className={cn("relative")}>
                  <Mail
                    className={cn(
                      "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
                    )}
                  />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      "w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    )}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className={cn(
                    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  )}
                >
                  Password
                </label>
                <div className={cn("relative")}>
                  <Lock
                    className={cn(
                      "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
                    )}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={cn(
                      "w-full pl-10 pr-12 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    )}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={cn(
                      "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus:outline-none"
                    )}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className={cn("w-5 h-5")} />
                    ) : (
                      <Eye className={cn("w-5 h-5")} />
                    )}
                  </button>
                </div>
              </div>

              <div className={cn("flex items-center justify-between")}>
                <label
                  className={cn(
                    "flex items-center text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
                  )}
                >
                  <input
                    type="checkbox"
                    className={cn(
                      "mr-2 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                    )}
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className={cn(
                    "text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  )}
                >
                  Forgot password?
                </a>
              </div>
              <motion.button
                type="submit"
                className={cn(
                  "w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 px-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
                )}
                whileTap={{ scale: 0.98 }}
              >
                Sign in
              </motion.button>
            </form>

            <p
              className={cn(
                "mt-6 text-center text-sm text-gray-600 dark:text-gray-400"
              )}
            >
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className={cn(
                  "font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                )}
              >
                Sign up for free
              </a>
            </p>
          </motion.div>
        </div>

        {/* Right Side - Hero Section */}
        <div
          className={cn("hidden lg:flex lg:w-1/2 overflow-hidden items-center")}
        >
          {/* Message Content */}
          <motion.div
            className={cn("relative z-10 w-full max-w-lg text-center")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className={cn(
                "text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              )}
            >
              Welcome to PageKit
            </h2>
            <p
              className={cn(
                "text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              )}
            >
              Build beautiful, responsive pages with ease. Join thousands of
              creators who trust our platform to bring their ideas to life.
            </p>

            {/* Feature List */}
            <div className={cn("space-y-4 text-left max-w-md mx-auto")}>
              <motion.div
                className={cn("flex items-start gap-3")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 mt-1"
                  )}
                >
                  <svg
                    className={cn("w-4 h-4 text-gray-700 dark:text-gray-300")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={cn(
                      "font-semibold text-gray-900 dark:text-white mb-1"
                    )}
                  >
                    Lightning Fast Performance
                  </h3>
                  <p className={cn("text-sm text-gray-600 dark:text-gray-400")}>
                    Optimized for speed and efficiency
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={cn("flex items-start gap-3")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 mt-1"
                  )}
                >
                  <svg
                    className={cn("w-4 h-4 text-gray-700 dark:text-gray-300")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={cn(
                      "font-semibold text-gray-900 dark:text-white mb-1"
                    )}
                  >
                    Secure & Reliable
                  </h3>
                  <p className={cn("text-sm text-gray-600 dark:text-gray-400")}>
                    Bank-level security for your data
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={cn("flex items-start gap-3")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 mt-1"
                  )}
                >
                  <svg
                    className={cn("w-4 h-4 text-gray-700 dark:text-gray-300")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={cn(
                      "font-semibold text-gray-900 dark:text-white mb-1"
                    )}
                  >
                    24/7 Support
                  </h3>
                  <p className={cn("text-sm text-gray-600 dark:text-gray-400")}>
                    We&apos;re here to help anytime
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Quote */}
            <motion.div
              className={cn("mt-12")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p
                className={cn(
                  "text-gray-500 dark:text-gray-400 italic text-sm"
                )}
              >
                &ldquo;The best platform I&apos;ve used for building modern web
                pages.&rdquo;
              </p>
              <p
                className={cn(
                  "text-gray-700 dark:text-gray-300 text-sm mt-2 font-medium"
                )}
              >
                — Sarah Chen, Product Designer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
