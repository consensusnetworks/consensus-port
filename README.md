# Consensus Port

![NuxtJS](https://img.shields.io/badge/Nuxt-black?style=for-the-badge&logo=nuxt.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

Accumulate Network block explorer for supply chain consensus.

## About 

Accumulate is a high performance blockchain for DeFi, integrating blockchains, protocols, oracles, and applications. This block explorer helps you understand and act upon transactions from supply chain oracle data on Accumulate, demonstrating how the network provides a bridge to the digital economy.

The default test supply chain oracle data for this explorer is on Accumulate testnet under the ADIs `acc://.../acme` and `acc://.../data`. If you'd like to use your own oracle ADIs to connect to your test data or supply chain, you can override the ADIs in `ADI_LIST` environment variable. This block explorer assumes a [standard schema](https://schema.org/) for supply chain oracle data, and you should structure your transactions according to this schema's required and extendable attributes. 

## Setup

Make sure to install the dependencies

```bash
npm install
```

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please check out what's already being worked on [here](https://github.com/consensusnetworks/consensus-port-roadmap) and open a new issue before starting!

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
