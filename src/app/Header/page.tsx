export default function Header() {
    return(
        <header className='flex shadow-md py-3 px-3 sm:px-5 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
        <a href="javascript:void(0)"><img src="data:image/jpeg;base64,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" alt="logo" className='w-36' />
        </a>

        <div id="collapseMenu"
          className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
              </a>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
              <a href='javascript:void(0)'
                className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</a>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Team</a>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Feature</a>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</a>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</a>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='flex max-lg:ml-auto space-x-4'>
          <button
            className='px-4 py-2 text-sm rounded-full font-bold text-gray-500 border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300'>Login</button>
          <button
            className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Sign
            up</button>

          <button id="toggleOpen" className='lg:hidden'>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    )
};