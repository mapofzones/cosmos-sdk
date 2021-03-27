(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{753:function(e,a,t){"use strict";t.r(a);var s=t(1),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ics-030-cosmos-signed-messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ics-030-cosmos-signed-messages"}},[e._v("#")]),e._v(" ICS 030: Cosmos Signed Messages")]),e._v(" "),t("blockquote",[t("p",[e._v("TODO: Replace with valid ICS number and possibly move to new location.")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#changelog"}},[e._v("Changelog")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#abstract"}},[e._v("Abstract")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#preliminary"}},[e._v("Preliminary")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#specification"}},[e._v("Specification")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#future-adaptations"}},[e._v("Future Adaptations")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#api"}},[e._v("API")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#references"}},[e._v("References")])])]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("Proposed.")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[e._v("Having the ability to sign messages off-chain has proven to be a fundamental aspect\nof nearly any blockchain. The notion of signing messages off-chain has many\nadded benefits such as saving on computational costs and reducing transaction\nthroughput and overhead. Within the context of the Cosmos, some of the major\napplications of signing such data includes, but is not limited to, providing a\ncryptographic secure and verifiable means of proving validator identity and\npossibly associating it with some other framework or organization. In addition,\nhaving the ability to sign Cosmos messages with a Ledger or similar HSM device.")]),e._v(" "),t("p",[e._v("A standardized protocol for hashing, signing, and verifying messages that can be\nimplemented by the Cosmos SDK and other third-party organizations is needed. Such a\nstandardized protocol subscribes to the following:")]),e._v(" "),t("ul",[t("li",[e._v("Contains a specification of human-readable and machine-verifiable typed structured data")]),e._v(" "),t("li",[e._v("Contains a framework for deterministic and injective encoding of structured data")]),e._v(" "),t("li",[e._v("Utilizes cryptographic secure hashing and signing algorithms")]),e._v(" "),t("li",[e._v("A framework for supporting extensions and domain separation")]),e._v(" "),t("li",[e._v("Is invulnerable to chosen ciphertext attacks")]),e._v(" "),t("li",[e._v("Has protection against potentially signing transactions a user did not intend to")])]),e._v(" "),t("p",[e._v("This specification is only concerned with the rationale and the standardized\nimplementation of Cosmos signed messages. It does "),t("strong",[e._v("not")]),e._v(" concern itself with the\nconcept of replay attacks as that will be left up to the higher-level application\nimplementation. If you view signed messages in the means of authorizing some\naction or data, then such an application would have to either treat this as\nidempotent or have mechanisms in place to reject known signed messages.")]),e._v(" "),t("h2",{attrs:{id:"preliminary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preliminary"}},[e._v("#")]),e._v(" Preliminary")]),e._v(" "),t("p",[e._v("The Cosmos message signing protocol will be parameterized with a cryptographic\nsecure hashing algorithm "),t("code",[e._v("SHA-256")]),e._v(" and a signing algorithm "),t("code",[e._v("S")]),e._v(" that contains\nthe operations "),t("code",[e._v("sign")]),e._v(" and "),t("code",[e._v("verify")]),e._v(" which provide a digital signature over a set\nof bytes and verification of a signature respectively.")]),e._v(" "),t("p",[e._v("Note, our goal here is not to provide context and reasoning about why necessarily\nthese algorithms were chosen apart from the fact they are the defacto algorithms\nused in Tendermint and the Cosmos SDK and that they satisfy our needs for such\ncryptographic algorithms such as having resistance to collision and second\npre-image attacks, as well as being "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hash_function#Determinism",target:"_blank",rel:"noopener noreferrer"}},[e._v("deterministic"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hash_function#Uniformity",target:"_blank",rel:"noopener noreferrer"}},[e._v("uniform"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),t("p",[e._v("Tendermint has a well established protocol for signing messages using a canonical\nJSON representation as defined "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/types/canonical.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("An example of such a canonical JSON structure is Tendermint's vote structure:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDYW5vbmljYWxKU09OVm90ZSBzdHJ1Y3QgewogICAgQ2hhaW5JRCAgIHN0cmluZyAgICAgICAgICAgICAgIGBqc29uOiZxdW90O0BjaGFpbl9pZCZxdW90O2AKICAgIFR5cGUgICAgICBzdHJpbmcgICAgICAgICAgICAgICBganNvbjomcXVvdDtAdHlwZSZxdW90O2AKICAgIEJsb2NrSUQgICBDYW5vbmljYWxKU09OQmxvY2tJRCBganNvbjomcXVvdDtibG9ja19pZCZxdW90O2AKICAgIEhlaWdodCAgICBpbnQ2NCAgICAgICAgICAgICAgICBganNvbjomcXVvdDtoZWlnaHQmcXVvdDtgCiAgICBSb3VuZCAgICAgaW50ICAgICAgICAgICAgICAgICAgYGpzb246JnF1b3Q7cm91bmQmcXVvdDtgCiAgICBUaW1lc3RhbXAgc3RyaW5nICAgICAgICAgICAgICAgYGpzb246JnF1b3Q7dGltZXN0YW1wJnF1b3Q7YAogICAgVm90ZVR5cGUgIGJ5dGUgICAgICAgICAgICAgICAgIGBqc29uOiZxdW90O3R5cGUmcXVvdDtgCn0K"}}),e._v(" "),t("p",[e._v("With such canonical JSON structures, the specification requires that they include\nmeta fields: "),t("code",[e._v("@chain_id")]),e._v(" and "),t("code",[e._v("@type")]),e._v(". These meta fields are reserved and must be\nincluded. They are both of type "),t("code",[e._v("string")]),e._v(". In addition, fields must be ordered\nin lexicographically ascending order.")]),e._v(" "),t("p",[e._v("For the purposes of signing Cosmos messages, the "),t("code",[e._v("@chain_id")]),e._v(" field must correspond\nto the Cosmos chain identifier. The user-agent should "),t("strong",[e._v("refuse")]),e._v(" signing if the\n"),t("code",[e._v("@chain_id")]),e._v(" field does not match the currently active chain! The "),t("code",[e._v("@type")]),e._v(" field\nmust equal the constant "),t("code",[e._v('"message"')]),e._v(". The "),t("code",[e._v("@type")]),e._v(" field corresponds to the type of\nstructure the user will be signing in an application. For now, a user is only\nallowed to sign bytes of valid ASCII text ("),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/libs/common/string.go#L61-L74",target:"_blank",rel:"noopener noreferrer"}},[e._v("see here"),t("OutboundLink")],1),e._v(").\nHowever, this will change and evolve to support additional application-specific\nstructures that are human-readable and machine-verifiable ("),t("a",{attrs:{href:"#futureadaptations"}},[e._v("see Future Adaptations")]),e._v(").")]),e._v(" "),t("p",[e._v("Thus, we can have a canonical JSON structure for signing Cosmos messages using\nthe "),t("a",{attrs:{href:"http://json-schema.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON schema"),t("OutboundLink")],1),e._v(" specification as such:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90OyRzY2hlbWEmcXVvdDs6ICZxdW90O2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hIyZxdW90OywKICAmcXVvdDskaWQmcXVvdDs6ICZxdW90O2Nvc21vcy9zaWduaW5nL3R5cGVEYXRhL3NjaGVtYSZxdW90OywKICAmcXVvdDt0aXRsZSZxdW90OzogJnF1b3Q7VGhlIENvc21vcyBzaWduZWQgbWVzc2FnZSB0eXBlZCBkYXRhIHNjaGVtYS4mcXVvdDssCiAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7b2JqZWN0JnF1b3Q7LAogICZxdW90O3Byb3BlcnRpZXMmcXVvdDs6IHsKICAgICZxdW90O0BjaGFpbl9pZCZxdW90OzogewogICAgICAmcXVvdDt0eXBlJnF1b3Q7OiAmcXVvdDtzdHJpbmcmcXVvdDssCiAgICAgICZxdW90O2Rlc2NyaXB0aW9uJnF1b3Q7OiAmcXVvdDtUaGUgY29ycmVzcG9uZGluZyBDb3Ntb3MgY2hhaW4gaWRlbnRpZmllci4mcXVvdDssCiAgICAgICZxdW90O21pbkxlbmd0aCZxdW90OzogMQogICAgfSwKICAgICZxdW90O0B0eXBlJnF1b3Q7OiB7CiAgICAgICZxdW90O3R5cGUmcXVvdDs6ICZxdW90O3N0cmluZyZxdW90OywKICAgICAgJnF1b3Q7ZGVzY3JpcHRpb24mcXVvdDs6ICZxdW90O1RoZSBtZXNzYWdlIHR5cGUuIEl0IG11c3QgYmUgJ21lc3NhZ2UnLiZxdW90OywKICAgICAgJnF1b3Q7ZW51bSZxdW90OzogWwogICAgICAgICZxdW90O21lc3NhZ2UmcXVvdDsKICAgICAgXQogICAgfSwKICAgICZxdW90O3RleHQmcXVvdDs6IHsKICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7c3RyaW5nJnF1b3Q7LAogICAgICAmcXVvdDtkZXNjcmlwdGlvbiZxdW90OzogJnF1b3Q7VGhlIHZhbGlkIEFTQ0lJIHRleHQgdG8gc2lnbi4mcXVvdDssCiAgICAgICZxdW90O3BhdHRlcm4mcXVvdDs6ICZxdW90O15bXFx4MjAtXFx4N0VdKyQmcXVvdDssCiAgICAgICZxdW90O21pbkxlbmd0aCZxdW90OzogMQogICAgfQogIH0sCiAgJnF1b3Q7cmVxdWlyZWQmcXVvdDs6IFsKICAgICZxdW90O0BjaGFpbl9pZCZxdW90OywKICAgICZxdW90O0B0eXBlJnF1b3Q7LAogICAgJnF1b3Q7dGV4dCZxdW90OwogIF0KfQo="}}),e._v(" "),t("p",[e._v("e.g.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O0BjaGFpbl9pZCZxdW90OzogJnF1b3Q7MSZxdW90OywKICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7bWVzc2FnZSZxdW90OywKICAmcXVvdDt0ZXh0JnF1b3Q7OiAmcXVvdDtIZWxsbywgeW91IGNhbiBpZGVudGlmeSBtZSBhcyBYWVogb24ga2V5YmFzZS4mcXVvdDsKfQo="}}),e._v(" "),t("h2",{attrs:{id:"future-adaptations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#future-adaptations"}},[e._v("#")]),e._v(" Future Adaptations")]),e._v(" "),t("p",[e._v("As applications can vary greatly in domain, it will be vital to support both\ndomain separation and human-readable and machine-verifiable structures.")]),e._v(" "),t("p",[e._v("Domain separation will allow for application developers to prevent collisions of\notherwise identical structures. It should be designed to be unique per application\nuse and should directly be used in the signature encoding itself.")]),e._v(" "),t("p",[e._v("Human-readable and machine-verifiable structures will allow end users to sign\nmore complex structures, apart from just string messages, and still be able to\nknow exactly what they are signing (opposed to signing a bunch of arbitrary bytes).")]),e._v(" "),t("p",[e._v("Thus, in the future, the Cosmos signing message specification will be expected\nto expand upon it's canonical JSON structure to include such functionality.")]),e._v(" "),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),t("p",[e._v("Application developers and designers should formalize a standard set of APIs that\nadhere to the following specification:")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"cosmossignbytes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmossignbytes"}},[e._v("#")]),e._v(" "),t("strong",[e._v("cosmosSignBytes")])]),e._v(" "),t("p",[e._v("Params:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("data")]),e._v(": the Cosmos signed message canonical JSON structure")]),e._v(" "),t("li",[t("code",[e._v("address")]),e._v(": the Bech32 Cosmos account address to sign data with")])]),e._v(" "),t("p",[e._v("Returns:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("signature")]),e._v(": the Cosmos signature derived using signing algorithm "),t("code",[e._v("S")])])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Using the "),t("code",[e._v("secp256k1")]),e._v(" as the DSA, "),t("code",[e._v("S")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"ZGF0YSA9IHsKICAmcXVvdDtAY2hhaW5faWQmcXVvdDs6ICZxdW90OzEmcXVvdDssCiAgJnF1b3Q7QHR5cGUmcXVvdDs6ICZxdW90O21lc3NhZ2UmcXVvdDssCiAgJnF1b3Q7dGV4dCZxdW90OzogJnF1b3Q7SSBoZXJlYnkgY2xhaW0gSSBhbSBBQkMgb24gS2V5YmFzZSEmcXVvdDsKfQoKY29zbW9zU2lnbkJ5dGVzKGRhdGEsICZxdW90O2Nvc21vczFwdnNjaDZjZGRhaGhybjVlOGVrdzB1czUwZHBudWd3bmxmbmd0MyZxdW90OykKJmd0OyAmcXVvdDsweDdmYzRhNDk1NDczMDQ1MDIyMTAwZGVjODFhOTgyMGRmMDEwMjM4MWNkYmY3ZThiMGYxZTJjYjY0YzU4ZTBlY2RhMTMyNDU0Mzc0MmUwMzg4ZTQxYTAyMjAwZGYzNzkwNWE2NTA1YzFiNTZhNDA0ZTIzYjc0NzNkMmMwYmM1YmNkYTk2NzcxZDJkZGE1OWRmNmVkMmI5OGY4JnF1b3Q7Cg=="}}),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);