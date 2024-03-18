import React from 'react'

function FormValidator({message}:any) {
  return (
    <div className="  text-red font-light -mt-4 ml-[2px]">
               {message}
        </div>
  )
}

export default FormValidator