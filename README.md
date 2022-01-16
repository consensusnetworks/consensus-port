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

## Testing

We need to add test scripts compatible with Nuxt SSR and Docker (something like `@nuxt/test-utils` for Nuxt 3). Then we need to run those test scripts in `.github/workflows/pull-request.yaml` after the step for building the Docker image.

## Releases

To create a new release according to the [Semantic Versioning](https://semver.org/) standard, we can use a CLI tool like [release-it](https://github.com/release-it/release-it). This helps us automate keeping our versioning synced across repositories and branches.

First run the following command:

```sh
npm run release
```

Then select the appropriate version increment and agree to commit the release to the git repository:

```sh
? Select increment (next version): patch (0.0.2) # major, minor, or patch
✔ npx auto-changelog -p

Changeset:
 M CHANGELOG.md
 M package-lock.json
 M package.json

? Commit (Release 0.0.2)? y
```

This sequence results in the following changes: 
- [CHANGELOG.md](CHANGELOG.md) is updated with all commits since the previous version
- [package.json](package.json), and [package-lock.json](package-lock.json) are updated with the new version
- File changes are committed to the repository 
- A new GitHub release is created with the new version as the tag

## Deployment

We use the Docker CLI in our GitHub Actions workflows to build and push our images to [Docker Hub](https://hub.docker.com/r/consensusnetworks/consensus-port). Pull requests to `develop` and `master` branches trigger image builds (and eventually tests). Pushes to `master` branch trigger image builds and pushes to the registry under the 'latest' and commit hash tags. Releases from the `master` branch trigger image builds and pushes to the registry under the 'latest', release number, and commit hash tags. 

We can then manage our Kubernetes manifests in a separate repository to isolate environment and deployment specific configuration. For reference, we included sample Kubernetes manifests that would be used for deploying this Nuxt app to AWS EKS in the `kubernetes` directory.

## Contributing

Pull requests targeting the `develop` branch are welcome anytime. For major changes, please check out what's already being worked on [here](https://github.com/consensusnetworks/consensus-port-roadmap) and open a new issue before starting!

Please make sure to update tests as appropriate. We will be adding a style guide in the future.

## License

[MIT](https://choosealicense.com/licenses/mit/)
