import { ethers } from "ethers";
import { sdk } from "./helpers.js";

async function main() {
    const packModuleAddress = "0x5e680F9b540e862893f1061dfd0eA2081122aB05";
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Depositing link....')
//Link uses 18 decimals, same as ETH. This gives amount to use for 2 Link
    const amount = ethers.utils.parseEther('2');

    await packModule.depositLink(amount);
    console.log('Deposited!')

    const balance = await packModule.getLinkBalance();
    console.log(balance);
}

try {
    await main();
} catch(error) {
    console.error ("Error despositing LINK", error);
    process.exit(1);
}