'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    setSent(true)
  }

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
            href="/auth/sign-in"
            className="inline-flex items-center text-foreground/60 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm">Back</span>
          </Link>

          {/* Title */}
          <h2 className="text-3xl font-bold text-foreground mb-3">Forgot password</h2>
          <p className="text-foreground/60 mb-8">
            Enter your email address and we&apos;ll send you a Code to reset your password
          </p>

          {!sent ? (
            <>
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

              {/* Send OTP Button */}
              <Button
                onClick={handleSubmit}
                className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-white"
              >
                Send OTP
              </Button>
            </>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">Check your email</p>
              <p className="text-green-600 text-sm mt-1">
                We&apos;ve sent a code to {email}
              </p>
              <Button
                onClick={() => setSent(false)}
                variant="outline"
                className="w-full mt-4"
              >
                Send again
              </Button>
            </div>
          )}
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
