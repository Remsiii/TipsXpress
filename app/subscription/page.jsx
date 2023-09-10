"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useAuthModal from '@hooks/useAuthModal';
import { useUser } from "@hooks/useUser";
import { useRouter } from 'next/navigation';

const SubscriptionInfo = () => {

  //paypal
  const subscriptionPrice = 29; // Beispielpreis für die Subscription
  const [discountedPrice, setDiscountedPrice] = useState(subscriptionPrice);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const router = useRouter();
  const authModal = useAuthModal();
  const { user } = useUser();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    } else {
      return router.push('/subscription/register');
    }
  };
  //discount codes
  const validDiscountCodes = ["petar10", "daniel10", "jon10"];

  //capture likely error

  // Überprüfen, ob ein gespeicherter Discount-Wert vorhanden ist
  useEffect(() => {
    const savedDiscountAmount = localStorage.getItem('discountAmount');
    if (savedDiscountAmount) {
      //setDiscountedAmount(parseFloat(savedDiscountAmount));
    }
  }, []);

  // Aktualisieren des Preiswerts bei Änderung des Discount-Werts
  useEffect(() => {
    const newPrice = subscriptionPrice - discountedAmount;
    setDiscountedPrice(newPrice);
  }, [discountedAmount]);

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };


  const handleDiscountCodeSubmit = (event) => {
    event.preventDefault();

    const loweredDiscountCode = discountCode.toLowerCase();

    if (validDiscountCodes.includes(loweredDiscountCode)) {
      const discount = subscriptionPrice * 0.1; // 10% Rabatt
      setDiscountedAmount(discount);
      setDiscountedPrice(subscriptionPrice - discount);

      console.log(`Rabattcode ${discountCode} wurde verwendet. Provision: ${discount}`);
    } else {
      setErrorMessage("Ungültiger Rabattcode.");
      return;
    }

  };
  return (
    <>
        {/* {isModalOpen && (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-1"></div>
    )} */}
    <div className="px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10 bg-clip-padding bg-opacity-60 border border-gray-200" style={{ backdropFilter: 'blur(20px)' }}>
      <div className='flex pt-[30px] px-[40px]'>
        <div className="min-w-full">
          <p className="text-[#00153B] text-[20px] leading-[40px] font-semibold sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Ihr Abonnement
          </p>

          <div>
            <p className="text-[#114A88] text-[18px] leading-[27px] font-medium">
              Holen dir jetzt deine Tipps
            </p>
          </div>

          <div className="mt-[20px] grid gap-[20px]">
            <div key="2" className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div className="flex justify-end">
                  <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                      Preis
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                    Jetzt starten!
                  </p>
                  <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                    {discountedPrice}€
                  </p>
                </div>

                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    <strong className="text-[#5c0909]">30+</strong> Tips Per Month
                  </p>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    24/7 support
                  </p>
                </div>
              </div>

              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Hohe Erfolgsquote
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Sichere dir dein passives einkommen
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Zuverlässiger Service
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Erfahrung und Expertise im Bereich
                  </p>
                </div>

                <div className="mt-[25px] flex flex-row items-center">
  <form onSubmit={handleDiscountCodeSubmit}>
    <input
      type="text"
      value={discountCode}
      onChange={handleDiscountCodeChange}
      placeholder="Discount Code"
      className="rounded-[5px] py-[15px] px-[18px] text-[13px] text-[#000000] leading-[17px] font-semibold"
    />
    <button
      type="submit"
      onClick={handleDiscountCodeSubmit}
      className="ml-2 bg-[#006EF5] rounded-[5px] py-[15px] px-[12px] text-[#fff] text-[11px] leading-[17px] font-semibold"
    >
      Anwenden
    </button>
  </form>
</div>


                <div class="flex justify-between items-center mt-3">
    <a href="https://www.paypal.com/paypalme/petabet24?locale.x=de_AT" target="_blank" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
        <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
        Check out with PayPal
    </a>



    <div class="relative">
  <button onClick={openModal}  class="inline-block relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
    </button>

    {isModalOpen && (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
    <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Wie melde ich mich an?
                </h3>
                <button onClick={closeModal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Damit du Zugriff auf die Tipps bekommst, musst du dich registrieren. Dazu musst du den oben angezeigten Betrag and diese Paypal überweisen. Anschließend musst du auf den Button "Registrieren" klicken und deine Daten eingeben. Danach kannst du dich mit deinen Daten einloggen und hast Zugriff auf die Tipps.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  
                </p>
            </div>
        </div>
    </div>
</div>
 )}
</div>
</div>




                <button // href='/subscription/register'
                  onClick={onClick}
                  className="bg-gray-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Registrieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default SubscriptionInfo;