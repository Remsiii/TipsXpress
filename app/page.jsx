"use client";

import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import ClassicUserUI from "@components/ClassicUserUI";
import PayedUserUI from "@components/PayedUserUI";
import { useUser } from "@hooks/useUser";

const Home = () => {
    const { user } = useUser();

    return (

        <section >

            {user ? (
                <PayedUserUI />
            ) : (
                <ClassicUserUI />
            )
            }





            {/* <div class="fixed inset-0 flex flex-col bg-slate-800 z-40">
	<div class="flex justify-between items-center py-2 px-6 h-16 w-full bg-slate-900 text-white z-30 relative">
		<div class="flex flex-1">
			<h1 class="site-title m-0">
				<a href="https://cruip.com/" rel="home">
					<span class="sr-only">Cruip</span><svg width="28" height="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M28 14a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0" fill="#34D399"/><path d="M23.865 23.9a13.932 13.932 0 01-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 01-10.512-4.797A13.968 13.968 0 01.048 14c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0114 0c1.204 0 2.373.154 3.488.44a13.932 13.932 0 016.377 3.66l-4.933 4.95A6.942 6.942 0 0014 7c-3.852 0-6.976 3.134-6.976 7l.002.18C7.122 17.964 10.208 21 14 21c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z" fill="#6366F1" fill-rule="nonzero"/></g></svg>				</a>
			</h1>
		</div>
		<div class="hidden md:flex md:items-center">
			<button class="demo-preview-desktop is-active rounded-sm mx-2 flex items-center justify-center p-0 h-8 w-8" title="Desktop">
                <span class="sr-only">Desktop</span>
                <svg class="fill-current" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M10 27v-2h12v2z" /><path d="M6 7v14h20V7H6zm22-2v18H4V5h24z" /></svg>
            </button>
                <button class="demo-preview-mobile rounded-sm mx-2 flex items-center justify-center p-0 h-8 w-8" title="Mobile">
                <span class="sr-only">Mobile</span>
                <svg class="fill-current" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M13 24v2H6a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v9h-2V6H6v18h7z"/><path d="M17 15v11h9V15h-9zm0-2h9a2 2 0 012 2v11a2 2 0 01-2 2h-9a2 2 0 01-2-2V15a2 2 0 012-2z"/></svg>
            </button>
		</div>
		<div class="flex items-center flex-1 justify-end">
                            <div class="demo-preview-select md:block relative text-sm font-medium mr-3" style={{ width: '140px' }}>
                    <div class="demo-preview-selected flex justify-between items-center text-slate-200 border-2 border-slate-700 rounded-md py-1.5 px-3 cursor-pointer">
                        <span class="whitespace-nowrap overflow-hidden overflow-ellipsis" style={{ width: `calc(100% - 22px)` }}>Home</span>
                        <svg class="fill-current text-slate-500" width="12" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M6 7.4L.6 2 2 .6l4 4 4-4L11.4 2z" /></svg>
                    </div>
                    <div class="absolute" style={{ width: '200%' }}>
                    <ul className="demo-preview-select-list absolute top-full mt-1 bg-white shadow-lg py-1 px-3 m-0" style={{ minWidth: '50%', maxWidth: '100%' }}></ul>
 
                    </div>
                </div>
              
            <button class="js-buy btn-xs text-white bg-indigo-500 hover:bg-indigo-600" data-override="https://create-checkout.paddle.com/checkout/custom/eyJ0IjoiU3RlbGxhciIsImkiOiJodHRwczpcL1wvc3RhdGljLnBhZGRsZS5jb21cL2Fzc2V0c1wvaW1hZ2VzXC9jaGVja291dFwvZGVmYXVsdF9wcm9kdWN0X2ljb24ucG5nIiwiciI6bnVsbCwiY20iOiIiLCJyZSI6MCwicCI6ODI0ODI5LCJjYyI6eyJVU0QiOiI0OS4wMCJ9LCJoIjoiMTQ0MDYxLCAwIiwicSI6MSwiZCI6MSwiYSI6W10sInYiOiI0ODI5NCIsInMiOiI2YTY3OGQ3ZTVkNGQ1NjRjMzE2YjlhYzYzNDI5Mzg3MmZhOWNkOTIzYjA1ZWVjNzIxMjgwN2MxODZlOTgyN2MwZWJjNzYxZWQxNjE0ZmRlM2YwZGNhYmM4MTllNjQwNDdjYzlhZjcyMTlkZDhmOWM3NTgxOTE4YjcyZTA4Nzk3NSJ9" data-ref=""><span>Buy Now <span class="text-indigo-200">-</span> $49</span></button>			<a class="flex items-center justify-center p-0 h-8 w-8 ml-3" href="https://preview.cruip.com/stellar" title="Close preview bar">
				<span class="sr-only">Close preview bar</span>
				<svg class="fill-current text-slate-500 hover:text-slate-400" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M6.586 8L.293 1.707 1.707.293 8 6.586 14.293.293l1.414 1.414L9.414 8l6.293 6.293-1.414 1.414L8 9.414l-6.293 6.293-1.414-1.414z" /></svg>
			</a>
		</div>
	</div>
    <div class="demo-preview-content relative overflow-hidden w-full flex items-center justify-center is-loading">
		            <div id="demo-spinner" class="absolute top-0 left-0 z-20 bg-indigo-500 transition-all duration-150" style={{ height: '3px',  width:'0'}}></div>
			<iframe class="demo-preview-iframe" src="https://preview.cruip.com/stellar/" scrolling="yes" width="100%" height="100%" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
			</div>
	<div id="cookie-container" class="text-sm"></div>
        <div id="checkout" class="hidden">
    <div class="fixed inset-0 z-40 flex justify-center items-center">
        <div id="checkout-bg" class="hidden absolute inset-0 bg-slate-900 bg-opacity-50"></div>
        <div id="checkout-spinner" class="hidden relative">
            <div class="flex flex-col items-center">
                <svg class="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <div class="text-sm font-medium text-white text-opacity-75 mt-4">Checkout loading</div>
            </div>
        </div>    
        <div id="checkout-content" class="hidden modal-content relative bg-white w-full max-w-lg overflow-auto p-8 m-6 rounded shadow-lg">
            <button id="checkout-cancel" class="absolute top-0 right-0 mt-4 mr-4 group">
                <svg class="pointer-events-none" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                    <path class="stroke-current text-slate-400 group-hover:text-slate-600" d="M13 13L1 1M1 13L13 1" stroke="#9CA3AF" stroke-width="2"/>
                </svg>
            </button>        
            <div class="text-center mb-3">
                <div class="inline-flex mb-6">
                    <span class="sr-only">Cruip</span><svg width="28" height="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M28 14a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0" fill="#34D399"/><path d="M23.865 23.9a13.932 13.932 0 01-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 01-10.512-4.797A13.968 13.968 0 01.048 14c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0114 0c1.204 0 2.373.154 3.488.44a13.932 13.932 0 016.377 3.66l-4.933 4.95A6.942 6.942 0 0014 7c-3.852 0-6.976 3.134-6.976 7l.002.18C7.122 17.964 10.208 21 14 21c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z" fill="#6366F1" fill-rule="nonzero"/></g></svg>                </div>
                <div class="h5 mb-1"><span id="product-buy-word">Buy</span> <span id="product-name"></span> for $<span id="product-price"></span></div>
                <p id="checkout-anonymousdesc" class="hidden text-slate-600">Once the purchase is complete, we will email you a unique sign in link to download the template.</p>
            </div>
            <div class="checkout-paddle"></div>
        </div>
    </div>
</div> 
</div> */}

        </section>
    );
};

export default Home;