import { createOrderAPI, verifyPaymentAPI } from "./APIservice";
import Swal from 'sweetalert2'

export const handlePayment = async (formData) => {
    const response = await createOrderAPI(formData);
    if (response) {
        const options = {
            key: response.key_id,
            amount: response.amount,
            currency: response.currency,
            name: "Krut AI",
            description: `Krut AI - ${formData?.plan} Plan Subscription`,
            image: "/images/logo.png",
            order_id: response.order_id,
            handler: async (response) => {
                await verifyPayment(response, formData);
            },
            prefill: {
                name: "Harsh Gupta",
                email: "contact@krut.ai",
                // contact: "9000090000",
            },
            notes: {
                address: "Bengaluru",
            },
            theme: {
                color: "#3292BB",
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', (response) => {
            toast.error("Payment failed");
            console.error(response.error);
        });
        rzp1.open();
    }
};

export const verifyPayment = async (response, formData) => {
    try {
        const verificationData = {
            paymentID: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            ...formData,
        };
        const verifyResponse = await verifyPaymentAPI(verificationData);
        if (verifyResponse?.status) {
            // window.location.href = `/paymentSuccess?paymentID=${response.razorpay_payment_id}`;
            Swal.fire({
                title: "Subscribed Successfully",
                text: `Transaction ID : ${response.razorpay_payment_id}`,
                icon: "success",
                confirmButtonColor: "#3292BB",
              });
        }
    } catch (error) {
        console.error("Verification error:", error);
    }
};