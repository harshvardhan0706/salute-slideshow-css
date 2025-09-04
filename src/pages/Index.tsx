import React from 'react';
import TeachersCarousel from '@/components/TeachersCarousel';
import TeachersWishes from '@/components/TeachersWishes';

const Index = () => {
  return (
    <main className="min-h-screen">
      <TeachersCarousel />
      <TeachersWishes />
    </main>
  );
};

export default Index;
