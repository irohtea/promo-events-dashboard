// src/app/api/auth/signup/route.ts
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    console.log('User data to save:', {
      name,
      email,
      password: hashedPassword
    });
    
    return NextResponse.json({
      id: '123',
      name,
      email
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Sign up failed' },
      { status: 500 }
    );
  }
}