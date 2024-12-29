

'use client'; // Ensure this runs only on the client side

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css'; // Your custom styles

import { useEffect } from 'react';
import NavBar from '@/components/NavBar';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically import Bootstrap's JavaScript only on the client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
    <body className='bg-body-secondary'>
      <NavBar />
      <div className="container mt-4">{children}</div>
    </body>
  </html>
  );
}

