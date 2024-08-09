export async function editItem(api, data) {
    return api.makeRequest('/item/edit', data);
}