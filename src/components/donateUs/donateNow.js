import React from 'react';

const DonatePage = () => {
  return (
    <div className="items-center lg:px-20 px-5 md:px-10 sm:px-10">
      <div className="text-center my-10 lg:px-20 px-5 text-[#464646]">
        <h1 className="text-3xl font-bold text-[#313131]">Help us to Change a Life Today</h1>
        <p className="mt-10 lg:mt-4 md:text-lg xl:text-lg lg:text-lg leading-loose text-[16px]">
          Your donation empowers children and women with essential resources, education, and support, helping them break
          the cycle of poverty and build brighter, more hopeful futures for themselves and their communities.
        </p>
      </div>

      <div className="w-full flex justify-center mt-20">
        <div className="relative">
          <iframe
            className="w-[380px] h-[226px] lg:w-[720px] lg:h-[405px] xl:w-[720px] h-[405px]"
            src="https://www.youtube.com/embed/EVkA8WWMCss"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className='bg-[#F1F1F1] lg:pb-20 pt-10 mt-20 lg:px-10 sm:px-7 md:px-7 rounded-[7px] mb-[60px] h-[1240px] lg:h-[740px] sm:h-[1200px] md:h-[750px]'>
        <div className='text-center px-8 mt-[20px]'>
            <h1 className='text-2xl font-bold text-green-600'>How to Donate ?</h1>
            <p className='text-[16px] xl:lg:text-lg lg:text-lg mt-[20px] leading-loose mb-[70px]'>There are two ways you can donate to us. First, by depositing money into our bank account, and second, by
            clicking the ‘Donate Now’ button in the right box.</p>
        </div>
        <div className='mt-[40px] twoBoxes flex flex-col md:flex-row justify-center gap-8 mb-20px items-center lg:items-none'>
        <div className="text-center px-4 bg-white rounded-[5px] lg:w-[450px] pt-3 pb-7 w-[300px]">
        <h3 className="text-[24px] font-bold mb-3 mt-[20px] text-[#4A4A4A]">Bank Deposits</h3>
        <p className='text-[16px] leading-loose text-[#7F7F7F]'>
            <p className='mb-[10px] text-[18px] font-semibold text-[#4A4A4A]'>Australia</p>
            M.M.M. De josh
            <br />
            001122321
            <br />
            Commonwealth Bank - Sydney
        </p>
        <p className='mt-6 mb-6 text-[16px] leading-loose text-[#7F7F7F]'>
            <p className='mb-[10px] text-[18px] font-semibold text-[#4A4A4A]'>Sri Lanka</p>
            M.M.M. De josh
            <br />
            001122321
            <br />
            Commonwealth Bank - Sydney
        </p>
        </div>
        <div className="text-center lg:px-7 px-6 bg-white rounded-[5px] lg:w-[450px] pt-3 lg:pb-7 w-[300px] h-[430px] md:h-[440px] mb-17 lg:mb-0">
        <h3 className="text-[24px] font-bold mb-3 mt-[20px] text-[#4A4A4A]">GoFundMe</h3>
        <p className="mb-5 lg:mb-[69px] md:mb-[12px] sm:mb-2 leading-loose text-[#747474]">
                GoFundMe is a secure online fundraising platform which offers global donation support.<br/>
                No matter the
                size, your donation helps make a significant difference, bringing hope and opportunity to those who need
                it most, and advancing our cause to change lives for the better.
        </p>
        <button className="bg-green-500 border-green-500 text-white border-2 px-8 py-2 cursor-pointer rounded-md transition-all duration-200 hover:text-[#509F6C] hover:bg-white hover:border-2 hover:border-[#509F6C]">
          Donate
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
