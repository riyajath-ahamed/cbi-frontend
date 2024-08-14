import React from 'react'

const Whatwedomodal = ({ feature, closeModal }) => {
  return (
    <div>
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="absolute h-14 w-14 -left-4 -top-4">
        ijiwjisjiwij
      </div>
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-lg bg-white">
          <div className="w-full text-center">
            <div className="m-8 my-20 max-w-[400px] mx-auto">
              <div className="mb-8">
                <h1 className="mb-2 text-xl font-medium">
                {feature.name}
                </h1>
                <hr className="w-20 mx-auto my-1 border-1 border-primary" />
                <p className="text-gray-500 text-base my-3 ">
                {feature.description}
                </p>
              </div>
              <div className="space-y-4">
                <button className=" text-primary hover:text-green-700 font-medium hover:bg-gray-200 py-2 px-6 rounded-md hover:cursor-pointer  transition-all duration-400"
                    onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedomodal