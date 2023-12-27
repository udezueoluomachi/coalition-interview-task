import { useState } from 'react'

function App() {

  return (
    <>
    <div className="w-full h-full bg-section-1 bg-no-repeat bg-cover bg-left-top">
      <header className="w-full h-12 md:h-16 px-4 lg:px-40 flex items-center justify-between text-white">
        <div className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-Logo bg-no-repeat bg-center bg-cover'></div>
        <div className='hidden lg:block'>
          <a href="#history" className='text-base mx-2 md:mx-6 hover:underline'>01. HISTORY</a>
          <a href="#team" className='text-base mx-2 md:mx-6 hover:underline'>02. TEAM</a>
        </div>
      </header>
      <div className="w-full text-center text-5xl md:text-9xl font-normal mt-32">
        <p className="text-gray-800">
          LOSANGELES
        </p>
        <p className="text-slate-700">
          MOUNTAINS
        </p>
      </div>
    </div>
    <div id="history" className="w-full h-full max-h-max bg-peak bg-no-repeat bg-cover bg-top bg-scroll">
      <header className="sticky top-0 bg-white w-full h-12 md:h-16 px-4 lg:px-40 flex items-center justify-between text-slate-700">
        <div className="flex w-max">
          <div>
            <div className='mx-1 rounded-full border border-slate-700 w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-Logo bg-no-repeat bg-center bg-cover'></div>
          </div>
          <div className="mx-1 w-full text-center text-md font-bold">
            <p className="text-gray-800">
              LOSANGELES
            </p>
            <p className="text-slate-700 mt-[-8px]">
              MOUNTAINS
            </p>
          </div>
        </div>
        <div className='hidden lg:block'>
          <a href="#history" className='text-base mx-2 md:mx-6 underline hover:no-underline'>01. HISTORY</a>
          <a href="#team" className='text-base mx-2 md:mx-6 underline hover:no-underline'>02. TEAM</a>
        </div>
      </header>
      <div className="px-4 lg:px-40">
        <div className="flex items-center mt-10">
          <p className="text-slate-700/55 text-5xl md:text-9xl font-semibold">01</p>
          <div className='md:translate-y-8'>
            <h2 className="font-bold text-slate-700 text-lg">HISTORY</h2>
            <div className="h-[10px] w-[10px] bg-slate-700/55"></div>
          </div>
        </div>
        <p className="ml-8 md:ml-20 text-gray">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus quis eum nihil explicabo doloremque perspiciatis commodi ea rem mollitia, fugiat temporibus illo sint voluptatum veniam atque itaque tempora? Possimus velit libero, commodi ipsam voluptatem corrupti, blanditiis aperiam fuga incidunt inventore consequuntur voluptates rem. Quod totam eos omnis cupiditate et.
        </p>
      </div>
    </div>
    </>
  )
}

export default App
