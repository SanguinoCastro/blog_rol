import './globals.css';
import { Roboto } from 'next/font/google';
import Avatar from '@/assets/images/avatar .png';
import Link from 'next/link';

const roboto = Roboto({ weight: ['300'], subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={roboto.className}>
        <main className='grid min-h-screen items-center bg-gray-900  py-20'>
          <div className='mx-auto rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 sm:w-[500px]  md:w-[700px]'>
            <div className='rounded bg-gray-100 p-8'>
              <Link href='/'>
                <img
                  src={Avatar.src}
                  alt='Imagen avatar de presentación'
                  className='mx-auto -mt-20 mb-8 rounded-full '
                  width={100}
                  height={100}
                />
              </Link>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
