import { MissingFieldError } from '../../errors';

export async function checkItem(api, data) {
    if (!data.id) {
        throw new MissingFieldError(
            'Missing required field: id',
            'Отсутствует обязательное поле: id'
        );
    }

    return api.makeRequest('/item/check', data);
}