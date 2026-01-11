import Title from '@/components/_shared/Title';
import ListCard from '@/components/_shared/ListCard';
import DummyDataSets from '@/pages/dummyDatas';
import Link from 'next/link';

import TruncateText from '@/lib/TruncateText';
import { useRouter } from 'next/router';

export default function Course() {
  const Router = useRouter();
  const { courseName } = Router.query;

  return (
    <div className='flex flex-col h-screen w-full bg-[#FBFCFF] font-sans overflow-hidden relative pt-12'>
      <div className='flex-1 overflow-y-auto no-scrollbar relative scroll-smooth px-6'>
        <div className=' pb-6 pt-6'>
          <Title>
            {courseName
              ?.replace(/-/g, ' ')
              ?.replace(/\b\w/g, (l) => l.toUpperCase())}
          </Title>
        </div>
        <div className='flex justify-center'>
          <div className='w-[232px] aspect-square bg-ind-icon bg-cover bg-no-repeat'></div>
        </div>
        <Title level='h3' mb='mb-4 mt-4'>
          Daftar Materi
        </Title>
        <div className='flex flex-col gap-4'>
          {DummyDataSets?.map((course) => {
            return (
              course?.title ===
                courseName
                  ?.replace(/-/g, ' ')
                  ?.replace(/\b\w/g, (l) => l.toUpperCase()) &&
              course?.chapters?.map((chapter) => (
                <Link
                  key={chapter?.chapterId}
                  href={`/${courseName}/${chapter?.chapterId}`}
                >
                  <ListCard
                    title={TruncateText(chapter?.chapterTitle, 4)}
                    description={`${chapter?.status}`}
                    icon={course?.icon}
                  />
                </Link>
              ))
            );
          })}
        </div>
      </div>
    </div>
  );
}
