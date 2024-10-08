import{_ as i}from"./2008410143049281-9cZcvPqg.js";import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as o,a as t,b as n,e}from"./app-BlHhf7HR.js";const l="/learning/assets/arp_same_lan-PgW9fcCe.png",s="/learning/assets/arp_different_lan-LU_pQWQV.png",p={},A=e('<p>每当我们学习一个新的网络协议的时候，都要把他结合到 OSI 七层模型中，或者是 TCP/IP 协议栈中来学习，一是要学习该协议在整个网络协议栈中的位置，二是要学习该协议解决了什么问题，地位如何？三是要学习该协议的工作原理，以及一些更深入的细节。</p><p><strong>ARP 协议</strong>，可以说是在协议栈中属于一个<strong>偏底层的、非常重要的、又非常简单的</strong>通信协议。</p><p>开始阅读这篇文章之前，你可以先看看下面几个问题：</p><ol><li><strong>ARP 协议在协议栈中的位置？</strong> ARP 协议在协议栈中的位置非常重要，在理解了它的工作原理之后，也很难说它到底是网络层协议，还是链路层协议，因为它恰恰串联起了网络层和链路层。国外的大部分教程通常将 ARP 协议放在网络层。</li><li><strong>ARP 协议解决了什么问题，地位如何？</strong> ARP 协议，全称 <strong>地址解析协议（Address Resolution Protocol）</strong>，它解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。</li><li><strong>ARP 工作原理？</strong> 只希望大家记住几个关键词：<strong>ARP 表、广播问询、单播响应</strong>。</li></ol><h2 id="mac-地址" tabindex="-1"><a class="header-anchor" href="#mac-地址"><span>MAC 地址</span></a></h2><p>在介绍 ARP 协议之前，有必要介绍一下 MAC 地址。</p><p>MAC 地址的全称是 <strong>媒体访问控制地址（Media Access Control Address）</strong>。如果说，互联网中每一个资源都由 IP 地址唯一标识（IP 协议内容），那么一切网络设备都由 MAC 地址唯一标识。</p><figure><img src="'+i+'" alt="路由器的背面就会注明 MAC 位址" tabindex="0"><figcaption>路由器的背面就会注明 MAC 位址</figcaption></figure><p>可以理解为，MAC 地址是一个网络设备真正的身份证号，IP 地址只是一种不重复的定位方式（比如说住在某省某市某街道的张三，这种逻辑定位是 IP 地址，他的身份证号才是他的 MAC 地址），也可以理解为 MAC 地址是身份证号，IP 地址是邮政地址。MAC 地址也有一些别称，如 LAN 地址、物理地址、以太网地址等。</p><blockquote><p>还有一点要知道的是，不仅仅是网络资源才有 IP 地址，网络设备也有 IP 地址，比如路由器。但从结构上说，路由器等网络设备的作用是组成一个网络，而且通常是内网，所以它们使用的 IP 地址通常是内网 IP，内网的设备在与内网以外的设备进行通信时，需要用到 NAT 协议。</p></blockquote>',10),c={class:"MathJax",jax:"SVG",style:{position:"relative"}},P={style:{"vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.919ex",height:"1.904ex",role:"img",focusable:"false",viewBox:"0 -841.7 1290.1 841.7","aria-hidden":"true"},g=e('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" transform="translate(500,0)"></path></g></g></g></g></g>',1),d=[g],m=t("mjx-assistive-mml",{unselectable:"on",display:"inline"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mn",null,"2"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"48")])])])],-1),M=e('<p>MAC 地址具有可携带性、永久性，身份证号永久地标识一个人的身份，不论他到哪里都不会改变。而 IP 地址不具有这些性质，当一台设备更换了网络，它的 IP 地址也就可能发生改变，也就是它在互联网中的定位发生了变化。</p><p>最后，记住，MAC 地址有一个特殊地址：FF-FF-FF-FF-FF-FF（全 1 地址），该地址表示广播地址。</p><h2 id="arp-协议工作原理" tabindex="-1"><a class="header-anchor" href="#arp-协议工作原理"><span>ARP 协议工作原理</span></a></h2><p>ARP 协议工作时有一个大前提，那就是 <strong>ARP 表</strong>。</p><p>在一个局域网内，每个网络设备都自己维护了一个 ARP 表，ARP 表记录了某些其他网络设备的 IP 地址-MAC 地址映射关系，该映射关系以 <code>&lt;IP, MAC, TTL&gt;</code> 三元组的形式存储。其中，TTL 为该映射关系的生存周期，典型值为 20 分钟，超过该时间，该条目将被丢弃。</p><p>ARP 的工作原理将分两种场景讨论：</p><ol><li><strong>同一局域网内的 MAC 寻址</strong>；</li><li><strong>从一个局域网到另一个局域网中的网络设备的寻址</strong>。</li></ol><h3 id="同一局域网内的-mac-寻址" tabindex="-1"><a class="header-anchor" href="#同一局域网内的-mac-寻址"><span>同一局域网内的 MAC 寻址</span></a></h3><p>假设当前有如下场景：IP 地址为<code>137.196.7.23</code>的主机 A，想要给同一局域网内的 IP 地址为<code>137.196.7.14</code>主机 B，发送 IP 数据报文。</p><blockquote><p>再次强调，当主机发送 IP 数据报文时（网络层），仅知道目的地的 IP 地址，并不清楚目的地的 MAC 地址，而 ARP 协议就是解决这一问题的。</p></blockquote><p>为了达成这一目标，主机 A 将不得不通过 ARP 协议来获取主机 B 的 MAC 地址，并将 IP 报文封装成链路层帧，发送到下一跳上。在该局域网内，关于此将按照时间顺序，依次发生如下事件：</p><ol><li><p>主机 A 检索自己的 ARP 表，发现 ARP 表中并无主机 B 的 IP 地址对应的映射条目，也就无从知道主机 B 的 MAC 地址。</p></li><li><p>主机 A 将构造一个 ARP 查询分组，并将其广播到所在的局域网中。</p><p>ARP 分组是一种特殊报文，ARP 分组有两类，一种是查询分组，另一种是响应分组，它们具有相同的格式，均包含了发送和接收的 IP 地址、发送和接收的 MAC 地址。当然了，查询分组中，发送的 IP 地址，即为主机 A 的 IP 地址，接收的 IP 地址即为主机 B 的 IP 地址，发送的 MAC 地址也是主机 A 的 MAC 地址，但接收的 MAC 地址绝不会是主机 B 的 MAC 地址（因为这正是我们要问询的！），而是一个特殊值——<code>FF-FF-FF-FF-FF-FF</code>，之前说过，该 MAC 地址是广播地址，也就是说，查询分组将广播给该局域网内的所有设备。</p></li><li><p>主机 A 构造的查询分组将在该局域网内广播，理论上，每一个设备都会收到该分组，并检查查询分组的接收 IP 地址是否为自己的 IP 地址，如果是，说明查询分组已经到达了主机 B，否则，该查询分组对当前设备无效，丢弃之。</p></li><li><p>主机 B 收到了查询分组之后，验证是对自己的问询，接着构造一个 ARP 响应分组，该分组的目的地只有一个——主机 A，发送给主机 A。同时，主机 B 提取查询分组中的 IP 地址和 MAC 地址信息，在自己的 ARP 表中构造一条主机 A 的 IP-MAC 映射记录。</p><p>ARP 响应分组具有和 ARP 查询分组相同的构造，不同的是，发送和接受的 IP 地址恰恰相反，发送的 MAC 地址为发送者本身，目标 MAC 地址为查询分组的发送者，也就是说，ARP 响应分组只有一个目的地，而非广播。</p></li><li><p>主机 A 终将收到主机 B 的响应分组，提取出该分组中的 IP 地址和 MAC 地址后，构造映射信息，加入到自己的 ARP 表中。</p></li></ol><figure><img src="'+l+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>在整个过程中，有几点需要补充说明的是：</p><ol><li>主机 A 想要给主机 B 发送 IP 数据报，如果主机 B 的 IP-MAC 映射信息已经存在于主机 A 的 ARP 表中，那么主机 A 无需广播，只需提取 MAC 地址并构造链路层帧发送即可。</li><li>ARP 表中的映射信息是有生存周期的，典型值为 20 分钟。</li><li>目标主机接收到了问询主机构造的问询报文后，将先把问询主机的 IP-MAC 映射存进自己的 ARP 表中，这样才能获取到响应的目标 MAC 地址，顺利的发送响应分组。</li></ol><p>总结来说，ARP 协议是一个<strong>广播问询，单播响应</strong>协议。</p><h3 id="不同局域网内的-mac-寻址" tabindex="-1"><a class="header-anchor" href="#不同局域网内的-mac-寻址"><span>不同局域网内的 MAC 寻址</span></a></h3><p>更复杂的情况是，发送主机 A 和接收主机 B 不在同一个子网中，假设一个一般场景，两台主机所在的子网由一台路由器联通。这里需要注意的是，一般情况下，我们说网络设备都有一个 IP 地址和一个 MAC 地址，这里说的网络设备，更严谨的说法应该是一个接口。路由器作为互联设备，具有多个接口，每个接口同样也应该具备不重复的 IP 地址和 MAC 地址。因此，在讨论 ARP 表时，路由器的多个接口都各自维护一个 ARP 表，而非一个路由器只维护一个 ARP 表。</p><p>接下来，回顾同一子网内的 MAC 寻址，如果主机 A 发送一个广播问询分组，那么 A 所在的子网内所有设备（接口）都将会捕获该分组，因为该分组的目的 IP 与发送主机 A 的 IP 在同一个子网中。但是当目的 IP 与 A 不在同一子网时，A 所在子网内将不会有设备成功接收该分组。那么，主机 A 应该发送怎样的查询分组呢？整个过程按照时间顺序发生的事件如下：</p><ol><li><p>主机 A 查询 ARP 表，期望寻找到目标路由器的本子网接口的 MAC 地址。</p><p>目标路由器指的是，根据目的主机 B 的 IP 地址，分析出 B 所在的子网，能够把报文转发到 B 所在子网的那个路由器。</p></li><li><p>主机 A 未能找到目标路由器的本子网接口的 MAC 地址，将采用 ARP 协议，问询到该 MAC 地址，由于目标接口与主机 A 在同一个子网内，该过程与同一局域网内的 MAC 寻址相同。</p></li><li><p>主机 A 获取到目标接口的 MAC 地址，先构造 IP 数据报，其中源 IP 是 A 的 IP 地址，目的 IP 地址是 B 的 IP 地址，再构造链路层帧，其中源 MAC 地址是 A 的 MAC 地址，目的 MAC 地址是<strong>本子网内与路由器连接的接口的 MAC 地址</strong>。主机 A 将把这个链路层帧，以单播的方式，发送给目标接口。</p></li><li><p>目标接口接收到了主机 A 发过来的链路层帧，解析，根据目的 IP 地址，查询转发表，将该 IP 数据报转发到与主机 B 所在子网相连的接口上。</p><p>到此，该帧已经从主机 A 所在的子网，转移到了主机 B 所在的子网了。</p></li><li><p>路由器接口查询 ARP 表，期望寻找到主机 B 的 MAC 地址。</p></li><li><p>路由器接口如未能找到主机 B 的 MAC 地址，将采用 ARP 协议，广播问询，单播响应，获取到主机 B 的 MAC 地址。</p></li><li><p>路由器接口将对 IP 数据报重新封装成链路层帧，目标 MAC 地址为主机 B 的 MAC 地址，单播发送，直到目的地。</p></li></ol><figure><img src="'+s+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>',22);function C(T,h){return a(),o("div",null,[A,t("p",null,[n("MAC 地址的长度为 6 字节（48 比特），地址空间大小有 280 万亿之多（"),t("mjx-container",c,[(a(),o("svg",P,d)),m]),n("），MAC 地址由 IEEE 统一管理与分配，理论上，一个网络设备中的网卡上的 MAC 地址是永久的。不同的网卡生产商从 IEEE 那里购买自己的 MAC 地址空间（MAC 的前 24 比特），也就是前 24 比特由 IEEE 统一管理，保证不会重复。而后 24 比特，由各家生产商自己管理，同样保证生产的两块网卡的 MAC 地址不会重复。")]),M])}const Q=r(p,[["render",C],["__file","arp.html.vue"]]),f=JSON.parse(`{"path":"/cs-basics/network/arp.html","title":"ARP 协议详解(网络层)","lang":"zh-CN","frontmatter":{"title":"ARP 协议详解(网络层)","category":"计算机基础","tag":["计算机网络"],"gitInclude":["../../snippets/article-footer.snippet.md"],"description":"每当我们学习一个新的网络协议的时候，都要把他结合到 OSI 七层模型中，或者是 TCP/IP 协议栈中来学习，一是要学习该协议在整个网络协议栈中的位置，二是要学习该协议解决了什么问题，地位如何？三是要学习该协议的工作原理，以及一些更深入的细节。 ARP 协议，可以说是在协议栈中属于一个偏底层的、非常重要的、又非常简单的通信协议。 开始阅读这篇文章之前，...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/cs-basics/network/arp.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"ARP 协议详解(网络层)"}],["meta",{"property":"og:description","content":"每当我们学习一个新的网络协议的时候，都要把他结合到 OSI 七层模型中，或者是 TCP/IP 协议栈中来学习，一是要学习该协议在整个网络协议栈中的位置，二是要学习该协议解决了什么问题，地位如何？三是要学习该协议的工作原理，以及一些更深入的细节。 ARP 协议，可以说是在协议栈中属于一个偏底层的、非常重要的、又非常简单的通信协议。 开始阅读这篇文章之前，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T15:48:11.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:modified_time","content":"2024-09-02T15:48:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ARP 协议详解(网络层)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-02T15:48:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"MAC 地址","slug":"mac-地址","link":"#mac-地址","children":[]},{"level":2,"title":"ARP 协议工作原理","slug":"arp-协议工作原理","link":"#arp-协议工作原理","children":[{"level":3,"title":"同一局域网内的 MAC 寻址","slug":"同一局域网内的-mac-寻址","link":"#同一局域网内的-mac-寻址","children":[]},{"level":3,"title":"不同局域网内的 MAC 寻址","slug":"不同局域网内的-mac-寻址","link":"#不同局域网内的-mac-寻址","children":[]}]}],"git":{"createdTime":1725292091000,"updatedTime":1725292091000,"contributors":[{"name":"tonygong","email":"280880907@163.com","commits":1}]},"readingTime":{"minutes":9.76,"words":2928},"filePathRelative":"cs-basics/network/arp.md","localizedDate":"2024年9月2日","excerpt":"<p>每当我们学习一个新的网络协议的时候，都要把他结合到 OSI 七层模型中，或者是 TCP/IP 协议栈中来学习，一是要学习该协议在整个网络协议栈中的位置，二是要学习该协议解决了什么问题，地位如何？三是要学习该协议的工作原理，以及一些更深入的细节。</p>\\n<p><strong>ARP 协议</strong>，可以说是在协议栈中属于一个<strong>偏底层的、非常重要的、又非常简单的</strong>通信协议。</p>\\n<p>开始阅读这篇文章之前，你可以先看看下面几个问题：</p>\\n<ol>\\n<li><strong>ARP 协议在协议栈中的位置？</strong> ARP 协议在协议栈中的位置非常重要，在理解了它的工作原理之后，也很难说它到底是网络层协议，还是链路层协议，因为它恰恰串联起了网络层和链路层。国外的大部分教程通常将 ARP 协议放在网络层。</li>\\n<li><strong>ARP 协议解决了什么问题，地位如何？</strong> ARP 协议，全称 <strong>地址解析协议（Address Resolution Protocol）</strong>，它解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。</li>\\n<li><strong>ARP 工作原理？</strong> 只希望大家记住几个关键词：<strong>ARP 表、广播问询、单播响应</strong>。</li>\\n</ol>","autoDesc":true}`);export{Q as comp,f as data};
