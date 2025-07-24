"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Target, BarChart3 } from "lucide-react"

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div
      className="min-h-screen bg-surface flex flex-col"
      style={{ fontFamily: "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-8 py-4">
          <div className="text-2xl font-bold text-text">Quantu Golf</div>
        </div>
      </header>
      {/* Hero Section */}
      <div className="relative overflow-hidden flex-grow">
        <div className="mx-auto max-w-7xl px-8 py-16 lg:py-24 xl:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
            {/* Left Column - Hero Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight text-text lg:text-6xl">
                  Elevate Your
                  <span className="block text-green-800">Golf Game</span>
                  <span className="block text-2xl font-normal text-muted-foreground mt-2">with Quantu Golf</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Track your performance, analyze your stats, and compare with tour professionals. Get insights that
                  help you improve every aspect of your game.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center space-x-3">
                  <div className="rounded-xl bg-blue-100 p-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">Track Progress</div>
                    <div className="text-sm text-muted-foreground">Monitor improvement</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="rounded-xl bg-green-100 p-2">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">Set Goals</div>
                    <div className="text-sm text-muted-foreground">Achieve targets</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="rounded-xl bg-purple-100 p-2">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">Analyze Data</div>
                    <div className="text-sm text-muted-foreground">Deep insights</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Auth Card */}
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md rounded-2xl border-0 bg-white shadow-soft">
                <CardHeader className="space-y-1 pb-4">
                  <CardTitle className="text-2xl font-bold text-center text-text">Join Quantu Golf</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">
                    Join thousands of golfers improving their game
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs defaultValue="signup" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 rounded-xl bg-gray-100">
                      <TabsTrigger
                        value="signup"
                        className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                      >
                        Sign Up
                      </TabsTrigger>
                      <TabsTrigger
                        value="signin"
                        className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                      >
                        Sign In
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="signup" className="space-y-4 mt-6">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-sm font-medium text-text">
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              placeholder="John"
                              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-sm font-medium text-text">
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-text">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-sm font-medium text-text">
                            Password
                          </Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
                          disabled={isLoading}
                        >
                          {isLoading ? "Creating Account..." : "Create Account"}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="signin" className="space-y-4 mt-6">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="signinEmail" className="text-sm font-medium text-text">
                            Email
                          </Label>
                          <Input
                            id="signinEmail"
                            type="email"
                            placeholder="john@example.com"
                            className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signinPassword" className="text-sm font-medium text-text">
                            Password
                          </Label>
                          <Input
                            id="signinPassword"
                            type="password"
                            placeholder="••••••••"
                            className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <input
                              id="remember"
                              type="checkbox"
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <Label htmlFor="remember" className="text-sm text-muted-foreground">
                              Remember me
                            </Label>
                          </div>
                          <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            Forgot password?
                          </button>
                        </div>
                        <Button
                          type="submit"
                          className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
                          disabled={isLoading}
                        >
                          {isLoading ? "Signing In..." : "Sign In"}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="rounded-xl border-gray-200 hover:bg-gray-50 bg-transparent">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="rounded-xl border-gray-200 hover:bg-gray-50 bg-transparent">
                      <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quantu Golf</h3>
              <p className="text-gray-300 text-sm">Elevate your golf game with advanced analytics and insights.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Willie Byrne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
