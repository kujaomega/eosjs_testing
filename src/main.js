Eos = require('eosjs')

// Private key or keys (array) provided statically or by way of a function.
// For multiple keys, the get_required_keys API is used (more on that below).
keyProvider ='5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
httpEndpoint = '127.0.0.1:8888'
// Localhost Testnet (run ./docker/up.sh)
eos = Eos({keyProvider})

// // Connect to a testnet or mainnet
// eos = Eos({httpEndpoint, chainId, keyProvider})

// // Cold-storage
// eos = Eos({httpEndpoint: null, chainId, keyProvider})

// Default configuration (additional options below)

config = {
  chainId: null, // 32 byte (64 char) hex string
  keyProvider: ['5Juh6PRF6xfQ9b5DfvoyNrCntcNoy9w9RwetsgDNKaRFdxVqUTM'], // WIF string or array of keys..
  httpEndpoint: 'http://127.0.0.1:8888',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true
}


// Read-only instance when 'eosjs' is already a dependency
eos = Eos.modules.api({config})

// Read-only instance when an application never needs to write (smaller library)
EosApi = require('eosjs-api')
eos = EosApi({/*config*/})