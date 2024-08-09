export async function allItems(api) {
    return api.makeRequest('/item/all', {});
}