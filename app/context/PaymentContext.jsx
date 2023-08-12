import React, { createContext, useContext, useState } from 'react';

const PaymentContext = createContext({ hasPaid: false, setHasPaid: () => {} });

export const usePayment = () => {
    return useContext(PaymentContext);
};

export const PaymentProvider = ({ children }) => {
    const [hasPaid, setHasPaid] = useState(false);

    return (
        <PaymentContext.Provider value={{ hasPaid, setHasPaid }}>
            {children}
        </PaymentContext.Provider>
    );
};