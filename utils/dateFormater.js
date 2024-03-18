import moment from 'moment'
import React, { useState } from 'react'

function DateFormate({data,item,value}) {
    const Show = ()=>{
        if(value.includes('.')){
            const itemSplit = value.split('.');
            let result = itemSplit.length == 2
            ? item[itemSplit[0]][itemSplit[1]]
            : item[itemSplit[0]][itemSplit[1]][itemSplit[2]]
            return(
                <p className='text-sm font-medium text-gray'>{moment(result).format('D/M/YYYY')}</p>
            )
        }else{
            return(
                <p className='text-sm font-medium text-gray'>{moment(data).format('D/M/YYYY')}</p>
            )
        }
    }



  return (
    <Show />
  )
}

export default DateFormate