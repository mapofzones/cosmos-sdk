(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{787:function(e,t,a){"use strict";a.r(t);var s=a(1),d=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("p",[e._v("In this section we describe the processing of messages for the authz module.")]),e._v(" "),a("h2",{attrs:{id:"msg-grantauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-grantauthorization"}},[e._v("#")]),e._v(" Msg/GrantAuthorization")]),e._v(" "),a("p",[e._v("An authorization-grant is created using the "),a("code",[e._v("MsgGrantAuthorization")]),e._v(" message.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnR3JhbnRBdXRob3JpemF0aW9uUmVxdWVzdCBncmFudHMgdGhlIHByb3ZpZGVkIGF1dGhvcml6YXRpb24gdG8gdGhlIGdyYW50ZWUgb24gdGhlIGdyYW50ZXIncwovLyBhY2NvdW50IHdpdGggdGhlIHByb3ZpZGVkIGV4cGlyYXRpb24gdGltZS4KbWVzc2FnZSBNc2dHcmFudEF1dGhvcml6YXRpb25SZXF1ZXN0IHsKICBzdHJpbmcgZ3JhbnRlciA9IDE7CiAgc3RyaW5nIGdyYW50ZWUgPSAyOwoKICBnb29nbGUucHJvdG9idWYuQW55ICAgICAgIGF1dGhvcml6YXRpb24gPSAzIFsoY29zbW9zX3Byb3RvLmFjY2VwdHNfaW50ZXJmYWNlKSA9ICZxdW90O0F1dGhvcml6YXRpb24mcXVvdDtdOwogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgZXhwaXJhdGlvbiAgICA9IDQgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlXTsKfQ=="}})],1),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("both granter & grantee have same address.")]),e._v(" "),a("li",[e._v("provided "),a("code",[e._v("Expiration")]),e._v(" time less than current unix timestamp.")]),e._v(" "),a("li",[e._v("provided "),a("code",[e._v("Authorization")]),e._v(" is not implemented.")])]),e._v(" "),a("h2",{attrs:{id:"msg-revokeauthorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-revokeauthorization"}},[e._v("#")]),e._v(" Msg/RevokeAuthorization")]),e._v(" "),a("p",[e._v("An allowed authorization can be removed with "),a("code",[e._v("MsgRevokeAuthorization")]),e._v(" message.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnUmV2b2tlQXV0aG9yaXphdGlvblJlcXVlc3QgcmV2b2tlcyBhbnkgYXV0aG9yaXphdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBzZGsuTXNnIHR5cGUgb24gdGhlCi8vIGdyYW50ZXIncyBhY2NvdW50IHdpdGggdGhhdCBoYXMgYmVlbiBncmFudGVkIHRvIHRoZSBncmFudGVlLgptZXNzYWdlIE1zZ1Jldm9rZUF1dGhvcml6YXRpb25SZXF1ZXN0IHsKICBzdHJpbmcgZ3JhbnRlciAgICAgPSAxOwogIHN0cmluZyBncmFudGVlICAgICA9IDI7CiAgc3RyaW5nIG1ldGhvZF9uYW1lID0gMzsKfQ=="}})],1),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("both granter & grantee have same address.")]),e._v(" "),a("li",[e._v("provided "),a("code",[e._v("MethodName")]),e._v(" is empty.")])]),e._v(" "),a("h2",{attrs:{id:"msg-execauthorizedrequest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-execauthorizedrequest"}},[e._v("#")]),e._v(" Msg/ExecAuthorizedRequest")]),e._v(" "),a("p",[e._v("When a grantee wants to execute transaction on behalf of a granter, it must send MsgExecAuthorizedRequest.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnRXhlY0F1dGhvcml6ZWRSZXF1ZXN0IGF0dGVtcHRzIHRvIGV4ZWN1dGUgdGhlIHByb3ZpZGVkIG1lc3NhZ2VzIHVzaW5nCi8vIGF1dGhvcml6YXRpb25zIGdyYW50ZWQgdG8gdGhlIGdyYW50ZWUuIEVhY2ggbWVzc2FnZSBzaG91bGQgaGF2ZSBvbmx5Ci8vIG9uZSBzaWduZXIgY29ycmVzcG9uZGluZyB0byB0aGUgZ3JhbnRlciBvZiB0aGUgYXV0aG9yaXphdGlvbi4KbWVzc2FnZSBNc2dFeGVjQXV0aG9yaXplZFJlcXVlc3QgewogIHN0cmluZyAgIGdyYW50ZWUgICAgICAgICAgICAgICAgICA9IDE7CiAgcmVwZWF0ZWQgZ29vZ2xlLnByb3RvYnVmLkFueSBtc2dzID0gMjsKfQ=="}})],1),e._v(" "),a("p",[e._v("This message is expected to fail if:")]),e._v(" "),a("ul",[a("li",[e._v("authorization not implemented for the provided msg.")]),e._v(" "),a("li",[e._v("grantee don't have permission to run transaction.")]),e._v(" "),a("li",[e._v("if granted authorization is expired.")])])])}),[],!1,null,null,null);t.default=d.exports}}]);