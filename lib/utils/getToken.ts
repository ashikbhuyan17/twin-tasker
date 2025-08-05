// src/lib/utils/getDecodedToken.ts

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export function getDecodedToken(): {
  token: string;
  data: string;
} | null {
  const token = Cookies.get('authToken');
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return { token, data: decoded };
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
}
