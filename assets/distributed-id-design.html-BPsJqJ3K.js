import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as p,c as r,a as e,b as t,d as a,e as d}from"./app-Dl67cLp_.js";const o={},l={class:"hint-container tip"},c=e("p",{class:"hint-container-title"},"提示",-1),g={href:"https://mp.weixin.qq.com/s/bFDLb6U6EgI-DvCdLTq_QA",target:"_blank",rel:"noopener noreferrer"},h=d('<p>网上绝大多数的分布式 ID 生成服务，一般着重于技术原理剖析，很少见到根据具体的业务场景去选型 ID 生成服务的文章。</p><p>本文结合一些使用场景，进一步探讨业务场景中对 ID 有哪些具体的要求。</p><h2 id="场景一-订单系统" tabindex="-1"><a class="header-anchor" href="#场景一-订单系统"><span>场景一：订单系统</span></a></h2><p>我们在商场买东西一码付二维码，下单生成的订单号，使用到的优惠券码，联合商品兑换券码，这些是在网上购物经常使用到的单号，那么为什么有些单号那么长，有些只有几位数？有些单号一看就知道年月日的信息，有些却看不出任何意义？下面展开分析下订单系统中不同场景的 id 服务的具体实现。</p><h3 id="_1、一码付" tabindex="-1"><a class="header-anchor" href="#_1、一码付"><span>1、一码付</span></a></h3><p>我们常见的一码付，指的是一个二维码可以使用支付宝或者微信进行扫码支付。</p><p>二维码的本质是一个字符串。聚合码的本质就是一个链接地址。用户使用支付宝微信直接扫一个码付钱，不用担心拿支付宝扫了微信的收款码或者用微信扫了支付宝的收款码，这极大减少了用户扫码支付的时间。</p><p>实现原理是当客户用 APP 扫码后，网站后台就会判断客户的扫码环境。（微信、支付宝、QQ 钱包、京东支付、云闪付等）。</p><p>判断扫码环境的原理就是根据打开链接浏览器的 HTTP header。任何浏览器打开 http 链接时，请求的 header 都会有 User-Agent(UA、用户代理)信息。</p><p>UA 是一个特殊字符串头，服务器依次可以识别出客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等很多信息。</p><p>各渠道对应支付产品的名称不一样，一定要仔细看各支付产品的 API 介绍。</p><ol><li>微信支付：JSAPI 支付支付</li><li>支付宝：手机网站支付</li><li>QQ 钱包：公众号支付</li></ol><p>其本质均为在 APP 内置浏览器中实现 HTML5 支付。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/distributed-system/distributed-id-design-pay-one-card.png" alt="文库会员支付示例" tabindex="0"><figcaption>文库会员支付示例</figcaption></figure><p>文库的研发同学在这个思路上，做了优化迭代。动态生成一码付的二维码预先绑定用户所选的商品信息和价格，根据用户所选的商品动态更新。这样不仅支持一码多平台调起支付，而且不用用户选择商品输入金额，即可完成订单支付的功能，很丝滑。用户在真正扫码后，服务端才通过前端获取用户 UID，结合二维码绑定的商品信息，真正的生成订单，发送支付信息到第三方（qq、微信、支付宝），第三方生成支付订单推给用户设备，从而调起支付。</p><p>区别于固定的一码付，在文库的应用中，使用到了动态二维码，二维码本质是一个短网址，ID 服务提供短网址的唯一标志参数。唯一的短网址映射的 ID 绑定了商品的订单信息，技术和业务的深度结合，缩短了支付流程，提升用户的支付体验。</p><h3 id="_2、订单号" tabindex="-1"><a class="header-anchor" href="#_2、订单号"><span>2、订单号</span></a></h3><p>订单号在实际的业务过程中作为一个订单的唯一标识码存在，一般实现以下业务场景：</p><ol><li>用户订单遇到问题，需要找客服进行协助；</li><li>对订单进行操作，如线下收款，订单核销；</li><li>下单，改单，成单，退单，售后等系统内部的订单流程处理和跟进。</li></ol><p>很多时候搜索订单相关信息的时候都是以订单 ID 作为唯一标识符，这是由于订单号的生成规则的唯一性决定的。从技术角度看，除了 ID 服务必要的特性之外，在订单号的设计上需要体现几个特性：</p><p><strong>（1）信息安全</strong></p><p>编号不能透露公司的运营情况，比如日销、公司流水号等信息，以及商业信息和用户手机号，身份证等隐私信息。并且不能有明显的整体规律（可以有局部规律），任意修改一个字符就能查询到另一个订单信息，这也是不允许的。</p><p>类比于我们高考时候的考生编号的生成规则，一定不能是连号的，否则只需要根据顺序往下查询就能搜索到别的考生的成绩，这是绝对不可允许。</p><p><strong>（2）部分可读</strong></p><p>位数要便于操作，因此要求订单号的位数适中，且局部有规律。这样可以方便在订单异常，或者退货时客服查询。</p><p>过长的订单号或易读性差的订单号会导致客服输入困难且易错率较高，影响用户体验的售后体验。因此在实际的业务场景中，订单号的设计通常都会适当携带一些允许公开的对使用场景有帮助的信息，如时间，星期，类型等等，这个主要根据所涉及的编号对应的使用场景来。</p><p>而且像时间、星期这些自增长的属于作为订单号的设计的一部分元素，有助于解决业务累积而导致的订单号重复的问题。</p><p><strong>（3）查询效率</strong></p><p>常见的电商平台订单号大多是纯数字组成，兼具可读性的同时，int 类型相对 varchar 类型的查询效率更高，对在线业务更加友好。</p><h3 id="_3、优惠券和兑换券" tabindex="-1"><a class="header-anchor" href="#_3、优惠券和兑换券"><span>3、优惠券和兑换券</span></a></h3><p>优惠券、兑换券是运营推广最常用的促销工具之一，合理使用它们，可以让买家得到实惠，商家提升商品销量。常见场景有：</p><ol><li>在文库购买【文库 VIP+QQ 音乐年卡】联合商品，支付成功后会得到 QQ 音乐年卡的兑换码，可以去 QQ 音乐 App 兑换音乐会员年卡；</li><li>疫情期间，部分地方政府发放的消费券；</li><li>瓶装饮料经常会出现输入优惠编码兑换奖品。</li></ol><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/distributed-system/distributed-id-design-coupon.png" alt="优惠编码兑换奖品" tabindex="0"><figcaption>优惠编码兑换奖品</figcaption></figure><p>从技术角度看，有些场景适合 ID 即时生成，比如电商平台购物领取的优惠券，只需要在用户领取时分配优惠券信息即可。有些线上线下结合的场景，比如疫情优惠券，瓶盖开奖，京东卡，超市卡这种，则需要预先生成，预先生成的券码具备以下特性：</p><p>1.预先生成，在活动正式开始前提供出来进行活动预热；</p><p>2.优惠券体量大，以万为单位，通常在 10 万级别以上；</p><p>3.不可破解、仿制券码；</p><p>4.支持用后核销；</p><p>5.优惠券、兑换券属于广撒网的策略，所以利用率低，也就不适合使用数据库进行存储 <strong>（占空间，有效的数据又少）</strong>。</p><p>设计思路上，需要设计一种有效的兑换码生成策略，支持预先生成，支持校验，内容简洁，生成的兑换码都具有唯一性，那么这种策略就是一种特殊的编解码策略，按照约定的编解码规则支撑上述需求。</p><p>既然是一种编解码规则，那么需要约定编码空间(也就是用户看到的组成兑换码的字符)，编码空间由字符 a-z,A-Z,数字 0-9 组成，为了增强兑换码的可识别度，剔除大写字母 O 以及 I,可用字符如下所示，共 60 个字符：</p><p>abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXZY0123456789</p><p>之前说过，兑换码要求近可能简洁，那么设计时就需要考虑兑换码的字符数，假设上限为 12 位，而字符空间有 60 位，那么可以表示的空间范围为 60^12=130606940160000000000000(也就是可以 12 位的兑换码可以生成天量,应该够运营同学挥霍了)，转换成 2 进制：</p><p>1001000100000000101110011001101101110011000000000000000000000(61 位)</p><p><strong>兑换码组成成分分析</strong></p><p>兑换码可以预先生成，并且不需要额外的存储空间保存这些信息，每一个优惠方案都有独立的一组兑换码(指运营同学组织的每一场运营活动都有不同的兑换码,不能混合使用, 例如双 11 兑换码不能使用在双 12 活动上)，每个兑换码有自己的编号，防止重复，为了保证兑换码的有效性，对兑换码的数据需要进行校验，当前兑换码的数据组成如下所示：</p><p>优惠方案 ID + 兑换码序列号 i + 校验码</p><p><strong>编码方案</strong></p><ol><li>兑换码序列号 i，代表当前兑换码是当前活动中第 i 个兑换码，兑换码序列号的空间范围决定了优惠活动可以发行的兑换码数目，当前采用 30 位 bit 位表示，可表示范围：1073741824（10 亿个券码）。</li><li>优惠方案 ID, 代表当前优惠方案的 ID 号，优惠方案的空间范围决定了可以组织的优惠活动次数，当前采用 15 位表示，可以表示范围：32768（考虑到运营活动的频率，以及 ID 的初始值 10000，15 位足够，365 天每天有运营活动，可以使用 54 年）。</li><li>校验码，校验兑换码是否有效，主要为了快捷的校验兑换码信息的是否正确，其次可以起到填充数据的目的，增强数据的散列性，使用 13 位表示校验位，其中分为两部分，前 6 位和后 7 位。</li></ol><p>深耕业务还会有区分通用券和单独券的情况，分别具备以下特点，技术实现需要因地制宜地思考。</p><ol><li>通用券：多个玩家都可以输入兑换，然后有总量限制，期限限制。</li><li>单独券：运营同学可以在后台设置兑换码的奖励物品、期限、个数，然后由后台生成兑换码的列表，兑换之后核销。</li></ol><h2 id="场景二-tracing" tabindex="-1"><a class="header-anchor" href="#场景二-tracing"><span>场景二：Tracing</span></a></h2><h3 id="_1、日志跟踪" tabindex="-1"><a class="header-anchor" href="#_1、日志跟踪"><span>1、日志跟踪</span></a></h3><p>在分布式服务架构下，一个 Web 请求从网关流入，有可能会调用多个服务对请求进行处理，拿到最终结果。这个过程中每个服务之间的通信又是单独的网络请求，无论请求经过的哪个服务出了故障或者处理过慢都会对前端造成影响。</p><p>处理一个 Web 请求要调用的多个服务，为了能更方便的查询哪个环节的服务出现了问题，现在常用的解决方案是为整个系统引入分布式链路跟踪。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/distributed-system/distributed-id-design-tracing.png" alt="在分布式链路跟踪" tabindex="0"><figcaption>在分布式链路跟踪</figcaption></figure><p>在分布式链路跟踪中有两个重要的概念：跟踪（trace）和 跨度（ span)。trace 是请求在分布式系统中的整个链路视图，span 则代表整个链路中不同服务内部的视图，span 组合在一起就是整个 trace 的视图。</p><p>在整个请求的调用链中，请求会一直携带 traceid 往下游服务传递，每个服务内部也会生成自己的 spanid 用于生成自己的内部调用视图，并和 traceid 一起传递给下游服务。</p><h3 id="_2、traceid-生成规则" tabindex="-1"><a class="header-anchor" href="#_2、traceid-生成规则"><span>2、TraceId 生成规则</span></a></h3><p>这种场景下，生成的 ID 除了要求唯一之外，还要求生成的效率高、吞吐量大。traceid 需要具备接入层的服务器实例自主生成的能力，如果每个 trace 中的 ID 都需要请求公共的 ID 服务生成，纯纯的浪费网络带宽资源。且会阻塞用户请求向下游传递，响应耗时上升，增加了没必要的风险。所以需要服务器实例最好可以自行计算 tracid，spanid，避免依赖外部服务。</p><p>产生规则：服务器 IP + ID 产生的时间 + 自增序列 + 当前进程号 ，比如：</p><p>0ad1348f1403169275002100356696</p><p>前 8 位 0ad1348f 即产生 TraceId 的机器的 IP，这是一个十六进制的数字，每两位代表 IP 中的一段，我们把这个数字，按每两位转成 10 进制即可得到常见的 IP 地址表示方式 10.209.52.143，您也可以根据这个规律来查找到请求经过的第一个服务器。</p><p>后面的 13 位 1403169275002 是产生 TraceId 的时间。之后的 4 位 1003 是一个自增的序列，从 1000 涨到 9000，到达 9000 后回到 1000 再开始往上涨。最后的 5 位 56696 是当前的进程 ID，为了防止单机多进程出现 TraceId 冲突的情况，所以在 TraceId 末尾添加了当前的进程 ID。</p><h3 id="_3、spanid-生成规则" tabindex="-1"><a class="header-anchor" href="#_3、spanid-生成规则"><span>3、SpanId 生成规则</span></a></h3><p>span 是层的意思，比如在第一个实例算是第一层， 请求代理或者分流到下一个实例处理，就是第二层，以此类推。通过层，SpanId 代表本次调用在整个调用链路树中的位置。</p><p>假设一个 服务器实例 A 接收了一次用户请求，代表是整个调用的根节点，那么 A 层处理这次请求产生的非服务调用日志记录 spanid 的值都是 0，A 层需要通过 RPC 依次调用 B、C、D 三个服务器实例，那么在 A 的日志中，SpanId 分别是 0.1，0.2 和 0.3，在 B、C、D 中，SpanId 也分别是 0.1，0.2 和 0.3；如果 C 系统在处理请求的时候又调用了 E，F 两个服务器实例，那么 C 系统中对应的 spanid 是 0.2.1 和 0.2.2，E、F 两个系统对应的日志也是 0.2.1 和 0.2.2。</p><p>根据上面的描述可以知道，如果把一次调用中所有的 SpanId 收集起来，可以组成一棵完整的链路树。</p><p><strong>spanid 的生成本质：在跨层传递透传的同时，控制大小版本号的自增来实现的。</strong></p><h2 id="场景三-短网址" tabindex="-1"><a class="header-anchor" href="#场景三-短网址"><span>场景三：短网址</span></a></h2><p>短网址主要功能包括网址缩短与还原两大功能。相对于长网址，短网址可以更方便地在电子邮件，社交网络，微博和手机上传播，例如原来很长的网址通过短网址服务即可生成相应的短网址，避免折行或超出字符限制。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/system-design/distributed-system/distributed-id-design-short-url.png" alt="短网址作用" tabindex="0"><figcaption>短网址作用</figcaption></figure><p>常用的 ID 生成服务比如：MySQL ID 自增、 Redis 键自增、号段模式，生成的 ID 都是一串数字。短网址服务把客户的长网址转换成短网址，</p>',73),u={href:"http://dwz.cn",target:"_blank",rel:"noopener noreferrer"},m={href:"https://wenku.baidu.com/ndbusiness/browse/wenkuvipcashier?cashier_code=PCoperatebanner",target:"_blank",rel:"noopener noreferrer"},b={href:"https://dwz.cn/2047601319t66",target:"_blank",rel:"noopener noreferrer"},I={href:"https://dwz.cn/2ezwDJ0",target:"_blank",rel:"noopener noreferrer"},_=e("figure",null,[e("img",{src:"https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),e("figcaption",null,"JavaGuide 官方公众号")],-1);function D(f,v){const i=s("ExternalLinkIcon");return p(),r("div",null,[e("div",l,[c,e("p",null,[t("看到百度 Geek 说的一篇结合具体场景聊分布式 ID 设计的文章，感觉挺不错的。于是，我将这篇文章的部分内容整理到了这里。原文传送门："),e("a",g,[t("分布式 ID 生成服务的技术原理和项目实战"),a(i)]),t(" 。")])]),h,e("p",null,[t("实际是在 "),e("a",u,[t("dwz.cn"),a(i)]),t(" 域名后面拼接新产生的数字类型 ID，直接用数字 ID，网址长度也有些长，服务可以通过数字 ID 转更高进制的方式压缩长度。这种算法在短网址的技术实现上越来越多了起来，它可以进一步压缩网址长度。转进制的压缩算法在生活中有广泛的应用场景，举例：")]),e("ul",null,[e("li",null,[t("客户的长网址："),e("a",m,[t("https://wenku.baidu.com/ndbusiness/browse/wenkuvipcashier?cashier_code=PCoperatebanner"),a(i)])]),e("li",null,[t("ID 映射的短网址："),e("a",b,[t("https://dwz.cn/2047601319t66"),a(i)]),t(" (演示使用，可能无法正确打开)")]),e("li",null,[t("转进制后的短网址："),e("a",I,[t("https://dwz.cn/2ezwDJ0"),a(i)]),t(" (演示使用，可能无法正确打开)")])]),_])}const x=n(o,[["render",D],["__file","distributed-id-design.html.vue"]]),j=JSON.parse(`{"path":"/distributed-system/distributed-id-design.html","title":"分布式ID设计指南","lang":"zh-CN","frontmatter":{"title":"分布式ID设计指南","category":"分布式","gitInclude":["../snippets/article-footer.snippet.md"],"description":"提示 看到百度 Geek 说的一篇结合具体场景聊分布式 ID 设计的文章，感觉挺不错的。于是，我将这篇文章的部分内容整理到了这里。原文传送门：分布式 ID 生成服务的技术原理和项目实战 。 网上绝大多数的分布式 ID 生成服务，一般着重于技术原理剖析，很少见到根据具体的业务场景去选型 ID 生成服务的文章。 本文结合一些使用场景，进一步探讨业务场景中对...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/distributed-system/distributed-id-design.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"分布式ID设计指南"}],["meta",{"property":"og:description","content":"提示 看到百度 Geek 说的一篇结合具体场景聊分布式 ID 设计的文章，感觉挺不错的。于是，我将这篇文章的部分内容整理到了这里。原文传送门：分布式 ID 生成服务的技术原理和项目实战 。 网上绝大多数的分布式 ID 生成服务，一般着重于技术原理剖析，很少见到根据具体的业务场景去选型 ID 生成服务的文章。 本文结合一些使用场景，进一步探讨业务场景中对..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/system-design/distributed-system/distributed-id-design-pay-one-card.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-26T22:44:02.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2023-10-26T22:44:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式ID设计指南\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/system-design/distributed-system/distributed-id-design-pay-one-card.png\\",\\"https://oss.javaguide.cn/github/javaguide/system-design/distributed-system/distributed-id-design-coupon.png\\",\\"https://oss.javaguide.cn/github/javaguide/system-design/distributed-system/distributed-id-design-tracing.png\\",\\"https://oss.javaguide.cn/github/javaguide/system-design/distributed-system/distributed-id-design-short-url.png\\"],\\"dateModified\\":\\"2023-10-26T22:44:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"场景一：订单系统","slug":"场景一-订单系统","link":"#场景一-订单系统","children":[{"level":3,"title":"1、一码付","slug":"_1、一码付","link":"#_1、一码付","children":[]},{"level":3,"title":"2、订单号","slug":"_2、订单号","link":"#_2、订单号","children":[]},{"level":3,"title":"3、优惠券和兑换券","slug":"_3、优惠券和兑换券","link":"#_3、优惠券和兑换券","children":[]}]},{"level":2,"title":"场景二：Tracing","slug":"场景二-tracing","link":"#场景二-tracing","children":[{"level":3,"title":"1、日志跟踪","slug":"_1、日志跟踪","link":"#_1、日志跟踪","children":[]},{"level":3,"title":"2、TraceId 生成规则","slug":"_2、traceid-生成规则","link":"#_2、traceid-生成规则","children":[]},{"level":3,"title":"3、SpanId 生成规则","slug":"_3、spanid-生成规则","link":"#_3、spanid-生成规则","children":[]}]},{"level":2,"title":"场景三：短网址","slug":"场景三-短网址","link":"#场景三-短网址","children":[]}],"git":{"createdTime":1683253410000,"updatedTime":1698360242000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"viosay","email":"windclear123@gmail.com","commits":1}]},"readingTime":{"minutes":13.37,"words":4012},"filePathRelative":"distributed-system/distributed-id-design.md","localizedDate":"2023年5月5日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>看到百度 Geek 说的一篇结合具体场景聊分布式 ID 设计的文章，感觉挺不错的。于是，我将这篇文章的部分内容整理到了这里。原文传送门：<a href=\\"https://mp.weixin.qq.com/s/bFDLb6U6EgI-DvCdLTq_QA\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">分布式 ID 生成服务的技术原理和项目实战</a> 。</p>\\n</div>\\n<p>网上绝大多数的分布式 ID 生成服务，一般着重于技术原理剖析，很少见到根据具体的业务场景去选型 ID 生成服务的文章。</p>","autoDesc":true}`);export{x as comp,j as data};
