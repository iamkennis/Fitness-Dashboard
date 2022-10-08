import React from 'react'
import { AiOutlineBell, AiOutlinePlusCircle, AiFillFire } from 'react-icons/ai';
import { BiRun } from 'react-icons/bi'
import { IoIosWater } from 'react-icons/io'
import {FaHeartbeat} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {BsThreeDots} from 'react-icons/bs'
//Image Imports

import bar from '../../images/p2.svg'
import liter from '../../images/3c.svg';
import d4 from '../../images/d4.svg';
import h8 from '../../images/h8.svg';
import medal from '../../images/medal.svg';
import star from '../../images/star.svg';
// import prog from '../../images/prog.svg';
import man from '../../images/mangym.jpg';
import piman from '../../images/piman.jpg';
import wgym from '../../images/wgym.jpg';
import wp from '../../images/wp.jpg';
import friut from '../../images/friuts.jpg'
import egg from '../../images/egg.jpg';
import rungirl from '../../images/rungal.svg'
import fun from '../../images/fun.svg'
import fire from '../../images/fire.svg'
import cha from '../../images/cha3.svg'
import ruch from '../../images/ruch.svg'
import minch from '../../images/minch.svg';
import pra from '../../images/pra.svg';


import { BarChart } from '../Charts/Bar';
import { DoughnutChart } from '../Charts/Donuts';


export default function index() {

	//Specilist Mock Data
 const boxData = [
		{
			img: man,
			photo: piman,
			name: 'Cameron Williamson',
			title: 'Fitness Specialist',
			reward: medal,
			star: star,
			amostar: '104',
			amorew: '25',
		},
		{
			img: wgym,
			photo: wp,
			name: 'Sarah Jane',
			title: 'Fitness Specialist',
			reward: medal,
			star: star,
			amostar: '109',
			amorew: '70',
		},
 ];
	
	 const feaData = [
			{
				img: friut,
				title: 'Avocado salad',
			},
			{
				img: egg,
				title: 'Blueberry',
			},
		];

	 const sideData = [
			{
				img: rungirl,
				title: 'Running',
				subtitle: '70km/80km',
				photo: ruch
			},
			{
				img: medal,
				title: 'Sleeping',
				subtitle: '50hrs/60hrs',
				photo: fun
			},
			{
				img: fire,
				title: 'Weight Loss',
				subtitle: '70kg/100kg',
				photo: cha
			},
	 ];
	

	 const schData = [
			{

				title: 'Training - Yoga Class',
				
			},
			{
				
				title: 'Training - Swimming',
			},
		];

	return (
		<div className='grid w-full md:grid-cols-2 lg:grid-cols-12'>
			<div className='col-span-9 h-full w-full bg-[#E5E5E5] px-4 lg:px-4'>
				<div className='flex flex-col justify-between overflow-hidden md:flex-row lg:flex-row'>
					<span>
						<p className='text-[14] font-semibold text-gray-400'>
							Good Morning
						</p>
						<h1 className='text-xl font-bold text-black'>Welcome Back 🎉</h1>
					</span>
					<span className='flex flex-row items-center space-x-4 px-2'>
						<button className='rounded-md bg-[#FF844B] px-4 py-2 font-bold text-white shadow transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110'>
							Subscribe
						</button>
						<small className='text-2xl'>
							<AiOutlineBell />
						</small>
						<small className='text-2xl text-[#FF844B]'>
							<AiOutlinePlusCircle />
						</small>
					</span>
				</div>
				<div className='grid grid-cols-2 gap-4 overflow-hidden py-8 md:grid-cols-2 lg:grid-cols-4'>
					<div
						className='lg:px44 flex h-[170px]
max-w-xs flex-col items-center rounded-md bg-[#1AB0B4] py-4 md:max-w-xl  md:items-center lg:w-full'>
						<div className='px-4 lg:px-0 text-white'>
							<span className='text-md flex items-center space-x-2 font-bold'>
								<span className='text-md lg:text-xl'>
									<BiRun />
								</span>
								<h1>Steps</h1>
							</span>
							<span className='flex items-center space-x-2 py-4'>
								<strong className='text-xl lg:text-4xl '>2.500</strong>
								<p>Steps</p>
							</span>
							<span className='space-y-2'>
								<img src={bar} alt='icons' className='' />
								<p className='text-sm'>50% of your goals</p>
							</span>
						</div>
					</div>
					<div
						className='flex h-[170px] max-w-xs
flex-col items-center rounded-md bg-[#FF7443] py-4 md:max-w-xl md:items-center lg:w-full lg:px-4'>
						<div className='text-white px-4 lg:px-0'>
							<span className='text-md flex items-center space-x-2 font-bold'>
								<span className='text-xl'>
									<IoIosWater />
								</span>
								<h1>Water</h1>
							</span>
							<img src={liter} alt='icons' className='px-8 pt-4' />
						</div>
					</div>
					<div
						className='flex h-[170px] max-w-xs
flex-col items-center rounded-md bg-[#FA5A7D] py-4 md:max-w-xl md:items-center lg:w-full lg:px-4'>
						<div className='text-white px-4 lg:px-0'>
							<span className='text-md flex items-center space-x-2 font-bold'>
								<span className='text-xl'>
									<AiFillFire />
								</span>
								<h1>Calories</h1>
							</span>
							<div className='pt-3 ml-3 mx-2 lg:mx-8 lg:mt-4'>
								<img src={d4} alt='icons' className='ml-3 lg:ml-0 h-14 lg:h-12' />
								<p className='font-thin'>Today</p>
								<strong className='text-sm'>Under</strong>
							
							</div>
						</div>
					</div>
					<div
						className='flex h-[170px] max-w-xs
flex-col items-center rounded-md bg-[#8676FE] py-4 md:max-w-xl md:items-center lg:w-full lg:px-4'>
						<div className='text-white px-4 lg:px-0'>
							<span className='text-md flex items-center space-x-2 font-bold'>
								<span className='text-xl'>
									<FaHeartbeat />
								</span>
								<h1>Heart Rate</h1>
							</span>
							<img src={h8} alt='icons' className='mx-2 mt-4' />
							<span className=''>
								<strong>110</strong>
								<p className='font-thin'>Bpm</p>
							</span>
						</div>
					</div>
				</div>
				<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:flex-row'>
					<div className='h-[270] max-w-xs rounded-md bg-white px-4 py-4 md:max-w-xl lg:max-w-md'>
						<div className='flex flex-row justify-between space-x-8'>
							<p className='text-md font-semibold'>Activity</p>
							<select className='rounded-lg bg-gray-200 px-1 py-1.5 text-sm text-gray-500 outline-none'>
								<option>Weekly</option>
								<option>Monthly</option>
							</select>
						</div>
						<div className='mt-4'>
							<BarChart />
						</div>
					</div>
					<div className='h-[270] max-w-xs rounded-md bg-white px-4 py-4 md:max-w-xl lg:max-w-md'>
						<div className='flex flex-row justify-between space-x-8'>
							<p className='text-md font-semibold'>Progress</p>
							<select className='rounded-lg bg-gray-200 py-1.5 px-1 text-sm text-gray-500 outline-none'>
								<option>Weekly</option>
								<option>Monthly</option>
							</select>
						</div>
						<div className='flex flex-col items-center gap-4 lg:flex-row'>
							<div style={{ width: '40%' }}>
								<DoughnutChart />
							</div>
							<div className='space-x-4'>
								<ul className='divide-y divide-slate-200 p-6'>
									<li className='flex items-center py-4 first:pt-0 last:pb-0'>
										<div className='h-[8px] w-[8px] rounded-md bg-[#1AB0B0]'></div>
										<div className='ml-3 flex space-x-10'>
											<p className='text-sm font-medium text-slate-900'>
												Cardio
											</p>
											<p className='truncate text-left text-sm text-slate-500'>
												30hrs
											</p>
										</div>
									</li>
									<li className='flex items-center py-4 first:pt-0 last:pb-0'>
										<div className='h-[8px] w-[8px] rounded-md bg-[#FF844B]'></div>
										<div className='ml-3 flex space-x-6'>
											<p className='text-sm font-medium text-slate-900'>
												Stretching
											</p>
											<p className='truncate text-left text-sm text-slate-500'>
												40hrs
											</p>
										</div>
									</li>
									<li className='flex items-center py-4 first:pt-0 last:pb-0'>
										<div className='h-[8px] w-[8px] rounded-md bg-[#F85C7F]'></div>
										<div className='ml-3 flex space-x-8'>
											<p className='text-sm font-medium text-slate-900'>
												Treadmill
											</p>
											<p className='truncate text-left text-sm text-slate-500'>
												30hrs
											</p>
										</div>
									</li>
									<li className='flex items-center py-4 first:pt-0 last:pb-0'>
										<div className='h-[8px] w-[8px] rounded-md bg-[#8676FE]'></div>
										<div className='ml-3 flex space-x-8'>
											<p className='text-sm font-medium text-slate-900'>
												Strength
											</p>
											<p className='text-lefttext-sm truncate text-slate-500'>
												20hrs
											</p>
										</div>
									</li>
								</ul>
							</div>
							{/* <img src={prog} alt='icon' className='py-6 w-full' /> */}
						</div>
					</div>
				</div>
				<div className='py-8'>
					{/* <div className='flex flex-row justify-between py-4 font-bold'>
						<h1>Recomended Trainer for you</h1>
						<h1 className='px-48'>Featured Diet Menu</h1>
					</div> */}
					<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
						{boxData.map((data, index) => (
							<div
								className='relative h-[270] max-w-xs rounded-md bg-white px-4 py-8 md:col-auto md:max-w-xl lg:col-span-2 lg:max-w-md'
								key={index}>
								<img src={data.img} alt='man' className='w-full rounded-md' />
								<span className='relative bottom-8 left-4 lg:bottom-6'>
									<img
										src={data.photo}
										alt='man'
										className='h-[44px] w-10 rounded-md border-4 border-gray-100'
									/>
								</span>
								<div className='py-2 px-4'>
									<h1 className='font-semibold'>{data.name}</h1>
									<p className='text-sm text-gray-400'>{data.title}</p>
								</div>
								<div className='flex flex-row items-center justify-around'>
									<span>
										<img src={data.reward} alt='man' className='h-4' />
										<p>{data.amorew}</p>
									</span>
									<span>
										<img src={data.star} alt='man' className='h-4' />
										<p className='text-center'>{data.amostar}</p>
									</span>
									<a href='' className='text-sm text-purple-600'>
										View Profile
									</a>
								</div>
							</div>
						))}

						<div className='h-[270] max-w-xs rounded-md bg-white  px-4 py-4 md:col-auto md:max-w-xl lg:col-span-3 lg:max-w-md'>
							<div>
								<div className='flex max-w-md flex-row justify-between rounded-lg bg-gray-200 px-2 py-2'>
									<p className='text-md font-bold text-purple-500'>BreakFast</p>
									<p className='text-sm'>10:00 am</p>
								</div>
								<div className='mt-8'>
									{feaData.map((data, index) => (
										<div
											className='flex flex-row items-center gap-4'
											key={index}>
											<img
												src={data.img}
												alt='friut'
												className='h-14 w-14 rounded-full'
											/>
											<div className='py-4'>
												<h1 className='font-bold'>{data.title}</h1>
												<div className='flex gap-2'>
													<div className='flex items-center space-x-1'>
														<div className=' h-[8px] w-[8px] space-y-4 rounded-md bg-purple-500'></div>
														<p className='text-[14px] text-gray-400'>
															8% carbs
														</p>
													</div>
													<div className='flex items-center space-x-1'>
														<div className='h-[8px] w-[8px] space-y-4 rounded-md bg-[#FF7443]'></div>
														<p className='text-[14px] text-gray-400'>
															16% protein
														</p>
													</div>
													<div className='flex flex-row items-center space-x-1'>
														<div className='h-[8px] w-[8px] space-y-4 rounded-md bg-[#FA5A7D]'></div>
														<p className='text-[14px] text-gray-400'>6% Fat</p>
													</div>
												</div>
												<div className='grid grid-cols-7 gap-2'>
													<div className='col-span-2 h-2 max-w-md rounded-lg bg-purple-500'></div>
													<div className='col-span-3 h-2 max-w-md rounded-lg bg-[#FF7443]'></div>
													<div className='col-span-2 h-2 max-w-md rounded-lg bg-[#FA5A7D]'></div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-span-3 h-full w-full  bg-[#F4F5F5] px-4 lg:px-4'>
				<div className='group flex items-center gap-4 py-4 pl-4'>
					<img
						src={piman}
						alt='img'
						className='h-10 w-10 shrink-0 rounded-md'
					/>
					<div>
						<h1 className='text-[16px] font-bold'>Thomas Fletcher</h1>
						<span className='flex items-center space-x-1 text-[12px] font-light text-gray-400'>
							<ImLocation2 />
							<p>Sydney, Australia</p>
						</span>
					</div>
				</div>
				<div className='py-4'>
					<div className='flex h-full max-w-xs items-center justify-between space-x-8 rounded-md bg-white px-4 py-4 lg:w-full'>
						<div>
							<span className='flex'>
								<strong className='text-[16px]'>75</strong>
								<p className='text-slate-500'>kg</p>
							</span>
							<p className='text-[14px] text-slate-500'>Weight</p>
						</div>
						<div>
							<strong className='text-[16px]'>6.5</strong>
							<p className='text-[14px] text-slate-500'>Height</p>
						</div>
						<div>
							<span className='flex'>
								<strong className='text-[16px]'>25</strong>
								<p className='text-[14px] text-slate-500'>yrs</p>
							</span>
							<p className='text-slate-500'>Age</p>
						</div>
					</div>
				</div>
				<div>
					<h1 className='text-[14px] font-medium'>Your Goals</h1>
					<div className=''>
						{sideData.map((data, index) => (
							<div className='my-4 flex h-full max-w-xs items-center justify-between rounded-md bg-white px-4 py-3 lg:w-full'>
								<img src={data.img} alt='images' className='h-10' />
								<span>
									<p className='text-[14px] font-bold'>{data.title}</p>
									<p className='text-[12px] text-slate-500'>{data.subtitle}</p>
								</span>
								<img src={data.photo} alt='images' />
							</div>
						))}
					</div>
				</div>
				<div className=''>
					<h1 className=' text-[14px] font-medium'>Monthly Progress</h1>
					<div className='my-4 flex h-full max-w-xs flex-col items-center justify-between rounded-md bg-white px-4 py-3 lg:w-full'>
						<img src={minch} alt='' />
						<p className='px-8 py-4 text-[14px]'>
							You have achieved <em className='text-[#FF7443]'>80%</em> of your
							goal this month
						</p>
					</div>
				</div>
				<div>
					<h1 className='text-[14px] font-medium'>Scheduled</h1>
					<div className=''>
						{schData.map((data, index) => (
							<div className='my-4 flex h-full max-w-xs items-center justify-between rounded-md bg-white px-4 py-3 lg:w-full'>
								<img src={pra} alt='images' className='h-10 rounded-full' />
								<span>
									<p className='text-[12px] font-bold'>{data.title}</p>
									<p className='text-[12px] text-slate-500'>Fitness</p>
								</span>
								<span className='text-[12px] text-slate-400'>
									<small className='relative left-4 text-[14px]'>
										<BsThreeDots />
									</small>
									<p>22 Mar</p>
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
