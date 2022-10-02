---
title: 'Get data'
slug: '/guides-new/get-data'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
// import GuideSwitcher from '@site/src/components/GuideSwitcher';
// import content from './guideContent.js';

This guide provides information on how to get data about events on Immutable X. Typically, this data is about current state (ie. asset ownership, open orders) or past transactions (ie. trades, asset transfers).

Examples of the types of data typically obtained include:

- Assets, or details of a particular asset
- Token balances for a particular user
- Orders, or details about a particular order
- Historical trades and asset transfers

### Getting started

Follow the [get started guide](../get-started/index.md) to initialize the Core SDK.

Getting data is read-only, so user authentication or [getting user signatures](./generate-signers) to update blockchain state are not required. The **only methods** that require user authentication are [projects data](#projects).

### Guides:

- [Projects](#projects)
- [Collections](#collections)
- [Assets](#assets)
- [Orders](#orders)
- [Transfers](#transfers)
- [Tokens](#tokens)
- [Trades](#trades)
- [Users](#users)

## Projects

### Get list of projects

Get list of projects that you own.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter   | Description                  | Value                                      |
| :---------- | :--------------------------- | :----------------------------------------- |
| _ethSigner_ | Ethereum address of the user | 0x5D680Fbb3e60deCAbF62DfcACc56DB7d5964736a |

View all query parameters in [ProjectsApiGetProjectsRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/ProjectsApiGetProjectsRequest.html) interface

#### Example

```ts
const getProjects = async (ethSigner: Wallet) => {
  const response = await client.getProjects(ethSigner);

  return response;
};

getProjects(ethSigner)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
  result: [
    {
      //The project ID
      id: 145,

      //The project name
      name: 'Test writer guild',

      //The company name
      company_name: 'Test Immutable company',

      //The project contact email
      contact_email: 'immutabletest@example.com',

      //The number of mint operation remaining in the current period
      mint_remaining: 0,

      //The current period expiry date for mint operation limit
      mint_limit_expires_at: '2022-10-01T17:41:44.650487Z',

      //The total monthly mint operation limit
      mint_monthly_limit: 0,

      //The number of collection remaining in the current period
      collection_remaining: 0,

      //The current period expiry date for collection limit
      collection_limit_expires_at: '2022-10-01T17:41:44.650487Z',

      //The total monthly collection limit
      collection_monthly_limit: 0
    },

    //other projects
    ...
  ],

  //Generated cursor returned by previous query
  cursor: 'eyJwcm9qZWN0X2lkIjoxNDUsIm5hbWUiOiJUZXN0IHdyaXRlciBndWlsZCIsImNvbXBhbnlfbmFtZSI6IlRlc3QgSW1tdXRhYmxlIGNvbXBhbnkiLCJjb250YWN0X2VtYWlsIjoiaW1tdXRhYmxldGVzdEBleGFtcGxlLmNvbSIsIm1pbnRfcmVtYWluaW5nIjowLCJtaW50X2xpbWl0X2V4cGlyZXNfYXQiOiIyMDIyLTEwLTAxVDE3OjQxOjQ0LjY1MDQ4N1oiLCJtaW50X21vbnRobHlfbGltaXQiOjAsImNvbGxlY3Rpb25fcmVtYWluaW5nIjowLCJjb2xsZWN0aW9uX2xpbWl0X2V4cGlyZXNfYXQiOiIyMDIyLTEwLTAxVDE3OjQxOjQ0LjY1MDQ4N1oiLCJjb2xsZWN0aW9uX21vbnRobHlfbGltaXQiOjB9',

  //Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
  remaining: 0
}

```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

### Get details about a project

Get details about a project that you own.

<Tabs>
<TabItem value="typescript" label="Typescript Core SDK">


#### Request parameters

| Parameter   | Description                  | Value                                      |
| :---------- | :--------------------------- | :----------------------------------------- |
| _ethSigner_ | Ethereum address of the user | 0x5D680Fbb3e60deCAbF62DfcACc56DB7d5964736a |
| _id_        | Id of the project            | 145                                        |

View all query parameters in [ProjectsApiGetProjectRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/ProjectsApiGetProjectRequest.html) interface

#### Example

```ts
const getProject = async (ethSigner: Wallet, id: string) => {
  const response = await client.getProject(ethSigner, id);

  return response;
};

getProject(ethSigner, '145')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
  //The project ID
  id: 145,

  //The project name
  name: 'Test writer guild',

  //The company name
  company_name: 'Test Immutable company',

  //The project contact email
  contact_email: 'immutabletest@example.com',

  //The number of mint operation remaining in the current period
  mint_remaining: 0,

  //The current period expiry date for mint operation limit
  mint_limit_expires_at: '2022-10-01T17:41:44.650487Z',

  //The total monthly mint operation limit
  mint_monthly_limit: 0,

  //The number of collection remaining in the current period
  collection_remaining: 0,

  //The current period expiry date for collection limit
  collection_limit_expires_at: '2022-10-01T17:41:44.650487Z',

  //The total monthly collection limit
  collection_monthly_limit: 0
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

## Collections

### Get list of collections

Get list of collections that include a specified word in their name.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter | Description                                          | Value |
| :-------- | :--------------------------------------------------- | :---- |
| _keyword_ | Keyword to search in collection name and description | NFT   |

View all query parameters in [CollectionsApiListCollectionsRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/CollectionsApiListCollectionsRequest.html) interface

#### Example

```ts
const getListCollections = async (keyword: string) => {
  const response = await client.listCollections({
    keyword,
  });

  return response.result;
};

getListCollections('NFT')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{

  //Collections matching query parameters
  result: [
     {

      //Contract address of the collection
      address: '0x61e506cec264d5b2705f10e5a934dc5313a56a6e',

      //Name of the collection
      name: 'The ARK NFTs',

      //Description of the collection
      description: 'Find all the NFTs Created on the ARK Marketplace',

      //URL of the icon for this collection
      icon_url: 'https://cloudflare-ipfs.com/ipfs/bafkreiadl5kmdwy4tum4tgny4avxedlif33x2awux35c75j4exnz5s7xjm',

      //URL of the tile image for this collection
      collection_image_url: '',

      //The collection's project ID
      project_id: 92,

      //Project owner address
      project_owner_address: '0x59bb6d1b896a9a139380bf2b8d828819f0cf1409',

      //URL of the metadata for this collection
      metadata_api_url: 'https://api.thearknft.io/v1/nft',

      //Timestamp of when the collection was created
      created_at: '2022-09-28T12:01:20.479636Z',

      //Timestamp of when the collection was updated
      updated_at: '2022-09-28T13:35:07.59868Z'
    },

    //rest of the collections
    ...
  ],

  //Generated cursor returned by previous query
  cursor: "eyJuYW1lIjoiSnVqdSBNaW50cyIsImFkZHJlc3MiOiIweDIzZGIwZTcyYmQ3NzM4ZGEwZDBhZmU3YmNjYjQxMDlmNWYwNWVkY2YiLCJwcm9qZWN0X2lkIjoyNCwiY3JlYXRlZF9hdCI6IjIwMjItMDktMjJUMjM6MTI6NTcuNjY0NDU2WiIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTIyVDIzOjEyOjU3LjY2NDQ1NloifQ",

  //Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
  remaining: 1
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

### Get details about a collection

Get details of a collection at the given address.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter | Description                 | Value                                      |
| :-------- | :-------------------------- | :----------------------------------------- |
| _address_ | Collection contract address | 0x61e506cec264d5b2705f10e5a934dc5313a56a6e |

View all query parameters in [CollectionsApiGetCollectionRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/CollectionsApiGetCollectionRequest.html) interface

#### Example

```ts
const getCollection = async (address: string) => {
  const response = await client.getCollection({
    address,
  });

  return response;
};

getCollection('0x61e506cec264d5b2705f10e5a934dc5313a56a6e')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{

    //Contract address of the collection
    address: '0x61e506cec264d5b2705f10e5a934dc5313a56a6e',

    //Name of the collection
    name: 'The ARK NFTs',

    //Description of the collection
    description: 'Find all the NFTs Created on the ARK Marketplace',

    //URL of the icon for this collection
    icon_url: 'https://cloudflare-ipfs.com/ipfs/bafkreiadl5kmdwy4tum4tgny4avxedlif33x2awux35c75j4exnz5s7xjm',

    //URL of the tile image for this collection
    collection_image_url: '',

    //The collection's project ID
    project_id: 92,

    //Project owner address
    project_owner_address: '0x59bb6d1b896a9a139380bf2b8d828819f0cf1409',

    //URL of the metadata for this collection
    metadata_api_url: 'https://api.thearknft.io/v1/nft',

    //Timestamp of when the collection was created
    created_at: '2022-09-28T12:01:20.479636Z',

    //Timestamp of when the collection was updated
    updated_at: '2022-09-28T13:35:07.59868Z'
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

## Assets

### Get list of assets

Get the list of assets by specified collection order by name.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter    | Description                        | Value                                      |
| :----------- | :--------------------------------- | :----------------------------------------- |
| _collection_ | Contract address of the collection | 0x23db0e72bd7738da0d0afe7bccb4109f5f05edcf |
| _orderBy_    | Property to sort the response      | name                                       |

View all query parameters in [AssetsApiListAssetsRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/AssetsApiListAssetsRequest.html) interface

#### Example

```ts
const getListAssets = async (
  collectionAddress: string,
  orderBy: 'updated_at' | 'name'
) => {
  const response = await client.listAssets({
    collection: collectionAddress,
    orderBy: orderBy,
  });

  return response.result;
};

getListAssets('0x23db0e72bd7738da0d0afe7bccb4109f5f05edcf', 'name')
  .then((result) => {
    //print the result
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
  //Generated cursor returned by previous query
  cursor: "eyJpZCI6IjB4OTkzNzQyNzhiMThjM2YyNTA5MTFhZjVjMWM2ZGE1OGIxZmMxZjVkZDk1ZjBhYzFkYjA3MTgwOWI2MWM0M2E0ZCIsIm5hbWUiOiIxc3QgTkZUIiwidXBkYXRlZF9hdCI6IjIwMjItMDktMjNUMTQ6MzQ6MDEuNzkzNjM4WiJ9",

  //Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
  remaining: 1,

  //Assets matching query parameters
  result: [
    {

      //Address of the ERC721 contract
      token_address: '0x23db0e72bd7738da0d0afe7bccb4109f5f05edcf',

      //ERC721 Token ID of this asset
      token_id: '1',

      //Ethereum address of the user who owns this asset
      user: '0xd5aefc1fed909da9a5409594d758e3bdd055634c'

      //Status of this asset (where it is in the system)
      status: 'imx',

      //URI to access this asset externally to Immutable X
      uri: null,

      //Name of this asset
      name: '1st NFT',

      //Description of this asset
      description: 'This is your 1st nft',

      //URL of the image which should be used for this asset
      image_url: 'https://gateway.pinata.cloud/ipfs/QmS7p34oVDHB3VBE2d9bMqrbNFxdmxtwJ8BYcuHa9yNQHz',

      //Metadata of this asset
      metadata: {
        name: 'Juju Mints',
        icon_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQFB06seGq_MGA/profile-displayphoto-shrink_100_100/0/1597970079587?e=1669248000&v=beta&t=hd0P3T5102HzRvsSK4TBtjhLJLaivuh0u3Qlu57g7lk'
      },

      //Details of the collection
      collection: {
        name: '1st NFT',
        class: 'EnumValue1',
        attack: 123,
        image_url: 'https://gateway.pinata.cloud/ipfs/QmS7p34oVDHB3VBE2d9bMqrbNFxdmxtwJ8BYcuHa9yNQHz',
        collectable: true,
        description: 'This is your 1st nft'
      },

      //Timestamp of when the asset was created
      created_at: '2022-09-23T14:32:59.876942Z'

      //Timestamp of when the asset was updated
      updated_at: '2022-09-23T14:34:01.793638Z',
  },

  //rest of the assets
  ...
  ]
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

### Get details about an asset

Get details about an asset that you got in the previusly [example](#get-list-of-assets).

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter      | Description                            | Value                                      |
| :------------- | :------------------------------------- | :----------------------------------------- |
| _tokenAddress_ | Contract address of the collection     | 0x23db0e72bd7738da0d0afe7bccb4109f5f05edcf |
| _tokenId_      | Token ID of the asset                  | 1                                          |
| _includeFees_  | Include fees associated with the asset | true                                       |

View all query parameters in [AssetsApiGetAssetRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/AssetsApiGetAssetRequest.html) interface

#### Example

```ts
const getAsset = async (
  tokenAddress: string,
  tokenId: string,
  includeFees: boolean
) => {
  const response = await client.getAsset({
    tokenAddress,
    tokenId,
    includeFees,
  });

  return response;
};

getAsset('0x23db0e72bd7738da0d0afe7bccb4109f5f05edcf', '1', true)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{

      //Address of the ERC721 contract
      token_address: '0x23db0e72bd7738da0d0afe7bccb4109f5f05edcf',

      //ERC721 Token ID of this asset
      token_id: '1',

      //Ethereum address of the user who owns this asset
      user: '0xd5aefc1fed909da9a5409594d758e3bdd055634c'

      //Status of this asset (where it is in the system)
      status: 'imx',

      //URI to access this asset externally to Immutable X
      uri: null,

      //Name of this asset
      name: '1st NFT',

      //Description of this asset
      description: 'This is your 1st nft',

      //URL of the image which should be used for this asset
      image_url: 'https://gateway.pinata.cloud/ipfs/QmS7p34oVDHB3VBE2d9bMqrbNFxdmxtwJ8BYcuHa9yNQHz',

      //Metadata of this asset
      metadata: {
        name: '1st NFT',
        class: 'EnumValue1',
        attack: 123,
        image_url: 'https://gateway.pinata.cloud/ipfs/QmS7p34oVDHB3VBE2d9bMqrbNFxdmxtwJ8BYcuHa9yNQHz',
        collectable: true,
        description: 'This is your 1st nft'
      },

      //Details of the collection
      collection: {
        name: 'Juju Mints',
        icon_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQFB06seGq_MGA/profile-displayphoto-shrink_100_100/0/1597970079587?e=1669248000&v=beta&t=hd0P3T5102HzRvsSK4TBtjhLJLaivuh0u3Qlu57g7lk'
      },

      //Timestamp of when the asset was created
      created_at: '2022-09-23T14:32:59.876942Z'

      //Timestamp of when the asset was updated
      updated_at: '2022-09-23T14:34:01.793638Z',

      //Royalties to pay on this asset operations
      fees: [
        {
          type: 'protocol',
          address: '0xc8714f989ce817e5d21349888077aa5db4a9bcf6',
          percentage: 2
        }
      ]
  }
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

## Orders

### Get list of orders

Get the list of all orders that contain asset of a given collection listed in ETH.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter         | Description                                      | Value                                      |
| :---------------- | :----------------------------------------------- | :----------------------------------------- |
| _status_          | Status of the order                              | active                                     |
| _orderBy_         | Property to sort the response                    | name                                       |
| _sellTokenAddres_ | Collection address of the asset this order sells | 0x61e506cec264d5b2705f10e5a934dc5313a56a6e |
| _buyTokenType_    | Token type of the asset this order buys          | ETH                                        |

View all query parameters in [OrdersApiListOrdersRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/OrdersApiListOrdersRequest.html) interface

#### Example

```ts
const getListOrders = async (
  status: 'active' | 'filled' | 'cancelled' | 'expired' | 'inactive',
  orderBy:
    | 'created_at'
    | 'expired_at'
    | 'sell_quantity'
    | 'buy_quantity'
    | 'buy_quantity_with_fees'
    | 'updated_at',
  sellTokenAddress: string,
  buyTokenType: string
) => {
  const response = await client.listOrders({
    status,
    orderBy,
    sellTokenAddress,
    buyTokenType,
  });

  return response;
};

getListOrders(
  'active',
  'buy_quantity_with_fees',
  '0x61e506cec264d5b2705f10e5a934dc5313a56a6e',
  'ETH'
)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
  result: [
    {
      //ID of the order
      order_id: 1506,

      //Status of the order
      status: 'active',

      //Ethereum address of the user who submitted the order
      user: '0x192f36ee2bd12cf90571e464a3d28e76b8462c87',

      //Details about the asset in sale
      sell: {
        //Type of this asset (ETH/ERC20/ERC721), it used to buy the asset
        type: 'ERC721',

        data: {

          //ERC721 Token ID
          token_id: '271',

          //Address of ERC721/ERC20 contract
          token_address: '0x61e506cec264d5b2705f10e5a934dc5313a56a6e',

          //Quantity of this asset - inclusive of fees for buy order in v1 API and exclusive of fees in v3 API
          quantity: '1',

          //Quantity of this asset with the sum of all fees applied to the asset
          quantity_with_fees: '',

          //Properties of the asset in sale
          properties: {
            name: 'CityEscape #1',
            image_url: 'https://ipfs.thearknft.io/ipfs/bafkreibq3wnukid4fdfdugjjefjsom553mjloealius5cidqvtktvxf4va',
            collection: [Object]
          }
        }
      },

      //Details about the asset used to buy
      buy: {

        //Type of this asset (ETH/ERC20/ERC721), it used to buy the asset
        type: 'ETH',

        data: {

          //Address of ERC721/ERC20 contract. If the type is ETH, no address is required
          token_address: '',

          //Number of decimals supported by this asset
          decimals: 18,

          //Quantity of this asset - inclusive of fees for buy order in v1 API and exclusive of fees in v3 API
          quantity: '530000000000000000',

          //Quantity of this asset with the sum of all fees applied to the asset
          quantity_with_fees: '530000000000000000'
        }
      },

      //Amount of the asset already sold by this order
      amount_sold: null,

      //Expiration timestamp of this order
      expiration_timestamp: '2121-09-28T13:00:00Z',

      //Timestamp this order was created
      timestamp: '2022-09-28T13:26:26.327782Z',

      //Updated timestamp of this order
      updated_timestamp: '2022-09-28T13:26:26.327782Z'
    },

    //other orders
    ...
  ],
  //Generated cursor returned by previous query
 cursor: 'eyJvcmRlcl9pZCI6MTU0Niwic2VsbF9xdWFudGl0eSI6IjEiLCJidXlfcXVhbnRpdHkiOiI4MDAwMDAwMDAwMDAwMDAwMCIsImJ1eV9xdWFudGl0eV9pbmNsdXNpdmVfZmVlcyI6IjgzMjAwMDAwMDAwMDAwMDAwIiwiZXhwaXJlZF9hdCI6IjIxMjEtMDktMjlUMDA6MDA6MDBaIiwiY3JlYXRlZF9hdCI6IjIwMjItMDktMjlUMDA6NDc6MTMuODA2NjU2WiIsInVwZGF0ZWRfYXQiOiIyMDIyLTA5LTI5VDAwOjQ3OjEzLjgwNjY1NloiLCJ0c19zb3J0X3JhbmsiOm51bGx9',

  //Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
  remaining: 0
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

### Get details about an order

Get details about an order included fees.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter     | Description                            | Value |
| :------------ | :------------------------------------- | :---- |
| _id_          | Order ID                               | 1506  |
| _includeFees_ | Include fees associated with the asset | true  |

View all query parameters in [OrdersApiListOrdersRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/OrdersApiListOrdersRequest.html) interface

#### Example

```ts
const getOrder = async (id: string, includeFees: boolean) => {
  const response = await client.getOrder({
    id,
    includeFees,
  });

  return response;
};

getOrder('1506', true)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
      //ID of the order
      order_id: 1506,

      //Status of the order
      status: 'active',

      //Ethereum address of the user who submitted the order
      user: '0x192f36ee2bd12cf90571e464a3d28e76b8462c87',

      //Details about the asset in sale
      sell: {
        //Type of this asset (ETH/ERC20/ERC721), it used to buy the asset
        type: 'ERC721',

        data: {

          //ERC721 Token ID
          token_id: '271',

          //Address of ERC721/ERC20 contract
          token_address: '0x61e506cec264d5b2705f10e5a934dc5313a56a6e',

          //Quantity of this asset - inclusive of fees for buy order in v1 API and exclusive of fees in v3 API
          quantity: '1',

          //Quantity of this asset with the sum of all fees applied to the asset
          quantity_with_fees: '',

          //Properties of the asset in sale
          properties: {
            name: 'CityEscape #1',
            image_url: 'https://ipfs.thearknft.io/ipfs/bafkreibq3wnukid4fdfdugjjefjsom553mjloealius5cidqvtktvxf4va',
            collection: [Object]
          }
        }
      },

      //Details about the asset used to buy
      buy: {

        //Type of this asset (ETH/ERC20/ERC721), it used to buy the asset
        type: 'ETH',

        data: {

          //Address of ERC721/ERC20 contract. If the type is ETH, no address is required
          token_address: '',

          //Number of decimals supported by this asset
          decimals: 18,

          //Quantity of this asset - inclusive of fees for buy order in v1 API and exclusive of fees in v3 API
          quantity: '530000000000000000',

          //Quantity of this asset with the sum of all fees applied to the asset
          quantity_with_fees: '530000000000000000'
        }
      },

      //Amount of the asset already sold by this order
      amount_sold: null,

      //Expiration timestamp of this order
      expiration_timestamp: '2121-09-28T13:00:00Z',

      //Timestamp this order was created
      timestamp: '2022-09-28T13:26:26.327782Z',

      //Updated timestamp of this order
      updated_timestamp: '2022-09-28T13:26:26.327782Z',

      //Fees info
      fees: [
        {
          type: 'protocol',
          address: '0xa6c368164eb270c31592c1830ed25c2bf5d34bae',
          token: [Object],
          amount: '10000000000000000'
        },
        {
          type: 'royalty',
          address: '0x192f36ee2bd12cf90571e464a3d28e76b8462c87',
          token: [Object],
          amount: '10000000000000000'
        },
        {
          type: 'royalty',
          address: '0x59bb6d1b896a9a139380bf2b8d828819f0cf1409',
          token: [Object],
          amount: '10000000000000000'
        }
      ]
}

```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

## Transfers

### Get list of transfers

Get list of the last 5 transfer made on Immutable X.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter  | Description                   | Value      |
| :--------- | :---------------------------- | :--------- |
| _orderBy_  | Property to sort the response | updated_at |
| _pageSize_ | Page size of the result       | 5          |

View all query parameters in [TransfersApiListTransfersRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/TransfersApiListTransfersRequest.html) interface

#### Example

```ts
const getListTransfers = async (
  orderBy:
    | 'transaction_id'
    | 'updated_at'
    | 'created_at'
    | 'sender_ether_key'
    | 'receiver_ether_key',
  pageSize: number
) => {
  const response = await client.listTransfers({
    orderBy,
    pageSize,
  });

  return response;
};

getListTransfers('updated_at', 5)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
  result: [
    {
      //Sequential transaction ID
      transaction_id: 56779,

      //Status of the transaction
      status: 'success',

      //Ethereum address of the user  who submitted this transfer
      user: '0xd1a147a26a6f2b414694d2a7161515bdbd97ddbe',

      //Ethereum address of the user who received this transfer
      receiver: '0x0000000000000000000000000000000000000000',

      //Token info
      token: {

        //Type of this asset (ETH/ERC20/ERC721), it used to buy the asset
        type: 'ERC721',

        data: {

          //Token ID
          token_id: '482',

          //Address of ERC721/ERC20 contract. If the type is ETH, no address is required
          token_address: '0x2d5ac360eaf14d11b442383e06159a3c8afea8ea',

          //Number of decimals supported by this asset
          decimals: 0,

          //Quantity of this asset - inclusive of fees for buy order in v1 API and exclusive of fees in v3 API
          quantity: '1',

          //Quantity of this asset with the sum of all fees applied to the asset
          quantity_with_fees: ''
        }
      },

      //Timestamp of the transfer
      timestamp: '2022-09-30T12:36:47.115017Z'
    },

    //other transfers
    ...
  ],

  //Generated cursor returned by previous query
  cursor: 'eyJ0cmFuc2FjdGlvbl9pZCI6NTY3NzUsInN0YXR1cyI6InN1Y2Nlc3MiLCJzZW5kZXJfZXRoZXJfa2V5IjoiMHg1YjQxNjIxOTFkNjA0ZWZlYmViYjQzMDQ5MWQ2NjE1NGRmMWQ1ODU5IiwicmVjZWl2ZXJfZXRoZXJfa2V5IjoiMHhlNGY2M2UxNTUyMTk2OWVkMWY4ODAyMWM0YWZmZTIyNTAzYWQyOTE5IiwiVHlwZSI6IkVSQzcyMSIsIklEIjoiMHhjYjE3ZDMzODBiNjk5ZTFmYTZmZjYxNmU4ZTU0MDhmZTU5ZWFkMWRkMzY0MTBmYjc0YmNjMWRiMzkzMDJiYThiIiwiRVJDNzIxVG9rZW5JRCI6IjI4NzI4IiwiQ29udHJhY3RBZGRyZXNzIjoiMHhhOGVlZGViMmEyMzEwNTQzMGJlOGIxNGFhMWMzN2VkMDI3ZDY3MmRhIiwiRGVjaW1hbHMiOjAsIlF1YW50aXR5IjoiMSIsIkJhdGNoSUQiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDIyLTA5LTMwVDExOjU0OjExLjU4OTMyNloifQ',

  //Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
  remaining: 1
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

### Get details about a transfer

Get details about a transfer by ID.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter | Description | Value |
| :-------- | :---------- | :---- |
| _id_      | Order ID    | 56775 |

View all query parameters in [TransferRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/TransferRequest.html) interface

#### Example

```ts
const getTransfer = async (id: string) => {
  const response = await client.getTransfer({
    id,
  });

  return response;
};

getTransfer('56775')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
      //Sequential transaction ID
      transaction_id: 56775,

      //Status of the transaction
      status: 'success',

      //Ethereum address of the user  who submitted this transfer
      user: '0x5b4162191d604efebebb430491d66154df1d5859',

      //Ethereum address of the user who received this transfer
      receiver: '0xe4f63e15521969ed1f88021c4affe22503ad2919',

      //Token info
      token: {

        //Type of this asset (ETH/ERC20/ERC721), it used to buy the asset
        type: 'ERC721',

        data: {

          //Token ID
          token_id: '28728',

          //Address of ERC721/ERC20 contract. If the type is ETH, no address is required
          token_address: '0xa8eedeb2a23105430be8b14aa1c37ed027d672da',

          //Number of decimals supported by this asset
          decimals: 0,

          //Quantity of this asset - inclusive of fees for buy order in v1 API and exclusive of fees in v3 API
          quantity: '1',

          //Quantity of this asset with the sum of all fees applied to the asset
          quantity_with_fees: ''
        }
      },

      //Timestamp of the transfer
      timestamp: '2022-09-30T12:36:47.115017Z'
    }

```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

## Tokens

### Get list of tokens

Get list of tokens avaiable on Immutable X.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter | Description                   | Value            |
| :-------- | :---------------------------- | :--------------- |
| _orderBy_ | Property to sort the response | contract_address |

View all query parameters in [TokensApiListTokensReques](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/TokensApiListTokensRequest.html) interface

#### Example

```ts
const getListTokens = async (
  orderBy: 'contract_address' | 'name' | 'symbol'
) => {
  const response = await client.listTokens({
    orderBy,
  });

  return response;
};

getListTokens('contract_address')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
  result: [
    {
      //Full name of the token (e.g. Ether)
      name: 'Gods Unchained',

      //Url for the icon of the token
      image_url: 'https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--gods.svg',

      //Address of the ERC721 contract
      token_address: '0x5c9f1680bb6a4b4fc698e0cf702e0cc34aed91b7',

      //Ticker symbol for token (e.g. ETH/USDC/IMX)
      symbol: 'GODS',

      //Number of decimals for token
      decimals: '18',

      //Quantum for token
      quantum: '100000000'
    },

    //other tokens
    ...
  ],

  //Generated cursor returned by previous query
  cursor: 'eyJuYW1lIjoiRXRoZXJldW0iLCJzeW1ib2wiOiJFVEgifQ'
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

### Get details about a token

Get details about a token by given address.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter | Description                   | Value                                      |
| :-------- | :---------------------------- | :----------------------------------------- |
| _address_ | Ethereum address of the token | 0x1facdd0165489f373255a90304650e15481b2c85 |

View all query parameters in [TokensApiGetTokenRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/TokensApiGetTokenRequest.html) interface

#### Example

```ts
const getToken = async (address: string) => {
  const response = await client.getToken({
    address,
  });

  return response;
};

getToken('0x1facdd0165489f373255a90304650e15481b2c85')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{

    //Full name of the token (e.g. Ether)
    name: 'Immutable X Token',

    //Url for the icon of the token
    image_url: 'https://design-system.immutable.com/hosted-for-ds/currency-icons/currency--imx.svg',

    //Address of the ERC721 contract
    token_address: '0x1facdd0165489f373255a90304650e15481b2c85',

    //Ticker symbol for token (e.g. ETH/USDC/IMX)
    symbol: 'IMX',

    //Number of decimals for token
    decimals: '18',

    //Quantum for token
    quantum: '100000000'
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

## Trades

### Get list of trades

Get the last 5 trades with ETH made on Immutable X.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter         | Description                        | Value |
| :---------------- | :--------------------------------- | :---- |
| _partyATokenType_ | Token type of currency used to buy | ETH   |
| _pageSize_        | Page size of the result            | 5     |

View all query parameters in [TradesApiListTradesRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/TradesApiListTradesRequest.html) interface

#### Example

```ts
const getListTrades = async (partyATokenType: string, pageSize: number) => {
  const response = await client.listTrades({
    partyATokenType,
    pageSize,
  });

  return response;
};

getListTrades('ETH', 5)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
  result: [
    {
      //Sequential ID of this trade within Immutable X
      transaction_id: 56408,

      //Status of this trade
      status: 'success',

      //Buy object
      a: {

        //The ID of the order involved in the trade
        order_id: 1581,

        //The type of the token that this trade sold
        token_type: 'ETH',

        //The amount of that order\'s asset this trade sold in wei
        sold: '10000000000000000'
      },

      //Sell object
      b: {

        //The ID of the order involved in the trade
        order_id: 1579,

        //The type of the token that this trade sold
        token_type: 'ERC721',

        //The ID of the token that this trade sold
        token_id: '1507',

        //The contract address of the token that this trade sold
        token_address: '0x72ec08386b4bbf0c344238b1bb892b2b279f1dcf',

        //The amount of that order\'s asset this trade sold
        sold: '1'
      },

      //Time this trade occurred
      timestamp: '2022-09-29T10:33:26.39022Z'
    },

    //other trades
    ...
  ],

  //Generated cursor returned by previous query
  cursor: 'eyJ0cmFuc2FjdGlvbl9pZCI6NTY0MDgsInN0YXR1cyI6InN1Y2Nlc3MiLCJwYXJ0eV9hX29yZGVyX2lkIjoxNTYzLCJwYXJ0eV9hX2V0aGVyX2tleSI6IjB4MGEyMDU3NDRkYTMzZWY4Y2Y2NjY0OWM1OGFhYmFmZGZiY2E3NGFkMSIsInBhcnR5X2Ffc29sZF90b2tlbl90eXBlIjoiRVRIIiwicGFydHlfYV9zb2xkX3Rva2VuX2lkIjoiIiwicGFydHlfYV9zb2xkX3Rva2VuX2FkZHJlc3MiOiIiLCJwYXJ0eV9hX3NvbGRfcXVhbnRpdHkiOiIxMDAwMDAwMDAwMDAwMCIsInBhcnR5X2Jfb3JkZXJfaWQiOjExNzMsInBhcnR5X2JfZXRoZXJfa2V5IjoiMHg2YzQ0MzUxMGNmNmE0YTU2MzQxZDRjZTFhZWEzYjQzOTlhMTRmYmM3IiwicGFydHlfYl9zb2xkX3Rva2VuX3R5cGUiOiJFUkM3MjEiLCJwYXJ0eV9iX3NvbGRfdG9rZW5faWQiOiIxMCIsInBhcnR5X2Jfc29sZF90b2tlbl9hZGRyZXNzIjoiMHhiYzkxYTYxYzU2MWQ1ZDVlYzMxNmE0N2NlMjU1OGJiNjk0ZDUxNmQ1IiwicGFydHlfYl9zb2xkX3F1YW50aXR5IjoiMSIsImNyZWF0ZWRfYXQiOiIyMDIyLTA5LTI5VDEwOjMzOjI2LjM5MDIyWiJ9',

  //Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
  remaining: 1
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

### Get details about a trade

Get details about a trade by ID.

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter | Description | Value |
| :-------- | :---------- | :---- |
| _id_      | Trade ID    | 56715 |

View all query parameters in [TradesApiGetTradeRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/TradesApiGetTradeRequest.html) interface

#### Example

```ts
const getTrade = async (id: string) => {
  const response = await client.getTrade({
    id,
  });

  return response;
};

getTrade('56715')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
      //Sequential ID of this trade within Immutable X
      transaction_id: 56715,

      //Status of this trade
      status: 'success',

      //Buy object
      a: {

        //The ID of the order involved in the trade
        order_id: 1580,

        //The type of the token that this trade sold
        token_type: 'ETH',

        //The amount of that order\'s asset this trade sold in wei
        sold: '1000000000000000'
      },

      //Sell object
      b: {

        //The ID of the order involved in the trade
        order_id: 1463,

        //The type of the token that this trade sold
        token_type: 'ERC721',

        //The ID of the token that this trade sold
        token_id: '21657668',

        //The contract address of the token that this trade sold
        token_address: '0xc5be437ad2fdee7e5884b594b4919f9f3bbce76f',

        //The amount of that order\'s asset this trade sold
        sold: '1'
      },

      //Time this trade occurred
      timestamp: '2022-09-30T08:53:08.476028Z'
    }
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

## Users

### Get Stark keys for registered user

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter    | Description                  | Value                                      |
| :----------- | :--------------------------- | :----------------------------------------- |
| _ethAddress_ | Ethereum address of the user | 0x5D680Fbb3e60deCAbF62DfcACc56DB7d5964736a |

View all query parameters in [UsersApiGetUsersRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/UsersApiGetUsersRequest.html) interface

#### Example

```ts
const getUserStarkKeys = async (ethAddress: string) => {
  const response = await client.getUser(ethAddress);

  return response;
};

getUserStarkKeys('0x5D680Fbb3e60deCAbF62DfcACc56DB7d5964736a')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
  //List of Stark keys
  accounts: [
    '0xd361e623760332811d06a976ceab515f3591b128f6ee15901991b69c9003b7',
  ];
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

### Get user balances

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">

#### Request parameters

| Parameter | Description                  | Value                                      |
| :-------- | :--------------------------- | :----------------------------------------- |
| _owner_   | Ethereum address of the user | 0x5D680Fbb3e60deCAbF62DfcACc56DB7d5964736a |

View all query parameters in [BalancesApiListBalancesRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/BalancesApiListBalancesRequest.html) interface

#### Example

```ts
const getListBalances = async (owner: string) => {
  const response = await client.listBalances({
    owner,
  });

  return response;
};

getListBalances('0x5D680Fbb3e60deCAbF62DfcACc56DB7d5964736a')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts
{
  result: [
    {
      //Address of the contract that represents this ERC20 token or empty for ETH
      token_address: '',

      //Symbol of the token
      symbol: 'ETH',

      //Amount which is currently inside the exchange
      balance: '100000000000000000',

      //Amount which is currently preparing withdrawal from the exchange
      preparing_withdrawal: '0',

      //Amount which is currently withdrawable from the exchange
      withdrawable: '0'
    }
  ],

  //Generated cursor returned by previous query
  cursor: 'eyJfIjoiIiwic3ltYm9sIjoiRVRIIiwiY29udHJhY3RfYWRkcmVzcyI6IiIsImlteCI6IjEwMDAwMDAwMDAwMDAwMDAwMCIsInByZXBhcmluZ193aXRoZHJhd2FsIjoiMCIsIndpdGhkcmF3YWJsZSI6IjAifQ'
}
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

### Get specific balance for user

<Tabs>
  <TabItem value="typescript" label="Typescript Core SDK">
    
  #### Request parameters

| Parameter | Description                        | Value                                      |
| :-------- | :--------------------------------- | :----------------------------------------- |
| _owner_   | Ethereum address of the user       | 0x5D680Fbb3e60deCAbF62DfcACc56DB7d5964736a |
| _address_ | Token address to check the balance | 0x1facdd0165489f373255a90304650e15481b2c85 |

View all query parameters in [BalancesApiGetBalanceRequest](../../../../api-docs/sdk-references/core-sdk-ts/0-6-0/interfaces/BalancesApiGetBalanceRequest.html) interface

#### Example

```ts
const getBalanceToken = async (owner: string, address: string) => {
  const response = await client.getBalance({
    owner,
    address,
  });

  return response;
};

getBalanceToken(
  '0x5D680Fbb3e60deCAbF62DfcACc56DB7d5964736a',
  '0x1facdd0165489f373255a90304650e15481b2c85'
)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

#### Response

```ts

  {
    //Address of the contract that represents this ERC20 token or empty for ETH
    token_address: '0x1facdd0165489f373255a90304650e15481b2c85',

    //Symbol of the token
    symbol: 'IMX',

    //Amount which is currently inside the exchange
    balance: '0',

    //Amount which is currently preparing withdrawal from the exchange
    preparing_withdrawal: '0',

    //Amount which is currently withdrawable from the exchange
    withdrawable: '0'
  }
```

  </TabItem>
  <TabItem value="kotlin" label="Kotlin (JVM) Core SDK">
    Add description, if required.
    <br/><br/>

```kotlin
// Add code
```

  </TabItem>
  <TabItem value="Swift" label="Swift Core SDK">
    Add description, if required.
    <br/><br/>

```swift
// Add code
```

  </TabItem>
  <TabItem value="go" label="Golang Core SDK">
    Add description, if required.
    <br/><br/>

```go
// Add code
```

  </TabItem>
</Tabs>

<!--- ### Get specific balance for user
<GuideSwitcher guides={content.getProjects} /> --->
