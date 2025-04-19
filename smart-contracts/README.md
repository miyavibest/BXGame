# 📃 Smart Contracts
This offers a comprehensive breakdown of the functions performed by the platform's smart contracts.This offers a comprehensive breakdown.

## 🎈 Tools & Technologies
- Solidity 
- ChainLink VRF
- Polygon
- Alchemy API
- HardHat


## 💻 Local Installation

- Make sure you have [Node](https://nodejs.org/en/download/) & [Git](https://git-scm.com/downloads) downloaded

* git clone repository

```
  $ git clone https://github.com/Samuellyworld/.git
```

* open `smart-contracts` folder in your terminal

```
  $ cd smart-contracts
```
- create a `.env` file in the `smart-contracts` directory and add the following 

```
 API_URL = "ENTER ALCHEMY API URL"
 PRIVATE_KEY = "ENTER WALLET PRIVATE KEY"
 POLYGONSCAN_APIKEY= "ENTER POLYGONSCAN API KEY"
```

- install dependencies 
```
 $ npm install
```
- compile smart-contracts, deploy and verify with this

```
 $ npx hardhat run scripts/deploy.ts --network polygon_mumbai
```

