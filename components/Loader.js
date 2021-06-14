import { motion } from 'framer-motion';

export default function Loader({ progress }) {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-white dark:bg-black fixed'>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 300 300'
        fill='currentColor'
        widht='500'
        height='500'
      >
        <motion.path
          style={{ pathLength: progress }}
          d='M150,70.75A79.25,79.25,0,1,1,70.75,150,79.34,79.34,0,0,1,150,70.75m0-35A114.25,114.25,0,1,0,264.25,150,114.25,114.25,0,0,0,150,35.75Z'
        />
      </svg>
    </div>
  );
}
