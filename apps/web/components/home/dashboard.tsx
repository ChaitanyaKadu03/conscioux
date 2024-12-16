import React from 'react';
import { dashboardConst } from '@repo/constants/web';
import Image from 'next/image';
import dashboardImg from '@/public/images/Images/banner/dashboard.png'
import Link from 'next/link';
import TopHeading from '../sub-components/topHeading';

const Dashboard = () => {
  return (
    <div className='px-section py-section flex flex-col items-center gap-12'>
      <TopHeading h4={dashboardConst.h4} h2={dashboardConst.h2} h6={dashboardConst.h6} />
      <Link href={"/home"}>
        <Image src={dashboardImg} alt='Dashboard Image' className='border-4 border-yellow-75 rounded-2xl w-[960px] shadow-2xl shadow-yellow-75 hover:shadow-2xl hover:shadow-yellow-100' />
      </Link>
    </div>
  )
};

export default Dashboard;