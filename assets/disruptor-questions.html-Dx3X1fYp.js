import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as n,c as u,a as e,b as t,d as i,e as o}from"./app-Dl67cLp_.js";const p={},c=e("p",null,"Disruptor 是一个相对冷门一些的知识点，不过，如果你的项目经历中用到了 Disruptor 的话，那面试中就很可能会被问到。",-1),d={href:"https://mp.weixin.qq.com/s/C5QMjwEb6pzXACqZsyqC4A",target:"_blank",rel:"noopener noreferrer"},l=e("figure",null,[e("img",{src:"https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/disruptor-interview-questions.png",alt:"",tabindex:"0"}),e("figcaption")],-1),g=e("p",null,"这篇文章可以看作是对 Disruptor 做的一个简单总结，每个问题都不会扯太深入，主要针对面试或者速览 Disruptor。",-1),h=e("h2",{id:"disruptor-是什么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disruptor-是什么"},[e("span",null,"Disruptor 是什么？")])],-1),m=e("p",null,"Disruptor 是一个开源的高性能内存队列，诞生初衷是为了解决内存队列的性能和内存安全问题，由英国外汇交易公司 LMAX 开发。",-1),f={href:"https://martinfowler.com/articles/lmax.html",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"LMAX 公司 2010 年在 QCon 演讲后，Disruptor 获得了业界关注，并获得了 2011 年的 Oracle 官方的 Duke's Choice Awards(Duke 选择大奖)。",-1),_=e("figure",null,[e("img",{src:"https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/640.png",alt:"",tabindex:"0"}),e("figcaption")],-1),v=e("blockquote",null,[e("p",null,"“Duke 选择大奖”旨在表彰过去一年里全球个人或公司开发的、最具影响力的 Java 技术应用，由甲骨文公司主办。含金量非常高！")],-1),k={href:"https://blogs.oracle.com/java/post/and-the-winners-arethe-dukes-choice-award%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},b=e("figure",null,[e("img",{src:"https://oss.javaguide.cn/javaguide/image-20211015152323898.png",alt:"2011 年的 Oracle 官方的 Duke's Choice Awards",tabindex:"0"}),e("figcaption",null,"2011 年的 Oracle 官方的 Duke's Choice Awards")],-1),y=e("p",null,"Disruptor 提供的功能优点类似于 Kafka、RocketMQ 这类分布式队列，不过，其作为范围是 JVM(内存)。",-1),j={href:"https://github.com/LMAX-Exchange/disruptor",target:"_blank",rel:"noopener noreferrer"},q={href:"https://lmax-exchange.github.io/disruptor/user-guide/index.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mp.weixin.qq.com/s/0iG5brK3bYF0BgSjX4jRiA",target:"_blank",rel:"noopener noreferrer"},C=o('<h2 id="为什么要用-disruptor" tabindex="-1"><a class="header-anchor" href="#为什么要用-disruptor"><span>为什么要用 Disruptor？</span></a></h2><p>Disruptor 主要解决了 JDK 内置线程安全队列的性能和内存安全问题。</p><p><strong>JDK 中常见的线程安全的队列如下</strong>：</p><table><thead><tr><th>队列名字</th><th>锁</th><th>是否有界</th></tr></thead><tbody><tr><td><code>ArrayBlockingQueue</code></td><td>加锁（<code>ReentrantLock</code>）</td><td>有界</td></tr><tr><td><code>LinkedBlockingQueue</code></td><td>加锁（<code>ReentrantLock</code>）</td><td>有界</td></tr><tr><td><code>LinkedTransferQueue</code></td><td>无锁（<code>CAS</code>）</td><td>无界</td></tr><tr><td><code>ConcurrentLinkedQueue</code></td><td>无锁（<code>CAS</code>）</td><td>无界</td></tr></tbody></table><p>从上表中可以看出：这些队列要不就是加锁有界，要不就是无锁无界。而加锁的的队列势必会影响性能，无界的队列又存在内存溢出的风险。</p><p>因此，一般情况下，我们都是不建议使用 JDK 内置线程安全队列。</p><p><strong>Disruptor 就不一样了！它在无锁的情况下还能保证队列有界，并且还是线程安全的。</strong></p><p>下面这张图是 Disruptor 官网提供的 Disruptor 和 ArrayBlockingQueue 的延迟直方图对比。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/disruptor-latency-histogram.png" alt="disruptor-latency-histogram" tabindex="0"><figcaption>disruptor-latency-histogram</figcaption></figure><p>Disruptor 真的很快，关于它为什么这么快这个问题，会在后文介绍到。</p><p>此外，Disruptor 还提供了丰富的扩展功能比如支持批量操作、支持多种等待策略。</p><h2 id="kafka-和-disruptor-什么区别" tabindex="-1"><a class="header-anchor" href="#kafka-和-disruptor-什么区别"><span>Kafka 和 Disruptor 什么区别？</span></a></h2><ul><li><strong>Kafka</strong>：分布式消息队列，一般用在系统或者服务之间的消息传递，还可以被用作流式处理平台。</li><li><strong>Disruptor</strong>：内存级别的消息队列，一般用在系统内部中线程间的消息传递。</li></ul><h2 id="哪些组件用到了-disruptor" tabindex="-1"><a class="header-anchor" href="#哪些组件用到了-disruptor"><span>哪些组件用到了 Disruptor？</span></a></h2><p>用到 Disruptor 的开源项目还是挺多的，这里简单举几个例子：</p><ul><li><strong>Log4j2</strong>：Log4j2 是一款常用的日志框架，它基于 Disruptor 来实现异步日志。</li><li><strong>SOFATracer</strong>：SOFATracer 是蚂蚁金服开源的分布式应用链路追踪工具，它基于 Disruptor 来实现异步日志。</li><li><strong>Storm</strong> : Storm 是一个开源的分布式实时计算系统，它基于 Disruptor 来实现工作进程内发生的消息传递（同一 Storm 节点上的线程间，无需网络通信）。</li><li><strong>HBase</strong>：HBase 是一个分布式列存储数据库系统，它基于 Disruptor 来提高写并发性能。</li><li>……</li></ul><h2 id="disruptor-核心概念有哪些" tabindex="-1"><a class="header-anchor" href="#disruptor-核心概念有哪些"><span>Disruptor 核心概念有哪些？</span></a></h2><ul><li><strong>Event</strong>：你可以把 Event 理解为存放在队列中等待消费的消息对象。</li><li><strong>EventFactory</strong>：事件工厂用于生产事件，我们在初始化 <code>Disruptor</code> 类的时候需要用到。</li><li><strong>EventHandler</strong>：Event 在对应的 Handler 中被处理，你可以将其理解为生产消费者模型中的消费者。</li><li><strong>EventProcessor</strong>：EventProcessor 持有特定消费者(Consumer)的 Sequence，并提供用于调用事件处理实现的事件循环(Event Loop)。</li><li><strong>Disruptor</strong>：事件的生产和消费需要用到 <code>Disruptor</code> 对象。</li><li><strong>RingBuffer</strong>：RingBuffer（环形数组）用于保存事件。</li><li><strong>WaitStrategy</strong>：等待策略。决定了没有事件可以消费的时候，事件消费者如何等待新事件的到来。</li><li><strong>Producer</strong>：生产者，只是泛指调用 <code>Disruptor</code> 对象发布事件的用户代码，Disruptor 没有定义特定接口或类型。</li><li><strong>ProducerType</strong>：指定是单个事件发布者模式还是多个事件发布者模式（发布者和生产者的意思类似，我个人比较喜欢用发布者）。</li><li><strong>Sequencer</strong>：Sequencer 是 Disruptor 的真正核心。此接口有两个实现类 <code>SingleProducerSequencer</code>、<code>MultiProducerSequencer</code> ，它们定义在生产者和消费者之间快速、正确地传递数据的并发算法。</li></ul><p>下面这张图摘自 Disruptor 官网，展示了 LMAX 系统使用 Disruptor 的示例。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/disruptor-models.png" alt="LMAX 系统使用 Disruptor 的示例" tabindex="0"><figcaption>LMAX 系统使用 Disruptor 的示例</figcaption></figure><h2 id="disruptor-等待策略有哪些" tabindex="-1"><a class="header-anchor" href="#disruptor-等待策略有哪些"><span>Disruptor 等待策略有哪些？</span></a></h2><p><strong>等待策略（WaitStrategy）</strong> 决定了没有事件可以消费的时候，事件消费者如何等待新事件的到来。</p><p>常见的等待策略有下面这些：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/DisruptorWaitStrategy.png" alt="Disruptor 等待策略" tabindex="0"><figcaption>Disruptor 等待策略</figcaption></figure><ul><li><code>BlockingWaitStrategy</code>：基于 <code>ReentrantLock</code>+<code>Condition</code> 来实现等待和唤醒操作，实现代码非常简单，是 Disruptor 默认的等待策略。虽然最慢，但也是 CPU 使用率最低和最稳定的选项生产环境推荐使用；</li><li><code>BusySpinWaitStrategy</code>：性能很好，存在持续自旋的风险，使用不当会造成 CPU 负载 100%，慎用；</li><li><code>LiteBlockingWaitStrategy</code>：基于 <code>BlockingWaitStrategy</code> 的轻量级等待策略，在没有锁竞争的时候会省去唤醒操作，但是作者说测试不充分，因此不建议使用;</li><li><code>TimeoutBlockingWaitStrategy</code>：带超时的等待策略，超时后会执行业务指定的处理逻辑;</li><li><code>LiteTimeoutBlockingWaitStrategy</code>：基于<code>TimeoutBlockingWaitStrategy</code>的策略，当没有锁竞争的时候会省去唤醒操作;</li><li><code>SleepingWaitStrategy</code>：三段式策略，第一阶段自旋，第二阶段执行 Thread.yield 让出 CPU，第三阶段睡眠执行时间，反复的睡眠；</li><li><code>YieldingWaitStrategy</code>：二段式策略，第一阶段自旋，第二阶段执行 Thread.yield 交出 CPU;</li><li><code>PhasedBackoffWaitStrategy</code>：四段式策略，第一阶段自旋指定次数，第二阶段自旋指定时间，第三阶段执行 <code>Thread.yield</code> 交出 CPU，第四阶段调用成员变量的<code>waitFor</code>方法，该成员变量可以被设置为<code>BlockingWaitStrategy</code>、<code>LiteBlockingWaitStrategy</code>、<code>SleepingWaitStrategy</code>三个中的一个。</li></ul><h2 id="disruptor-为什么这么快" tabindex="-1"><a class="header-anchor" href="#disruptor-为什么这么快"><span>Disruptor 为什么这么快？</span></a></h2><ul><li><strong>RingBuffer（环形数组）</strong> : Disruptor 内部的 RingBuffer 是通过数组实现的。由于这个数组中的所有元素在初始化时一次性全部创建，因此这些元素的内存地址一般来说是连续的。这样做的好处是，当生产者不断往 RingBuffer 中插入新的事件对象时，这些事件对象的内存地址就能够保持连续，从而利用 CPU 缓存的局部性原理，将相邻的事件对象一起加载到缓存中，提高程序的性能。这类似于 MySQL 的预读机制，将连续的几个页预读到内存里。除此之外，RingBuffer 基于数组还支持批量操作（一次处理多个元素）、还可以避免频繁的内存分配和垃圾回收（RingBuffer 是一个固定大小的数组，当向数组中添加新元素时，如果数组已满，则新元素将覆盖掉最旧的元素）。</li><li><strong>避免了伪共享问题</strong>：CPU 缓存内部是按照 Cache Line（缓存行）管理的，一般的 Cache Line 大小在 64 字节左右。Disruptor 为了确保目标字段独占一个 Cache Line，会在目标字段前后增加字节填充（前 56 个字节和后 56 个字节），这样可以避免 Cache Line 的伪共享（False Sharing）问题。同时，为了让 RingBuffer 存放数据的数组独占缓存行，数组的设计为 无效填充（128 字节）+ 有效数据。</li><li><strong>无锁设计</strong>：Disruptor 采用无锁设计，避免了传统锁机制带来的竞争和延迟。Disruptor 的无锁实现起来比较复杂，主要是基于 CAS、内存屏障（Memory Barrier）、RingBuffer 等技术实现的。</li></ul><p>综上所述，Disruptor 之所以能够如此快，是基于一系列优化策略的综合作用，既充分利用了现代 CPU 缓存结构的特点，又避免了常见的并发问题和性能瓶颈。</p>',28),x={href:"https://qin.news/disruptor/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://tech.meituan.com/2016/11/18/disruptor.html",target:"_blank",rel:"noopener noreferrer"},L=o('<p>🌈 这里额外补充一点：<strong>数组中对象元素地址连续为什么可以提高性能？</strong></p><p>CPU 缓存是通过将最近使用的数据存储在高速缓存中来实现更快的读取速度，并使用预取机制提前加载相邻内存的数据以利用局部性原理。</p><p>在计算机系统中，CPU 主要访问高速缓存和内存。高速缓存是一种速度非常快、容量相对较小的内存，通常被分为多级缓存，其中 L1、L2、L3 分别表示一级缓存、二级缓存、三级缓存。越靠近 CPU 的缓存，速度越快，容量也越小。相比之下，内存容量相对较大，但速度较慢。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/java/concurrent/cpu-cache.png" alt="CPU 缓存模型示意图" tabindex="0"><figcaption>CPU 缓存模型示意图</figcaption></figure><p>为了加速数据的读取过程，CPU 会先将数据从内存中加载到高速缓存中，如果下一次需要访问相同的数据，就可以直接从高速缓存中读取，而不需要再次访问内存。这就是所谓的 <strong>缓存命中</strong> 。另外，为了利用 <strong>局部性原理</strong> ，CPU 还会根据之前访问的内存地址预取相邻的内存数据，因为在程序中，连续的内存地址通常会被频繁访问到，这样做可以提高数据的缓存命中率，进而提高程序的性能。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>',6),A={href:"http://wuwenliang.net/2022/02/28/Disruptor",target:"_blank",rel:"noopener noreferrer"},w={href:"https://time.geekbang.org/column/article/98134",target:"_blank",rel:"noopener noreferrer"},P=e("figure",null,[e("img",{src:"https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),e("figcaption",null,"JavaGuide 官方公众号")],-1);function M(T,W){const r=a("ExternalLinkIcon");return n(),u("div",null,[c,e("p",null,[t("一位球友之前投稿的面经（社招）中就涉及一些 Disruptor 的问题，文章传送门："),e("a",d,[t("圆梦！顺利拿到字节、淘宝、拼多多等大厂 offer！"),i(r)]),t(" 。")]),l,g,h,m,e("p",null,[t("根据 Disruptor 官方介绍，基于 Disruptor 开发的系统 LMAX（新的零售金融交易平台），单线程就能支撑每秒 600 万订单。Martin Fowler 在 2011 年写的一篇文章 "),e("a",f,[t("The LMAX Architecture"),i(r)]),t(" 中专门介绍过这个 LMAX 系统的架构，感兴趣的可以看看这篇文章。。")]),D,_,v,e("p",null,[t("我专门找到了 Oracle 官方当年颁布获得 Duke's Choice Awards 项目的那篇文章（文章地址："),e("a",k,[t("https://blogs.oracle.com/java/post/and-the-winners-arethe-dukes-choice-award）"),i(r)]),t(" 。从文中可以看出，同年获得此大奖荣誉的还有大名鼎鼎的 Netty、JRebel 等项目。")]),b,y,e("ul",null,[e("li",null,[t("Github 地址："),e("a",j,[t("https://github.com/LMAX-Exchange/disruptor"),i(r)])]),e("li",null,[t("官方教程： "),e("a",q,[t("https://lmax-exchange.github.io/disruptor/user-guide/index.html"),i(r)])])]),e("p",null,[t("关于如何在 Spring Boot 项目中使用 Disruptor，可以看这篇文章："),e("a",S,[t("Spring Boot + Disruptor 实战入门"),i(r)]),t(" 。")]),C,e("p",null,[t("关于 Disruptor 高性能队列原理的详细介绍，可以查看这篇文章："),e("a",x,[t("Disruptor 高性能队列原理浅析"),i(r)]),t(" （参考了美团技术团队的"),e("a",B,[t("高性能队列——Disruptor"),i(r)]),t("这篇文章）。")]),L,e("ul",null,[e("li",null,[t("Disruptor 高性能之道-等待策略：<"),e("a",A,[t("http://wuwenliang.net/2022/02/28/Disruptor"),i(r)]),t(" 高性能之道-等待策略/>")]),e("li",null,[t("《Java 并发编程实战》- 40 | 案例分析（三）：高性能队列 Disruptor："),e("a",w,[t("https://time.geekbang.org/column/article/98134"),i(r)])])]),P])}const U=s(p,[["render",M],["__file","disruptor-questions.html.vue"]]),X=JSON.parse(`{"path":"/high-performance/message-queue/disruptor-questions.html","title":"Disruptor常见问题总结","lang":"zh-CN","frontmatter":{"title":"Disruptor常见问题总结","category":"高性能","tag":["消息队列"],"gitInclude":["../../snippets/article-footer.snippet.md"],"description":"Disruptor 是一个相对冷门一些的知识点，不过，如果你的项目经历中用到了 Disruptor 的话，那面试中就很可能会被问到。 一位球友之前投稿的面经（社招）中就涉及一些 Disruptor 的问题，文章传送门：圆梦！顺利拿到字节、淘宝、拼多多等大厂 offer！ 。 这篇文章可以看作是对 Disruptor 做的一个简单总结，每个问题都不会扯太...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/high-performance/message-queue/disruptor-questions.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"Disruptor常见问题总结"}],["meta",{"property":"og:description","content":"Disruptor 是一个相对冷门一些的知识点，不过，如果你的项目经历中用到了 Disruptor 的话，那面试中就很可能会被问到。 一位球友之前投稿的面经（社招）中就涉及一些 Disruptor 的问题，文章传送门：圆梦！顺利拿到字节、淘宝、拼多多等大厂 offer！ 。 这篇文章可以看作是对 Disruptor 做的一个简单总结，每个问题都不会扯太..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/disruptor-interview-questions.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-23T08:44:05.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:modified_time","content":"2024-02-23T08:44:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Disruptor常见问题总结\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/disruptor-interview-questions.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/640.png\\",\\"https://oss.javaguide.cn/javaguide/image-20211015152323898.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/disruptor-latency-histogram.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/disruptor-models.png\\",\\"https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/DisruptorWaitStrategy.png\\",\\"https://oss.javaguide.cn/github/javaguide/java/concurrent/cpu-cache.png\\"],\\"dateModified\\":\\"2024-02-23T08:44:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"Disruptor 是什么？","slug":"disruptor-是什么","link":"#disruptor-是什么","children":[]},{"level":2,"title":"为什么要用 Disruptor？","slug":"为什么要用-disruptor","link":"#为什么要用-disruptor","children":[]},{"level":2,"title":"Kafka 和 Disruptor 什么区别？","slug":"kafka-和-disruptor-什么区别","link":"#kafka-和-disruptor-什么区别","children":[]},{"level":2,"title":"哪些组件用到了 Disruptor？","slug":"哪些组件用到了-disruptor","link":"#哪些组件用到了-disruptor","children":[]},{"level":2,"title":"Disruptor 核心概念有哪些？","slug":"disruptor-核心概念有哪些","link":"#disruptor-核心概念有哪些","children":[]},{"level":2,"title":"Disruptor 等待策略有哪些？","slug":"disruptor-等待策略有哪些","link":"#disruptor-等待策略有哪些","children":[]},{"level":2,"title":"Disruptor 为什么这么快？","slug":"disruptor-为什么这么快","link":"#disruptor-为什么这么快","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1683197604000,"updatedTime":1708677845000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6},{"name":"2382546457","email":"2382546457@qq.com","commits":1}]},"readingTime":{"minutes":9.09,"words":2726},"filePathRelative":"high-performance/message-queue/disruptor-questions.md","localizedDate":"2023年5月4日","excerpt":"<p>Disruptor 是一个相对冷门一些的知识点，不过，如果你的项目经历中用到了 Disruptor 的话，那面试中就很可能会被问到。</p>\\n<p>一位球友之前投稿的面经（社招）中就涉及一些 Disruptor 的问题，文章传送门：<a href=\\"https://mp.weixin.qq.com/s/C5QMjwEb6pzXACqZsyqC4A\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">圆梦！顺利拿到字节、淘宝、拼多多等大厂 offer！</a> 。</p>\\n<figure><img src=\\"https://oss.javaguide.cn/github/javaguide/high-performance/message-queue/disruptor-interview-questions.png\\" alt=\\"\\" tabindex=\\"0\\"><figcaption></figcaption></figure>","autoDesc":true}`);export{U as comp,X as data};
