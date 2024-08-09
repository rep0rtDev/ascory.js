import axios from 'axios';
import bcrypt from 'bcryptjs';
import { generateHash } from '../utils';
import { MissingFieldError } from '../errors';

class AscoryAPI {
    constructor({ shopId, key1, key2, ip }) {
        this.shopId = shopId;
        this.key1 = key1;
        this.key2 = key2;
        this.ip = ip;
        this.baseUrl = 'https://api.ascory.com/v1';
        this.hash = generateHash(this.key1, this.key2, this.ip);
    }

    async makeRequest(endpoint, data) {
        try {
            const response = await axios.post(`${this.baseUrl}${endpoint}`, {
                shop: this.shopId,
                hash: this.hash,
                ...data
            }, {
                headers: {
                    'accept': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(error.response ? error.response.data : error.message);
        }
    }
}

export default AscoryAPI;