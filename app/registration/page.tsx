// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { toast } from 'sonner';
// import Image from 'next/image';
// import Cookies from 'js-cookie';

// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { handleRegister } from '@/services/auth';

// export default function RegisterPage() {
//   const router = useRouter();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [avatar, setAvatar] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!name || !email || !password) {
//       toast.error('Please fill in all required fields.');
//       return;
//     }

//     setLoading(true);
//     const { data, error } = await handleRegister({
//       name,
//       email,
//       password,
//       avatar,
//     });
//     console.log('🚀 ~ onSubmit ~ data:', data);
//     setLoading(false);

//     if (data?.access_token) {
//       toast.success('Registration & Login successful!');

//       // Set token in cookies
//       Cookies.set(`${process.env.NEXT_PUBLIC_AUTH_TOKEN}`, data.access_token, {
//         expires: 7,
//       });

//       // Redirect to dashboard or any private page
//       router.push('/product-crud');
//     } else {
//       toast.error(error ?? 'Something went wrong.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-sm space-y-6 text-center">
//         <div className="flex justify-center">
//           <Image
//             src="/images/ansar-logo.png"
//             alt="Logo"
//             width={100}
//             height={100}
//             className="rounded-full"
//             priority
//           />
//         </div>

//         <h1 className="text-xl font-semibold text-gray-800">
//           User Registration
//         </h1>

//         <form onSubmit={onSubmit} className="space-y-4 text-left">
//           <div>
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 h-12 px-4"
//               required
//             />
//           </div>

//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 h-12 px-4"
//               required
//             />
//           </div>

//           <div>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 h-12 px-4"
//               required
//             />
//           </div>

//           <Button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700"
//             disabled={loading}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React from 'react';

const page = () => {
  return <div></div>;
};

export default page;
