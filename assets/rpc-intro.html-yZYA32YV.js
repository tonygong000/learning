import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as p,c,a as t,b as e,d as o,w as l,e as a}from"./app-C4hTQQaE.js";const d={},u=a('<p>这篇文章会简单介绍一下 RPC 相关的基础概念。</p><h2 id="rpc-是什么" tabindex="-1"><a class="header-anchor" href="#rpc-是什么"><span>RPC 是什么?</span></a></h2><p><strong>RPC（Remote Procedure Call）</strong> 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。</p><p><strong>为什么要 RPC ？</strong> 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程才能传递方法调用所需要的参数。并且，方法调用的结果也需要通过网络编程来接收。但是，如果我们自己手动网络编程来实现这个调用过程的话工作量是非常大的，因为，我们需要考虑底层传输方式（TCP 还是 UDP）、序列化方式等等方面。</p><p><strong>RPC 能帮助我们做什么呢？</strong> 简单来说，通过 RPC 可以帮助我们调用远程计算机上某个服务的方法，这个过程就像调用本地方法一样简单。并且！我们不需要了解底层网络编程的具体细节。</p><p>举个例子：两个不同的服务 A、B 部署在两台不同的机器上，服务 A 如果想要调用服务 B 中的某个方法的话就可以通过 RPC 来做。</p><p>一言蔽之：<strong>RPC 的出现就是为了让你调用远程方法像调用本地方法一样简单。</strong></p><h2 id="rpc-的原理是什么" tabindex="-1"><a class="header-anchor" href="#rpc-的原理是什么"><span>RPC 的原理是什么?</span></a></h2><p>为了能够帮助小伙伴们理解 RPC 原理，我们可以将整个 RPC 的 核心功能看作是下面 👇 5 个部分实现的：</p><ol><li><strong>客户端（服务消费端）</strong>：调用远程方法的一端。</li><li><strong>客户端 Stub（桩）</strong>：这其实就是一代理类。代理类主要做的事情很简单，就是把你调用方法、类、方法参数等信息传递到服务端。</li><li><strong>网络传输</strong>：网络传输就是你要把你调用的方法的信息比如说参数啊这些东西传输到服务端，然后服务端执行完之后再把返回结果通过网络传输给你传输回来。网络传输的实现方式有很多种比如最基本的 Socket 或者性能以及封装更加优秀的 Netty（推荐）。</li><li><strong>服务端 Stub（桩）</strong>：这个桩就不是代理类了。我觉得理解为桩实际不太好，大家注意一下就好。这里的服务端 Stub 实际指的就是接收到客户端执行方法的请求后，去执行对应的方法然后返回结果给客户端的类。</li><li><strong>服务端（服务提供端）</strong>：提供远程方法的一端。</li></ol><p>具体原理图如下，后面我会串起来将整个 RPC 的过程给大家说一下。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/37345851.jpg" alt="RPC原理图" tabindex="0"><figcaption>RPC原理图</figcaption></figure><ol><li>服务消费端（client）以本地调用的方式调用远程服务；</li><li>客户端 Stub（client stub） 接收到调用后负责将方法、参数等组装成能够进行网络传输的消息体（序列化）：<code>RpcRequest</code>；</li><li>客户端 Stub（client stub） 找到远程服务的地址，并将消息发送到服务提供端；</li><li>服务端 Stub（桩）收到消息将消息反序列化为 Java 对象: <code>RpcRequest</code>；</li><li>服务端 Stub（桩）根据<code>RpcRequest</code>中的类、方法、方法参数等信息调用本地的方法；</li><li>服务端 Stub（桩）得到方法执行结果并将组装成能够进行网络传输的消息体：<code>RpcResponse</code>（序列化）发送至消费方；</li><li>客户端 Stub（client stub）接收到消息并将消息反序列化为 Java 对象:<code>RpcResponse</code> ，这样也就得到了最终结果。over!</li></ol><p>相信小伙伴们看完上面的讲解之后，已经了解了 RPC 的原理。</p><p>虽然篇幅不多，但是基本把 RPC 框架的核心原理讲清楚了！另外，对于上面的技术细节，我会在后面的章节介绍到。</p><p><strong>最后，对于 RPC 的原理，希望小伙伴不单单要理解，还要能够自己画出来并且能够给别人讲出来。因为，在面试中这个问题在面试官问到 RPC 相关内容的时候基本都会碰到。</strong></p><h2 id="有哪些常见的-rpc-框架" tabindex="-1"><a class="header-anchor" href="#有哪些常见的-rpc-框架"><span>有哪些常见的 RPC 框架？</span></a></h2><p>我们这里说的 RPC 框架指的是可以让客户端直接调用服务端方法，就像调用本地方法一样简单的框架，比如我下面介绍的 Dubbo、Motan、gRPC 这些。 如果需要和 HTTP 协议打交道，解析和封装 HTTP 请求和响应。这类框架并不能算是“RPC 框架”，比如 Feign。</p><h3 id="dubbo" tabindex="-1"><a class="header-anchor" href="#dubbo"><span>Dubbo</span></a></h3><figure><img src="https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/image-20220716111053081.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>Apache Dubbo 是一款微服务框架，为大规模微服务实践提供高性能 RPC 通信、流量治理、可观测性等解决方案，<br> 涵盖 Java、Golang 等多种语言 SDK 实现。</p><p>Dubbo 提供了从服务定义、服务发现、服务通信到流量管控等几乎所有的服务治理能力，支持 Triple 协议（基于 HTTP/2 之上定义的下一代 RPC 通信协议）、应用级服务发现、Dubbo Mesh （Dubbo3 赋予了很多云原生友好的新特性）等特性。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/image-20220716111545343.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>Dubbo 是由阿里开源，后来加入了 Apache 。正是由于 Dubbo 的出现，才使得越来越多的公司开始使用以及接受分布式架构。</p><p>Dubbo 算的是比较优秀的国产开源项目了，它的源码也是非常值得学习和阅读的！</p>',25),h={href:"https://github.com/apache/incubator-dubbo",title:"https://github.com/apache/incubator-dubbo",target:"_blank",rel:"noopener noreferrer"},g={href:"https://dubbo.apache.org/zh/",target:"_blank",rel:"noopener noreferrer"},b=t("h3",{id:"motan",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#motan"},[t("span",null,"Motan")])],-1),m=t("p",null,"Motan 是新浪微博开源的一款 RPC 框架，据说在新浪微博正支撑着千亿次调用。不过笔者倒是很少看到有公司使用，而且网上的资料也比较少。",-1),f=t("p",null,[e("很多人喜欢拿 Motan 和 Dubbo 作比较，毕竟都是国内大公司开源的。笔者在查阅了很多资料，以及简单查看了其源码之后发现："),t("strong",null,"Motan 更像是一个精简版的 Dubbo，可能是借鉴了 Dubbo 的思想，Motan 的设计更加精简，功能更加纯粹。")],-1),P=t("p",null,"不过，我不推荐你在实际项目中使用 Motan。如果你要是公司实际使用的话，还是推荐 Dubbo ，其社区活跃度以及生态都要好很多。",-1),_={href:"http://kriszhang.com/motan-rpc-impl/",title:"http://kriszhang.com/motan-rpc-impl/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/weibocom/motan/wiki/zh_overview",title:"https://github.com/weibocom/motan/wiki/zh_overview",target:"_blank",rel:"noopener noreferrer"},C=t("h3",{id:"grpc",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#grpc"},[t("span",null,"gRPC")])],-1),v=t("figure",null,[t("img",{src:"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/2843b10d-0c2f-4b7e-9c3e-ea4466792a8b.png",alt:"",tabindex:"0"}),t("figcaption")],-1),j=t("p",null,"gRPC 是 Google 开源的一个高性能、通用的开源 RPC 框架。其由主要面向移动应用开发并基于 HTTP/2 协议标准而设计（支持双向流、消息头压缩等功能，更加节省带宽），基于 ProtoBuf 序列化协议开发，并且支持众多开发语言。",-1),y=t("strong",null,"何谓 ProtoBuf？",-1),k={href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"},x=t("figure",null,[t("img",{src:"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/image-20220716104304033.png",alt:"",tabindex:"0"}),t("figcaption")],-1),T={href:"https://dubbogo.github.io/",target:"_blank",rel:"noopener noreferrer"},D=t("p",null,"不过，gRPC 的设计导致其几乎没有服务治理能力。如果你想要解决这个问题的话，就需要依赖其他组件比如腾讯的 PolarisMesh（北极星）了。",-1),w={href:"https://github.com/grpc/grpc",title:"https://github.com/grpc/grpc",target:"_blank",rel:"noopener noreferrer"},M={href:"https://grpc.io/",title:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"},S=a('<h3 id="thrift" tabindex="-1"><a class="header-anchor" href="#thrift"><span>Thrift</span></a></h3><p>Apache Thrift 是 Facebook 开源的跨语言的 RPC 通信框架，目前已经捐献给 Apache 基金会管理，由于其跨语言特性和出色的性能，在很多互联网公司得到应用，有能力的公司甚至会基于 thrift 研发一套分布式服务框架，增加诸如服务注册、服务发现等功能。</p><p><code>Thrift</code>支持多种不同的<strong>编程语言</strong>，包括<code>C++</code>、<code>Java</code>、<code>Python</code>、<code>PHP</code>、<code>Ruby</code>等（相比于 gRPC 支持的语言更多 ）。</p>',3),z={href:"https://thrift.apache.org/",title:"https://thrift.apache.org/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.jianshu.com/p/8f25d057a5a9",title:"https://www.jianshu.com/p/8f25d057a5a9",target:"_blank",rel:"noopener noreferrer"},H=a('<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>gRPC 和 Thrift 虽然支持跨语言的 RPC 调用，但是它们只提供了最基本的 RPC 框架功能，缺乏一系列配套的服务化组件和服务治理功能的支撑。</p><p>Dubbo 不论是从功能完善程度、生态系统还是社区活跃度来说都是最优秀的。而且，Dubbo 在国内有很多成功的案例比如当当网、滴滴等等，是一款经得起生产考验的成熟稳定的 RPC 框架。最重要的是你还能找到非常多的 Dubbo 参考资料，学习成本相对也较低。</p><p>下图展示了 Dubbo 的生态系统。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/eee98ff2-8e06-4628-a42b-d30ffcd2831e.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>Dubbo 也是 Spring Cloud Alibaba 里面的一个组件。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/0d195dae-72bc-4956-8451-3eaf6dd11cbd.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>但是，Dubbo 和 Motan 主要是给 Java 语言使用。虽然，Dubbo 和 Motan 目前也能兼容部分语言，但是不太推荐。如果需要跨多种语言调用的话，可以考虑使用 gRPC。</p><p>综上，如果是 Java 后端技术栈，并且你在纠结选择哪一种 RPC 框架的话，我推荐你考虑一下 Dubbo。</p><h2 id="如何设计并实现一个-rpc-框架" tabindex="-1"><a class="header-anchor" href="#如何设计并实现一个-rpc-框架"><span>如何设计并实现一个 RPC 框架？</span></a></h2>',10),G=t("strong",null,"《手写 RPC 框架》",-1),J={href:"https://javaguide.cn/about-the-author/zhishixingqiu-two-years.html",target:"_blank",rel:"noopener noreferrer"},N=t("p",null,"麻雀虽小五脏俱全，项目代码注释详细，结构清晰，并且集成了 Check Style 规范代码结构，非常适合阅读和学习。",-1),A=t("p",null,[t("strong",null,"内容概览"),e("：")],-1),q=t("figure",null,[t("img",{src:"https://oss.javaguide.cn/github/javaguide/image-20220308100605485.png",alt:"",tabindex:"0"}),t("figcaption")],-1),I=t("h2",{id:"既然有了-http-协议-为什么还要有-rpc",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#既然有了-http-协议-为什么还要有-rpc"},[t("span",null,"既然有了 HTTP 协议，为什么还要有 RPC ？")])],-1),L=t("figure",null,[t("img",{src:"https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),t("figcaption",null,"JavaGuide 官方公众号")],-1);function V(Z,E){const i=r("ExternalLinkIcon"),n=r("RouteLink");return p(),c("div",null,[u,t("ul",null,[t("li",null,[e("GitHub："),t("a",h,[e("https://github.com/apache/incubator-dubbo"),o(i)])]),t("li",null,[e("官网："),t("a",g,[e("https://dubbo.apache.org/zh/"),o(i)])])]),b,m,f,P,t("ul",null,[t("li",null,[e("从 Motan 看 RPC 框架设计："),t("a",_,[e("http://kriszhang.com/motan-rpc-impl/"),o(i)])]),t("li",null,[e("Motan 中文文档："),t("a",R,[e("https://github.com/weibocom/motan/wiki/zh_overview"),o(i)])])]),C,v,j,t("p",null,[y,e(),t("a",k,[e("ProtoBuf（ Protocol Buffer）"),o(i)]),e(" 是一种更加灵活、高效的数据格式，可用于通讯协议、数据存储等领域，基本支持所有主流编程语言且与平台无关。不过，通过 ProtoBuf 定义接口和数据类型还挺繁琐的，这是一个小问题。")]),x,t("p",null,[e("不得不说，gRPC 的通信层的设计还是非常优秀的，"),t("a",T,[e("Dubbo-go 3.0"),o(i)]),e(" 的通信层改进主要借鉴了 gRPC。")]),D,t("ul",null,[t("li",null,[e("GitHub："),t("a",w,[e("https://github.com/grpc/grpc"),o(i)])]),t("li",null,[e("官网："),t("a",M,[e("https://grpc.io/"),o(i)])])]),S,t("ul",null,[t("li",null,[e("官网："),t("a",z,[e("https://thrift.apache.org/"),o(i)])]),t("li",null,[e("Thrift 简单介绍："),t("a",B,[e("https://www.jianshu.com/p/8f25d057a5a9"),o(i)])])]),H,t("p",null,[G,e(" 是我的"),t("a",J,[e("知识星球"),o(i)]),e("的一个内部小册，我写了 12 篇文章来讲解如何从零开始基于 Netty+Kyro+Zookeeper 实现一个简易的 RPC 框架。")]),N,A,q,I,t("p",null,[e("关于这个问题的详细答案，请看这篇文章："),o(n,{to:"/distributed-system/rpc/http&rpc.html"},{default:l(()=>[e("有了 HTTP 协议，为什么还要有 RPC ？")]),_:1}),e(" 。")]),L])}const U=s(d,[["render",V],["__file","rpc-intro.html.vue"]]),O=JSON.parse(`{"path":"/distributed-system/rpc/rpc-intro.html","title":"RPC基础知识总结","lang":"zh-CN","frontmatter":{"title":"RPC基础知识总结","category":"分布式","tag":["rpc"],"gitInclude":["../../snippets/article-footer.snippet.md"],"description":"这篇文章会简单介绍一下 RPC 相关的基础概念。 RPC 是什么? RPC（Remote Procedure Call） 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。 为什么要 RPC ？ 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程才能传递方法调用所需要的参数。并且，方法调用的结果也...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/distributed-system/rpc/rpc-intro.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"RPC基础知识总结"}],["meta",{"property":"og:description","content":"这篇文章会简单介绍一下 RPC 相关的基础概念。 RPC 是什么? RPC（Remote Procedure Call） 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。 为什么要 RPC ？ 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程才能传递方法调用所需要的参数。并且，方法调用的结果也..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/37345851.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T05:10:55.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"rpc"}],["meta",{"property":"article:modified_time","content":"2024-08-31T05:10:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RPC基础知识总结\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/37345851.jpg\\",\\"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/image-20220716111053081.png\\",\\"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/image-20220716111545343.png\\",\\"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/2843b10d-0c2f-4b7e-9c3e-ea4466792a8b.png\\",\\"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/image-20220716104304033.png\\",\\"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/eee98ff2-8e06-4628-a42b-d30ffcd2831e.png\\",\\"https://oss.javaguide.cn/github/javaguide/distributed-system/rpc/0d195dae-72bc-4956-8451-3eaf6dd11cbd.png\\",\\"https://oss.javaguide.cn/github/javaguide/image-20220308100605485.png\\"],\\"dateModified\\":\\"2024-08-31T05:10:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"RPC 是什么?","slug":"rpc-是什么","link":"#rpc-是什么","children":[]},{"level":2,"title":"RPC 的原理是什么?","slug":"rpc-的原理是什么","link":"#rpc-的原理是什么","children":[]},{"level":2,"title":"有哪些常见的 RPC 框架？","slug":"有哪些常见的-rpc-框架","link":"#有哪些常见的-rpc-框架","children":[{"level":3,"title":"Dubbo","slug":"dubbo","link":"#dubbo","children":[]},{"level":3,"title":"Motan","slug":"motan","link":"#motan","children":[]},{"level":3,"title":"gRPC","slug":"grpc","link":"#grpc","children":[]},{"level":3,"title":"Thrift","slug":"thrift","link":"#thrift","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"如何设计并实现一个 RPC 框架？","slug":"如何设计并实现一个-rpc-框架","link":"#如何设计并实现一个-rpc-框架","children":[]},{"level":2,"title":"既然有了 HTTP 协议，为什么还要有 RPC ？","slug":"既然有了-http-协议-为什么还要有-rpc","link":"#既然有了-http-协议-为什么还要有-rpc","children":[]}],"git":{"createdTime":1725081055000,"updatedTime":1725081055000,"contributors":[{"name":"tonygong","email":"280880907@163.com","commits":1}]},"readingTime":{"minutes":8.32,"words":2496},"filePathRelative":"distributed-system/rpc/rpc-intro.md","localizedDate":"2024年8月31日","excerpt":"<p>这篇文章会简单介绍一下 RPC 相关的基础概念。</p>\\n<h2>RPC 是什么?</h2>\\n<p><strong>RPC（Remote Procedure Call）</strong> 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。</p>\\n<p><strong>为什么要 RPC ？</strong> 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程才能传递方法调用所需要的参数。并且，方法调用的结果也需要通过网络编程来接收。但是，如果我们自己手动网络编程来实现这个调用过程的话工作量是非常大的，因为，我们需要考虑底层传输方式（TCP 还是 UDP）、序列化方式等等方面。</p>","autoDesc":true}`);export{U as comp,O as data};
