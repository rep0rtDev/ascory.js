export async function allTariffs(api) {
    return api.makeRequest('/commission/all', {});
}