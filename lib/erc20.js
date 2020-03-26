const Contract = require('./contract')
const ERC20ABI = require('./abi/erc20')
const ERC20Schema = require('./schemas/erc20')

class ERC20 extends Contract {
  constructor({ web3, jsonInterface, address, options, schema }) {
    super({ web3, jsonInterface: jsonInterface || ERC20ABI, address, options, schema: schema || ERC20Schema })
  }
}

module.exports = ERC20
