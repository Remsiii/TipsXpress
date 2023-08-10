"use client"
import React, { useState, useEffect } from 'react';
import PaypalCheckoutButton from "@components/PaypalCheckoutButton";
import { CLIENT_ID } from '../Config/Config'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const SubscriptionInfo = () => {
  //paypal

    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Betting Tips",
                    amount: {
                        value: 20,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);


    
  const subscriptionPrice = 29; // Beispielpreis für die Subscription
  const [discountedPrice, setDiscountedPrice] = useState(subscriptionPrice);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [discountCode, setDiscountCode] = useState('');
  const product = {
    description: "Design+Code React Hooks Course",
    price: 19
  };

  // Überprüfen, ob ein gespeicherter Discount-Wert vorhanden ist
  useEffect(() => {
    const savedDiscountAmount = localStorage.getItem('discountAmount');
    if (savedDiscountAmount) {
      setDiscountedAmount(parseFloat(savedDiscountAmount));
    }
  }, []);

  // Aktualisieren des Preiswerts bei Änderung des Discount-Werts
  useEffect(() => {
    const newPrice = subscriptionPrice - discountedAmount;
    setDiscountedPrice(newPrice);
  }, [discountedAmount]);

  const handleDiscountCodeSubmit = (event) => {
    event.preventDefault();
  
    let newDiscountedAmount = 0;
  
    if (discountCode === "Petar10") {
      const discount = subscriptionPrice * 0.1;
      newDiscountedAmount = discount;
    }else{
        return;
    }
  
    setDiscountedAmount(newDiscountedAmount);
    setDiscountCode('');
  
    // Speichern des Discount-Werts im localStorage
    localStorage.setItem('discountAmount', newDiscountedAmount.toString());
  };

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  return (
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
                    Start Now
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
                    High Succesfull Rate
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Get Notified When A New Tip Appears
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Livescore
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Links To Watch The Game
                  </p>
                </div>

                <div className="mt-[25px]">
                  <form onSubmit={handleDiscountCodeSubmit}>
                    <input
                      type="text"
                      value={discountCode}
                      onChange={handleDiscountCodeChange}
                      placeholder="Discount Code"
                      className="rounded-[5px] py-[15px] px-[25px] text-[14px] text-[#000000] leading-[17px] font-semibold"
                    />
                    <button type="submit" className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">
                      Apply Discount
                    </button>
                  </form>
                </div>
            <br></br>
            <PayPalScriptProvider options={{ "client-id": CLIENT_ID , currency: "EUR"}}>
            <div>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                    />
            </div>
        </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInfo;