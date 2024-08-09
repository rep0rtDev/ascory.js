import { MissingFieldError } from '../../errors';

export async function createInvoice(api, data) {
    if (!data.item) {
        throw new MissingFieldError(
            'Missing required field: item',
            'Отсутствует обязательное поле: item'
        );
    }

    return api.makeRequest('/invoice/create', data);
}