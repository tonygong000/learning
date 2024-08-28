import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c as r,a as n,b as a,d as s,w as i,e as o}from"./app-Dl67cLp_.js";const u={},k=n("p",null,"JDK 19 定于 2022 年 9 月 20 日正式发布以供生产使用，非长期支持版本。不过，JDK 19 中有一些比较重要的新特性值得关注。",-1),d=n("p",null,"JDK 19 只有 7 个新特性：",-1),h={href:"https://openjdk.org/jeps/405",target:"_blank",rel:"noopener noreferrer"},m={href:"https://openjdk.org/jeps/422",target:"_blank",rel:"noopener noreferrer"},v={href:"https://openjdk.org/jeps/424",target:"_blank",rel:"noopener noreferrer"},g={href:"https://openjdk.org/jeps/425",target:"_blank",rel:"noopener noreferrer"},_={href:"https://openjdk.java.net/jeps/426",target:"_blank",rel:"noopener noreferrer"},f={href:"https://openjdk.java.net/jeps/427",target:"_blank",rel:"noopener noreferrer"},j={href:"https://openjdk.org/jeps/428",target:"_blank",rel:"noopener noreferrer"},J=n("p",null,"这里只对 424、425、426、428 这 4 个我觉得比较重要的新特性进行详细介绍。",-1),b={href:"https://openjdk.org/projects/jdk/19/",target:"_blank",rel:"noopener noreferrer"},P=n("h2",{id:"jep-424-外部函数和内存-api-预览",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-424-外部函数和内存-api-预览"},[n("span",null,"JEP 424: 外部函数和内存 API（预览）")])],-1),S=n("p",null,"Java 程序可以通过该 API 与 Java 运行时之外的代码和数据进行互操作。通过高效地调用外部函数（即 JVM 之外的代码）和安全地访问外部内存（即不受 JVM 管理的内存），该 API 使 Java 程序能够调用本机库并处理本机数据，而不会像 JNI 那样危险和脆弱。",-1),y={href:"https://openjdk.java.net/jeps/412",target:"_blank",rel:"noopener noreferrer"},w={href:"https://openjdk.org/jeps/419",target:"_blank",rel:"noopener noreferrer"},A={href:"https://openjdk.org/jeps/424",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"在没有外部函数和内存 API 之前：",-1),I={href:"https://hg.openjdk.java.net/jdk/jdk/file/tip/src/jdk.unsupported/share/classes/sun/misc/Unsafe.java",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"sun.misc.Unsafe",-1),D=n("code",null,"Unsafe",-1),q=n("code",null,"Unsafe",-1),L={href:"https://www.baeldung.com/jni",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/java-native-access/jna",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/jnr/jnr-ffi",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/bytedeco/javacpp",target:"_blank",rel:"noopener noreferrer"},F=o(`<p>引入外部函数和内存 API 就是为了解决 Java 访问外部函数和外部内存存在的一些痛点。</p><p>Foreign Function &amp; Memory API (FFM API) 定义了类和接口：</p><ul><li>分配外部内存：<code>MemorySegment</code>、、<code>MemoryAddress</code>和<code>SegmentAllocator</code>）；</li><li>操作和访问结构化的外部内存：<code>MemoryLayout</code>, <code>VarHandle</code>；</li><li>控制外部内存的分配和释放：<code>MemorySession</code>；</li><li>调用外部函数：<code>Linker</code>、<code>FunctionDescriptor</code>和<code>SymbolLookup</code>。</li></ul><p>下面是 FFM API 使用示例，这段代码获取了 C 库函数的 <code>radixsort</code> 方法句柄，然后使用它对 Java 数组中的四个字符串进行排序。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 1. 在C库路径上查找外部函数</span>
<span class="token class-name">Linker</span> linker <span class="token operator">=</span> <span class="token class-name">Linker</span><span class="token punctuation">.</span><span class="token function">nativeLinker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SymbolLookup</span> stdlib <span class="token operator">=</span> linker<span class="token punctuation">.</span><span class="token function">defaultLookup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MethodHandle</span> radixSort <span class="token operator">=</span> linker<span class="token punctuation">.</span><span class="token function">downcallHandle</span><span class="token punctuation">(</span>
                             stdlib<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token string">&quot;radixsort&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2. 分配堆上内存以存储四个字符串</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> javaStrings   <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;mouse&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;car&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 3. 分配堆外内存以存储四个指针</span>
<span class="token class-name">SegmentAllocator</span> allocator <span class="token operator">=</span> <span class="token function">implicitAllocator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MemorySegment</span> offHeap  <span class="token operator">=</span> allocator<span class="token punctuation">.</span><span class="token function">allocateArray</span><span class="token punctuation">(</span><span class="token class-name">ValueLayout</span><span class="token punctuation">.</span><span class="token constant">ADDRESS</span><span class="token punctuation">,</span> javaStrings<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 4. 将字符串从堆上复制到堆外</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> javaStrings<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在堆外分配一个字符串，然后存储指向它的指针</span>
    <span class="token class-name">MemorySegment</span> cString <span class="token operator">=</span> allocator<span class="token punctuation">.</span><span class="token function">allocateUtf8String</span><span class="token punctuation">(</span>javaStrings<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    offHeap<span class="token punctuation">.</span><span class="token function">setAtIndex</span><span class="token punctuation">(</span><span class="token class-name">ValueLayout</span><span class="token punctuation">.</span><span class="token constant">ADDRESS</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> cString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 5. 通过调用外部函数对堆外数据进行排序</span>
radixSort<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>offHeap<span class="token punctuation">,</span> javaStrings<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token class-name">MemoryAddress</span><span class="token punctuation">.</span><span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 6. 将(重新排序的)字符串从堆外复制到堆上</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> javaStrings<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MemoryAddress</span> cStringPtr <span class="token operator">=</span> offHeap<span class="token punctuation">.</span><span class="token function">getAtIndex</span><span class="token punctuation">(</span><span class="token class-name">ValueLayout</span><span class="token punctuation">.</span><span class="token constant">ADDRESS</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    javaStrings<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> cStringPtr<span class="token punctuation">.</span><span class="token function">getUtf8String</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">assert</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>javaStrings<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token string">&quot;car&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dog&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mouse&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jep-425-虚拟线程-预览" tabindex="-1"><a class="header-anchor" href="#jep-425-虚拟线程-预览"><span>JEP 425: 虚拟线程（预览）</span></a></h2><p>虚拟线程（Virtual Thread-）是 JDK 而不是 OS 实现的轻量级线程(Lightweight Process，LWP），许多虚拟线程共享同一个操作系统线程，虚拟线程的数量可以远大于操作系统线程的数量。</p><p>虚拟线程在其他多线程语言中已经被证实是十分有用的，比如 Go 中的 Goroutine、Erlang 中的进程。</p><p>虚拟线程避免了上下文切换的额外耗费，兼顾了多线程的优点，简化了高并发程序的复杂，可以有效减少编写、维护和观察高吞吐量并发应用程序的工作量。</p>`,9),K={href:"https://www.zhihu.com/question/536743167",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,"Java 虚拟线程的详细解读和原理可以看下面这两篇文章：",-1),R={href:"https://mp.weixin.qq.com/s/vdLXhZdWyxc6K-D3Aj03LA",target:"_blank",rel:"noopener noreferrer"},C={href:"https://mp.weixin.qq.com/s/yyApBXxpXxVwttr01Hld6Q",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.cnblogs.com/throwable/p/16758997.html",target:"_blank",rel:"noopener noreferrer"},H=n("h2",{id:"jep-426-向量-api-第四次孵化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-426-向量-api-第四次孵化"},[n("span",null,"JEP 426: 向量 API（第四次孵化）")])],-1),U={href:"https://openjdk.java.net/jeps/338",target:"_blank",rel:"noopener noreferrer"},z={href:"http://openjdk.java.net/jeps/11",target:"_blank",rel:"noopener noreferrer"},B={href:"https://openjdk.java.net/jeps/414",target:"_blank",rel:"noopener noreferrer"},O={href:"https://openjdk.java.net/jeps/417",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://openjdk.java.net/jeps/426",target:"_blank",rel:"noopener noreferrer"},X=n("h2",{id:"jep-428-结构化并发-孵化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jep-428-结构化并发-孵化"},[n("span",null,"JEP 428: 结构化并发(孵化)")])],-1),W=n("p",null,[a("JDK 19 引入了结构化并发，一种多线程编程方法，目的是为了通过结构化并发 API 来简化多线程编程，并不是为了取代"),n("code",null,"java.util.concurrent"),a("，目前处于孵化器阶段。")],-1),Q=n("p",null,"结构化并发将不同线程中运行的多个任务视为单个工作单元，从而简化错误处理、提高可靠性并增强可观察性。也就是说，结构化并发保留了单线程代码的可读性、可维护性和可观察性。",-1),Y={href:"https://download.java.net/java/early_access/loom/docs/api/jdk.incubator.concurrent/jdk/incubator/concurrent/StructuredTaskScope.html",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"StructuredTaskScope",-1),nn=n("code",null,"StructuredTaskScope",-1),an=o(`<p><code>StructuredTaskScope</code> 的基本用法如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token keyword">var</span> scope <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StructuredTaskScope</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用fork方法派生线程来执行子任务</span>
        <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> future1 <span class="token operator">=</span> scope<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span>task1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> future2 <span class="token operator">=</span> scope<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span>task2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 等待线程完成</span>
        scope<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果的处理可能包括处理或重新抛出异常</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> process results<span class="token operator">/</span>exceptions <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span> <span class="token comment">// close</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结构化并发非常适合虚拟线程，虚拟线程是 JDK 实现的轻量级线程。许多虚拟线程共享同一个操作系统线程，从而允许非常多的虚拟线程。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>`,4);function sn(en,tn){const e=t("ExternalLinkIcon"),p=t("RouteLink");return l(),r("div",null,[k,d,n("ul",null,[n("li",null,[n("a",h,[a("JEP 405: Record Patterns（记录模式）"),s(e)]),a("（预览）")]),n("li",null,[n("a",m,[a("JEP 422: Linux/RISC-V Port"),s(e)])]),n("li",null,[n("a",v,[a("JEP 424: Foreign Function & Memory API（外部函数和内存 API）"),s(e)]),a("（预览）")]),n("li",null,[n("a",g,[a("JEP 425: Virtual Threads（虚拟线程）"),s(e)]),a("（预览）")]),n("li",null,[n("a",_,[a("JEP 426: Vector（向量）API"),s(e)]),a("（第四次孵化）")]),n("li",null,[n("a",f,[a("JEP 427: Pattern Matching for switch（switch 模式匹配）"),s(e)])]),n("li",null,[n("a",j,[a("JEP 428: Structured Concurrency（结构化并发）"),s(e)]),a("（孵化）")])]),J,n("p",null,[a("相关阅读："),n("a",b,[a("OpenJDK Java 19 文档"),s(e)])]),P,S,n("p",null,[a("外部函数和内存 API 在 Java 17 中进行了第一轮孵化，由 "),n("a",y,[a("JEP 412"),s(e)]),a(" 提出。第二轮孵化由"),n("a",w,[a("JEP 419"),s(e)]),a(" 提出并集成到了 Java 18 中，预览由 "),n("a",A,[a("JEP 424"),s(e)]),a(" 提出并集成到了 Java 19 中。")]),E,n("ul",null,[n("li",null,[a("Java 通过 "),n("a",I,[x,s(e)]),a(" 提供一些执行低级别、不安全操作的方法（如直接访问系统内存资源、自主管理内存资源等），"),D,a(" 类让 Java 语言拥有了类似 C 语言指针一样操作内存空间的能力的同时，也增加了 Java 语言的不安全性，不正确使用 "),q,a(" 类会使得程序出错的概率变大。")]),n("li",null,[a("Java 1.1 就已通过 Java 原生接口（JNI）支持了原生方法调用，但并不好用。JNI 实现起来过于复杂，步骤繁琐（具体的步骤可以参考这篇文章："),n("a",L,[a("Guide to JNI (Java Native Interface)"),s(e)]),a(" ），不受 JVM 的语言安全机制控制，影响 Java 语言的跨平台特性。并且，JNI 的性能也不行，因为 JNI 方法调用不能从许多常见的 JIT 优化(如内联)中受益。虽然"),n("a",V,[a("JNA"),s(e)]),a("、"),n("a",M,[a("JNR"),s(e)]),a("和"),n("a",N,[a("JavaCPP"),s(e)]),a("等框架对 JNI 进行了改进，但效果还是不太理想。")])]),F,n("p",null,[a("知乎有一个关于 Java 19 虚拟线程的讨论，感兴趣的可以去看看："),n("a",K,[a("https://www.zhihu.com/question/536743167"),s(e)]),a(" 。")]),T,n("ul",null,[n("li",null,[n("a",R,[a("虚拟线程原理及性能分析｜得物技术"),s(e)])]),n("li",null,[n("a",C,[a("Java19 正式 GA！看虚拟线程如何大幅提高系统吞吐量"),s(e)])]),n("li",null,[n("a",G,[a("虚拟线程 - VirtualThread 源码透视"),s(e)])])]),H,n("p",null,[a("向量（Vector） API 最初由 "),n("a",U,[a("JEP 338"),s(e)]),a(" 提出，并作为"),n("a",z,[a("孵化 API"),s(e)]),a("集成到 Java 16 中。第二轮孵化由 "),n("a",B,[a("JEP 414"),s(e)]),a(" 提出并集成到 Java 17 中，第三轮孵化由 "),n("a",O,[a("JEP 417"),s(e)]),a(" 提出并集成到 Java 18 中，第四轮由 "),n("a",Z,[a("JEP 426"),s(e)]),a(" 提出并集成到了 Java 19 中。")]),n("p",null,[a("在 "),s(p,{to:"/java/new-features/java18.html"},{default:i(()=>[a("Java 18 新特性概览")]),_:1}),a(" 中，我有详细介绍到向量 API，这里就不再做额外的介绍了。")]),X,W,Q,n("p",null,[a("结构化并发的基本 API 是"),n("a",Y,[$,s(e)]),a("。"),nn,a(" 支持将任务拆分为多个并发子任务，在它们自己的线程中执行，并且子任务必须在主任务继续之前完成。")]),an])}const cn=c(u,[["render",sn],["__file","java19.html.vue"]]),ln=JSON.parse(`{"path":"/java/new-features/java19.html","title":"Java 19 新特性概览","lang":"zh-CN","frontmatter":{"title":"Java 19 新特性概览","category":"Java","tag":["Java新特性"],"gitInclude":["../../snippets/article-footer.snippet.md"],"description":"JDK 19 定于 2022 年 9 月 20 日正式发布以供生产使用，非长期支持版本。不过，JDK 19 中有一些比较重要的新特性值得关注。 JDK 19 只有 7 个新特性： JEP 405: Record Patterns（记录模式）（预览） JEP 422: Linux/RISC-V Port JEP 424: Foreign Function...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/java/new-features/java19.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"Java 19 新特性概览"}],["meta",{"property":"og:description","content":"JDK 19 定于 2022 年 9 月 20 日正式发布以供生产使用，非长期支持版本。不过，JDK 19 中有一些比较重要的新特性值得关注。 JDK 19 只有 7 个新特性： JEP 405: Record Patterns（记录模式）（预览） JEP 422: Linux/RISC-V Port JEP 424: Foreign Function..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-30T09:14:13.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:modified_time","content":"2023-12-30T09:14:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 19 新特性概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-30T09:14:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"JEP 424: 外部函数和内存 API（预览）","slug":"jep-424-外部函数和内存-api-预览","link":"#jep-424-外部函数和内存-api-预览","children":[]},{"level":2,"title":"JEP 425: 虚拟线程（预览）","slug":"jep-425-虚拟线程-预览","link":"#jep-425-虚拟线程-预览","children":[]},{"level":2,"title":"JEP 426: 向量 API（第四次孵化）","slug":"jep-426-向量-api-第四次孵化","link":"#jep-426-向量-api-第四次孵化","children":[]},{"level":2,"title":"JEP 428: 结构化并发(孵化)","slug":"jep-428-结构化并发-孵化","link":"#jep-428-结构化并发-孵化","children":[]}],"git":{"createdTime":1663031511000,"updatedTime":1703927653000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":6},{"name":"Guide","email":"koushuangbwcx@163.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":5}]},"readingTime":{"minutes":5.66,"words":1698},"filePathRelative":"java/new-features/java19.md","localizedDate":"2022年9月13日","excerpt":"<p>JDK 19 定于 2022 年 9 月 20 日正式发布以供生产使用，非长期支持版本。不过，JDK 19 中有一些比较重要的新特性值得关注。</p>\\n<p>JDK 19 只有 7 个新特性：</p>\\n<ul>\\n<li><a href=\\"https://openjdk.org/jeps/405\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 405: Record Patterns（记录模式）</a>（预览）</li>\\n<li><a href=\\"https://openjdk.org/jeps/422\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 422: Linux/RISC-V Port</a></li>\\n<li><a href=\\"https://openjdk.org/jeps/424\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 424: Foreign Function &amp; Memory API（外部函数和内存 API）</a>（预览）</li>\\n<li><a href=\\"https://openjdk.org/jeps/425\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 425: Virtual Threads（虚拟线程）</a>（预览）</li>\\n<li><a href=\\"https://openjdk.java.net/jeps/426\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 426: Vector（向量）API</a>（第四次孵化）</li>\\n<li><a href=\\"https://openjdk.java.net/jeps/427\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 427: Pattern Matching for switch（switch 模式匹配）</a></li>\\n<li><a href=\\"https://openjdk.org/jeps/428\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JEP 428: Structured Concurrency（结构化并发）</a>（孵化）</li>\\n</ul>","autoDesc":true}`);export{cn as comp,ln as data};
