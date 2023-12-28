import { useRef, useState} from "react"

function App() {
  const mountain1 = useRef()
  const mountain2 = useRef()
  const toggler1 = useRef()
  const toggler2 = useRef()
  const [mountain, setMountain] = useState("mountain-1")

  const toggleMountain = (event) => {
    let mount1 = mountain1.current, mount2 = mountain2.current;
    let tog1 = toggler1.current, tog2 = toggler2.current;
    if(mountain === "mountain-1") {
      tog1.classList.remove("bg-slate-400/55", "text-slate-900/75", "underline")
      tog2.classList.add("bg-slate-400/55", "text-slate-900/75", "underline")
      mount1.style.display = "none";
      mount2.style.display = "block";
      setMountain("mountain-2");
    }
    else {
      tog1.classList.add("bg-slate-400/55", "text-slate-900/75", "underline")
      tog2.classList.remove("bg-slate-400/55", "text-slate-900/75", "underline")
      mount2.style.display = "none";
      mount1.style.display = "block";
      setMountain("mountain-1");
    }
  }

  return (
    <>
    <div className="w-full h-full bg-section-1 bg-no-repeat bg-cover bg-left-top">
      <header className="w-full h-12 md:h-16 px-4 lg:px-40 flex items-center justify-between text-white">
        <a href="#" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-Logo bg-no-repeat bg-center bg-cover'></a>
        <div className='hidden lg:block'>
          <a href="#history" className='text-base mx-2 md:mx-6 hover:underline'>01. HISTORY</a>
          <a href="#team" className='text-base mx-2 md:mx-6 hover:underline'>02. TEAM</a>
        </div>
        <div className='lg:hidden dropdown'>
          <a href="javascript:void(0)" className='dropbtn text-base mx-2 md:mx-6 hover:underline'>MENU</a>
          <div className="dropdown-content">
            <a href="#history" className='text-base mx-2 md:mx-6 hover:underline'>01. HISTORY</a>
            <a href="#team" className='text-base mx-2 md:mx-6 hover:underline'>02. TEAM</a>
          </div>
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
    <div id="history" className="w-full h-[800px] bg-peak bg-no-repeat bg-cover bg-top bg-scroll">
      <header className="sticky top-0 bg-white w-full h-12 md:h-16 px-4 lg:px-40 flex items-center justify-between text-slate-700 z-10">
        <a href="#" className="flex items-center w-max">
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
        </a>
        <div className='hidden lg:block'>
          <a href="#history" className='text-base mx-2 md:mx-6 underline hover:no-underline'>01. HISTORY</a>
          <a href="#team" className='text-base mx-2 md:mx-6 underline hover:no-underline'>02. TEAM</a>
        </div>
        <div className='lg:hidden dropdown'>
          <a href="javascript:void(0)" className='dropbtn text-base mx-2 md:mx-6 hover:underline'>MENU</a>
          <div className="dropdown-content">
            <a href="#history" className='text-base mx-2 md:mx-6 hover:underline'>01. HISTORY</a>
            <a href="#team" className='text-base mx-2 md:mx-6 hover:underline'>02. TEAM</a>
          </div>
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
      <div id="team" className="w-full min-h-[600px] bg-slate-900/75 mt-96 pt-10">
        <div className="w-full max-w-[900px] h-[140px] flex border-white overflow-x-auto snap-x snap-proximity mx-auto no-scrollbar">
          <div className="flex-shrink-0 snap-center w-[280px] h-full mx-2 bg-no-repeat bg-cover bg-center bg-carousel-1"></div>
          <div className="flex-shrink-0 snap-center w-[280px] h-full mx-2 bg-no-repeat bg-cover bg-center bg-carousel-2"></div>
          <div className="flex-shrink-0 snap-center w-[280px] h-full mx-2 bg-no-repeat bg-cover bg-center bg-carousel-1"></div>
          <div className="flex-shrink-0 snap-center w-[280px] h-full mx-2 bg-no-repeat bg-cover bg-center bg-carousel-2"></div>
          <div className="flex-shrink-0 snap-center w-[280px] h-full mx-2 bg-no-repeat bg-cover bg-center bg-carousel-1"></div>
          <div className="flex-shrink-0 snap-center w-[280px] h-full mx-2 bg-no-repeat bg-cover bg-center bg-carousel-2"></div>
          <div className="flex-shrink-0 snap-center w-[280px] h-full mx-2 bg-no-repeat bg-cover bg-center bg-carousel-1"></div>
        </div>
        <div className="w-full flex justify-between items-start md:items-center flex-col md:flex-row min-h-40 bg-white mt-10 py-4 px-4 lg:px-40">
          <div className="flex items-center">
            <p className="text-slate-700/55 text-5xl md:text-9xl font-semibold">02</p>
            <div className='md:translate-y-8'>
              <h2 className="font-bold text-slate-700 text-lg">CLIMB</h2>
              <div className="h-[10px] w-[10px] bg-slate-700/55"></div>
            </div>
          </div>
          <p className="ml-8 md:ml-20 text-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus quis eum nihil explicabo doloremque perspiciatis commodi ea rem mollitia, fugiat temporibus illo sint voluptatum veniam atque itaque tempora? Possimus velit libero, commodi ipsam voluptatem corrupti, blanditiis aperiam fuga incidunt inventore consequuntur voluptates rem. Quod totam eos omnis cupiditate et.
          </p>
        </div>
        <div className="w-full flex h-10 px-4 lg:px-40 text-slate-400/55">
          <a href="#link" ref={toggler1} onClick={toggleMountain} className="p-2 font-bold bg-slate-400/55 text-slate-900/75 hover:bg-slate-400/55 hover:text-slate-900/75 w-max h-max hover:underline underline">MOUNTAIN 1</a>
          <a href="#link" ref={toggler2} onClick={toggleMountain} className="p-2 font-bold hover:bg-slate-400/55 hover:text-slate-900/75 w-max h-max hover:underline">MOUNTAIN 2</a>
        </div>
        <div ref={mountain1} className="w-full h-[400px] bg-last-section-tab-1 bg-no-repeat bg-cover bg-center pt-10 px-4 lg:px-48">
          <div className="w-max min-w-[290px] flex justify-between flex-col bg-white/55 py-2 px-4">
            <p className="text-2xl text-slate-700 font-bold" >SCHEDULE</p>
            <div>
              <div className="w-full flex justify-between text-base">
                <p>25 Nov 2016</p>
                <p>Vestibulum viverra</p>
              </div>
              <div className="w-full flex justify-between text-base">
                <p>26 Nov 2016</p>
                <p>Vestibulum viverra</p>
              </div>
            </div>
            <div className="w-full flex justify-between text-base">
              <p>18 Dec 2016</p>
              <p>Vestibulum viverra</p>
            </div>
            <div className="w-full flex justify-between text-base">
              <p>7 Jan 2017</p>
              <p>Vestibulum viverra</p>
            </div>
          </div>
        </div>
        <div ref={mountain2} className="hidden w-full h-[400px] bg-last-section-tab-2 bg-no-repeat bg-cover bg-center pt-10 px-4 lg:px-48">
          <div className="w-max min-w-[290px] flex justify-between flex-col bg-white/55 py-2 px-4">
            <p className="text-2xl text-slate-700 font-bold" >SCHEDULE</p>
            <div>
              <div className="w-full flex justify-between text-base">
                <p>25 Nov 2016</p>
                <p>Vestibulum viverra</p>
              </div>
              <div className="w-full flex justify-between text-base">
                <p>26 Nov 2016</p>
                <p>Vestibulum viverra</p>
              </div>
            </div>
            <div className="w-full flex justify-between text-base">
              <p>18 Dec 2016</p>
              <p>Vestibulum viverra</p>
            </div>
            <div className="w-full flex justify-between text-base">
              <p>7 Jan 2017</p>
              <p>Vestibulum viverra</p>
            </div>
          </div>
        </div>
        <footer className="sticky top-0 w-full h-12 md:h-16 px-4 lg:px-40 flex items-center justify-between text-slate-700 z-10">
          <a href="#" className="mix-blend-color text-slate-700 flex items-center w-max">
            <div>
              <div className='invert opacity-25 mx-1 rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-Logo bg-no-repeat bg-center bg-cover'></div>
            </div>
            <div className="mx-1 w-full text-center text-md font-bold">
              <p className="text-gray-800">
                LOSANGELES
              </p>
              <p className="text-slate-700 mt-[-8px]">
                MOUNTAINS
              </p>
            </div>
          </a>
          <p classname="text-slate-700/55">
            COPYRIGHT 2024, ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>
    </div>
    </>
  )
}

export default App
