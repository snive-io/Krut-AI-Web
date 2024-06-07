// export const API_END_POINT = "http://localhost:3000/";
export const API_END_POINT = "https://api.krut.ai/";
export const APP_LINK = "https://app.krut.ai/";

export const supportEndPoint = {
    subscribe: {
        url: 'api/v1/web/newsletter',
        method: 'POST',
    },
    contact: {
        url: 'api/v1/web/contact',
        method: 'POST',
    },
    bookADemo: {
        url: 'api/v1/web/book-a-demo',
        method: 'POST',
    },
};

export const paymentEndPoint = {
    createOrder: {
        url: 'api/v1/web/createOrder',
        method: 'POST',
    },
    verifyPayment: {
        url: 'api/v1/web/validatePayment',
        method: 'POST',
    },
};