// src/entities/user/api/sign-up.ts
export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

export const signUp = async (data: SignUpRequest) => {
  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Sign up failed');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Sign up failed');
  }
};