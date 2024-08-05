import axios from 'axios';

import { ApiUrl } from '../contexts/ids';

const API_URL = ApiUrl;

export const getMessages = async () => {
    try {
        const response = await axios.get(`${API_URL}/anime`);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};

export const saveMessage = async (content) => {
    try {
        const response = await axios.post(`${API_URL}`, { content });
        return response.data;
    } catch (error) {
        console.error('Error saving message:', error);
        throw error;
    }
};