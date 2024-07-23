import React from 'react'
import { FaBriefcase } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const stats = [
    { id: 1, name: 'Projects Done', value: '10 +', icon:<FaBriefcase /> },
    { id: 2, name: 'Active Members', value: '100 +' , icon:<FaUsers /> },
    { id: 3, name: 'Contries', value: '3 +', icon:<BiWorld /> },
  ]


  // TODO :  - Fix the Icon size and alignment

const OurImpact = () => {
  return (
    <div id='ourimpact'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Our Impact</h1>
            <p className='text-lg mt-6  text-gray-600'>
            In 2023, we worked around the world, contributing to help children, fighting poverty, and increasing social justice.
            </p>
        </div>
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white">
                    {stat.icon}
                </div>
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
  )
}

export default OurImpact