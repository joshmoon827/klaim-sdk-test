# klaim-sdk-test

SDK for interacting with the Klaim API (credit, users, api-key, transactions, app-status)

---

## Installation

```
npm install klaim-sdk-test
```

## Usage

### 1. Import and Set Base URL

```js
const { setApiBaseUrl, getAllUsersCredits } = require('klaim-sdk-test');
```

(TypeScript)

```ts
import { setApiBaseUrl, getAllUsersCredits } from 'klaim-sdk-test';
```

### 2. Example: Get All Users Credits

```js
const apiKey = 'your-local-api-key';
(async () => {
  const credits = await getAllUsersCredits(apiKey);
  console.log(credits);
})();
```

(TypeScript)

```ts
const apiKey = 'your-local-api-key';
(async () => {
  const credits = await getAllUsersCredits(apiKey);
  console.log(credits);
})();
```

### 3. Example: Get User Credit Balance

```js
const { getUserCreditBalance } = require('klaim-sdk-test');
const userId = 'test-user-id';
(async () => {
  const balance = await getUserCreditBalance(apiKey, userId);
  console.log(balance);
})();
```

(TypeScript)

```ts
import { getUserCreditBalance } from 'klaim-sdk-test';
const userId = 'test-user-id';
(async () => {
  const balance = await getUserCreditBalance(apiKey, userId);
  console.log(balance);
})();
```

### 4. Example: Get App Status

```js
const { getAppStatus } = require('klaim-sdk-test');
(async () => {
  const status = await getAppStatus();
  console.log(status);
})();
```

(TypeScript)

```ts
import { getAppStatus } from 'klaim-sdk-test';
(async () => {
  const status = await getAppStatus();
  console.log(status);
})();
```

---

## API Reference

### Credit
- `getAllUsersCredits(apiKey, lastKey?)`
- `getUserCreditBalance(apiKey, userId)`
- `getUserCreditUsage(apiKey, userId)`
- `putUserCredit(apiKey, userId, credit_delta, description)`

### Users
- `getUser(apiKey, userId)`
- `createUser(apiKey, userData)`
- `updateUser(apiKey, userId, updateData)`

### API Key
- `getApiKey(apiKey)`
- `getApiKeyUsage(apiKey)`
- `createApiKey(apiKey, data)`
- `deleteApiKey(apiKey)`

### Transactions
- `getTransactions(apiKey, options?)`

### App Status
- `getAppStatus()`

---

## TypeScript Support

This package includes TypeScript declarations for all exported functions. You can use it in TypeScript projects for full type safety.

---

## Local Development & Testing

1. Build the SDK:
   ```
   npm run build
   ```
2. In a separate test project, install via relative path:
   ```
   npm install ../klaim-sdk-test
   ```
3. Import and use as shown above.

---

## License
MIT
