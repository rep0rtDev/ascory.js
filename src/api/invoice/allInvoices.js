export async function allInvoices(api) {
    return api.makeRequest('/invoice/all', {});
}