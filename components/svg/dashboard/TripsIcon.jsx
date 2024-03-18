import React from 'react';

const TripsIcon = ({
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
      <path d='M17.6708 0C13.6335 0 10.3435 3.21368 10.3435 7.15688C10.3435 11.1001 13.6337 14.3138 17.6708 14.3138C21.7081 14.3138 25 11.1001 25 7.15688C25 3.2135 21.7083 0 17.6708 0ZM18.1553 3.3098C18.3727 3.30562 18.5827 3.38828 18.7366 3.53862C18.8906 3.68895 18.975 3.89387 18.9707 4.10648V8.21747C18.9716 8.42588 18.8872 8.62574 18.7365 8.7731C18.5858 8.92029 18.381 9.00261 18.1678 9.00191H15.6164C15.4013 9.00662 15.1931 8.92622 15.0391 8.7792C14.8852 8.63218 14.7986 8.43092 14.7986 8.22058C14.7986 8.01025 14.8852 7.80881 15.0391 7.66178C15.1931 7.51476 15.4013 7.43454 15.6164 7.43924H17.3709V4.10645C17.3668 3.89926 17.4472 3.69887 17.5941 3.54939C17.7412 3.4001 17.9432 3.31377 18.1553 3.30976L18.1553 3.3098ZM4.38 4.90155C4.17092 4.90434 3.97129 4.98701 3.8238 5.13194L0.617819 8.26489C0.0403607 8.82891 -0.0747837 9.64247 0.039812 10.4441C0.154266 11.2454 0.488523 12.1162 0.989718 13.0627C1.99178 14.9553 3.68196 17.1404 5.86106 19.269C8.04016 21.3974 10.2837 23.0544 12.2212 24.0333C13.1902 24.5228 14.0817 24.8491 14.9022 24.9611C15.7228 25.0731 16.5558 24.9606 17.1333 24.3965L20.3408 21.2651C20.4917 21.1185 20.5765 20.9191 20.5765 20.7113C20.5765 20.5032 20.4917 20.3039 20.3408 20.1572L16.1069 16.0279C15.9569 15.8823 15.7541 15.8007 15.5429 15.8007C15.3315 15.8007 15.1286 15.8823 14.9788 16.0279L13.4946 17.4714C13.4852 17.4711 13.48 17.4725 13.4195 17.4637C13.2532 17.4402 12.9461 17.3417 12.5868 17.1585C11.8681 16.7923 10.9232 16.1045 10.0121 15.2145C9.10094 14.3245 8.40294 13.4077 8.0278 12.7057C7.84031 12.3548 7.73961 12.0549 7.71533 11.8923C7.70568 11.8281 7.70622 11.8187 7.70443 11.8114L9.18554 10.3694C9.33642 10.2228 9.42123 10.0234 9.42123 9.81555C9.42123 9.60749 9.33641 9.40815 9.18554 9.26148L4.95144 5.13219C4.8002 4.9836 4.59415 4.90059 4.3797 4.9018L4.38 4.90155Z' />
    </svg>
  );
};

export default TripsIcon;