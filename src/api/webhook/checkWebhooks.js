export async function checkWebhooks(api) {
    return api.makeRequest('/webhook/check', {});
}