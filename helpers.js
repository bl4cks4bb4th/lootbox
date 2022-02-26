import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

//read environment variables from .env
import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey= process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
    console.error("wallet private key missing")
    process.exit(1)
}

export const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        //wallet private key. never check the key in. always use environ variables
        process.env.WALLET_PRIVATE_KEY,
        //polygon mumbai network
        ethers.getDefaultProvider("https://winter-icy-sun.matic-testnet.quiknode.pro/f36aa318f8f806e4e15a58ab4a1b6cb9f9e9d9b9/")
        ),
    );

const appAddress = '0x5D8e419d3cdaFd48A668320eD6a624587772176c';

export async function getApp() {
    const app = await sdk.getAppModule(appAddress);
    return app;
}