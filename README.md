# Port

:ship: Accumulate block explorer for supply chain consensus

## About 

Port block explorer helps you understand and act upon transactions from supply chain oracle data on Accumulate, demonstrating how the network provides a bridge to the digital economy. Accumulate is a high performance blockchain for DeFi, integrating blockchains, protocols, oracles, and applications.

The default test supply chain oracle data for this explorer is on Accumulate testnet under the ADIs `acc://.../acme` and `acc://.../data`. If you'd like to use your own oracle ADIs to connect to your test data or supply chain, you can override the ADIs in `ADI_LIST` environment variable. This block explorer assumes a [standard schema](https://schema.org/) for supply chain oracle data, and you should structure your transactions according to this schema's required and extendable attributes. 

## Setup

Port comprises a NuxtJS SSR app with a Node/TypeScript backend and Vue/TypeScript frontend that can be deployed in a Docker container.

Port's backend is made up of a GraphQL server and microservice APIs that integrate with ✻ Accumulate. Port's frontend uses Tailwind CSS and Chart.js.

![NuxtJS](https://img.shields.io/badge/Nuxt-black?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)

### Installation

First, make sure to install prerequesites:
- Node.js LTS
- Docker Desktop

Next, install the app dependencies:
```bash
npm install
```

### Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Testing

We need to add test scripts compatible with Nuxt SSR and Docker (something like `@nuxt/test-utils` for Nuxt 3). Then we need to run those test scripts in `.github/workflows/pull-request.yaml` after the step for building the Docker image. In the longer term, we will also add better tooling for testing applications on local Kubernetes clusters that more closely resemble the production environment (more so than Kubernetes on Docker or K3s, using something like [Okteto](https://github.com/okteto/okteto))

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

We use the following GitHub Actions workflows to test, build and push our images to [our organization](https://hub.docker.com/r/consensusnetworks/consensus-port) on Docker Hub: 
- Pull requests to `develop` and `master` branches trigger image builds (and eventually tests) 
- Pushes to `master` branch trigger image builds and pushes to the registry under the tags **latest** and **{your-commit-hash}**
- Releases from the `master` branch trigger image builds and pushes to the registry under the tags **latest**, **{your-commit-hash}**, and **{your-release-number}**

We can then manage our Kubernetes clusters and pod manifests in a separate repository to isolate environment configuration from application development. For reference, we included sample Kubernetes manifests that would be used in the separate repository to deploy this Nuxt app to a cloud provider managed cluster in the `kubernetes` directory. In addition to manifests, the separate repository would cover the following:
- Kubernetes cluster and managed infrastructure (like a DynamoDB) configuration
- Environment variables and secrets
- CI/CD pipelines for deploying integrated application resources to the cluster
- Helmfiles and Helm charts for organizing common application resources for the cluster

This repository setup also makes a serverless developer feel at home making cloud native applications (by hiding the ugly parts elsewhere).

## Contributing

Pull requests targeting the `develop` branch are welcome anytime. For major changes, please check out what's already being worked on [here](https://github.com/consensusnetworks/consensus-port/issues) and open a new issue before starting!

Please make sure to update tests as appropriate. We will be adding a style guide in the future.

## License

[MIT](https://choosealicense.com/licenses/mit/)
