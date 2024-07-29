import React from 'react'

const Whatwedomodal = ({ feature, closeModal }) => {
  return (
    <div>
      <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div class="absolute h-14 w-14 -left-4 -top-4">
        ijiwjisjiwij
      </div>
        <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-lg bg-white">
          <div class="w-full text-center">
            <div class="m-8 my-20 max-w-[400px] mx-auto">
              <div class="mb-8">
                <h1 class="mb-4 text-xl font-semibold">
                {feature.name}
                </h1>
                <hr class="w-20 mx-auto my-1 border-2 border-primary" />
                <p class="text-gray-600 text-base ">
                {feature.description}
                </p>
              </div>
              <div class="space-y-4">
                <button class=" text-primary font-medium hover:bg-gray-200 py-2 px-6 rounded-md hover:cursor-pointer  transition-all duration-400"
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