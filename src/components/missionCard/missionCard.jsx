import React from 'react'

const MissionCard = () => {
  return (
      <div className=" bg-transparent mx-auto max-w-7xl py-12 px-4 sm:px-6 sm:py-24 lg:px-8">
        <div className=" overflow-hidden bg-green-600 px-6 pt-16 pb-16 shadow-2xl rounded-lg sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto  text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Mission
            </h2>
            <p className="mt-6 text-xl md:text-2xl leading-8 text-white">
            To combating poverty, addressing social and economic stress and achieving social justice through advocacy, education, and support.
            </p>
          </div>
        </div>
      </div>
  )
}

export default MissionCard