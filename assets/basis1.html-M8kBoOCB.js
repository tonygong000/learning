import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-p8FhccK8.js";const e={},i=t(`<h2 id="c-数组" tabindex="-1"><a class="header-anchor" href="#c-数组"><span>c++数组</span></a></h2><ol><li>全局数组，也就是定义在main函数外面的数组，元素的默认值是全部为0的</li><li>局部数组，定义在函数内部的数组，其值默认是随机的</li></ol><h2 id="c语言输入流" tabindex="-1"><a class="header-anchor" href="#c语言输入流"><span>c语言输入流</span></a></h2><h3 id="具体实现的输入流" tabindex="-1"><a class="header-anchor" href="#具体实现的输入流"><span>具体实现的输入流：</span></a></h3><ol><li>cin标准输入流</li></ol><p>c++标准库中用于读取键盘输入的输入流对象2. ifstream</p><p>从文件中读取输入的输入流对象</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;fstream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token operator">::</span>ifstream <span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;example.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 打开文件作为输入流</span>
    std<span class="token operator">::</span>string line<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">is_open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>std<span class="token operator">::</span><span class="token function">getline</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> line<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 从文件输入流中读取每一行</span>
            std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> line <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        file<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 关闭文件输入流</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        std<span class="token operator">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Unable to open file&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token operator">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>istringStream</li></ol><p>从字符串中读取输入的输入流对象</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#include &lt;iostream&gt;
#include &lt;sstream&gt;

int main() {
    std::string data = &quot;123 456 789&quot;;
    std::istringstream inputStream(data);  // 将字符串作为输入流
    int num;

    while (inputStream &gt;&gt; num) {  // 从字符串输入流中读取整数
        std::cout &lt;&lt; &quot;Read number: &quot; &lt;&lt; num &lt;&lt; std::endl;
    }

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标准输入流cin" tabindex="-1"><a class="header-anchor" href="#标准输入流cin"><span>标准输入流cin</span></a></h3><ol><li>cin &gt;&gt;操作符会跳过并消费输入流中的<strong>前导</strong>空白字符（包括空格、制表符、换行符），但不会自动消费尾随的空白字符。尾随的空白字符会被留在缓冲区。</li><li>getchar()会读取所有字符</li><li>使用 std::cin.ignore() 可以跳过输入流中的换行符，从而避免 getchar() 读取到它</li></ol><p>##c++友元</p><h3 id="友元函数" tabindex="-1"><a class="header-anchor" href="#友元函数"><span>友元函数</span></a></h3><p>通过在头文件类声明中声明友元函数，可以进行重载运算符。</p><blockquote><p>原有重载符号只能单方进行运算（比如T+3，但是不能3+T）<br> 使用友元函数后对进行友元的重载，可以实现3+T</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// node.h
struct ListNode {
        int val;
        ListNode *next;
        ListNode() : val(0), next(nullptr) {}
        ListNode(int x) : val(x), next(nullptr) {}
        ListNode(int x, ListNode *next) : val(x), next(next) {}
        ListNode operator+(int x){
            ListNode temp;
            temp.val= this-&gt;val+x;
            return temp;
        }
        friend ListNode operator+(int x,const ListNode &amp; node);
    };
// node.cpp
ListNode operator+(int x,const ListNode &amp; node){
        ListNode temp;
        temp.val=x+node.val;
        return temp;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进阶用法-重载-运算符" tabindex="-1"><a class="header-anchor" href="#进阶用法-重载-运算符"><span>进阶用法：重载&lt;&lt;运算符</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>void operator&lt;&lt;(ostream &amp; os, const Time &amp; t){
	os&lt;&lt;t.hours&lt;&lt;&quot;hours, &quot;&lt;&lt;t.minutes&lt;&lt;&quot; minutes&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[i];function p(o,c){return s(),a("div",null,l)}const u=n(e,[["render",p],["__file","basis1.html.vue"]]),m=JSON.parse(`{"path":"/c__/basis1.html","title":"c++基础","lang":"zh-CN","frontmatter":{"title":"c++基础","description":"c++数组 全局数组，也就是定义在main函数外面的数组，元素的默认值是全部为0的 局部数组，定义在函数内部的数组，其值默认是随机的 c语言输入流 具体实现的输入流： cin标准输入流 c++标准库中用于读取键盘输入的输入流对象2. ifstream 从文件中读取输入的输入流对象 istringStream 从字符串中读取输入的输入流对象 标准输入流c...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/c__/basis1.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"c++基础"}],["meta",{"property":"og:description","content":"c++数组 全局数组，也就是定义在main函数外面的数组，元素的默认值是全部为0的 局部数组，定义在函数内部的数组，其值默认是随机的 c语言输入流 具体实现的输入流： cin标准输入流 c++标准库中用于读取键盘输入的输入流对象2. ifstream 从文件中读取输入的输入流对象 istringStream 从字符串中读取输入的输入流对象 标准输入流c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T14:03:43.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-09-02T14:03:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-02T14:03:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"c++数组","slug":"c-数组","link":"#c-数组","children":[]},{"level":2,"title":"c语言输入流","slug":"c语言输入流","link":"#c语言输入流","children":[{"level":3,"title":"具体实现的输入流：","slug":"具体实现的输入流","link":"#具体实现的输入流","children":[]},{"level":3,"title":"标准输入流cin","slug":"标准输入流cin","link":"#标准输入流cin","children":[]},{"level":3,"title":"友元函数","slug":"友元函数","link":"#友元函数","children":[]}]}],"git":{"createdTime":1725285823000,"updatedTime":1725285823000,"contributors":[{"name":"tonygong","email":"280880907@163.com","commits":1}]},"readingTime":{"minutes":1.74,"words":522},"filePathRelative":"c++/basis1.md","localizedDate":"2024年9月2日","excerpt":"<h2>c++数组</h2>\\n<ol>\\n<li>全局数组，也就是定义在main函数外面的数组，元素的默认值是全部为0的</li>\\n<li>局部数组，定义在函数内部的数组，其值默认是随机的</li>\\n</ol>\\n<h2>c语言输入流</h2>\\n<h3>具体实现的输入流：</h3>\\n<ol>\\n<li>cin标准输入流</li>\\n</ol>\\n<p>c++标准库中用于读取键盘输入的输入流对象2. ifstream</p>\\n<p>从文件中读取输入的输入流对象</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;iostream&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;fstream&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;string&gt;</span></span>\\n\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    std<span class=\\"token operator\\">::</span>ifstream <span class=\\"token function\\">file</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"example.txt\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 打开文件作为输入流</span>\\n    std<span class=\\"token operator\\">::</span>string line<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>file<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">is_open</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>std<span class=\\"token operator\\">::</span><span class=\\"token function\\">getline</span><span class=\\"token punctuation\\">(</span>file<span class=\\"token punctuation\\">,</span> line<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>  <span class=\\"token comment\\">// 从文件输入流中读取每一行</span>\\n            std<span class=\\"token operator\\">::</span>cout <span class=\\"token operator\\">&lt;&lt;</span> line <span class=\\"token operator\\">&lt;&lt;</span> std<span class=\\"token operator\\">::</span>endl<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        file<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 关闭文件输入流</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n        std<span class=\\"token operator\\">::</span>cout <span class=\\"token operator\\">&lt;&lt;</span> <span class=\\"token string\\">\\"Unable to open file\\"</span> <span class=\\"token operator\\">&lt;&lt;</span> std<span class=\\"token operator\\">::</span>endl<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}`);export{u as comp,m as data};
