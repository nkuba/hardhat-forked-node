module.exports = {
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: process.env.FORKING_URL,
        blockNumber:
          process.env.FORKING_BLOCK && parseInt(process.env.FORKING_BLOCK, 10),
      },
    },
  },
}
