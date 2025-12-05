import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ListCard({ title, description, onClick, icon }) {
  return (
    <div className='bg-[linear-gradient(to_right,#E2EBFF,#FFFFFF,#FFFFFF,#FFFFFF)] p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-primary-blue transition-colors cursor-pointer group'>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform'>
          {icon}
        </div>
        <div>
          <h4 className='font-bold text-sm text-[#0f0c29] mb-1'>{title}</h4>
          <span className='bg-gray-100 text-gray-500 px-4 py-1 rounded-full text-xs font-medium'>
            {description}
          </span>
        </div>
      </div>
      <ChevronRight
        onClick={onClick}
        size={20}
        className='text-gray-300 group-hover:text-primary-blue'
      />
    </div>
  );
}
