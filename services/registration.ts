// 'use server';

// import { apiBaseUrl } from './baseUrl';
// import { getAuthToken } from '../lib/utils/getAuthToken';

// export const getLocations = async () => {
//   try {
//     const token = await getAuthToken();
//     const url = `${apiBaseUrl}/locations`;

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       cache: 'no-store',
//     });

//     if (!response.ok) {
//       return {
//         data: null,
//         error: `Failed to fetch locations: ${response.status} ${response.statusText}`,
//       };
//     }

//     const data = await response.json();
//     console.log('✅ Locations fetched:', data);

//     return {
//       data,
//       error: null,
//     };
//   } catch (error) {
//     console.error('❌ Error fetching locations:', error);
//     return {
//       data: null,
//       error: error instanceof Error ? error.message : 'Unknown error occurred',
//     };
//   }
// };
// export const getRoles = async () => {
//   try {
//     const token = await getAuthToken();
//     const url = `${apiBaseUrl}/roles`;

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       cache: 'no-store',
//     });

//     if (!response.ok) {
//       return {
//         data: null,
//         error: `Failed to fetch locations: ${response.status} ${response.statusText}`,
//       };
//     }

//     const data = await response.json();
//     console.log('✅ Locations fetched:', data);

//     return {
//       data,
//       error: null,
//     };
//   } catch (error) {
//     console.error('❌ Error fetching locations:', error);
//     return {
//       data: null,
//       error: error instanceof Error ? error.message : 'Unknown error occurred',
//     };
//   }
// };

// export const getWeapons = async () => {
//   try {
//     const token = await getAuthToken();
//     const url = `${apiBaseUrl}/weapon`;

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       cache: 'no-store',
//     });
//     if (!response.ok) {
//       return {
//         data: null,
//         error: `Failed to fetch weapons: ${response.status} ${response.statusText}`,
//       };
//     }

//     const data = await response.json();
//     return {
//       data,
//       error: null,
//     };
//   } catch (error) {
//     return {
//       data: null,
//       error: error instanceof Error ? error.message : 'Unknown error occurred',
//     };
//   }
// };

// export const getBulletTypes = async () => {
//   try {
//     const token = await getAuthToken();
//     const url = `${apiBaseUrl}/bullet-type`;

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       cache: 'no-store',
//     });

//     if (!response.ok) {
//       return {
//         data: null,
//         error: `Failed to fetch bullet types: ${response.status} ${response.statusText}`,
//       };
//     }

//     const data = await response.json();

//     return {
//       data,
//       error: null,
//     };
//   } catch (error) {
//     console.error('❌ Error fetching bullet types:', error);
//     return {
//       data: null,
//       error: error instanceof Error ? error.message : 'Unknown error occurred',
//     };
//   }
// };

// export const getBattalions = async () => {
//   try {
//     const token = await getAuthToken();
//     const url = `${apiBaseUrl}/battalion`;

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       cache: 'no-store',
//     });

//     if (!response.ok) {
//       return {
//         data: null,
//         error: `Failed to fetch battalions: ${response.status} ${response.statusText}`,
//       };
//     }

//     const data = await response.json();

//     return {
//       data,
//       error: null,
//     };
//   } catch (error) {
//     return {
//       data: null,
//       error: error instanceof Error ? error.message : 'Unknown error occurred',
//     };
//   }
// };

// export const getSoldierDashboard = async () => {
//   try {
//     const token = await getAuthToken();
//     const url = `${apiBaseUrl}/soldier-dashboard`;

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       cache: 'no-store',
//     });

//     if (!response.ok) {
//       return {
//         data: null,
//         error: `Failed to fetch soldier dashboard: ${response.status} ${response.statusText}`,
//       };
//     }

//     const data = await response.json();
//     return {
//       data,
//       error: null,
//     };
//   } catch (error) {
//     return {
//       data: null,
//       error: error instanceof Error ? error.message : 'Unknown error occurred',
//     };
//   }
// };

// export const getAdministratorInformation = async () => {
//   try {
//     const token = await getAuthToken();
//     const url = `${apiBaseUrl}/administrator-information`;

//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       cache: 'no-store',
//     });
//     if (!response.ok) {
//       return {
//         data: null,
//         error: `Failed to fetch weapons: ${response.status} ${response.statusText}`,
//       };
//     }

//     const data = await response.json();
//     return {
//       data,
//       error: null,
//     };
//   } catch (error) {
//     return {
//       data: null,
//       error: error instanceof Error ? error.message : 'Unknown error occurred',
//     };
//   }
// };

// type ChangePasswordPayload = {
//   currentPassword: string;
//   newPassword: string;
// };

// export const changePassword = async (payload: ChangePasswordPayload) => {
//   try {
//     const token = await getAuthToken();
//     const response = await fetch(`${apiBaseUrl}/change-password`, {
//       method: 'put',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(payload), // ✅ Ensure this line exists and is not undefined
//     });

//     const text = await response.text();

//     // ✅ Try to parse response safely
//     let data;
//     try {
//       data = text ? JSON.parse(text) : {};
//     } catch {
//       data = {};
//     }

//     if (!response.ok) {
//       return {
//         success: false,
//         message: data?.message || 'Change password failed',
//       };
//     }

//     return {
//       success: true,
//       message: 'Password changed successfully',
//     };
//   } catch (err) {
//     return {
//       success: false,
//       message: err instanceof Error ? err.message : 'Unknown error',
//     };
//   }
// };
