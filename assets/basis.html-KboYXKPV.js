import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c as i,a as e,b as t,d as n,e as s}from"./app-Dl67cLp_.js";const v="/learning/assets/servlet-container-CDFfsQKj.webp",c="/learning/assets/tomcat-config-DErS6vxy.webp",p={},m=s('<h2 id="what-is-servlet" tabindex="-1"><a class="header-anchor" href="#what-is-servlet"><span>What is Servlet</span></a></h2><p>Java Servlet（Java服务器小程序）是一个基于Java技术的Web组件，运行在服务器端，它由Servlet容器所管理，用于生成动态的内容。</p><p>Servlet是平台独立的Java类，编写一个Servlet，实际上就是按照Servlet规范编写一个Java类。Servlet被编译为平台独立 的字节码，可以被动态地加载到支持Java技术的Web服务器中运行。</p><h2 id="servlet容器" tabindex="-1"><a class="header-anchor" href="#servlet容器"><span>Servlet容器</span></a></h2><p>Servlet容器也叫做Servlet引擎，是Web服务器或应用程序服务器的一部分，用于在发送的请求和响应之上提供网络服务，解码基于 MIME的请求，格式化基于MIME的响应。</p><p>Servlet没有main方法，不能独立运行，它必须被部署到Servlet容器中，由容器来实例化和调用 Servlet的方法（如doGet()和doPost()），Servlet容器在Servlet的生命周期内包容和管理Servlet。在JSP技术 推出后，管理和运行Servlet/JSP的容器也称为Web容器。</p><figure><img src="'+v+'" alt="servlet容器交互" tabindex="0"><figcaption>servlet容器交互</figcaption></figure><h2 id="tomcat" tabindex="-1"><a class="header-anchor" href="#tomcat"><span>Tomcat</span></a></h2><p>Tomcat是一个免费的开放源代码的Servlet容器。</p><p>Tomcat服务器接受客户请求并做出响应的过程如下，与上图类似：</p><ol><li>客户端（通常都是浏览器）访问Web服务器，发送HTTP请求。</li><li>Web服务器接收到请求后，传递给Servlet容器。</li><li>Servlet容器加载Servlet，产生Servlet实例后，向其传递表示请求和响应的对象。</li><li>Servlet实例使用请求对象得到客户端的请求信息，然后进行相应的处理。</li><li>Servlet实例将处理结果通过响应对象发送回客户端，容器负责确保响应正确送出，同时将控制返回给Web服务器。<br><img src="'+c+'" alt="Tomcat的配置"></li></ol>',11),S=e("li",null,"Server 元素表示整个 Catalina servlet 容器。",-1),h=e("li",null,"Service元素表示一个或多个连接器组件的组合，这些组件共享一个用于处理传入请求的引擎组件。Server 中可以有多个 Service。",-1),d=e("li",null,"Executor表示可以在Tomcat中的组件之间共享的线程池。",-1),_=e("li",null,"Connector代表连接组件。Tomcat 支持三种协议：HTTP/1.1、HTTP/2.0、AJP。",-1),u=e("li",null,"Context元素表示一个Web应用程序，它在特定的虚拟主机中运行。每个Web应用程序都基于Web应用程序存档（WAR）文件，或者包含相应的解包内容的相应目录，如Servlet规范述。",-1),g=e("li",null,"Engine元素表示与特定的Catalina服务相关联的整个请求处理机器。它接收并处理来自一个或多个连接器的所有请求，并将完成的响应返回给连接器，以便最终传输回客户端。",-1),b={href:"http://www.mycompany.com",target:"_blank",rel:"noopener noreferrer"};function J(f,T){const a=l("ExternalLinkIcon");return o(),i("div",null,[m,e("ul",null,[S,h,d,_,u,g,e("li",null,[t("Host元素表示一个虚拟主机，它是一个服务器的网络名称（如“"),e("a",b,[t("www.mycompany.com"),n(a)]),t("”）与运行Tomcat的特定服务器的关联。")])])])}const x=r(p,[["render",J],["__file","basis.html.vue"]]),w=JSON.parse(`{"path":"/java/servlet/basis.html","title":"servlet基础","lang":"zh-CN","frontmatter":{"title":"servlet基础","category":"java","tag":["servlet"],"description":"What is Servlet Java Servlet（Java服务器小程序）是一个基于Java技术的Web组件，运行在服务器端，它由Servlet容器所管理，用于生成动态的内容。 Servlet是平台独立的Java类，编写一个Servlet，实际上就是按照Servlet规范编写一个Java类。Servlet被编译为平台独立 的字节码，可以被动态地加...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/java/servlet/basis.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"servlet基础"}],["meta",{"property":"og:description","content":"What is Servlet Java Servlet（Java服务器小程序）是一个基于Java技术的Web组件，运行在服务器端，它由Servlet容器所管理，用于生成动态的内容。 Servlet是平台独立的Java类，编写一个Servlet，实际上就是按照Servlet规范编写一个Java类。Servlet被编译为平台独立 的字节码，可以被动态地加..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-21T17:25:12.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"servlet"}],["meta",{"property":"article:modified_time","content":"2024-05-21T17:25:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"servlet基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-21T17:25:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"What is Servlet","slug":"what-is-servlet","link":"#what-is-servlet","children":[]},{"level":2,"title":"Servlet容器","slug":"servlet容器","link":"#servlet容器","children":[]},{"level":2,"title":"Tomcat","slug":"tomcat","link":"#tomcat","children":[]}],"git":{"createdTime":1716312312000,"updatedTime":1716312312000,"contributors":[{"name":"Tony Gong","email":"a280880907@163.com","commits":1}]},"readingTime":{"minutes":2.42,"words":726},"filePathRelative":"java/servlet/basis.md","localizedDate":"2024年5月22日","excerpt":"<h2>What is Servlet</h2>\\n<p>Java Servlet（Java服务器小程序）是一个基于Java技术的Web组件，运行在服务器端，它由Servlet容器所管理，用于生成动态的内容。</p>\\n<p>Servlet是平台独立的Java类，编写一个Servlet，实际上就是按照Servlet规范编写一个Java类。Servlet被编译为平台独立 的字节码，可以被动态地加载到支持Java技术的Web服务器中运行。</p>\\n<h2>Servlet容器</h2>\\n<p>Servlet容器也叫做Servlet引擎，是Web服务器或应用程序服务器的一部分，用于在发送的请求和响应之上提供网络服务，解码基于 MIME的请求，格式化基于MIME的响应。</p>","autoDesc":true}`);export{x as comp,w as data};
