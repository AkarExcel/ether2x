import React from 'react'

const About = () => {
  return (

    <div class="relative" id="about-event">
        <div class="absolute select-none z-[1] top-40 pointer-events-none left-0 ">
            <img src="./assets/77ebf08a.svg" alt=""/>
        </div>

        <div class="relative mx-auto w-full max-w-6xl">
            <h2 className='text-center font-medium text-4xl mb-10'>About Airdrop</h2>
            <div class="wrapper wrapper__mobile ">
                <div class="absolute md:left-80 top-10 left-20 pointer-events-none select-none">
                    <img src="./assets/4fd7c65a.svg" width="45" alt=""/>
                </div>
            <div class=" top-20 left-30 pt-20 py-10 px-14 max-w-xl ">
            <p className='text-md'> During this unique event we will give you a chance to win <span>50,000&nbsp;ETH</span>, have a look at the rules and don't miss on your chance! <br/><br/> To participate you just need to send from <span>0.5+&nbsp;ETH</span> to <span>500+&nbsp;ETH</span> to the contribution address and we will immediately send you back from <span>1+&nbsp;ETH</span> to <span>1,000+&nbsp;ETH</span> (x2) to the address you sent it from. </p>
            <small className='mt-10 font-[100] block opacity-50'>Vitalik Buterin, co-founder of the Ethereum project</small>
                
            </div>
            </div>
        </div>
    </div>
   
  )
}

export default About