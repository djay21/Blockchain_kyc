
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');


var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const deploy= async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting to deploy afrom account',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data: '0x' + bytecode, arguments: ['Hi there!']})
      .send({from: accounts[0], gas: 4700000}); // remove 'gas'
  console.log('contract deployed to', result.options.address);
};
deploy();
