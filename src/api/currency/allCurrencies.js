export async function allCurrencies(api) {
    return api.makeRequest('/currency/all', {});
}