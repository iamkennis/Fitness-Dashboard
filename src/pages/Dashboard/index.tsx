import { HiHome } from 'react-icons/hi'
import {IoIosChatboxes,IoMdSettings} from 'react-icons/io'
import {RiCompassDiscoverFill} from 'react-icons/ri'
import {CgGym} from 'react-icons/cg'
import {MdLocalActivity, MdAccountBalanceWallet} from 'react-icons/md'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import Items from '../../components/Items'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

  const iconsData = [
    {
      icon: <HiHome/>,
    },
    {
      icon: <MdLocalActivity/>,
    },
    {
      icon: <CgGym/>,
    },
    {
      icon: <IoIosChatboxes/>,
    },
    {
      icon: <RiCompassDiscoverFill/>,
    },
    {
      icon: <IoMdSettings/>,
    },
    {
      icon: <MdAccountBalanceWallet/>,
    },
  ]
  
  const [selectedIndex, setSelectedIndex] = useState(0);



  return (
		<div className='flex flex-col md:flex-col lg:flex-row'>
			<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
				<Tab.List className='hidden h-full shadow md:hidden lg:block lg:w-32 lg:bg-white'>
					{iconsData.map((data, index) => (
						<Tab
							key={index}
							className={({ selected }) =>
								classNames(
									' my-8 mx-8 flex flex-col rounded-lg px-4 py-2 text-xl font-medium',
									'outline-none',
									selected
										? 'h-10 bg-[#FF844B] text-white shadow'
										: 'text-gray-400'
								)
							}>
							{data.icon}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel className=''>
						<Items />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}


