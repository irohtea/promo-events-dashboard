// src/app/auth/components/sign-up-form.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signUp } from "@/entities/user/api/sign-up";
import { signIn } from "next-auth/react"; 

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 1. Create user account
      const result = await signUp(formData);
      console.log('Sign up successful:', result);
      
      // 2. Auto sign-in after successful signup
      const signInResult = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false
      });

      if (signInResult?.ok) {
        alert('Account created and logged in successfully!');
        // Redirect to dashboard or home page
        window.location.href = '/';
      } else {
        alert('Account created but login failed. Please sign in manually.');
      }
      
    } catch (error) {
      console.error('Sign up failed:', error);
      alert('Sign up failed!');
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="p-2 border rounded"
        />
        <Button type="submit">Sign Up</Button>
      </form>
      <p className="text-sm text-gray-600">
        Already have an account?{' '}
        <a href="/auth/signin" className="text-blue-600 hover:underline">
          Sign in here
        </a>
      </p>
    </div>
  );
};

export default SignUpForm;