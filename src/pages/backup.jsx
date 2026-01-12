import React from 'react';

import { ChevronRight } from 'lucide-react';

export default function ListCard({
  title,

  description,

  extendsDescription,

  onClick,

  icon,

  variant = 'default',
}) {
  if (variant === 'extended') {
    return (
      <div className='rounded-[1.5rem] overflow-hidden shadow-sm border border-gray-100 bg-white group hover:shadow-md transition-shadow'>
        <div className='p-5 flex justify-between items-center'>
          <div className='flex gap-4'>
            <div
              className={`w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 bg-cover bg-no-repeat ${icon}`}
            ></div>

            <div>
              <h4 className='font-bold text-sm text-[#0f0c29] mb-1'>
                {title || title}
              </h4>

              <span className='bg-gray-100 text-gray-500 px-4 py-1 rounded-full text-xs font-medium'>
                {description || description}
              </span>
            </div>
          </div>

          <button
            onClick={onClick}
            className='p-2 hover:bg-gray-50 rounded-full transition-colors'
          >
            <ChevronRight size={46} className='text-gray-600' />
          </button>
        </div>

        <button className='w-full bg-gradient-to-b from-black to-[#0041C9] text-white py-4 px-5 flex justify-between items-center hover:bg-[#003B7B] transition-colors'>
          <span className='text-xs font-bold tracking-wide'>
            {extendsDescription}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className='bg-[linear-gradient(to_right,#E2EBFF,#FFFFFF,#FFFFFF,#FFFFFF)] p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-primary-blue transition-colors cursor-pointer group'
    >
      <div className='flex items-center gap-4'>
        <div
          className={`w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner bg-cover bg-no-repeat ${icon}`}
        ></div>

        <div>
          <h4 className='font-bold text-sm text-[#0f0c29] mb-1'>{title}</h4>

          <span className='bg-gray-100 text-gray-500 px-4 py-1 rounded-full text-xs font-medium'>
            {description}
          </span>
        </div>
      </div>

      <ChevronRight
        size={20}
        className='text-gray-300 group-hover:text-primary-blue'
      />
    </div>
  );
}
