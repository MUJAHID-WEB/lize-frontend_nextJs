import React from 'react';

function ExperienceRounded({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        opacity='0.3'
        cx='237'
        cy='236.147'
        r='227.064'
        stroke='url(#paint0_linear_75_1435)'
        strokeWidth='18.1651'
        strokeDasharray='5.45 5.45'
      />
      <defs>
        <linearGradient
          id='paint0_linear_75_1435'
          x1={237}
          y1={0}
          x2={237}
          y2='472.294'
          gradientunits='userSpaceOnUse'
        >
          <stop stopColor='#72ADD7'>
            <stop offset={1} stopColor='#72ADD7' stopOpacity='0.3'></stop>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ExperienceRounded;
