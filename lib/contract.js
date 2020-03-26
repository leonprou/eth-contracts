class Contract {
  constructor({ web3, jsonInterface, address, options, schema }) {
    this.contract = new web3.eth.Contract(jsonInterface, address, options)
    this.schema = schema
    this.isSynced = false
    this.props = {}
  }

  sync() {
    const promises = Object.entries(this.schema).filter(([field, type]) => type === 'static')
      .map(([field, type]) => 
        this.contract.methods[field]().call().then((result) => {
          this.props[field] = result
        }
    ))
    return Promise.all(promises).then(() => this.isSynced = true)
  }
  
}

module.exports = Contract
