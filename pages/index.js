import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import Meta from 'components/Meta';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <Meta title='NAD Hats | Home' />
      <button
        className='bg-gray'
        aria-label='Toggle Dark Mode'
        type='button'
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        {mounted && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 125.5 123.5'
            stroke='currentColor'
            strokeMiterlimit='10'
            width='250px'
            height='250px'
            className='text-black dark:text-white'
          >
            {theme === 'dark' ? (
              <g id='Layer_2' data-name='Layer 2'>
                <g id='Hat'>
                  <path
                    d='M8.6,91.16S6.43,2.75,63.14,2.75c57.08,0,54,88.41,54,88.41'
                    strokeWidth='5.5px'
                  />
                  <path
                    d='M10.08,91.16H115.42c4,0,7.33,3.84,7.33,8.59v12.42c0,4.74-3.28,8.58-7.33,8.58H10.08c-4,0-7.33-3.84-7.33-8.58V99.75C2.75,95,6,91.16,10.08,91.16Z'
                    strokeWidth='5.5px'
                  />
                  <line
                    x1='52.82'
                    y1='3.54'
                    x2='42.45'
                    y2='90.51'
                    strokeWidth='3px'
                  />
                  <line
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
            ) : (
              <g id='Layer_2' data-name='Layer 2'>
                <g id='Hat'>
                  <path
                    d='M8.6,91.16S6.43,2.75,63.14,2.75c57.08,0,54,88.41,54,88.41'
                    strokeWidth='5.5px'
                    fill='white'
                  />
                  <path
                    d='M10.08,91.16H115.42c4,0,7.33,3.84,7.33,8.59v12.42c0,4.74-3.28,8.58-7.33,8.58H10.08c-4,0-7.33-3.84-7.33-8.58V99.75C2.75,95,6,91.16,10.08,91.16Z'
                    strokeWidth='5.5px'
                    fill='white'
                  />
                  <line
                    x1='52.82'
                    y1='3.54'
                    x2='42.45'
                    y2='90.51'
                    strokeWidth='3px'
                  />
                  <line
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
      <a
        href='https://www.instagram.com/nad_hats/'
        target='_black'
        rel='noreferrer'
        className='cursor-pointer'
      >
        <div className='mt-10 text-2xl lowercase flex justify-items-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z' />
          </svg>
          <p className='ml-3'> @nad_hats</p>
        </div>
      </a>
    </div>
  );
}
