import React from 'react'
import HeroSection from '../component/homePage/HeroSection'
import HowToStart from '../component/homePage/HowToStart'
import Categorys from '../component/homePage/Categorys'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CarSLider from '../component/homePage/CarSLider';
import PeopleSayAbuoyUs from '../component/homePage/PeopleSayAbuoyUs';
import { BlogHome } from '../component/homePage/BlogHome';
import Partners from '../component/homePage/Partners';

const queryClient = new QueryClient();


const HomePage:React.FC = () => {
  return (
    <div className='min-h-screen'>
      <QueryClientProvider client={queryClient}>
      <HeroSection />
      <HowToStart />
      <Categorys />
      <CarSLider />
      <PeopleSayAbuoyUs />
      <BlogHome />
      <Partners />
      </QueryClientProvider>
    </div>
  )
}

export default HomePage