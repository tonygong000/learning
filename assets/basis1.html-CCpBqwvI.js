import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,e as t}from"./app-ChWUTpfW.js";const a={},i=t(`<h2 id="c-函数" tabindex="-1"><a class="header-anchor" href="#c-函数"><span>c++函数</span></a></h2><ol><li>函数返回时一般是值传递，将函数内的变量进行复制然后传递。（类和基本类型变量都可以值传递）</li><li>**T t()**这样写是新建栈对象 <blockquote><p>只在作用域内生效<br> 可以在函数中使用，函数返回栈对象时，会进行值传递（也就是通过拷贝构造函数创造出对象）<br><strong>new</strong>是新建堆对象</p></blockquote></li><li>成员函数后加const——防止成员函数修改成员数据</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#include&lt;iostream&gt;
using namespace std;
class temp
{
public:
    temp(int age);
    int getAge() const;
    void setNum(int num);
private:
    int age;
};

temp::temp(int age)
{
    this-&gt;age = age;
}

int temp::getAge() const
{
    age+=10; // #Error...error C2166: l-value specifies const object #
    return age;
}

void main()
{
    temp a(22);
    cout &lt;&lt; &quot;age= &quot; &lt;&lt; a.getAge() &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-数组" tabindex="-1"><a class="header-anchor" href="#c-数组"><span>c++数组</span></a></h2><ol><li>全局数组，也就是定义在main函数外面的数组，元素的默认值是全部为0的</li><li>局部数组，定义在函数内部的数组，其值默认是随机的</li></ol><h2 id="c语言输入流" tabindex="-1"><a class="header-anchor" href="#c语言输入流"><span>c语言输入流</span></a></h2><h3 id="具体实现的输入流" tabindex="-1"><a class="header-anchor" href="#具体实现的输入流"><span>具体实现的输入流：</span></a></h3><ol><li>cin标准输入流</li></ol><p>c++标准库中用于读取键盘输入的输入流对象2. ifstream</p><p>从文件中读取输入的输入流对象</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),l=[i];function c(d,o){return e(),s("div",null,l)}const u=n(a,[["render",c],["__file","basis1.html.vue"]]),v=JSON.parse(`{"path":"/c__/basis1.html","title":"c++基础","lang":"zh-CN","frontmatter":{"title":"c++基础","description":"c++函数 函数返回时一般是值传递，将函数内的变量进行复制然后传递。（类和基本类型变量都可以值传递） **T t()**这样写是新建栈对象 只在作用域内生效 可以在函数中使用，函数返回栈对象时，会进行值传递（也就是通过拷贝构造函数创造出对象） new是新建堆对象 成员函数后加const——防止成员函数修改成员数据 c++数组 全局数组，也就是定义在ma...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/c__/basis1.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"c++基础"}],["meta",{"property":"og:description","content":"c++函数 函数返回时一般是值传递，将函数内的变量进行复制然后传递。（类和基本类型变量都可以值传递） **T t()**这样写是新建栈对象 只在作用域内生效 可以在函数中使用，函数返回栈对象时，会进行值传递（也就是通过拷贝构造函数创造出对象） new是新建堆对象 成员函数后加const——防止成员函数修改成员数据 c++数组 全局数组，也就是定义在ma..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T05:42:06.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-08-31T05:42:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-31T05:42:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"c++函数","slug":"c-函数","link":"#c-函数","children":[]},{"level":2,"title":"c++数组","slug":"c-数组","link":"#c-数组","children":[]},{"level":2,"title":"c语言输入流","slug":"c语言输入流","link":"#c语言输入流","children":[{"level":3,"title":"具体实现的输入流：","slug":"具体实现的输入流","link":"#具体实现的输入流","children":[]},{"level":3,"title":"标准输入流cin","slug":"标准输入流cin","link":"#标准输入流cin","children":[]},{"level":3,"title":"友元函数","slug":"友元函数","link":"#友元函数","children":[]}]}],"git":{"createdTime":1725082926000,"updatedTime":1725082926000,"contributors":[{"name":"Tony Gong","email":"a280880907@163.com","commits":1}]},"readingTime":{"minutes":2.35,"words":704},"filePathRelative":"c++/basis1.md","localizedDate":"2024年8月31日","excerpt":"<h2>c++函数</h2>\\n<ol>\\n<li>函数返回时一般是值传递，将函数内的变量进行复制然后传递。（类和基本类型变量都可以值传递）</li>\\n<li>**T t()**这样写是新建栈对象\\n<blockquote>\\n<p>只在作用域内生效<br>\\n可以在函数中使用，函数返回栈对象时，会进行值传递（也就是通过拷贝构造函数创造出对象）<br>\\n<strong>new</strong>是新建堆对象</p>\\n</blockquote>\\n</li>\\n<li>成员函数后加const——防止成员函数修改成员数据</li>\\n</ol>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>#include&lt;iostream&gt;\\nusing namespace std;\\nclass temp\\n{\\npublic:\\n    temp(int age);\\n    int getAge() const;\\n    void setNum(int num);\\nprivate:\\n    int age;\\n};\\n\\ntemp::temp(int age)\\n{\\n    this-&gt;age = age;\\n}\\n\\nint temp::getAge() const\\n{\\n    age+=10; // #Error...error C2166: l-value specifies const object #\\n    return age;\\n}\\n\\nvoid main()\\n{\\n    temp a(22);\\n    cout &lt;&lt; \\"age= \\" &lt;&lt; a.getAge() &lt;&lt; endl;\\n}\\n</code></pre></div>","autoDesc":true}`);export{u as comp,v as data};
