import { sdk } from "./helpers.js";

async function main() {
    const packModuleAddress = '0x5e680F9b540e862893f1061dfd0eA2081122aB05';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Opening the pack...');
    const opened = await packModule.open('0');
    console.log('Opened the pack!');
    console.log(opened);
}

try {
    await main();
} catch (error) {
    console.error("Error opening the pack", error);
    process.exit(1);
}