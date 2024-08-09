import { MissingFieldError } from '../../errors';

export async function confirmPayment(api, data) {
    const requiredFields = ['id', 'hash', 'email', 'method'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
        throw new MissingFieldError(
            `Missing required fields: ${missingFields.join(', ')}`,
            `Отсутствуют обязательные поля: ${missingFields.join(', ')}`
        );
    }

    return api.makeRequest('/payment/confirm', data);
}