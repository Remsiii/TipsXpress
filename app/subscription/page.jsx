import React from 'react'; 

const SubscriptionInfo = () => {
  const subscriptionPrice = 9.99; // Beispielpreis für die Subscription

  return (
    <div className="px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10 bg-clip-padding bg-opacity-60 border border-gray-200" style={{ backdropFilter: 'blur(20px)' }}>
    <div className='flex pt-[30px] px-[40px]'>
   <div className="min-w-full">
       <p className="text-[#00153B] text-[20px] leading-[40px] font-semibold sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Ihr Abonnement
       </p>

       <div>
           <p className="text-[#114A88] text-[18px] leading-[27px] font-medium">
               Get your tips now
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
                            Start Now
                        </p>
                        <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                            29€
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
                            High Succesfull Rate
                        </p>
                        <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Get Notified When A New Tip Appearse
                        </p>
                        <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Livescore
                        </p>
                        <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                            Links To Watch The Game
                        </p>
                    </div>

                    <div className="mt-[25px]">
                    <a href="https://www.paypal.com/paypalme/petabet24?locale.x=de_AT" className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
   </div>
  </div>
</div>
  );
};

export default SubscriptionInfo;