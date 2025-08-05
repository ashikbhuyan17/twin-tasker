// src/lib/getToken.ts
'use server';

import { cookies } from 'next/headers';

export const getAuthToken = async () => {
  const token = await cookies().get('authToken');
  return token?.value || '';
};
