(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{83:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return b}));var n=o(3),a=o(7),r=(o(0),o(104)),c=o(105),s=["components"],l={id:"godwoken",title:"Godwoken",sidebar_label:"Godwoken"},p={unversionedId:"introduction/godwoken",id:"introduction/godwoken",isDocsHomePage:!1,title:"Godwoken",description:"Godwoken is a layer 2 rollup framework for Nervos CKB. It provides scaling capabilities with rollups that perform transaction execution outside CKB chain.",source:"@site/docs\\introduction\\overview.md",slug:"/introduction/godwoken",permalink:"/ckb_sdk/docs/introduction/godwoken",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/introduction/overview.md",version:"current",sidebar_label:"Godwoken",sidebar:"sidebar2",previous:{title:"ckb-sdk-java",permalink:"/ckb_sdk/docs/introduction/overview_java"}},i=[{value:"How Does It Work?",id:"how-does-it-work",children:[]},{value:"Use Godwoken",id:"use-godwoken",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy Godwoken",id:"deploy-godwoken",children:[]}]},{value:"Tips",id:"tips",children:[{value:"Generate Random Private Key",id:"generate-random-private-key",children:[]}]}],d={toc:i};function b(e){var t=e.components,o=Object(a.a)(e,s);return Object(r.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Godwoken")," is a layer 2 rollup framework for Nervos CKB. It provides scaling capabilities with rollups that perform transaction execution outside CKB chain."),Object(r.b)("p",null,"Godwoken supports optimistic rollups that can use always success script or ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/clerkb"},"Proof of Authority")," to issue layer 2 blocks. When POA is used, limited ",Object(r.b)("inlineCode",{parentName:"p"},"block_producers")," can issue layer 2 blocks. For more information, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/master/docs/life_of_a_godwoken_transaction.md#life-of-a-godwoken-transaction"},"Life of a Godwoken transaction"),"."),Object(r.b)("p",null,"Godwoken can support porting Ethereum DApps to CKB when it is integrated with Polyjuice. Polyjuice is an Ethereum compatible layer that includes generator and validator implementations. It accepts Ethrereum transactions and execute the transactions in EVM. For more information, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-polyjuice"},"Polyjuice for Godwoken")," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken/blob/master/docs/life_of_a_polyjuice_transaction.md"},"Life of a Polyjuice Transaction"),"."),Object(r.b)("h2",{id:"how-does-it-work"},"How Does It Work?"),Object(r.b)("p",null,"Godwoken works by using ",Object(r.b)("strong",{parentName:"p"},"aggregator")," nodes. The aggregator nodes are used to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Collect specially designed layer 2 transactions."),Object(r.b)("li",{parentName:"ol"},"Pack the special transactions into CKB transactions that can also be considered as layer 2 blocks."),Object(r.b)("li",{parentName:"ol"},"Submit the CKB transactions to layer 1 for acceptance. ")),Object(r.b)("img",{src:Object(c.a)("img/godwoken.png"),width:"70%"}),Object(r.b)("h2",{id:"use-godwoken"},"Use Godwoken"),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"OS: Ubuntu 20.04.2"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/nervosnetwork/capsule"},"Capsule")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/nervosnetwork/molecule"},"Moleculec"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Rust"),Object(r.b)("li",{parentName:"ul"},"Docker"),Object(r.b)("li",{parentName:"ul"},"A CKB node ( >= 0.40.0) is installed and running.")),Object(r.b)("h3",{id:"deploy-godwoken"},"Deploy Godwoken"),Object(r.b)("h4",{id:"step-1-build-scripts"},"Step 1. Build scripts"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cd godwoken-scripts && cd c && make && cd - && capsule build --release --debug-output\n")),Object(r.b)("h4",{id:"step-2-build-poa-scripts"},"Step 2. Build PoA scripts"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"git clone --recursive https://github.com/nervosnetwork/clerkb\ncd clerkb\nyarn\nmake all-via-docker\ncp build/debug/poa godwoken-scripts/build/release/poa\ncp build/debug/state godwoken-scripts/build/release/state\n")),Object(r.b)("h4",{id:"step-3-deploy-scripts"},"Step 3. Deploy scripts"),Object(r.b)("p",null,"Create scripts-deploy.json"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'mkdir deploy\ntouch deploy/scripts-deploy.json\n{\n  "programs": {\n    "custodian_lock": "/scripts/release/always-success",\n    "deposition_lock": "/scripts/release/always-success",\n    "withdrawal_lock": "/scripts/release/always-success",\n    "challenge_lock": "/scripts/release/always-success",\n    "stake_lock": "/scripts/release/always-success",\n    "state_validator": "/scripts/release/always-success",\n    "l2_sudt_validator": "/scripts/release/always-success",\n    "meta_contract_validator": "/scripts/release/always-success",\n    "eth_account_lock": "/scripts/release/always-success",\n    "tron_account_lock": "/scripts/release/always-success",\n    "polyjuice_validator": "/scripts/release/always-success",\n    "state_validator_lock": "/scripts/release/always-success",\n    "poa_state": "/scripts/release/always-success"\n  },\n  "lock": {\n    "code_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "hash_type": "data",\n    "args": "0x"\n  }\n}\n')),Object(r.b)("p",null,"Replace the always-success with the real one in scripts-deploy.json above."),Object(r.b)("p",null,"Command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cd godwoken\ncargo run --bin gw-tools -- deploy-scripts -i deploy/scripts-deploy.json -o deploy/scripts-deploy-result.json -k ../ckb_nodes/dev1/pk\n")),Object(r.b)("h4",{id:"step-4-deploy-layer2-genesis"},"Step 4. Deploy layer2 genesis"),Object(r.b)("p",null,"Create poa-config.json"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"touch deploy/poa-config.json\n")),Object(r.b)("p",null,"setup two godwoken nodes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n  "poa_setup": {\n    "identity_size": 32,\n    "round_interval_uses_seconds": true,\n    "identities": [\n      "<Godwoken wallet lock script hash 1>",\n      "<Godwoken wallet lock script hash 2>"\n    ],\n    "aggregator_change_threshold": 2,\n    "round_intervals": 24,\n    "subblocks_per_round": 1\n  }\n}\n')),Object(r.b)("p",null,"Create rollup-config.json"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'touch deploy/rollup-config.json\n{\n  "l1_sudt_script_type_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "burn_lock_hash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "required_staking_capacity": 10000000000,\n  "challenge_maturity_blocks": 5,\n  "finality_blocks": 20,\n  "reward_burn_rate": 50,\n  "compatible_chain_id": 0,\n  "allowed_eoa_type_hashes": []\n}\n')),Object(r.b)("p",null,"Command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cargo run --bin gw-tools -- deploy-genesis -k deploy/pk_gw1 -d deploy/scripts-deploy-result.json -p deploy/poa-config.json -u deploy/rollup-config.json -o deploy/genesis-deploy-result.json\n")),Object(r.b)("h4",{id:"step-5-build-polyjuice"},"Step 5. Build polyjuice"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"git clone --recursive https://github.com/nervosnetwork/godwoken-polyjuice.git\ncd godwoken-polyjuice && make all-via-docker\ncp build/generator /deploy/polyjuice-generator\n# We should use real one in the later version\ncp /godwoken-scripts/build/release/always-success /deploy/polyjuice-validator\n")),Object(r.b)("h4",{id:"step-6-generate-godwoken-config"},"Step 6. Generate godwoken config"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cargo run --bin gw-tools -- generate-config -g deploy/genesis-deploy-result.json -s deploy/scripts-deploy-result.json -p deploy/ -o config.toml\n")),Object(r.b)("p",null,"Update config.toml for every godwoken node:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[rpc_server]\nlisten = 'localhost:8119'\n[[backends]]\nvalidator_path = 'deploy/polyjuice-validator' # update the path to your own\ngenerator_path = 'deploy/polyjuice-generator' # update the path to your own\n[block_producer.wallet_config]\nprivkey_path = './deploy/pk_gw1' # update godwoken node private key path\n\n[block_producer.wallet_config.lock]\ncode_hash = '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8' # update to the block_assembler.code_hash\nhash_type = 'type' # update to 'type'\nargs = '0x3d7037a69dbb4fa019ca1b11f86b70470d2ab1d0' # update to godwoken wallet lock_arg\n")),Object(r.b)("p",null,"Run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"RUST_LOG=info cargo run --bin godwoken\n")),Object(r.b)("h4",{id:"step-7-start-godwoken"},"Step 7. Start Godwoken"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"docker run -vgodwoken-internal/deployment-notes/testnet/operator-config.toml:/deploy/config.toml -v/deploy/godwoken-testnet-v2/pk2:/deploy/pk -eRUST_BACKTRACE=1 nervos/godwoken-prebuilds:v0.5.0-rc1 godwoken run -c /deploy/config.toml\n")),Object(r.b)("h4",{id:"step-8-setup-polyjuice"},"Step 8. Setup Polyjuice"),Object(r.b)("p",null,"First, clone & setup ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-examples"},"godwoken-examples")),Object(r.b)("p",null,"Then, deposit to create an account. (Need some time to build index in the first time running)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"LUMOS_CONFIG_FILE=`pwd`/config.json node ./packages/tools/lib/account-cli.js deposit -c 40000000000 -p <privkey>\n")),Object(r.b)("h4",{id:"step-9-start-web3-server"},"Step 9. Start Web3 Server"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Clear the postgres DB."),Object(r.b)("li",{parentName:"ol"},"Run migration sql files to recreate tables."),Object(r.b)("li",{parentName:"ol"},"Run server")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"docker run -vweb3.env:/godwoken-web3/packages/api-server/.env -w/godwoken-web3 nervos/godwoken-js-prebuilds:v0.3.1-rc2 yarn workspace @godwoken-web3/api-server start\n")),Object(r.b)("h2",{id:"tips"},"Tips"),Object(r.b)("h3",{id:"generate-random-private-key"},"Generate Random Private Key"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Not safe for production environment!!!!!")),Object(r.b)("p",null,"Use ",Object(r.b)("a",{parentName:"p",href:"https://www.katacoda.com/courses/ruby/playground"},"ruby")," to generate pk:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'require \'securerandom\'\n"0x" + SecureRandom.random_bytes(32).each_char.map{|a| a.ord.to_s(16).rjust(2, "0")}.join\n')),Object(r.b)("p",null,"generate the private key:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"0x3f11fcefbcd704e05e168c42b198fbe25baf170013564c45946f8e83bd2cbab5\n")),Object(r.b)("p",null,"then generate key info by the key above with ckb-cli:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'CKB> util key-info --privkey-path pk_gw1\n\n[block_assembler]\ncode_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\nhash_type = "type"\nargs = "0x3d7037a69dbb4fa019ca1b11f86b70470d2ab1d0"\nmessage = "0x"\n\naddress:\n  mainnet: ckb1qyqr6uph56wmknaqr89pky0cddcywrf2k8gq8wuv8n\n  testnet: ckt1qyqr6uph56wmknaqr89pky0cddcywrf2k8gq6tznt0\nlock_arg: 0x3d7037a69dbb4fa019ca1b11f86b70470d2ab1d0\nlock_hash: 0xb32d671d7e659d7fefc43db8e568ce82608b0f1bd18bccc763e5dd23419c859a\nold-testnet-address: ckt1q9gry5zg84cr0f5ahd86qxw2rvgls6msguxj4vwszacn4g\npubkey: 021cffb63c87859a4e923d7a9645da9318aecbf4350b522c7eab2f7df0352cf6f7\n')))}b.isMDXComponent=!0}}]);