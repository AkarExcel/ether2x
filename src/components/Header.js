import React from 'react'

const Header = () => {
  return (
    <header className="z-1 flex pt-9 ">
        <div className="absolute top-0 z-[-1] left-[50%] translate-x-[-50%] ">
            <img src="/assets/8deee7ce.svg" alt="LOGO"/>
        </div>
        <div className="py-0 px-9 max-w-5xl w-full mx-auto my-0 ">
            <div className="grid grid-cols-[1fr_auto_1fr]  items-center gap-32 ">
                <nav className="justify-end">
                    <ul className='flex text-[#aab198] text-xl font-light gap-24 duration-200 transition-colors  '>
                        <li><a aria-current="page" href="/#about-event" className="active:text-white ">About</a></li>
                        <li><a aria-current="page" href="/#participate" className="active:text-white ">Participate</a></li>
                    </ul>
                </nav>
                <a aria-current="page" href="/#home" className="active:text-white  logo">
                    <img src="/assets/7100befa.svg" width="200" alt=""/>
                </a>
                <nav className="justify-end">
                    <ul className='flex text-[#aab198] text-xl font-light gap-24 duration-200 transition-colors'>
                        <li><a aria-current="page" href="/#transactions" className="active:text-white ">Transactions</a></li>
                        <li><a aria-current="page" href="/#faq" className="active:text-white ">FAQ</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header