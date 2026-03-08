"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerifyCodePage() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [canResend, setCanResend] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!canResend) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [canResend]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Auto focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setCanResend(false);
    setTimer(60);
    setCode(["", "", "", ""]);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background image (hidden on mobile) */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/auth_bg.png)",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Back button */}
          <Link
            href="/auth/forgot-password"
            className="inline-flex items-center text-foreground/60 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm">Back</span>
          </Link>

          {/* Title */}
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Verify Code
          </h2>
          <p className="text-foreground/60 mb-8">
            Please check your email and enter the code
          </p>

          {/* Code Input */}
          <div className="flex gap-3 mb-8 sm:gap-4">
            {code.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-16 h-16 sm:w-20 sm:h-20 text-center text-2xl font-bold border-2 focus:border-primary"
              />
            ))}
          </div>

          {/* Verify Button */}
          <Button
            className="w-full h-11 text-base bg-primary hover:bg-primary/90 text-white mb-6"
            disabled={code.some((digit) => !digit)}
          >
            Verify OTP
          </Button>

          {/* Resend Code */}
          <div className="text-center text-sm text-foreground/60">
            <p className="mb-2">Didn&apos;t receive it ? Wait a few minutes. Or</p>
            {canResend ? (
              <button
                onClick={handleResend}
                className="text-primary hover:underline font-medium"
              >
                resend the code
              </button>
            ) : (
              <p className="text-foreground/60">
                Resend in{" "}
                <span className="font-bold text-foreground">{timer}s</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Mobile background - visible on mobile */}
      <div
        className="lg:hidden absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url(/auth-bg.jpg)",
        }}
      />
    </div>
  );
}
