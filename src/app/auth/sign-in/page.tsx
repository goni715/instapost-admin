'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background image (hidden on mobile) */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(/auth_bg.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center text-foreground/60 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm">Back</span>
          </Link>

          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <h1 className="text-xl font-bold text-primary">InstaSignTracker</h1>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-foreground mb-2">Sign in to your account</h2>
          <p className="text-foreground/60 mb-8">
            Don&apos;t have an account?{' '}
            <Link href="/auth/sign-up" className="text-primary hover:underline font-medium">
              Join here
            </Link>
          </p>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <Input
              type="email"
              placeholder="asadujjaman@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Password Input */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="mb-6 text-right">
            <Link href="/auth/forgot-password" className="text-sm text-foreground/60 hover:text-foreground">
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <Button className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-white mb-6">
            Sign In
          </Button>

          {/* Terms */}
          <p className="text-xs text-foreground/60 text-center">
            By joining, you agree to the{' '}
            <Link href="#" className="text-primary hover:underline">
              Terms of Service
            </Link>
            {' '}and Please read our{' '}
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            {' '}to learn how we use your personal data.
          </p>
        </div>
      </div>

      {/* Mobile background - visible on mobile */}
      <div
        className="lg:hidden absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(/auth-bg.jpg)',
        }}
      />
    </div>
  )
}
