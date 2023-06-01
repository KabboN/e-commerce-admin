import React from 'react';
import { useRouter } from 'next/router'
import Login from '../components/login'



export default function Home() {
  const router = useRouter();

  return (
    <div>
     <Login />
    </div>
  );
}
