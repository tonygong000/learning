import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,a as n,b as l,d as i,e as s}from"./app-BlHhf7HR.js";const c={},u=s(`<h2 id="_1-两数相加" tabindex="-1"><a class="header-anchor" href="#_1-两数相加"><span>1. 两数相加</span></a></h2><h3 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述"><span>题目描述</span></a></h3><blockquote><p>Leetcode:给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。</p><p>你可以假设除了数字 0 之外，这两个数字都不会以零开头。</p></blockquote><p>示例：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>输入：(2 -&gt; 4 -&gt; 3) + (5 -&gt; 6 -&gt; 4)
输出：7 -&gt; 0 -&gt; 8
原因：342 + 465 = 807
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析"><span>问题分析</span></a></h3><p>Leetcode 官方详细解答地址：</p>`,7),d={href:"https://leetcode-cn.com/problems/add-two-numbers/solution/",target:"_blank",rel:"noopener noreferrer"},r=s(`<blockquote><p>要对头结点进行操作时，考虑创建哑节点 dummy，使用 dummy-&gt;next 表示真正的头节点。这样可以避免处理头节点为空的边界问题。</p></blockquote><p>我们使用变量来跟踪进位，并从包含最低有效位的表头开始模拟逐<br> 位相加的过程。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/algorithms/34910956.jpg" alt="图1，对两数相加方法的可视化: 342 + 465 = 807， 每个结点都包含一个数字，并且数字按位逆序存储。" tabindex="0"><figcaption>图1，对两数相加方法的可视化: 342 + 465 = 807， 每个结点都包含一个数字，并且数字按位逆序存储。</figcaption></figure><h3 id="solution" tabindex="-1"><a class="header-anchor" href="#solution"><span>Solution</span></a></h3><p><strong>我们首先从最低有效位也就是列表 l1 和 l2 的表头开始相加。注意需要考虑到进位的情况！</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
 <span class="token comment">//https://leetcode-cn.com/problems/add-two-numbers/description/</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">addTwoNumbers</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> p <span class="token operator">=</span> l1<span class="token punctuation">,</span> q <span class="token operator">=</span> l2<span class="token punctuation">,</span> curr <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span>
    <span class="token comment">//carry 表示进位数</span>
    <span class="token keyword">int</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> p<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>q <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> q<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> carry <span class="token operator">+</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
        <span class="token comment">//进位数</span>
        carry <span class="token operator">=</span> sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">//新节点的数值为sum % 10</span>
        curr<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>q <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> q <span class="token operator">=</span> q<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>carry <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curr<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>carry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-翻转链表" tabindex="-1"><a class="header-anchor" href="#_2-翻转链表"><span>2. 翻转链表</span></a></h2><h3 id="题目描述-1" tabindex="-1"><a class="header-anchor" href="#题目描述-1"><span>题目描述</span></a></h3><blockquote><p>剑指 offer:输入一个链表，反转链表后，输出链表的所有元素。</p></blockquote><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/algorithms/81431871.jpg" alt="翻转链表" tabindex="0"><figcaption>翻转链表</figcaption></figure><h3 id="问题分析-1" tabindex="-1"><a class="header-anchor" href="#问题分析-1"><span>问题分析</span></a></h3><p>这道算法题，说直白点就是：如何让后一个节点指向前一个节点！在下面的代码中定义了一个 next 节点，该节点主要是保存要反转到头的那个节点，防止链表 “断裂”。</p><h3 id="solution-1" tabindex="-1"><a class="header-anchor" href="#solution-1"><span>Solution</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> val<span class="token punctuation">;</span>
  <span class="token class-name">ListNode</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@author</span> Snailclimb
 * <span class="token keyword">@date</span> 2018年9月19日
 * @Description: TODO
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">ReverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">ListNode</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 保存要反转到头的那个节点</span>
      next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token comment">// 要反转的那个节点指向已经反转的上一个节点(备注:第一次反转的时候会指向null)</span>
      head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
      <span class="token comment">// 上一个已经反转到头部的节点</span>
      pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
      <span class="token comment">// 一直向链表尾走</span>
      head <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试方法：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">ListNode</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span>next <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b<span class="token punctuation">.</span>next <span class="token operator">=</span> c<span class="token punctuation">;</span>
    c<span class="token punctuation">.</span>next <span class="token operator">=</span> d<span class="token punctuation">;</span>
    d<span class="token punctuation">.</span>next <span class="token operator">=</span> e<span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ReverseList</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>5
4
3
2
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-链表中倒数第-k-个节点" tabindex="-1"><a class="header-anchor" href="#_3-链表中倒数第-k-个节点"><span>3. 链表中倒数第 k 个节点</span></a></h2><h3 id="题目描述-2" tabindex="-1"><a class="header-anchor" href="#题目描述-2"><span>题目描述</span></a></h3><blockquote><p>剑指 offer: 输入一个链表，输出该链表中倒数第 k 个结点。</p></blockquote><h3 id="问题分析-2" tabindex="-1"><a class="header-anchor" href="#问题分析-2"><span>问题分析</span></a></h3><blockquote><p><strong>链表中倒数第 k 个节点也就是正数第(L-K+1)个节点，知道了只一点，这一题基本就没问题！</strong></p></blockquote><p>首先两个节点/指针，一个节点 node1 先开始跑，指针 node1 跑到 k-1 个节点后，另一个节点 node2 开始跑，当 node1 跑到最后时，node2 所指的节点就是倒数第 k 个节点也就是正数第(L-K+1)个节点。</p><h3 id="solution-2" tabindex="-1"><a class="header-anchor" href="#solution-2"><span>Solution</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
public class ListNode {
    int val;
    ListNode next = null;

    ListNode(int val) {
        this.val = val;
    }
}*/</span>

<span class="token comment">// 时间复杂度O(n),一次遍历即可</span>
<span class="token comment">// https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a?tpId=13&amp;tqId=11167&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">FindKthToTail</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果链表为空或者k小于等于0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> k <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 声明两个指向头结点的节点</span>
    <span class="token class-name">ListNode</span> node1 <span class="token operator">=</span> head<span class="token punctuation">,</span> node2 <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 记录节点的个数</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 记录k值，后面要使用</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> k<span class="token punctuation">;</span>
    <span class="token comment">// p指针先跑，并且记录节点数，当node1节点跑了k-1个节点后，node2节点开始跑，</span>
    <span class="token comment">// 当node1节点跑到最后时，node2节点所指的节点就是倒数第k个节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node1 <span class="token operator">=</span> node1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node2 <span class="token operator">=</span> node2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      k<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果节点个数小于所求的倒数第k个节点，则返回空</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> index<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> node2<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-删除链表的倒数第-n-个节点" tabindex="-1"><a class="header-anchor" href="#_4-删除链表的倒数第-n-个节点"><span>4. 删除链表的倒数第 N 个节点</span></a></h2><blockquote><p>Leetcode:给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。</p></blockquote><p><strong>示例：</strong></p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>给定一个链表: 1-&gt;2-&gt;3-&gt;4-&gt;5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1-&gt;2-&gt;3-&gt;5.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong></p><p>给定的 n 保证是有效的。</p><p><strong>进阶：</strong></p><p>你能尝试使用一趟扫描实现吗？</p><p>该题在 leetcode 上有详细解答，具体可参考 Leetcode.</p><h3 id="问题分析-3" tabindex="-1"><a class="header-anchor" href="#问题分析-3"><span>问题分析</span></a></h3><p>我们注意到这个问题可以容易地简化成另一个问题：删除从列表开头数起的第 (L - n + 1)个结点，其中 L 是列表的长度。只要我们找到列表的长度 L，这个问题就很容易解决。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/algorithms/94354387.jpg" alt="图 1. 删除列表中的第 L - n + 1 个元素" tabindex="0"><figcaption>图 1. 删除列表中的第 L - n + 1 个元素</figcaption></figure><h3 id="solution-3" tabindex="-1"><a class="header-anchor" href="#solution-3"><span>Solution</span></a></h3><p><strong>两次遍历法</strong></p><p>首先我们将添加一个 <strong>哑结点</strong> 作为辅助，该结点位于列表头部。哑结点用来简化某些极端情况，例如列表中只含有一个结点，或需要删除列表的头部。在第一次遍历中，我们找出列表的长度 L。然后设置一个指向哑结点的指针，并移动它遍历列表，直至它到达第 (L - n) 个结点那里。<strong>我们把第 (L - n)个结点的 next 指针重新链接至第 (L - n + 2)个结点，完成这个算法。</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token comment">// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 哑结点，哑结点用来简化某些极端情况，例如列表中只含有一个结点，或需要删除列表的头部</span>
    <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 哑结点指向头结点</span>
    dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 保存链表长度</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> len <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>len <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      length<span class="token operator">++</span><span class="token punctuation">;</span>
      len <span class="token operator">=</span> len<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    length <span class="token operator">=</span> length <span class="token operator">-</span> n<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> target <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token comment">// 找到 L-n 位置的节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      target <span class="token operator">=</span> target<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      length<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 把第 (L - n)个结点的 next 指针重新链接至第 (L - n + 2)个结点</span>
    target<span class="token punctuation">.</span>next <span class="token operator">=</span> target<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进阶——一次遍历法：</strong></p><blockquote><p>链表中倒数第 N 个节点也就是正数第(L - n + 1)个节点。</p></blockquote><p>其实这种方法就和我们上面第四题找“链表中倒数第 k 个节点”所用的思想是一样的。<strong>基本思路就是：</strong> 定义两个节点 node1、node2;node1 节点先跑，node1 节点 跑到第 n+1 个节点的时候,node2 节点开始跑.当 node1 节点跑到最后一个节点时，node2 节点所在的位置就是第 （L - n ） 个节点（L 代表总链表长度，也就是倒数第 n + 1 个节点）</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 声明两个指向头结点的节点</span>
    <span class="token class-name">ListNode</span> node1 <span class="token operator">=</span> dummy<span class="token punctuation">,</span> node2 <span class="token operator">=</span> dummy<span class="token punctuation">;</span>

    <span class="token comment">// node1 节点先跑，node1节点 跑到第 n 个节点的时候,node2 节点开始跑</span>
    <span class="token comment">// 当node1 节点跑到最后一个节点时，node2 节点所在的位置就是第 （L-n ） 个节点，也就是倒数第 n+1（L代表总链表长度）</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node1 <span class="token operator">=</span> node1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> node1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node2 <span class="token operator">=</span> node2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      n<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-合并两个排序的链表" tabindex="-1"><a class="header-anchor" href="#_5-合并两个排序的链表"><span>5. 合并两个排序的链表</span></a></h2><h3 id="题目描述-3" tabindex="-1"><a class="header-anchor" href="#题目描述-3"><span>题目描述</span></a></h3><blockquote><p>剑指 offer:输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。</p></blockquote><h3 id="问题分析-4" tabindex="-1"><a class="header-anchor" href="#问题分析-4"><span>问题分析</span></a></h3><p>我们可以这样分析:</p><ol><li>假设我们有两个链表 A,B；</li><li>A 的头节点 A1 的值与 B 的头结点 B1 的值比较，假设 A1 小，则 A1 为头节点；</li><li>A2 再和 B1 比较，假设 B1 小,则，A1 指向 B1；</li><li>A2 再和 B2 比较<br> 就这样循环往复就行了，应该还算好理解。</li></ol><p>考虑通过递归的方式实现！</p><h3 id="solution-4" tabindex="-1"><a class="header-anchor" href="#solution-4"><span>Solution</span></a></h3><p><strong>递归版本：</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">/*
public class ListNode {
    int val;
    ListNode next = null;

    ListNode(int val) {
        this.val = val;
    }
}*/</span>
<span class="token comment">//https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=13&amp;tqId=11169&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> list1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> list2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> list1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      list1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> list1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      list2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> list2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>`,58);function k(v,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",d,[l("https://leetcode-cn.com/problems/add-two-numbers/solution/"),i(a)])]),r])}const h=e(c,[["render",k],["__file","linkedlist-algorithm-problems.html.vue"]]),y=JSON.parse(`{"path":"/cs-basics/algorithms/linkedlist-algorithm-problems.html","title":"几道常见的链表算法题","lang":"zh-CN","frontmatter":{"title":"几道常见的链表算法题","category":"计算机基础","tag":["算法"],"gitInclude":["../../snippets/article-footer.snippet.md"],"description":"1. 两数相加 题目描述 Leetcode:给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。 你可以假设除了数字 0 之外，这两个数字都不会以零开头。 示例： 问题分析 Leetcode 官方详细解答地址： https://leetcode-cn.com/problems/add-tw...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/cs-basics/algorithms/linkedlist-algorithm-problems.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"几道常见的链表算法题"}],["meta",{"property":"og:description","content":"1. 两数相加 题目描述 Leetcode:给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。 你可以假设除了数字 0 之外，这两个数字都不会以零开头。 示例： 问题分析 Leetcode 官方详细解答地址： https://leetcode-cn.com/problems/add-tw..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/cs-basics/algorithms/34910956.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T15:48:11.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:modified_time","content":"2024-09-02T15:48:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"几道常见的链表算法题\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/cs-basics/algorithms/34910956.jpg\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/algorithms/81431871.jpg\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/algorithms/94354387.jpg\\"],\\"dateModified\\":\\"2024-09-02T15:48:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1. 两数相加","slug":"_1-两数相加","link":"#_1-两数相加","children":[{"level":3,"title":"题目描述","slug":"题目描述","link":"#题目描述","children":[]},{"level":3,"title":"问题分析","slug":"问题分析","link":"#问题分析","children":[]},{"level":3,"title":"Solution","slug":"solution","link":"#solution","children":[]}]},{"level":2,"title":"2. 翻转链表","slug":"_2-翻转链表","link":"#_2-翻转链表","children":[{"level":3,"title":"题目描述","slug":"题目描述-1","link":"#题目描述-1","children":[]},{"level":3,"title":"问题分析","slug":"问题分析-1","link":"#问题分析-1","children":[]},{"level":3,"title":"Solution","slug":"solution-1","link":"#solution-1","children":[]}]},{"level":2,"title":"3. 链表中倒数第 k 个节点","slug":"_3-链表中倒数第-k-个节点","link":"#_3-链表中倒数第-k-个节点","children":[{"level":3,"title":"题目描述","slug":"题目描述-2","link":"#题目描述-2","children":[]},{"level":3,"title":"问题分析","slug":"问题分析-2","link":"#问题分析-2","children":[]},{"level":3,"title":"Solution","slug":"solution-2","link":"#solution-2","children":[]}]},{"level":2,"title":"4. 删除链表的倒数第 N 个节点","slug":"_4-删除链表的倒数第-n-个节点","link":"#_4-删除链表的倒数第-n-个节点","children":[{"level":3,"title":"问题分析","slug":"问题分析-3","link":"#问题分析-3","children":[]},{"level":3,"title":"Solution","slug":"solution-3","link":"#solution-3","children":[]}]},{"level":2,"title":"5. 合并两个排序的链表","slug":"_5-合并两个排序的链表","link":"#_5-合并两个排序的链表","children":[{"level":3,"title":"题目描述","slug":"题目描述-3","link":"#题目描述-3","children":[]},{"level":3,"title":"问题分析","slug":"问题分析-4","link":"#问题分析-4","children":[]},{"level":3,"title":"Solution","slug":"solution-4","link":"#solution-4","children":[]}]}],"git":{"createdTime":1725292091000,"updatedTime":1725292091000,"contributors":[{"name":"tonygong","email":"280880907@163.com","commits":1}]},"readingTime":{"minutes":7.21,"words":2162},"filePathRelative":"cs-basics/algorithms/linkedlist-algorithm-problems.md","localizedDate":"2024年9月2日","excerpt":"<h2>1. 两数相加</h2>\\n<h3>题目描述</h3>\\n<blockquote>\\n<p>Leetcode:给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。</p>\\n<p>你可以假设除了数字 0 之外，这两个数字都不会以零开头。</p>\\n</blockquote>\\n<p>示例：</p>\\n<div class=\\"language-plain\\" data-ext=\\"plain\\" data-title=\\"plain\\"><pre class=\\"language-plain\\"><code>输入：(2 -&gt; 4 -&gt; 3) + (5 -&gt; 6 -&gt; 4)\\n输出：7 -&gt; 0 -&gt; 8\\n原因：342 + 465 = 807\\n</code></pre></div>","autoDesc":true}`);export{h as comp,y as data};
