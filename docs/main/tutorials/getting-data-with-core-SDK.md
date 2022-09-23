---
id: "getting-data-with-core-SDK"
title: "Getting data on Immutable X using core-SDK"
slug: "/getting-data-with-core-SDK"
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

- [Overview](#overview)
- How to get data on:
  - [Asset](#get-data-on-asset)

## Overview
This guide provides a list of examples on how to retrieve data on Immutable X. At the end of the guide users should:
-   get user information, like balance and assets
-   get orderbook information, like orders and trades
-   get all the collections available and their metadata scheme
-   able to query Immutable X to retrieve historical statistic

For all the APIs no authentication is required. The example provided doesn't even include the use of every parameter but should be clear for the user to understand how the API works.

## Get a list of assets

Get a list of assets of a given collection order by name.

### Core SDK

<Tabs>
<TabItem value="ts" label="TypeScript">

#### Request parameters
```ts
{
  //Page size of the result
  pageSize?: number;
  
  //Cursor
  cursor?: string;
  
  //Property to sort by
  orderBy?: 'updated_at' | 'name';
  
  //Direction to sort (asc/desc)
  direction?: string;
  
  //Ethereum address of the user who owns these assets
  user?: string;
  
  //Status of these assets
  status?: string;
  
  //Name of the asset to search
  name?: string;
  
  //JSON-encoded metadata filters for these asset. Example: {\&#39;proto\&#39;:[\&#39;1147\&#39;],\&#39;quality\&#39;:[\&#39;Meteorite\&#39;]}    
  metadata?: string;
  
  //Set flag to true to fetch an array of sell order details with accepted status associated with the asset
  sellOrders?: boolean;
  
  //Set flag to true to fetch an array of buy order details  with accepted status associated with the asset
  buyOrders?: boolean;
  
  //Set flag to include fees associated with the asset
  includeFees?: boolean;
  
  //Collection contract address
  collection?: string;
  
  //Minimum timestamp for when these assets were last updated, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
  updatedMinTimestamp?: string;
  
  //Maximum timestamp for when these assets were last updated, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
  updatedMaxTimestamp?: string;
  
  //Comma separated string of fee percentages that are to be paired with auxiliary_fee_recipients
  auxiliaryFeePercentages?: string;
  
  //Comma separated string of fee recipients that are to be paired with auxiliary_fee_percentages
  auxiliaryFeeRecipients?: string;
}
```

#### Example
```ts
const getListAssets = async (collectionAddress: string, orderBy: 'updated_at' | 'name') => {
  const config = getConfig({
    coreContractAddress: '0x7917eDb51ecD6CdB3F9854c3cc593F33de10c623',
    registrationContractAddress: '0x1C97Ada273C9A52253f463042f29117090Cd7D83',
    chainID: 5,
    basePath:  'https://api.sandbox.x.immutable.com'
  })
  const assetsApi = new AssetsApi(config.apiConfiguration);

  const response = await assetsApi.listAssets({
    collection: collectionAddress,
    orderBy: orderBy
  });
  
  return response.data;
};
```

#### Response
```ts
{{
  //Generated cursor returned by previous query
  cursor: string;
  
  //Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
  remaining: number;
  
  //Assets matching query parameters
  result: [
    ...,
    {
      //Details of the collection
      collection: object;
      
      //Timestamp of when the asset was created
      created_at: string | null;
      
      //Description of this asset
      description: string | null;
      
      //Royalties to pay on this asset operations 
      fees?: Array<object>;
      
      //URL of the image which should be used for this asset
      image_url: string | null;
      
      //Metadata of this asset
      metadata: object | null;
      
      //Name of this asset
      name: string | null;
      
      //Details of the orders
      orders?: object;
    
      //Status of this asset (where it is in the system)
      status: string;
      
      //Address of the ERC721 contract
      token_address: string;
      
      //ERC721 Token ID of this asset
      token_id: string;
      
      //Timestamp of when the asset was updated
      updated_at: string | null;
      
      //URI to access this asset externally to Immutable X
      uri: string | null;
      
      //Ethereum address of the user who owns this asset
      user: string;
  }
  ];
}
```

</TabItem>
</Tabs>


## Get details of an asset

### Core SDK

<Tabs>
<TabItem value="ts" label="TypeScript">

#### Request parameters
```ts
{  
  //Address of the collection
  tokenAddress: string;

  //Either ERC721 token ID or internal IMX ID   
  tokenId: string;

  //Set flag to include fees associated with the asset 
  includeFees?: boolean;
}
```

#### Example
```ts
const getAsset = async (tokenAddress: string, tokenId: string, includeFees: boolean) => {
    const config = getConfig({
      coreContractAddress: '0x7917eDb51ecD6CdB3F9854c3cc593F33de10c623',
      registrationContractAddress: '0x1C97Ada273C9A52253f463042f29117090Cd7D83',
      chainID: 5,
      basePath:  'https://api.sandbox.x.immutable.com'
    })
    const assetsApi = new AssetsApi(config.apiConfiguration);

    const response = await assetsApi.getAsset({
        tokenAddress,
        tokenId,
        includeFees
    });

    return response.data;
    };
```

#### Response
```ts
{
  //Details of the collection
  collection: object;
  
  //Timestamp of when the asset was created
  created_at: string | null;
  
  //Description of this asset
  description: string | null;
  
  //Royalties to pay on this asset operations
  fees?: Array<object>;

  //URL of the image which should be used for this asset 
  image_url: string | null;
  
  //Metadata of this asset
  metadata: object | null;
  
  //Name of this asset 
  name: string | null;
  
  //Details of the orders
  orders?: object;
  
  //Status of this asset (where it is in the system) 
  status: string;
  
  //Address of the collection
  token_address: string;
  
  //ERC721 Token ID of this asset
  token_id: string;
  
  //Timestamp of when the asset was updated
  updated_at: string | null;

  //URI to access this asset externally to Immutable X 
  uri: string | null;
  
  //Ethereum address of the user who owns this asset
  user: string;
}
```

</TabItem>
</Tabs>





