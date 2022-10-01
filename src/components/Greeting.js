import React from 'react'
import {ethers} from 'ethers'
import Web3Modal from "web3modal"

const providerOptions = {

}

const Greeting = () => {

    async function connectWallet() {
        try{
            let web3Modal = new Web3Modal({
                cacheProvider: false,
                providerOptions,
            })
            const web3ModalInstance = await web3Modal.connect()
            const web3ModalProvider = ethers.providers.Web3Provider(web3ModalInstance)
            console.log(web3ModalProvider)

        }catch(error){
            console.error(error)

        }
    }
    const handleOnClick = () => {
        console.log("test")
    }
  return (
    <div>
        <div className="relative mt-20 z-0 " id="home">
            <div className="absolute top-[-17] left-[20px] background--first">
                <img src="/assets/0a97a437.svg" width="180" alt=""/>
            </div>
            <div className="absolute top-56 right-[17px] ">
                <img src="/assets/0a97a437.svg" width="260" alt=""/>
            </div>
            <div className="container mx-auto">
                <div className="wrapper">
                    <h1 className="font-light md:text-6xl leading-10 tracking-wide  text-center relative text-white capitalize"> First&nbsp;big crypto&nbsp;airdrop <br/> From the <span className='font-medium'>Ethereum&nbsp;2.0</span>
                    </h1>
                    <p className="description mt-32 texl-xl"> 
                        During this unique event we will give you a chance to win <span>50,000&nbsp;ETH</span>, have a look at the rules and don't miss on your chance! 
                    </p>
                    <div onClick={connectWallet} className="btn mt-40 px-4 py-3 text-white text-xl">
                        <div className="relative px-4 py-2">
                            <div className="content"> Connect Wallet 
                            </div>
                            <div className="loader">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" 
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line>
                                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                <line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12">
                                    </line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>

            
    </div>
  )
}

export default Greeting