import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,e as r}from"./app-Dl67cLp_.js";const a={},i=r(`<h3 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm"><span>RPM</span></a></h3><p>RPM软件管理程序：rpm</p><ul><li>root才能使用rpm</li><li>rpm不同于apt-get，rpm需要相应rpm文件才能安装软件；</li><li>可以不联网，通过将安装光盘挂载</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mount /dev/sr0 /mnt
find /mnt -name &#39;pam-devel*&#39;
rpm -ivh pam-devel... --test
rpm -ivh pam-devel...
umonut /mnt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=[i];function p(o,l){return t(),n("div",null,m)}const s=e(a,[["render",p],["__file","rpm.html.vue"]]),u=JSON.parse(`{"path":"/linux/rpm.html","title":"RPM基础","lang":"zh-CN","frontmatter":{"title":"RPM基础","category":"Linux","description":"RPM RPM软件管理程序：rpm root才能使用rpm rpm不同于apt-get，rpm需要相应rpm文件才能安装软件； 可以不联网，通过将安装光盘挂载","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/linux/rpm.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"RPM基础"}],["meta",{"property":"og:description","content":"RPM RPM软件管理程序：rpm root才能使用rpm rpm不同于apt-get，rpm需要相应rpm文件才能安装软件； 可以不联网，通过将安装光盘挂载"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-07T12:35:09.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-06-07T12:35:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RPM基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-07T12:35:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":3,"title":"RPM","slug":"rpm","link":"#rpm","children":[]}],"git":{"createdTime":1714840533000,"updatedTime":1717763709000,"contributors":[{"name":"Tony Gong","email":"a280880907@163.com","commits":2},{"name":"tonygong","email":"280880907@163.com","commits":1}]},"readingTime":{"minutes":0.25,"words":74},"filePathRelative":"linux/rpm.md","localizedDate":"2024年5月5日","excerpt":"<h3>RPM</h3>\\n<p>RPM软件管理程序：rpm</p>\\n<ul>\\n<li>root才能使用rpm</li>\\n<li>rpm不同于apt-get，rpm需要相应rpm文件才能安装软件；</li>\\n<li>可以不联网，通过将安装光盘挂载</li>\\n</ul>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>mount /dev/sr0 /mnt\\nfind /mnt -name 'pam-devel*'\\nrpm -ivh pam-devel... --test\\nrpm -ivh pam-devel...\\numonut /mnt\\n</code></pre></div>","autoDesc":true}`);export{s as comp,u as data};
