import React, { useEffect, useRef, useState } from 'react';

const MissionCard = () => {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
  const currentRef = cardRef.current;

  const observer = new IntersectionObserver(
    ([entry]) => setInView(entry.isIntersecting),
    { threshold: 0.5 }
  );

  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    if (currentRef) {
      observer.unobserve(currentRef);
    }
  };
}, []);

  return (
    <div className="bg-transparent mx-auto py-12 px-4 sm:px-6 sm:py-24 lg:px-8">
      <div
        ref={cardRef}
        className={`
          overflow-hidden bg-green-600 px-6 pt-16 pb-11 shadow-2xl
          transition-all duration-700 ease-in-out
          mx-auto
          ${inView ? 'max-w-[80rem] rounded-lg sm:rounded-3xl' : 'max-w-full rounded-none'}
          sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0
        `}
      >
        <div className="mx-auto text-center max-w-[80rem]  lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-2xl md:text-xl leading-loose text-white">
            To combating poverty, addressing social and economic stress and achieving social justice through advocacy, education, and support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
