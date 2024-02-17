import axios from 'axios';
import { BASE_URL } from './constants'

export const saveSettings = async (settings) => {
    try {
        const response = await axios.post(`${BASE_URL}/channels`, settings);
        return response.data;
    } catch (error) {
        throw new Error('Error saving settings:', error);
    }
};

export const loadSettings = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/channels`);
        // это условность, не хотелось плодить сущности
        return response.data[0];
    } catch (error) {
        throw new Error('Error loading settings:', error);
    }
};

export const deleteSettings = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/channels/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting settings:', error);
    }
};

export const updateSettings = async (settings) => {
    console.log(settings)
    try {
        const response = await axios.put(`${BASE_URL}/channels/${settings.id}`, settings);
        return response.data;
    } catch (error) {
        throw new Error('Error updating settings:', error);
    }
};
