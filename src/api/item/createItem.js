import { MissingFieldError } from '../../errors';

export async function createItem(api, data) {
    const requiredFields = ['name', 'description', 'amount'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
        throw new MissingFieldError(
            `Missing required fields: ${missingFields.join(', ')}`,
            `Отсутствуют обязательные поля: ${missingFields.join(', ')}`
        );
    }

    return api.makeRequest('/item/create', data);
}