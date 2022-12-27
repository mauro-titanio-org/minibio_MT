export const MailIcon = ({ size, color }) => {
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
      <rect width='18' height='14' x='3' y='5' rx='2'></rect>
      <path d='M3 7L12 13 21 7'></path>
    </svg>
  );
};
