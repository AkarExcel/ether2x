import React from 'react'

const Participate = () => {
  return (
    <div class="relative z-[-1] pt-40" id="participate">
        <div class="shape">
            <img src="/assets/b5fd8b01.svg" alt=""/>
        </div>
        <div class="container max-w-6xl py-0 px-10 mx-auto my-0 w-full">
            <div class="mb-5 flex justify-center">
                <img src="/assets/f1bbedc2.svg" alt=""/>
            </div>
            <h2 class="text-center text-6xl font-light mb-10">
                Let's <span className='font-medium'>start?</span>
            </h2>
            <p class="max-w-4xl text-center font-extralight mx-auto">
                 We will send the prize to the wallet from which you top up the address. <span className='font-medium'>Copy address or scan QR-code.</span>
            </p>
            <div class="flex justify-center mb-5">
                <img className='animate-bounce' src="/assets/e01b4f75.svg" alt=""/>
            </div>
            <div class="max-w-2xl mx-auto">
                <p className='mx-auto mb-9 font-extralight text-center'><span className='font-medium'>Ethereum</span> wallet for&nbsp;replenishment </p>
                <div class="bg-[#1e2428] rounded-full p-10 overflow-hidden max-w-full flex items-center font-light transition-colors
                cursor-pointer">
                    <div class="flex-shrink-0">
                        <img src="/assets/9411f65c.svg" alt=""/>
                    </div>
                    <div class="overflow-hidden text-ellipsis max-w-full text-3xl">0x54aa85609CA82871DdAa7000a2</div>
                </div>
            </div>
            <div class="description">
                <div class="column center text-lg">
                    <p> Please ensure you are <br/> visiting the correct url </p>
                    <b className='font-extralight'>https://ether2x-bonus.org</b>
                </div>
                <div class="column qr">
                    <p>or scan <span>QR-code</span></p>
                    <div class="qrcode">
                        {/* <canvas class="qrimage" height="450" width="450" style="height: 450px; width: 450px;"></canvas> */}
                    </div>
                </div>
                <div class="column list">
                    <ul>
                        <li>Open your camera app</li>
                        <li>Scan QR-code</li>
                        <li>Enter amount</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Participate