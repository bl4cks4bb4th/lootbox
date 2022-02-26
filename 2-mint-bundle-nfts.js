import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
    const bundleModuleAddress = '0x51207eB947f6215ce6db5CEf24083c9A5d281f7b';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log('Creating NFT batch...');

    const created = await bundleModule.createAndMintBatch([
    {
        metadata: {
            name: 'Dog 1',
            description: 'Wont Shut the Fuck Up',
            image: readFileSync('./assets/Dog-1.jpg'),
            properties: {
                rarity: 'not rare',
                shedding: 10,
            }
        },
        supply: 50,
    },
    {
        metadata: {
            name: 'Dog 2',
            description: 'Never Tires',
            image: readFileSync('./assets/dog-2.jpg'),
            properties: {
                rarity: 'a bit rare',
                shedding: 6,
            }
        },
        supply: 30,
    },
        {
        metadata: {
            name: 'Dog 3',
            description: 'WuTang Killa Beez',
            image: readFileSync ('./assets/dog-3.jpg'),
            properties: {
                rarity: 'rare',
                shedding: 2,
            }
        },
        supply: 10,
    },  
    ]);

    console.log('NFT created!')
    console.log(JSON.stringify(created, null, 2));
}

try {
    await main()
} catch (error) {
    console.error("Error minting the NFTS", error);
    process.exit(1);
}