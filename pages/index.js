import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import Meta from 'components/Meta';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolveTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <Meta title='NAD Hats | Home' />
      <button
        className='bg-gray h-full w-full'
        onClick={() => {
          setTheme(resolveTheme === 'dark' ? 'light' : 'dark');
        }}
      >
        {mounted && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 125.5 123.5'
            stroke='currentColor'
            strokeMiterlimit='10'
          >
            {resolveTheme === 'dark' && (
              <g id='Layer_2' data-name='Layer 2'>
                <g id='Hat'>
                  <path
                    className='cls-1'
                    d='M8.6,91.16S6.43,2.75,63.14,2.75c57.08,0,54,88.41,54,88.41'
                    strokeWidth='5.5px'
                  />
                  <path
                    className='cls-1'
                    d='M10.08,91.16H115.42c4,0,7.33,3.84,7.33,8.59v12.42c0,4.74-3.28,8.58-7.33,8.58H10.08c-4,0-7.33-3.84-7.33-8.58V99.75C2.75,95,6,91.16,10.08,91.16Z'
                    strokeWidth='5.5px'
                  />
                  <line
                    className='cls-2'
                    x1='52.82'
                    y1='3.54'
                    x2='42.45'
                    y2='90.51'
                    strokeWidth='3px'
                  />
                  <line
                    className='cls-2'
                    x1='69.82'
                    y1='2.75'
                    x2='83.52'
                    y2='89.51'
                    strokeWidth='3px'
                  />
                  <path
                    d='M61.83,28.1,57.06,51.69a.94.94,0,0,0,.92,1.1h9.54a.94.94,0,0,0,.92-1.1L63.67,28.1A.93.93,0,0,0,61.83,28.1Z'
                    fill='currentColor'
                  />
                  <rect
                    x='58.26'
                    y='61.96'
                    width='10.6'
                    height='28.22'
                    rx='1.89'
                    fill='currentColor'
                  />
                  <path
                    d='M36.26,46.35,45.14,8.46a.31.31,0,0,0-.48-.33L29.51,18.55a.3.3,0,0,0-.13.32l6.26,27.47A.32.32,0,0,0,36.26,46.35Z'
                    fill='currentColor'
                  />
                  <path
                    d='M28,46.55l-10,41.76h19L28.72,46.59A.39.39,0,0,0,28,46.55Z'
                    fill='currentColor'
                  />
                  <path
                    d='M81.22,27.7l11,49.07s10.52-5.27,11.85-9.84c1.65-5.64-3.48-24-6.22-29.2C94.14,30.7,81.22,27.7,81.22,27.7Z'
                    fill='currentColor'
                  />
                </g>
              </g>
            )}
          </svg>
        )}
      </button>
      <h1 className='text-6xl font-bold lowercase'>Coming soon.</h1>
    </div>
  );
}
