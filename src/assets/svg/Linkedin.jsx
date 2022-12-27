export const Linkedin = ({ size, color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      className='icon icon-tabler icon-tabler-brand-github'
      viewBox='0 0 24 24'>
      <path stroke='none' d='M0 0h24v24H0z'></path>
      <rect width='16' height='16' x='4' y='4' rx='2'></rect>
      <path d='M8 11L8 16'></path>
      <path d='M8 8L8 8.01'></path>
      <path d='M12 16L12 11'></path>
      <path d='M16 16v-3a2 2 0 00-4 0'></path>
    </svg>
  );
};
