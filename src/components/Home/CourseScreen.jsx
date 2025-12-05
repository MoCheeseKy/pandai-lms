import React from 'react';
import ListCard from '../_shared/ListCard';

import { ChevronRight } from 'lucide-react';

export default function CoursesScreen() {
  return (
    <div className='px-6 pb-24 pt-6'>
      <h1 className='text-[28px] font-bold mb-8 flex items-center gap-2 bg-linear-to-r from-black via-[#003EC0] to-[#003EC0] bg-clip-text text-transparent'>
        Mau belajar apa hari ini?{' '}
        <div className='bg-logo-only bg-cover bg-no-repeat w-8 aspect-42/34 inline-block animate-bounce'></div>
      </h1>

      <h3 className='font-bold bg-linear-to-r from-black to-[#003EC0] bg-clip-text text-transparent text-[22px] mb-4'>
        Direkomendasikan
      </h3>

      <div className='space-y-5 mb-8'>
        {COURSES.map((course) => (
          <div
            key={course.id}
            className='rounded-[1.5rem] overflow-hidden shadow-sm border border-gray-100 bg-white group hover:shadow-md transition-shadow'
          >
            <div className='p-5 flex justify-between items-center'>
              <div className='flex gap-4'>
                <div className='w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300'>
                  {course.icon}
                </div>

                <div>
                  <h4 className='font-bold text-sm text-[#0f0c29] mb-1'>
                    {course.title}
                  </h4>
                  <span className='bg-gray-100 text-gray-500 px-4 py-1 rounded-full text-xs font-medium'>
                    {course.progress}
                  </span>
                </div>
              </div>
              <button className='p-2 hover:bg-gray-50 rounded-full transition-colors'>
                <ChevronRight size={46} className='text-gray-600' />
              </button>
            </div>

            <button className='w-full bg-linear-to-b from-black to-[#0041C9] text-white py-4 px-5 flex justify-between items-center hover:bg-[#003B7B] transition-colors'>
              <span className='text-xs font-bold tracking-wide'>
                {course.nextChapter}
              </span>
            </button>
          </div>
        ))}
      </div>

      <h3 className='font-bold bg-linear-to-r from-black to-[#003EC0] bg-clip-text text-transparent text-[22px] mb-4'>
        Semua Mata Pelajaran
      </h3>
      <div className='flex flex-col gap-4'>
        {[
          'Bahasa Indonesia',
          'Bahasa Inggris',
          'Pendidikan Kewarganegaraan',
        ].map((sub, idx) => (
          <React.Fragment key={idx}>
            <ListCard
              title={sub}
              description='0/12 bab dipelajari'
              icon={idx === 0 ? 'BIN' : idx === 1 ? 'BING' : 'PKN'}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const COURSES = [
  {
    id: 1,
    title: 'Matematika wajib',
    progress: '3/12 bab dipelajari',
    nextChapter: 'Lanjutkan Bab 3 : Fungsi',
    icon: 'MW',
    color: 'blue',
  },
  {
    id: 2,
    title: 'Fisika',
    progress: '2/12 bab dipelajari',
    nextChapter: 'Lanjutkan Bab 2 : konsep dasar kinematika...',
    icon: 'FI',
    color: 'indigo',
  },
];
