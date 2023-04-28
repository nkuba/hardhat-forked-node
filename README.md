# Hardhat Forked Node

To run forked network with hardhat execute:

1. Install hardhat:
    ```
    yarn install
    ```

2. Run the node:
    ```
    FORKING_URL=https://eth-goerli.g.alchemy.com/v2/XXXXXXX \
    FORKING_BLOCK_NUMBER=111111 \
        npx hardhat node
    ```

## direnv

To simplify node startup process install [direnv](https://direnv.net/) and
define environment variables in the `.envrc` file:
```
export FORKING_URL="https://eth-goerli.g.alchemy.com/v2/XXXXXXX"
export FORKING_BLOCK_NUMBER=111111
```
After that you can run the node with just:
```
npx hardhat node
```
