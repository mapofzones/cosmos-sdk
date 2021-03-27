(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{792:function(e,o,t){"use strict";t.r(o);var n=t(1),s=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),t("h2",{attrs:{id:"supply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supply"}},[e._v("#")]),e._v(" Supply")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("supply")]),e._v(" module:")]),e._v(" "),t("ul",[t("li",[e._v("passively tracks the total supply of coins within a chain,")]),e._v(" "),t("li",[e._v("provides a pattern for modules to hold/interact with "),t("code",[e._v("Coins")]),e._v(", and")]),e._v(" "),t("li",[e._v("introduces the invariant check to verify a chain's total supply.")])]),e._v(" "),t("h3",{attrs:{id:"total-supply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#total-supply"}},[e._v("#")]),e._v(" Total Supply")]),e._v(" "),t("p",[e._v("The total "),t("code",[e._v("Supply")]),e._v(" of the network is equal to the sum of all coins from the\naccount. The total supply is updated every time a "),t("code",[e._v("Coin")]),e._v(" is minted (eg: as part\nof the inflation mechanism) or burned (eg: due to slashing or if a governance\nproposal is vetoed).")]),e._v(" "),t("h2",{attrs:{id:"module-accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#module-accounts"}},[e._v("#")]),e._v(" Module Accounts")]),e._v(" "),t("p",[e._v("The supply module introduces a new type of "),t("code",[e._v("auth.Account")]),e._v(" which can be used by\nmodules to allocate tokens and in special cases mint or burn tokens.  At a base\nlevel these module accounts are capable of sending/receiving tokens to and from\n"),t("code",[e._v("auth.Account")]),e._v("s and other module accounts.  This design replaces previous\nalternative designs where, to hold tokens, modules would burn the incoming\ntokens from the sender account, and then track those tokens internally. Later,\nin order to send tokens, the module would need to effectively mint tokens\nwithin a destination account. The new design removes duplicate logic between\nmodules to perform this accounting.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("ModuleAccount")]),e._v(" interface is defined as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNb2R1bGVBY2NvdW50IGludGVyZmFjZSB7CiAgYXV0aC5BY2NvdW50ICAgICAgICAgICAgICAgLy8gc2FtZSBtZXRob2RzIGFzIHRoZSBBY2NvdW50IGludGVyZmFjZQogIEdldE5hbWUoKSBzdHJpbmcgICAgICAgICAgIC8vIG5hbWUgb2YgdGhlIG1vZHVsZTsgdXNlZCB0byBvYnRhaW4gdGhlIGFkZHJlc3MKICBHZXRQZXJtaXNzaW9ucygpIFtdc3RyaW5nICAvLyBwZXJtaXNzaW9ucyBvZiBtb2R1bGUgYWNjb3VudAogIEhhc1Blcm1pc3Npb24oc3RyaW5nKSBib29sCn0K"}}),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("WARNING!")]),e._v("\nAny module or message handler that allows either direct or indirect sending of funds must explicitly guarantee those funds cannot be sent to module accounts (unless allowed).")])]),e._v(" "),t("p",[e._v("The supply "),t("code",[e._v("Keeper")]),e._v(" also introduces new wrapper functions for the auth "),t("code",[e._v("Keeper")]),e._v("\nand the bank "),t("code",[e._v("Keeper")]),e._v(" that are related to "),t("code",[e._v("ModuleAccount")]),e._v("s in order to be able\nto:")]),e._v(" "),t("ul",[t("li",[e._v("Get and set "),t("code",[e._v("ModuleAccount")]),e._v("s by providing the "),t("code",[e._v("Name")]),e._v(".")]),e._v(" "),t("li",[e._v("Send coins from and to other "),t("code",[e._v("ModuleAccount")]),e._v("s or standard "),t("code",[e._v("Account")]),e._v("s\n("),t("code",[e._v("BaseAccount")]),e._v(" or "),t("code",[e._v("VestingAccount")]),e._v(") by passing only the "),t("code",[e._v("Name")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("Mint")]),e._v(" or "),t("code",[e._v("Burn")]),e._v(" coins for a "),t("code",[e._v("ModuleAccount")]),e._v(" (restricted to its permissions).")])]),e._v(" "),t("h3",{attrs:{id:"permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),t("p",[e._v("Each "),t("code",[e._v("ModuleAccount")]),e._v(" has a different set of permissions that provide different\nobject capabilities to perform certain actions. Permissions need to be\nregistered upon the creation of the supply "),t("code",[e._v("Keeper")]),e._v(" so that every time a\n"),t("code",[e._v("ModuleAccount")]),e._v(" calls the allowed functions, the "),t("code",[e._v("Keeper")]),e._v(" can lookup the\npermissions to that specific account and perform or not the action.")]),e._v(" "),t("p",[e._v("The available permissions are:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Minter")]),e._v(": allows for a module to mint a specific amount of coins.")]),e._v(" "),t("li",[t("code",[e._v("Burner")]),e._v(": allows for a module to burn a specific amount of coins.")]),e._v(" "),t("li",[t("code",[e._v("Staking")]),e._v(": allows for a module to delegate and undelegate a specific amount of coins.")])])],1)}),[],!1,null,null,null);o.default=s.exports}}]);