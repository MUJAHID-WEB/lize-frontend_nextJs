import React from 'react';

const ProfileIcon = ({
  width = 25,
  height = 25,
  classNames = 'group-hover:fill-white-primary',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns='http://www.w3.org/2000/svg'
      className={`${classNames} fill-gray `}
    >
      <path d='M12.5 0C5.6 0 0 5.6 0 12.5C0 19.4 5.6 25 12.5 25C19.4 25 25 19.4 25 12.5C25 5.6 19.4 0 12.5 0ZM12.5 5C14.9125 5 16.875 6.9625 16.875 9.375C16.875 11.7875 14.9125 13.75 12.5 13.75C10.0875 13.75 8.125 11.7875 8.125 9.375C8.125 6.9625 10.0875 5 12.5 5ZM12.5 22.5C9.9625 22.5 6.9625 21.475 4.825 18.9C7.01451 17.1821 9.71703 16.2485 12.5 16.2485C15.283 16.2485 17.9855 17.1821 20.175 18.9C18.0375 21.475 15.0375 22.5 12.5 22.5Z' />
    </svg>
  );
};

export default ProfileIcon;
