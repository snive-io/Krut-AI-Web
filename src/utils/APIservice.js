import axios from "axios"
import { API_END_POINT, supportEndPoint } from "./links";

// ============ Subscribe API ================
export const subscribeAPI = async (data) => {
    try {
        const url = API_END_POINT + supportEndPoint?.subscribe?.url;

        const formData = {
            email: data.email,
        }

        const response = await axios.post(url, formData);
        if (response?.data) {
            return response.data;
        } else {
            throw Error("Unable to get response")
        }

    } catch (error) {
        console.log(error.message);
        throw Error(error.message);
    }
}

// ============ contact API ================
export const contactAPI = async (data) => {
    try {
        const url = API_END_POINT + supportEndPoint?.contact?.url;
        const response = await axios.post(url, data);
        if (response?.data) {
            return response.data;
        } else {
            throw new Error("Unable to get response");
        }
    } catch (error) {
        console.log(error.message);
        throw Error(error.message);
    }
};

// ============ Book Demo API ================
export const bookDemoAPI = async (data) => {
    try {
        const url = API_END_POINT + supportEndPoint?.bookADemo?.url;
        const response = await axios.post(url, data);
        if (response?.data) {
            return response.data;
        } else {
            throw new Error("Unable to get response");
        }
    } catch (error) {
        console.log(error.message);
        throw Error(error.message);
    }
};

// ============ Early Access API ================
export const bookEarlyAccessAPI = async (data) => {
    try {
        const url = API_END_POINT + supportEndPoint?.earlyAccess?.url;
        const response = await axios.post(url, data);
        if (response?.data) {
            return response.data;
        } else {
            throw new Error("Unable to get response");
        }
    } catch (error) {
        console.log(error.message);
        throw Error(error.message);
    }
};