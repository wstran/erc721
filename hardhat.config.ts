import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'dotenv/config';

const PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const RPC_URL = process.env.RPC_URL || '';

const accounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "follow_rpc_url",
  networks: {
    follow_rpc_url: {
      url: RPC_URL,
      accounts
    },
  },
  paths: {
    sources: './contracts',
    artifacts: './artifacts',
  },
};

export default config;