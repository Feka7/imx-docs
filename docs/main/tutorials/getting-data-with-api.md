---
id: "getting-data-with-api"
title: "Getting data on Immutable X using API"
slug: "/getting-data-with-api"
sidebar_position: 2
---

This tutorial provides a list of examples on how to retrieve data on Immutable X. It's designed for developers who want to build an application on Immutable X platform and give to their users a better interface with interesting data to read. At the end of the guide developers should:
-   get user information, like balance and assets
-   get orderbook information, like orders and trades
-   get all the collections available and their metadata scheme
-   able to query Immutable X to retrieve historical statistic

This tutorial is divide into three section:
1. **APIs overview**
2. **User utilities**
3. **Orderbook utilities**

Both orderbook and user section contain examples with the same API endpoints. Instead of sorting the guide by API endpoints, it's organized by macro arguments. For preparing the developers to understand quickly the examples provided, the first part of the guide introduces the APIs that will be used.

## APIs overview

Immutable X allows all the possible interactions via its API endpoints, both reading and writing functionality. For all the operations tested here, **no authentication is required**. The [API reference documentation](https://docs.x.immutable.com/reference#/) describe very well all the information that developers need to have (request parameters, response parameters and error codes) for correct developing. To avoid duplicates documentation simple link to it:
- [Assets endpoint](https://docs.x.immutable.com/reference/#/operations/listAssets)
- [Balances endpoint](https://docs.x.immutable.com/reference/#/operations/getBalanceOfUser)
- [Collections endpoint](https://docs.x.immutable.com/reference/#/operations/listCollections)
- [Metadata endpoint](https://docs.x.immutable.com/reference/#/operations/getMetadataSchema)
- [Orders endpoint](https://docs.x.immutable.com/reference/#/operations/listOrders)
- [Transfers endpoint](https://docs.x.immutable.com/reference/#/operations/listTransfers)
- [Trades endpoint](https://docs.x.immutable.com/reference#/operations/listTrades)

*The main purpose of this tutorial is to **provide the variety of queries** that can be done but **not to explain all the possibilities available**.*

## User utilities

This section contains examples of APIs that involved user entities on Immutable X. Can be useful in an application for showing information once a user is connected with his wallet.

### Get a list of balances for given user

**API endpoint:** [Balances](https://docs.x.immutable.com/reference/#/operations/listBalances)

```js
(async () => {
  try {
    const response = await fetch(
      "https://api.x.immutable.com/v2/balances/{USER_ADDRESS}",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(await response.json());
  } catch (err) {
    console.error(err);
  }
})();
```

### Fetches the token balances of the user

**API endpoint:** [Balances](https://docs.x.immutable.com/reference/#/operations/getBalance)

```js
(async () => {
  try {
    const response = await fetch(
      "https://api.x.immutable.com/v2/balances/{USER_ADDRESS}/{TOKEN_ADDRESS}",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(await response.json());
  } catch (err) {
    console.error(err);
  }
})();
```

### Get last 10 transactions made by the user

**API endpoint:** [Transfers](https://docs.x.immutable.com/reference/#/operations/listTransfers)

| Parameters  | Description |
| ----------- | ----------- |
| *order_by* | Property to sort by. Allowed values: `transaction_id` `updated_at` `created_at` `sender_ether_key` `receiver_ether_key` |
| *user*   | Address of the user who submitted this transfer |
| *page_size* | Number of transactions received |

**Code example**

```js
(async () => {
  try {
    const response = await fetch("https://api.x.immutable.com/v1/transfers?order_by=updated_at&user={USER_ADDRESS}&page_size=10", {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json"
      }
    })
    console.log(await response.json());
  } catch (err) {
    console.error(err);
  }
})();
```

### Get all transactions where user send ETH

**API endpoint:** [Transfers](https://docs.x.immutable.com/reference/#/operations/listTransfers)

| Parameters  | Description |
| ----------- | ----------- |
| *user*   | Address of the user who submitted this transfer |
| *token_type* | Token type of the transferred asset, e.g. `ETH` `ERC20` `ERC721` |

**Code example**

```js
(async () => {
  try {
    const response = await fetch("https://api.x.immutable.com/v1/transfers?user={USER_ADDRESS}&token_type=ETH", {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json"
      }
    })
    console.log(await response.json());
  } catch (err) {
    console.error(err);
  }
})();
```

### Get all transactions where user received ERC20 token by the given date

**API endpoint:** [Transfers](https://docs.x.immutable.com/reference/#/operations/listTransfers)

| Parameters  | Description |
| ----------- | ----------- |
| *receiver*   | Address of the user who received this transfer |
| *token_type* | Token type of the transferred asset, e.g. `ETH` `ERC20` `ERC721` |
| *min_timestamp* | Minimum timestamp for this transfer in ISO 8601 UTC format, e.g. `2022-05-27T00:10:22Z` |

**Code example**

```js
(async () => {
  try {
    const response = await fetch("https://api.x.immutable.com/v1/transfers?receiver={USER_ADDRESS}&token_type=ERC20&min_timestamp={DATE_ISO_FORMAT}", {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json"
      }
    })
    console.log(await response.json());
  } catch (err) {
    console.error(err);
  }
})();
```

### Get all assets owned by the user

**API endpoint:** [Assets](https://docs.x.immutable.com/reference/#/operations/listAssets)

| Parameters  | Description |
| ----------- | ----------- |
| *user*   | Address of the user who owns these assets |

**Code example**

```js
(async () => {
  try {
    const response = await fetch("https://api.x.immutable.com/v1/assets?user={USER_ADDRESS}", {
         "method": "GET",
         "headers": {
         "Content-Type": "application/json"
          }
    })
    console.log(await response.json())
  } catch (err) {
    console.error(err);
  }
})();
```

### Get all assets of a collection owned by the user order by name

**API endpoint:** [Assets](https://docs.x.immutable.com/reference/#/operations/listAssets)

| Parameters  | Description |
| ----------- | ----------- |
| *user*   | Address of the user who owns these assets |
| *collection*   | Collection contract address |
| *order_by*   | Property to sort by. Allowed values: `updated_at` `name` |

**Code example**

```js
(async () => {
  try {
    const response = await fetch("https://api.x.immutable.com/v1/assets?user={USER_ADDRESS}&collection={COLLECTION_ADDRESS}&order_by=name", {
         "method": "GET",
         "headers": {
         "Content-Type": "application/json"
          }
    })
    console.log(await response.json())
  } catch (err) {
    console.error(err);
  }
})();
```

### Get all transfer of assets in a collection made by the user

**API endpoint:** [Transfers](https://docs.x.immutable.com/reference/#/operations/listTransfers)

| Parameters  | Description |
| ----------- | ----------- |
| *user*   | Address of the user who submitted this transfer |
| *token_type* | Token type of the transferred asset, e.g. `ETH` `ERC20` `ERC721` |
| *token_address*   | Token address of the transferred asset (in this case the collection contract address) |

**Code example**

```js
(async () => {
  try {
    const response = await fetch("https://api.x.immutable.com/v1/transfers?user={USER_ADDRESS}&token_type=ERC721&token_address={COLLECTION_ADDRESS}", {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json"
      }
    })
    console.log(await response.json());
  } catch (err) {
    console.error(err);
  }
})();
```

### Get all purchase of assets in a collection made by the user

**API endpoint:** [Orders](https://docs.x.immutable.com/reference/#/operations/listOrders)

| Parameters  | Description |
| ----------- | ----------- |
| *user*   | Address of the user who submitted this transfer |
| *status* | Status of this transfer. Allowed values: `active` `filled` `cancelled` `expired` `inactive` |
| *buy_token_address*   | Token address of the asset this order buys (in this case the collection contract address) |

**Code example**

```js
(async () => {
    try {
      const response = await fetch("https://api.x.immutable.com/v1/orders?user={USER_ADDRESS}&status=filled&buy_token_address={COLLECTION_ADDRESS}", {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json"
        }
      })
      console.log(await response.json());
    } catch (err) {
      console.error(err);
    }
  })();
```


### Get all the assets of a collection offered for sale by the user

**API endpoint:** [Orders](https://docs.x.immutable.com/reference/#/operations/listOrders)

| Parameters  | Description |
| ----------- | ----------- |
| *user*   | Address of the user who submitted this transfer |
| *status* | Status of this transfer. Allowed values: `active` `filled` `cancelled` `expired` `inactive` |
| *sell_token_address*   | Token address of the asset this order sells (in this case the collection contract address) |

**Code example**

```js
(async () => {
    try {
      const response = await fetch("https://api.x.immutable.com/v1/orders?&user={USER_ADDRESS}&status=active&sell_token_address={COLLECTION_ADDRESS}", {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json"
        }
      })
      console.log(await response.json());
    } catch (err) {
      console.error(err);
    }
  })();
```

## Orderbook utilities

This section contains examples of API that involved the [orderbook](../guides/asset-management/trading-assets.md#central-orderbook) on Immutable X. With these examples developers will be able to show collections, orders and historical transactions in their applications.

### Get all collections avaiable on Immutable X order by name

**API endpoint:** [Collections](https://docs.x.immutable.com/reference/#/operations/listCollections)

| Parameters  | Description |
| ----------- | ----------- |
| *order_by*   | Property to sort by. Allowed values: `name` `address` `project_id` `created_at` `updated_at` |

**Code example**

```js
(async () => {
    try {
      const response = await fetch("https://api.x.immutable.com/v1/collections?order_by=name", {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json"
        }
      })
      console.log(await response.json());
    } catch (err) {
      console.error(err);
    }
  })();
```

### Get metadata schema of a collection

**API endpoint:** [Metadata](https://docs.x.immutable.com/reference/#/operations/getMetadataSchema)

```js
(async () => {
    try {
      const response = await fetch("https://api.x.immutable.com/v1/collections/{COLLECTION_ADDRESS}/metadata-schema", {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json"
        }
      })
      console.log(await response.json());
    } catch (err) {
      console.error(err);
    }
  })();
```

### Get all trades on Immutable X made with ETH order by date

**API endpoint:** [Trades](https://docs.x.immutable.com/reference#/operations/listTrades)

| Parameters  | Description |
| ----------- | ----------- |
| *order_by*   | Property to sort by. |
| *party_a_token_type*   | Party A's (buy order) token type of currency used to buy |

**Code example**

```js
  (async () => {
    try {
      const response = await fetch("https://api.x.immutable.com/v1/trades?order_by=created_at&party_a_token_type=ETH", {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json"
        }
      })
      console.log(await response.json());
    } catch (err) {
      console.error(err);
    }
  })();
```

### Get all active orders of filtered asset listed in specified token ERC20 order by price

**API endpoint:** [Orders](https://docs.x.immutable.com/reference/#/operations/listOrders)

| Parameters  | Description |
| ----------- | ----------- |
| *order_by*   | Property to sort by. Allowed values: `created_at` `expired_at` `sell_quantity` `buy_quantity` `buy_quantity_with_fees` `updated_at` |
| *direction* | Direction to sort. Allowed values: `asc` `desc` |
| *status* | Status of this transfer. Allowed values: `active` `filled` `cancelled` `expired` `inactive` |
| *sell_token_address*   | Token address of the asset this order sells (in this case the collection contract address) |
| *sell_metadata*   | JSON-encoded metadata filters for the asset this order sells |
| *buy_token_address*   | Token address of the asset this order buys (in this case the token ERC20 contract address) |
| *buy_token_type*   | Token type of the asset this order buys, e.g. `ETH` `ERC20` `ERC721` |

**Code example**

```js
  (async () => {
    try {

      //Example of Gods Unchained metadata
      const encodedComponent = encodeURIComponent(JSON.stringify({"proto": ["1378"],"quality": ["Meteorite"]}));

      const response = await fetch("https://api.x.immutable.com/v1/orders?order_by=buy_quantity_with_fees&direction=asc&status=active&buy_token_type=ERC20&buy_token_address={TOKEN_ADDRESS}&sell_token_address={COLLECTION_ADDRESS}&sell_metadata="+encodedComponent, {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json();
      data.result.map(x => {
        console.log(x.buy)
      })
    } catch (err) {
      console.error(err);
    }
  })();
```

#### Get all complete orders of filtered asset by given timeframe

**API endpoint:** [Orders](https://docs.x.immutable.com/reference/#/operations/listOrders)

| Parameters  | Description |
| ----------- | ----------- |
| *status* | Status of this transfer. Allowed values: `active` `filled` `cancelled` `expired` `inactive` |
| *sell_token_address*   | Token address of the asset this order sells (in this case the collection contract address) |
| *sell_metadata*   | JSON-encoded metadata filters for the asset this order sells |

**Code example**

```js
  (async () => {
    try {
      const encodedComponent = encodeURIComponent(JSON.stringify({"proto": ["1378"],"quality": ["Meteorite"]}));
      const response = await fetch("https://api.x.immutable.com/v1/orders?status=filled&sell_token_address={COLLECTION_ADDRESS}&sell_metadata="+encodedComponent, {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json();
      data.result.map(x => {
        console.log(x.buy)
      })
    } catch (err) {
      console.error(err);
    }
  })();
```