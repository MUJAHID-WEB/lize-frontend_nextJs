const StatusButton = ({ data }:any) => {
    data = data.trim()
    return (
      <>
        {data.toLowerCase() == 'started' ? (
          <p className='rounded-[24px]  bg-[#E3EFF7]  text-[#72ADD7] h-[34px] flex flex-col justify-center'>{data}</p>
        ) :(data.toLowerCase() == 'completed' )? (
          <p className='rounded-[24px]  bg-[#D1D2E0] text-[#172066] h-[34px] flex flex-col justify-center'>{data}</p>
        ):(data.toLowerCase() == 'received' || data.toLowerCase() == 'scheduled' || data.toLowerCase() == 'confirmed')? (
          <p className='rounded-[24px]  bg-[#FEF1DD] text-[#F8BB54] h-[34px] flex flex-col justify-center'>{data}</p>
        ):(data.toLowerCase() == 'assigned' )? (       
          <p className='rounded-[24px]  bg-[#FFE4D6] text-[#FF7A30] h-[34px] flex flex-col justify-center'>{data}</p>
        ):(data.toLowerCase() == 'unpaid'|| data.toLowerCase() == 'unverified' || data.toLowerCase() == 'sold out ')? (
          <p className='rounded-[24px]  bg-[#FDE1E1] text-[#F36A6A] h-[34px] flex flex-col justify-center'>{data}</p>
        ):(data.toLowerCase() == 'paid' || data.toLowerCase() == 'valid'    || data.toLowerCase() == 'approved' || data.toLowerCase() == 'inprogress' || data.toLowerCase() == 'available')? (       
          <p className='rounded-[24px]  bg-[#D9F3DF] text-[#42C15F] h-[34px] flex flex-col justify-center'>{data}</p>
        ):(data.toLowerCase() == 'delivered' )? (       
          <p className='rounded-[24px]  bg-[#E0D1F3] text-[#6418C3] h-[34px] flex flex-col justify-center'>{data}</p>
        ):(
          <p className='rounded-[24px] bg-[#E6E7E8] text-gray h-[34px] flex flex-col justify-center'>{data}</p>
        )}
      </>   
    );
  };

  export default StatusButton;