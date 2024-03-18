import moment from 'moment';
import React from 'react';

const DateHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: any) => {
  return (
    <div className=' mb-4 flex flex-row items-center justify-between'>
      <p className=' text-base font-medium text-[#121212] '>
        {moment(date).format('MMMM YYYY')}
      </p>
      <div className='flex flex-row items-center justify-start gap-3 '>
        <button
          className='flex h-6 w-6 flex-row items-center justify-center '
          onClick={decreaseMonth}
          type='button'
          disabled={prevMonthButtonDisabled}
        >
          <i className='fa-solid fa-chevron-left'></i>
        </button>
        <button
          className='flex h-6 w-6 flex-row items-center justify-center '
          onClick={increaseMonth}
          type='button'
          disabled={nextMonthButtonDisabled}
        >
          <i className='fa-solid fa-chevron-right'></i>
        </button>
      </div>
    </div>
  );
};

export default DateHeader;
