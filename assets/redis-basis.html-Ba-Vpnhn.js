import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-Dl67cLp_.js";const i={},n=t(`<h2 id="windows使用" tabindex="-1"><a class="header-anchor" href="#windows使用"><span>Windows使用</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>redis-server redis.windows.conf
<span class="token comment">#使用指定配置文件启动redis服务器</span>
redis-cli <span class="token parameter variable">-h</span> localhost <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token parameter variable">-a</span> your_password
<span class="token comment">#在另一个cmd窗口启动redis数据库</span>
redis-cil <span class="token function">shutdown</span>
<span class="token comment">#关闭服务器</span>
AUTH your_password
<span class="token comment">#在启动数据库后输入密码进行身份验证</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="datastructure" tabindex="-1"><a class="header-anchor" href="#datastructure"><span>DataStructure</span></a></h2><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>Set</span></a></h3><p>Some of the important commands in working with sets are SADD, SREM, SISMEMBER, SMEMBERS and SUNION.</p><ol><li>SADD 加值（随机）</li></ol><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>    SADD superpowers <span class="token string">&quot;flight&quot;</span>
    SADD superpowers <span class="token string">&quot;x-ray vision&quot;</span> <span class="token string">&quot;reflexes&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>SREM移除值（随机）</li><li>SISMEMBER测试值是否存在</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SISMEMBER superpowers &quot;flight&quot; =&gt; 1
SISMEMBER superpowers &quot;reflexes&quot; =&gt; 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>SMEMBERS returns a list of all the members of this set.</li><li>SUNION combines two or more sets and returns the list of all elements.</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SADD birdpowers &quot;pecking&quot;
    SADD birdpowers &quot;flight&quot;
    SUNION superpowers birdpowers =&gt; 1) &quot;pecking&quot;, 2) &quot;x-ray vision&quot;, 3) &quot;flight&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>SPOP、SADD（随机）</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>SADD letters a b c d e f =&gt; 6
    SPOP letters 2 =&gt; 1) &quot;c&quot; 2) &quot;a&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sorted-list" tabindex="-1"><a class="header-anchor" href="#sorted-list"><span>sorted list</span></a></h3><ol><li>ZADD</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ZADD hackers 1940 &quot;Alan Kay&quot;
    ZADD hackers 1906 &quot;Grace Hopper&quot;
    ZADD hackers 1953 &quot;Richard Stallman&quot;
    ZADD hackers 1965 &quot;Yukihiro Matsumoto&quot;
    ZADD hackers 1916 &quot;Claude Shannon&quot;
    ZADD hackers 1969 &quot;Linus Torvalds&quot;
    ZADD hackers 1957 &quot;Sophie Wilson&quot;
    ZADD hackers 1912 &quot;Alan Turing&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>ZRANGE</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ZRANGE hackers 2 4 =&gt; 1) &quot;Claude Shannon&quot;, 2) &quot;Alan Kay&quot;, 3) &quot;Richard Stallman&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="hashes" tabindex="-1"><a class="header-anchor" href="#hashes"><span>Hashes</span></a></h3><ol><li>HSET</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>HSET user:1000 name &quot;John Smith&quot;
    HSET user:1000 email &quot;john.smith@example.com&quot;
    HSET user:1000 password &quot;s3cret&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>HGETALL返回一个键的所有值</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> HGETALL user:1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>HGET返回一个键的特定值</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>HGET user:1001 name =&gt; &quot;Mary Jones&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>可以单独对hash的值进行操作</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>HSET user:1000 visits 10
    HINCRBY user:1000 visits 1 =&gt; 11
    HINCRBY user:1000 visits 10 =&gt; 21
    HDEL user:1000 visits
    HINCRBY user:1000 visits 1 =&gt; 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bitmap" tabindex="-1"><a class="header-anchor" href="#bitmap"><span>bitmap</span></a></h3><ol><li>bitop</li></ol><p>对键值进行and、or、xor、not操作<br> 操作的较短字符串会被zero-padding</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>redis&gt; SET key1 &quot;foobar&quot;
&quot;OK&quot;
redis&gt; SET key2 &quot;abcdef&quot;
&quot;OK&quot;
redis&gt; BITOP AND dest key1 key2
(integer) 6
redis&gt; GET dest
&quot;\`bc\`ab&quot;
redis&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),l=[n];function r(d,o){return s(),a("div",null,l)}const m=e(i,[["render",r],["__file","redis-basis.html.vue"]]),v=JSON.parse(`{"path":"/database/redis/redis-basis.html","title":"redis语法基础","lang":"zh-CN","frontmatter":{"title":"redis语法基础","category":"数据库","description":"Windows使用 DataStructure Set Some of the important commands in working with sets are SADD, SREM, SISMEMBER, SMEMBERS and SUNION. SADD 加值（随机） SREM移除值（随机） SISMEMBER测试值是否存在 SMEMBERS...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/database/redis/redis-basis.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"redis语法基础"}],["meta",{"property":"og:description","content":"Windows使用 DataStructure Set Some of the important commands in working with sets are SADD, SREM, SISMEMBER, SMEMBERS and SUNION. SADD 加值（随机） SREM移除值（随机） SISMEMBER测试值是否存在 SMEMBERS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T16:27:28.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-05-08T16:27:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redis语法基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-08T16:27:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"Windows使用","slug":"windows使用","link":"#windows使用","children":[]},{"level":2,"title":"DataStructure","slug":"datastructure","link":"#datastructure","children":[{"level":3,"title":"Set","slug":"set","link":"#set","children":[]},{"level":3,"title":"sorted list","slug":"sorted-list","link":"#sorted-list","children":[]},{"level":3,"title":"Hashes","slug":"hashes","link":"#hashes","children":[]},{"level":3,"title":"bitmap","slug":"bitmap","link":"#bitmap","children":[]}]}],"git":{"createdTime":1714840533000,"updatedTime":1715185648000,"contributors":[{"name":"Tony Gong","email":"a280880907@163.com","commits":1},{"name":"tonygong","email":"280880907@163.com","commits":1}]},"readingTime":{"minutes":1.33,"words":400},"filePathRelative":"database/redis/redis-basis.md","localizedDate":"2024年5月5日","excerpt":"<h2>Windows使用</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>redis-server redis.windows.conf\\n<span class=\\"token comment\\">#使用指定配置文件启动redis服务器</span>\\nredis-cli <span class=\\"token parameter variable\\">-h</span> localhost <span class=\\"token parameter variable\\">-p</span> <span class=\\"token number\\">6379</span> <span class=\\"token parameter variable\\">-a</span> your_password\\n<span class=\\"token comment\\">#在另一个cmd窗口启动redis数据库</span>\\nredis-cil <span class=\\"token function\\">shutdown</span>\\n<span class=\\"token comment\\">#关闭服务器</span>\\nAUTH your_password\\n<span class=\\"token comment\\">#在启动数据库后输入密码进行身份验证</span>\\n</code></pre></div>","autoDesc":true}`);export{m as comp,v as data};
