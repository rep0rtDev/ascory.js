# Ascory API Client Library

This is a JavaScript client library for interacting with the Ascory API. It supports both ES modules and CommonJS.

## Installation

To install the library, use npm:

```bash
npm install ascory.js
```

## Usage

### ES Module

```javascript
import AscoryAPI from 'ascory.js';

const api = new AscoryAPI({
    shopId: 1,
    key1: 'c0a9cc6d8d4243c4a644f8e57d085438',
    key2: '56d4f8ee1ee480707ee9f3210da5aca2',
    ip: '1.1.1.1'
});

api.createItem({
    name: 'Apple',
    description: 'Delicious Apple',
    amount: 0.5
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en')); // or error.getMessage('ru') for Russian message
});
```

### CommonJS

```javascript
const AscoryAPI = require('ascory.js');

const api = new AscoryAPI({
    shopId: 1,
    key1: 'c0a9cc6d8d4243c4a644f8e57d085438',
    key2: '56d4f8ee1ee480707ee9f3210da5aca2',
    ip: '1.1.1.1'
});

api.createItem({
    name: 'Apple',
    description: 'Delicious Apple',
    amount: 0.5
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en')); // or error.getMessage('ru') for Russian message
});
```

## API Documentation

### Configuration

When creating an instance of `AscoryAPI`, you need to pass a configuration object with the following fields:

```javascript
const config = {
    shopId: 1,
    key1: 'c0a9cc6d8d4243c4a644f8e57d085438',
    key2: '56d4f8ee1ee480707ee9f3210da5aca2',
    ip: '1.1.1.1'
};
```

### Methods

#### `createItem(data)`

Creates a new item.

**Parameters:**
- `data`: An object with fields `name`, `description`, `amount`.

**Example:**

```javascript
api.createItem({
    name: 'Apple',
    description: 'Delicious Apple',
    amount: 0.5
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `checkItem(data)`

Checks the existence of an item by its ID.

**Parameters:**
- `data`: An object with the field `id`.

**Example:**

```javascript
api.checkItem({
    id: 1
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `deleteItem(data)`

Deletes an item by its ID.

**Parameters:**
- `data`: An object with the field `id`.

**Example:**

```javascript
api.deleteItem({
    id: 1
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `editItem(data)`

Edits an item.

**Parameters:**
- `data`: An object with fields `id`, `name`, `description`, `amount`.

**Example:**

```javascript
api.editItem({
    id: 1,
    name: 'Updated Apple',
    description: 'Updated Delicious Apple',
    amount: 0.6
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `allItems()`

Returns all items.

**Example:**

```javascript
api.allItems().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `createInvoice(data)`

Creates a new invoice.

**Parameters:**
- `data`: An object with the field `item`.

**Example:**

```javascript
api.createInvoice({
    item: 1
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `checkInvoice(data)`

Checks the existence of an invoice by its ID.

**Parameters:**
- `data`: An object with the field `id`.

**Example:**

```javascript
api.checkInvoice({
    id: 1
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `allInvoices()`

Returns all invoices.

**Example:**

```javascript
api.allInvoices().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `paymentDetail(data)`

Returns payment details.

**Parameters:**
- `data`: An object with fields `id`, `hash`.

**Example:**

```javascript
api.paymentDetail({
    id: 1,
    hash: 'your-hash'
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `confirmPayment(data)`

Confirms a payment.

**Parameters:**
- `data`: An object with fields `id`, `hash`, `email`, `method`.

**Example:**

```javascript
api.confirmPayment({
    id: 1,
    hash: 'your-hash',
    email: 'user@example.com',
    method: 'credit_card'
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `allTariffs()`

Returns all tariffs.

**Example:**

```javascript
api.allTariffs().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `allCurrencies()`

Returns all currencies.

**Example:**

```javascript
api.allCurrencies().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

#### `checkWebhooks()`

Checks webhooks.

**Example:**

```javascript
api.checkWebhooks().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error.getMessage('en'));
});
```

## Error Handling

In case of an error, the library throws a `MissingFieldError` object that contains error messages in both English and Russian. You can get the error message in the desired language using the `getMessage(locale)` method.

**Example:**

```javascript
try {
    await api.createItem({});
} catch (error) {
    console.error(error.getMessage('en')); // or error.getMessage('ru') for Russian message
}
```

## License

MIT
```

MIT License

Copyright (c) 2024 ⱤɆ₱ØⱤ₮

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
