const { ERC20 } = require('../lib/')
const Web3 = require('web3')

async function main() {
  const web3 = new Web3('https://kovan.infura.io/v3/8269c7ed160b41c2a3b0b76eff2af5b2')
  const daiAddress = '0x3837c260ffb6aa6490fdf5d1ab2850502a499ca3'
  const erc20 = new ERC20({ web3, address: daiAddress })
  await erc20.sync()
  console.log(erc20.props)
}

main()