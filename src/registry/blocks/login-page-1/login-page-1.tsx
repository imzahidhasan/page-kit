"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4"
      )}
    >
      <div className={cn("absolute inset-0 overflow-hidden")}>
        <motion.div
          className={cn(
            "absolute top-20 left-20 w-72 h-72 bg-emerald-400 dark:bg-emerald-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10"
          )}
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={cn(
            "absolute top-40 right-20 w-72 h-72 bg-teal-400 dark:bg-teal-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10"
          )}
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className={cn(
            "absolute bottom-20 left-40 w-72 h-72 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10"
          )}
          animate={{
            x: [0, 20, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className={cn(
          "relative w-full max-w-md backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 shadow-2xl"
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "16px",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={cn("p-8")}>
          <h1
            className={cn(
              "text-3xl font-bold mb-2 text-center bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"
            )}
          >
            Welcome Back
          </h1>
          <p
            className={cn("text-center text-gray-600 dark:text-gray-300 mb-8")}
          >
            Login to your account
          </p>

          <form className={cn("space-y-5")}>
            <div>
              <label
                htmlFor="email"
                className={cn(
                  "block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                )}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={cn(
                  "w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/40 dark:border-gray-600/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
                )}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className={cn(
                  "block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2"
                )}
              >
                Password
              </label>
              <div className={cn("relative")}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={cn(
                    "w-full px-4 py-3 pr-12 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/40 dark:border-gray-600/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
                  )}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={cn(
                    "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors focus:outline-none"
                  )}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className={cn("w-5 h-5")} />
                  ) : (
                    <Eye className={cn("w-5 h-5")} />
                  )}
                </button>
              </div>
            </div>

            <div className={cn("flex items-center justify-between text-sm")}>
              <label
                className={cn(
                  "flex items-center text-gray-600 dark:text-gray-300"
                )}
              >
                <input type="checkbox" className={cn("mr-2 rounded")} />
                Remember me
              </label>
              <a
                href="#"
                className={cn(
                  "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                )}
              >
                Forgot password?
              </a>
            </div>

            <motion.button
              type="submit"
              className={cn(
                "w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold shadow-lg"
              )}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Sign In
            </motion.button>
          </form>

          <div
            className={cn(
              "mt-6 text-center text-sm text-gray-600 dark:text-gray-300"
            )}
          >
            Don&apos;t have an account?
            <a
              href="#"
              className={cn(
                "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold ml-1"
              )}
            >
              Sign up
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
