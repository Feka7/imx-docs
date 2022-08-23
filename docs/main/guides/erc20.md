---
id: "erc20-anatomy"
title: "Anatomy of a fungible smart contract (ERC-20)"
slug: "/erc20-anatomy"
sidebar_position: 10
---

# Anatomy of a fungible smart contract (ERC-20)

### What you will learn in this article:

- what's a fungible smart contract and how does it works
- the differences between a non-fungible (ERC-721) and fungible (ERC-20) smart contract
- the main use cases of fungible tokens
- how a fungible smart contract is deployed, which layer it is deployed to (L1), and how it can be used on Immutable X L2

## What's a fungible smart contract (ERC-20)?

A fungible smart contract is an implementation of the **token concept** in the blockchain. A token can represent anything, for example a lottery ticket or financial tools. All the tokens created by the smart contract are equal to any other tokens, so no tokens have special rights or behavior associated with them.

The functions that a fungible smart contract must have are the following:
- transfer token between one account to another
- request the current token balance of an account
- approve that an amount of an account's token can be spent by a third-party account
- the general information about the token like name, symbol and total supply

To perform all its functions, the fungible smart contract keeps track internally of all the balances of users having its token. The important concept for newcomers to understand is that when one account transfers a token to another, he simply asks the token's smart contract to update the balance of the two accounts involved. It's the smart contract that will handle the transfer and perform the check on the validity of the transaction.

To handle these important features, it was created a standard interface called **ERC-20**. This allows developers to build token applications that are interoperable with other products and services. Currently ERC-20 is used by the major of project in the crypto world.

#### Code example of ERC-20 interface
```solidity
interface IERC20 {

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);

    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 amount) external returns (bool);

    function approve(address spender, uint256 amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint256);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}
```
The functions described above ensure that the characteristics of fungible smart contract are respected. A brief explanation of what they do:

- **totalSupply:** returns the amount of tokens in existence
- **balanceOf:** returns the amount of tokens owned by `account`
- **transfer:** moves `amount` tokens from the caller’s account to another user
- **approve:** allow `spender` to spend the `amount` tokens of caller's account
- **allowance:** returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through `transferFrom`
- **transferFrom:** moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller’s allowance.

[*Read the complete explanation on OpenZeppelin docs*](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20)

## What's the differences between a non-fungible (ERC-721) and fungible (ERC-20) smart contract?

First of all, it's important to understand the differences between fungibility and non-fungibility. Fungible assets are the assets that you can swap with another similar entity. For example, you can swap currency or shares with similar values. Non-fungible cannot be swapped for one another because they would have some unique properties, like a house or a painting.
Applying this concept to token standards, it can be summarized that ERC20 tokens are interchangeable, dividable and represent a single asset, whereas ERC721 represents a class of assets and isn't dividable.

## Use cases of fungibile tokens

The use cases for fungible tokens are numerous, and even today new design patterns continue to be found that incorporate this standard. Of all the use cases, a few can be identified that have become populated within the crypto world and through their use enable the proper functioning and development of projects on the blockchain:

- **Staking:** users can stake their tokens to earn a percentage from a protocol's revenue. It is also often necessary to lock their tokens for a while. 
- **Voting power:** users can vote on decisions made in the development of a project through the possession of its tokens. The weight of their vote is directly proportional to the amount of tokens owned. DAOs (decentralized autonomous organizations) are based on this mechanism.
- **Attracting new users:** many projects reward user activity with their tokens, simply by using them. This practice is often used in the early stages of a project's life and then ends after some time. 
- **Game prizes:** a lot of web3 games reward users with their tokens. These can then be spent to buy items or other things going to create a kind of economy within the game.

:::info

Immutable X is using some of the previously listed use cases coin its IMX token: it has [**launched staking**](https://www.immutable.com/imx-token), a trading [**reward campaign**](https://www.immutable.com/trading-rewards) to incentivize the use of the platform and [**incentives**](https://www.immutable.com/fund) for those who build new projects.

[**Gods Unchained**](https://godsunchained.com/) rewards its users with their GODS token. It can be used to create new NFTs, put into staking or buy cards on Immutable X marketplaces.

:::

## How can you use ERC-20 token on Immutable X?

Immutable X uses [ZK-rollups](../overview/architecture-overview.md#zk-rollups) technology to achieve its objective to be the first platform for NFT trading, but it also supports the ERC-20 standard. The fungible smart contract  should be deployed on L1 before starting to interact with L2 Immutable X.
The common activity of a user is shared in the following steps:

1. [Deposit](../guides/integrate-your-application/personal-inventory.md#deposits) tokens from L1 to L2
2. Use its tokens on L2 (i.e. buy an asset or transfer them from another account)
3. Prepare the [withdrawal](../guides/integrate-your-application/personal-inventory.md#withdrawals) from L2 to L1
4. Complete the withdrawal from L2 to L1

Remember that all the actions where interaction with L1 is required have gas cost, in this case deposit and withdrawn tokens ERC-20. In comparison, features such as tokens transfer are gasless and bring the Immutable X platform as an excellent solution for tokens distribution. For example, a game that rewards its users with a weekly distribution of its token does not incur any cost, managing to save significantly compared to being on the L1.

:::note
At the moment, Immutable X supports only whitelisted ERC-20 tokens (IMX, GODS and USDC).
:::

## Can you mint tokens from a fungible smart contract on L2?
For now, you can't mint directly on L2. It's important to note that Immutable X currently supports only [StarkEx](https://starkware.co/starkex/) zk-rollup, which is like an application handled by Immutable but with the security of Ethereum network. So, before transferring a token from L1 to L2 and should trading with it, the Immutable team has to whitelist it.

Soon, Immutable X will also support [StarkNet](https://starkware.co/starknet/) zk-rollup, which [works differently](https://starknet.io/faq/difference-between-starkex-and-starknet/) than StarkEx and will aim to deploy customized smart contracts. Immutable X [implementation](https://github.com/immutable/imx-starknet/blob/main/docs/erc20.md) on StarkNet of an ERC-20 token is based on [OpenZeppelin's Cairo implementations](https://github.com/OpenZeppelin/cairo-contracts) and the `mint` function is supported. In this case, anyone can transfer their tokens from L1 to L2 and be able to use them.

[*Read more about interoperability between the rollups on Immutable X*](https://immutablex.medium.com/immutable-starknet-cross-rollup-nft-liquidity-b32df88cda02)





