'use server';

import { apiBaseUrl } from '@/services/baseUrl';

interface RegisterInput {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export async function handleRegister({
  name,
  email,
  password,
  avatar = 'https://picsum.photos/800',
}: RegisterInput): Promise<{
  data: any | null;
  error: string | null;
}> {
  try {
    // Step 1: Register user
    const registerRes = await fetch(`${apiBaseUrl}/v1/users/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, avatar }),
    });
    console.log('🚀 ~ handleRegister ~ registerRes:', registerRes);

    if (!registerRes.ok) {
      const err = await registerRes.json();
      return { data: null, error: err.message || 'Registration failed.' };
    }

    // Step 2: Login user after registration
    const loginRes = await fetch(`${apiBaseUrl}/v1/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!loginRes.ok) {
      const err = await loginRes.json();
      return {
        data: null,
        error: err.message || 'Login after registration failed.',
      };
    }

    const loginData = await loginRes.json();
    return { data: loginData, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Unknown error occurred',
    };
  }
}
