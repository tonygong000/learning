import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as n}from"./app-BlHhf7HR.js";const s={},i=n(`<h2 id="task任务" tabindex="-1"><a class="header-anchor" href="#task任务"><span>Task任务</span></a></h2><p>Task可以用来进行创建任务</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>//1. new Task来创建任务(使用lambda 表达式)
Task task=new Task(()=&gt;{

})
// 启动任务
task.start();
//确认是否完成
task.IsCompleted

//2. Task.run快速启动任务
Task task=Task.run(()=&gt;{

    }
)
//可以使用Task&lt;T&gt;类型，task.result获取结果
//如果task没有完成，task.result会被阻塞



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步调用" tabindex="-1"><a class="header-anchor" href="#异步调用"><span>异步调用</span></a></h2><p>可以结合委托来进行异步调用</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>Func&lt;int,int&gt; myDelegate;
IActionResult&lt;int&gt; res=myDelegate.getInvoke(args);
int res2=res.endInvoke();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[i];function r(d,c){return t(),a("div",null,l)}const u=e(s,[["render",r],["__file","task.html.vue"]]),v=JSON.parse(`{"path":"/net/csharp/task.html","title":"多线程","lang":"zh-CN","frontmatter":{"title":"多线程","description":"Task任务 Task可以用来进行创建任务 异步调用 可以结合委托来进行异步调用","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/net/csharp/task.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"多线程"}],["meta",{"property":"og:description","content":"Task任务 Task可以用来进行创建任务 异步调用 可以结合委托来进行异步调用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T15:48:11.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-09-02T15:48:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多线程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-02T15:48:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"Task任务","slug":"task任务","link":"#task任务","children":[]},{"level":2,"title":"异步调用","slug":"异步调用","link":"#异步调用","children":[]}],"git":{"createdTime":1725292091000,"updatedTime":1725292091000,"contributors":[{"name":"tonygong","email":"280880907@163.com","commits":1}]},"readingTime":{"minutes":0.4,"words":121},"filePathRelative":"net/csharp/task.md","localizedDate":"2024年9月2日","excerpt":"<h2>Task任务</h2>\\n<p>Task可以用来进行创建任务</p>\\n<div class=\\"language-c#\\" data-ext=\\"c#\\" data-title=\\"c#\\"><pre class=\\"language-c#\\"><code>//1. new Task来创建任务(使用lambda 表达式)\\nTask task=new Task(()=&gt;{\\n\\n})\\n// 启动任务\\ntask.start();\\n//确认是否完成\\ntask.IsCompleted\\n\\n//2. Task.run快速启动任务\\nTask task=Task.run(()=&gt;{\\n\\n    }\\n)\\n//可以使用Task&lt;T&gt;类型，task.result获取结果\\n//如果task没有完成，task.result会被阻塞\\n\\n\\n\\n</code></pre></div>","autoDesc":true}`);export{u as comp,v as data};
