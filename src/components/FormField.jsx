import React from 'react'

const FormField = ({ labelName, type, name, value, placeholder, handleChange, isSuprise, handleSupriseMe }) => {
  return (
    <div>
      <div className='flex item-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {
          isSuprise && (
            <button 
              type='button'
              onClick={handleSupriseMe}
              className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'
            >
              Suprise Me
            </button>
          )
        }
        </div>
        <input
            type={type}
            name={name}
            labelName={name}
            placeholder={placeholder}
            value={value}
            handleChange={handleChange}
            required
            className='bg-gray-50 border border-gray-300 text-gray-900 text-semibold rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outlined-none block-w-full p-3'
          >
        </input>
    </div>
  )
}

export default FormField