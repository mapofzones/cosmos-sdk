(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{694:function(t,g,C){"use strict";C.r(g);var I=C(1),A=Object(I.a)({},(function(){var t=this,g=t.$createElement,C=t._self._c||g;return C("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[C("h1",{attrs:{id:"sdk-애플리케이션-아키텍쳐"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#sdk-애플리케이션-아키텍쳐"}},[t._v("#")]),t._v(" SDK 애플리케이션 아키텍쳐")]),t._v(" "),C("h2",{attrs:{id:"스테이트-머신-상태-기계-state-machine"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#스테이트-머신-상태-기계-state-machine"}},[t._v("#")]),t._v(" 스테이트 머신 (상태 기계, State machine)")]),t._v(" "),C("p",[t._v("블록체인 애플리케이션은 근본적으로 "),C("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EC%83%81%ED%83%9C_%EA%B8%B0%EA%B3%84_%EB%B3%B5%EC%A0%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("결정론적 복제 상태 기계(replicated deterministic state machine)"),C("OutboundLink")],1),t._v("입니다.")]),t._v(" "),C("p",[t._v("스테이트 머신은 특정 기계(머신, machine)이 오랜 기간동안 다수의 상태(스테이트, state)를 보유할 수 있지만, 특정 시점에 오직 하나의 상태를 유지하는 있는 컴퓨터 공학 개념입니다. 여기서 '스테이트 머신' 개념에는 시스템의 현 상태를 뜻하는 '스테이트(state)'가 있으며, 스테이트의 변경을 유발하는\n트랜잭션(transaction)'이 있습니다.")]),t._v(" "),C("p",[C("code",[t._v("S")]),t._v(" 라는 스테이트와 "),C("code",[t._v("T")]),t._v(" 라는 트랜잭션이 있는 경우, 스테이트 머신은 "),C("code",[t._v("S'")]),t._v("라는 새로운 스테이트를 리턴합니다.")]),t._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tKyAgICAgICAgICAgICAgICAgKy0tLS0tLS0tKwp8ICAgICAgICB8ICAgICAgICAgICAgICAgICB8ICAgICAgICB8CnwgICBTICAgICstLS0tLS0tLS0tLS0tLS0tJmd0OysgICBTJyAgIHwKfCAgICAgICAgfCAgICBhcHBseShUKSAgICAgfCAgICAgICAgfAorLS0tLS0tLS0rICAgICAgICAgICAgICAgICArLS0tLS0tLS0rCg=="}}),t._v(" "),C("p",[t._v("실전에서는 트랜잭션들이 일종의 '블록' 단위로 묶여 스테이트 변경 과정을 더 효율적일 수 있게 합니다. "),C("code",[t._v("S")]),t._v("라는 스테이트와 "),C("code",[t._v("B")]),t._v("라는 트랜잭션들이 있는 경우, 스테이트 머신은 "),C("code",[t._v("S'")]),t._v("라는 새로운 스테이트를 리턴합니다.")]),t._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLSsKfCAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgIHwKfCAgIFMgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0mZ3Q7IHwgICBTJyAgIHwKfCAgICAgICAgfCAgIEZvciBlYWNoIFQgaW4gQjogYXBwbHkoVCkgIHwgICAgICAgIHwKKy0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLSsK"}}),t._v(" "),C("p",[t._v("블록체인이라는 시스템 내의 개념으로 볼때 스테이트 머신은 결정론적(deterministic)입니다. 즉, 특정 스테이트에서 시작한 후 동일한 트랜잭션들을 반복할 경우, 결과 스테이트는 언제나 동일합니다.")]),t._v(" "),C("p",[t._v("코스모스 SDK는 애플리케이션의 스테이트, 트랜잭션 형태 그리고 스테이트 변경 기능(state-transition function)을 정의하는데 최대한의 유연성을 제공합니다. 코스모스 SDK를 이용해 스테이트 머신을 만드는 과정은 이후 항목에서 다루겠습니다. 우선 이 시스템 내에서 어떻게 "),C("strong",[t._v("텐더민트")]),t._v("를 사용해 '스테이트'가 복제되는지 알아보겠습니다.")]),t._v(" "),C("h2",{attrs:{id:"텐더민트"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#텐더민트"}},[t._v("#")]),t._v(" 텐더민트")]),t._v(" "),C("p",[t._v("개발자는 코스모스 SDK를 사용하여 스테이트 머신만을 정의하면 되며, 해당 스테이트를 네트워크에 복제하는 기능은 "),C("a",{attrs:{href:"https://tendermint.com/docs/introduction/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[C("em",[t._v("텐더민트")]),C("OutboundLink")],1),t._v("가 제공합니다.")]),t._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgIF4gICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgXgogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8ICAg7L2U7Iqk66qo7IqkIFNES+uhnCDqsJzrsJwKICAgICAgICAgICAgICAgIHwgIHwgICAgICDsiqTthYzsnbTtirgg66i47IugID0g7JWg7ZSM66as7LyA7J207IWYICAgIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdgogICAgICAgICAgICAgICAgfCAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIF4KICAgIOu4lOuhneyytOyduCDrhbjrk5wgICB8ICB8ICAgICAgICAgICAgIOy7qOyEvOyEnOyKpCAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgfCAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rICB8ICAg7YWQ642U66+87Yq4IOy9lOyWtAogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgIOuEpO2KuOybjO2CuSAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgdiAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rICB2Cg=="}}),t._v(" "),C("p",[t._v("텐더민트는 오직 블록체인의 "),C("em",[t._v("네트워킹")]),t._v("과 "),C("em",[t._v("합의(컨센서스)")]),t._v(" 계층을 처리하는 애플리케이션-불가지성(application-agnostic) 엔진입니다. 실전적으로 볼때, 텐더민트는 단순히 트랜잭션의 바이트를 나열하고, 해당 트랜잭션을 네트워크에 전파하는 역할만을 한다는 것입니다. 텐더민트 코어는 텐더민트 비잔틴 결함 감내(BFT, Byzantine-fault tolerant) 알고리즘을 사용하여 트랜잭션 순서에 대한 합의를 합니다. 텐더민트에 대해서 더 알고싶으시다면 "),C("a",{attrs:{href:"https://tendermint.com/docs/introduction/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),C("OutboundLink")],1),t._v("를 확인하세요.")]),t._v(" "),C("p",[t._v("텐더민트 합의 알고리즘은 '검증인(Validators)'이라는 특정 노드 세트를 기반으로 작동합니다. 검증인의 주 역할은 트랜잭션을 블록 단위로 블록체인에 추가하는 것입니다. 특정 블록에는 V 검증인 세트 검증인 존재하며, 이 V 검증인 세트 안에 있는 검증인 중 하나의 검증인이 다음 블록 생성자로 알고리즘에 의해 선택됩니다. 만약 블록이 V 검증인 세트 2/3 이상의 "),C("a",{attrs:{href:"https://tendermint.com/docs/spec/consensus/consensus.html#prevote-step-height-h-round-r",target:"_blank",rel:"noopener noreferrer"}},[t._v("프리보트(prevote)"),C("OutboundLink")],1),t._v("와 "),C("a",{attrs:{href:"https://tendermint.com/docs/spec/consensus/consensus.html#precommit-step-height-h-round-r",target:"_blank",rel:"noopener noreferrer"}},[t._v("프리커밋(precommit)"),C("OutboundLink")],1),t._v("을 받고 내용 트랜잭션이 유효한 경우 해당 블록은 '유효(valid)'한 것으로 간주됩니다. 검증인 세트는 스테이트 머신에 작성된 규칙에 따라서 바뀔 수 있습니다. 알고리즘에 대해 더 자세한 정보는 "),C("a",{attrs:{href:"https://tendermint.com/docs/introduction/what-is-tendermint.html#consensus-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),C("OutboundLink")],1),t._v("를 참고하세요.")]),t._v(" "),C("p",[t._v("코스모스 SDK 애플리케이션의 주요 파트는 네트워크에 포함되어있는 노드가 각자 로컬 환경에서 운영하는 블록체인 데몬(daemon)입니다. 만약 "),C("em",[t._v("검증인 세트")]),t._v("의 1/3 이하가 악의적(byzantine)인 경우, 각 노드는 동시에 스테이트를 조회할때 동일한 결과를 받게됩니다.")]),t._v(" "),C("h2",{attrs:{id:"abci"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[t._v("#")]),t._v(" ABCI")]),t._v(" "),C("p",[t._v("텐더민트는 네트워크에서 어플리케이션으로 거래를 넘겨줍니다. 이때, ABCI 라고 불리우는 인터페이스를 사용합니다. 그리고 이는 어플리케이션이 반드시 구현해야하는 부분입니다.")]),t._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgICAgICAgIHwKfCAgICAgQXBwbGljYXRpb24gICAgIHwKfCAgICAgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tKy0tLSstLS0tLS0tLSsKICAgICAgICAgXiAgIHwKICAgICAgICAgfCAgIHwgQUJDSQogICAgICAgICB8ICAgdgorLS0tLS0tLS0rLS0tKy0tLS0tLS0tKwp8ICAgICAgICAgICAgICAgICAgICAgfAp8ICAgICAgICAgICAgICAgICAgICAgfAp8ICAgICBUZW5kZXJtaW50ICAgICAgfAp8ICAgICAgICAgICAgICAgICAgICAgfAp8ICAgICAgICAgICAgICAgICAgICAgfAorLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwo="}}),t._v(" "),C("p",[C("strong",[t._v("텐더민트는 오직 거래의 bytes 값들만 취급하지 실제 그 bytes 들이 어떤 의미를 가지고 있는지는 파악하지 않습니다.")]),t._v(" 텐더민트가 하는 일은 이 거래 bytes 들을 결정론적으로 나열하는 것 뿐입니다. 텐더민트는 이 bytes 들을 ABCI 를 통해서 어플리케이션에 넘겨주고, 그 메세지에 담겨있는 거래들이 잘 처리되었는지 안되었는지를 확인해주는 return code 를 기다립니다.")]),t._v(" "),C("p",[t._v("아래에 ABCI 의 메세지들 중 가장 중요한 것들을 나열해놓았습니다:")]),t._v(" "),C("ul",[C("li",[C("p",[C("code",[t._v("CheckTx")]),t._v(": 텐더민트 코어로부터 거래를 받게 될 때, 이 거래는 어플리케이션에 넘겨져서 몇가지 기본 요건을 잘 만족했는지를 확인합니다. "),C("code",[t._v("CheckTx")]),t._v(' 는 풀노드의 mempool을 스팸행위로 부터 보호하는데 사용됩니다. "Ante Handler" 라고 불리우는 특별한 handler 는 일련의 검증 과정을 실행하는데 사용됩니다. 예를 들면, 충분한 수수료가 있는지와 서명이 유효한지를 확인합니다. 만약 검사 결과가 유효한 것으로 나오게 되면, 그 거래는 '),C("a",{attrs:{href:"https://tendermint.com/docs/spec/reactors/mempool/functionality.html#mempool-functionality",target:"_blank",rel:"noopener noreferrer"}},[t._v("mempool"),C("OutboundLink")],1),t._v(" 에 더해지게 됩니다. 그리고 피어 노드들에게도 전달됩니다. 거래가 블록에 담기기 전까지는 "),C("code",[t._v("CheckTx")]),t._v(" 과정은 진행되지 않는다. (즉, 상태의 변경이 일어나지 않는다.)")])]),t._v(" "),C("li",[C("p",[C("code",[t._v("DelieverTx")]),t._v(" : "),C("a",{attrs:{href:"https://tendermint.com/docs/spec/blockchain/blockchain.html#validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("유효한 블록"),C("OutboundLink")],1),t._v("이 텐더민트 코어에 의해서 전달되었을 때, 해당 블록에 있는 모든 개별 거래들은 "),C("code",[t._v("DeliverTx")]),t._v('에 의해서 어플리케이션에게 전달됩니다. 상태 변환이 일어나는 단계가 이 단계이다. "Ante Handler" 는 실제 handler 와 함께 거래 내의 각 메세지에 대한 검증을 위해 다시 실행한다.')])]),t._v(" "),C("li",[C("p",[C("code",[t._v("BeginBlock")]),t._v("/"),C("code",[t._v("EndBlock")]),t._v(" : 이 메세지들은 블록이 거래를 담고 있던 아니던 각 블록의 시작과 끝에 실행됩니다. 과정을 자동화 해놓으면 상당히 유용할 것입니다. 하지만, 진행 중 주의해야 할 사안이 하나 있습니다. 과도하게 컴퓨팅 자원이 많이 필요로 하는 루프는 블록체인의 속도 면에서 악영향을 끼칠 수 있고 만약 무한 루프라면 작동을 멈출 수도 있습니다.")])])]),t._v(" "),C("p",[t._v("ABCI 메소드와 타입에 대해서 더 자세하게 싶다면, "),C("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),C("OutboundLink")],1),t._v("를 클릭하십시오.")]),t._v(" "),C("p",[t._v("텐더민트 상에서 구현된 모든 어플리케이션은 ABCI 인터페이스를 구현해야만 합니다. 그래야 로컬 텐더민트 엔진과 통신할 수 있습니다. 다행스럽게도, 당신이 스스로 직접 ABCI 인터페이스를 구현할 필요는 없습니다. Cosmos SDK 가 "),C("a",{attrs:{href:"https://cosmos.network/docs/intro/sdk-design.html#baseapp",target:"_blank",rel:"noopener noreferrer"}},[t._v("baseapp"),C("OutboundLink")],1),t._v(" 의 형태로 boilerplate 를 제공합니다.")]),t._v(" "),C("h3",{attrs:{id:"자-이제-다음단계로-sdk-고수준-설계-원칙에-대해서-알아보자"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#자-이제-다음단계로-sdk-고수준-설계-원칙에-대해서-알아보자"}},[t._v("#")]),t._v(" 자 이제 다음단계로 "),C("a",{attrs:{href:"https://cosmos.network/docs/intro/sdk-design.html#baseapp",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDK 고수준 설계 원칙에 대해서 알아보자."),C("OutboundLink")],1)])],1)}),[],!1,null,null,null);g.default=A.exports}}]);