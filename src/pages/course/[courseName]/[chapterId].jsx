import React, { useState } from 'react';
import { Play } from 'lucide-react';
import ListCard from '@/components/_shared/ListCard';

// 1. IMPORT DATA DARI FILE YANG SUDAH ADA
import DummyDataSets from '@/pages/dummyDatas';

const CourseDetail = () => {
  // State untuk handle accordion video (default true/terbuka)
  const [isVideoOpen, setIsVideoOpen] = useState(true);

  return (
    <div className='min-h-screen bg-gray-50 p-6 font-sans max-w-md mx-auto'>
      {/* Header Back Button & Title */}
      <div className='flex items-center mb-8'>
        <button className='mr-4 text-gray-400 hover:text-gray-800'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M15 18L9 12L15 6' />
          </svg>
        </button>
        <h1 className='text-2xl font-bold text-[#0f0c29]'>Bab 3 : Fungsi</h1>
      </div>

      {/* 2. LOOPING DATA DARI DummyData.js */}
      <div className='flex flex-col gap-2'>
        {DummyDataSets.map((item, index) => {
          // --- LOGIKA KHUSUS UNTUK CARD VIDEO ---
          // Kita cek apakah judulnya mengandung kata "Video".
          // (Sesuaikan kondisi ini dengan data kamu, misal: item.type === 'video' atau id === 1)
          const isVideoCard = item.title.toLowerCase().includes('video');

          if (isVideoCard) {
            return (
              <ListCard
                key={index} // atau item.id
                title={item.title}
                description={item.status || 'Dipelajari'} // Fallback jika key beda
                variant='extended'
                isOpen={isVideoOpen}
                onClick={() => setIsVideoOpen(!isVideoOpen)}
                // Note: Kita TIDAK pass props icon, supaya layout geser kiri
              >
                {/* 3. CONTENT JSX (VIDEO PLAYER) MASUK VIA CHILDREN */}
                {isVideoOpen && (
                  <div className='px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300'>
                    <div className='relative w-full rounded-2xl overflow-hidden aspect-video bg-gray-200 group cursor-pointer shadow-inner'>
                      {/* Thumbnail Image */}
                      <img
                        src='https://images.unsplash.com/photo-1577896332409-7e388eb16166?q=80&w=800&auto=format&fit=crop'
                        alt='Video Thumbnail'
                        className='w-full h-full object-cover opacity-90'
                      />

                      {/* Play Button Overlay */}
                      <div className='absolute inset-0 flex items-center justify-center bg-black/20'>
                        <div className='w-14 h-14 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform'>
                          <Play fill='white' className='text-white w-6 h-6' />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className='absolute bottom-3 left-3 px-2 py-1 bg-black/70 rounded text-[10px] font-bold text-white'>
                        03:12
                      </div>
                    </div>
                  </div>
                )}
              </ListCard>
            );
          }

          // --- LOGIKA UNTUK ITEM LAIN (PPT, TUGAS, GAME) ---
          return (
            <ListCard
              key={index} // atau item.id
              title={item.title}
              description={item.status || 'Dikerjakan'}
              variant='default'
              // Note: Kita TIDAK pass props icon, supaya layout geser kiri
            />
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetail;
