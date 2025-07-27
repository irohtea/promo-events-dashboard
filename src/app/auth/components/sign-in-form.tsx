// src/app/auth/components/sign-in-form.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false // Don't auto redirect, handle manually
      });

      if (result?.ok) {
        alert('Sign in successful!');
        // Redirect to dashboard or home page
        window.location.href = '/';
      } else {
        alert('Invalid credentials. Please try again.');
      }
      
    } catch (error) {
      console.error('Sign in failed:', error);
      alert('Sign in failed!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="p-2 border rounded"
          required
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      <p className="text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="/auth/signup" className="text-blue-600 hover:underline">
          Sign up here
        </a>
      </p>
    </div>
  );
};

export default SignInForm;