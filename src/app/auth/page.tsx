// src/app/page.tsx (modify existing file)
"use client";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center gap-4 p-8">
        <h1>Welcome to Promo team Event Management Dashboard</h1>
        <p>Please sign in to access your dashboard</p>
        <div className="flex gap-4">
          <a href="/auth/signin">
            <Button>Sign In</Button>
          </a>
          <a href="/auth/signup">
            <Button variant="outline">Sign Up</Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1>Dashboard</h1>
      <div className="bg-green-100 p-4 rounded">
        <p>Welcome back, <strong>{session.user?.name || session.user?.email}</strong>!</p>
        <p>You are successfully logged in.</p>
      </div>
      <Button 
        onClick={() => signOut({ callbackUrl: '/auth/signin' })}
        variant="destructive"
      >
        Sign Out
      </Button>
    </div>
  );
}