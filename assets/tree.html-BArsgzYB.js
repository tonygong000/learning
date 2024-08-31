import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,a as n,b as a,d as e,e as s}from"./app-C4hTQQaE.js";const r={},u=s('<p>树就是一种类似现实生活中的树的数据结构（倒置的树）。任何一颗非空树只有一个根节点。</p><p>一棵树具有以下特点：</p><ol><li>一棵树中的任意两个结点有且仅有唯一的一条路径连通。</li><li>一棵树如果有 n 个结点，那么它一定恰好有 n-1 条边。</li><li>一棵树不包含回路。</li></ol><p>下图就是一颗树，并且是一颗二叉树。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/二叉树-2.png" alt="二叉树" tabindex="0"><figcaption>二叉树</figcaption></figure><p>如上图所示，通过上面这张图说明一下树中的常用概念：</p><ul><li><strong>节点</strong>：树中的每个元素都可以统称为节点。</li><li><strong>根节点</strong>：顶层节点或者说没有父节点的节点。上图中 A 节点就是根节点。</li><li><strong>父节点</strong>：若一个节点含有子节点，则这个节点称为其子节点的父节点。上图中的 B 节点是 D 节点、E 节点的父节点。</li><li><strong>子节点</strong>：一个节点含有的子树的根节点称为该节点的子节点。上图中 D 节点、E 节点是 B 节点的子节点。</li><li><strong>兄弟节点</strong>：具有相同父节点的节点互称为兄弟节点。上图中 D 节点、E 节点的共同父节点是 B 节点，故 D 和 E 为兄弟节点。</li><li><strong>叶子节点</strong>：没有子节点的节点。上图中的 D、F、H、I 都是叶子节点。</li><li><strong>节点的高度</strong>：该节点到叶子节点的最长路径所包含的边数。</li><li><strong>节点的深度</strong>：根节点到该节点的路径所包含的边数</li><li><strong>节点的层数</strong>：节点的深度+1。</li><li><strong>树的高度</strong>：根节点的高度。</li></ul>',7),l={href:"https://stackoverflow.com/questions/2603692/what-is-the-difference-between-tree-depth-and-height",target:"_blank",rel:"noopener noreferrer"},d=s('<h2 id="二叉树的分类" tabindex="-1"><a class="header-anchor" href="#二叉树的分类"><span>二叉树的分类</span></a></h2><p><strong>二叉树</strong>（Binary tree）是每个节点最多只有两个分支（即不存在分支度大于 2 的节点）的树结构。</p><p><strong>二叉树</strong> 的分支通常被称作“<strong>左子树</strong>”或“<strong>右子树</strong>”。并且，<strong>二叉树</strong> 的分支具有左右次序，不能随意颠倒。</p>',3),g=n("strong",null,"二叉树",-1),h=n("code",null,"2^(i-1)",-1),v=n("code",null,"2^(k+1)-1",-1),k={href:"https://zh.wikipedia.org/wiki/%E6%A0%91_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)#/%E6%9C%AF%E8%AF%AD",target:"_blank",rel:"noopener noreferrer"},b=s(`<figure><img src="https://oss.javaguide.cn/github/javaguide/image-20220119112736158.png" alt="危机百科对节点深度的定义" tabindex="0"><figcaption>危机百科对节点深度的定义</figcaption></figure><h3 id="满二叉树" tabindex="-1"><a class="header-anchor" href="#满二叉树"><span>满二叉树</span></a></h3><p>一个二叉树，如果每一个层的结点数都达到最大值，则这个二叉树就是 <strong>满二叉树</strong>。也就是说，如果一个二叉树的层数为 K，且结点总数是(2^k) -1 ，则它就是 <strong>满二叉树</strong>。如下图所示：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/full-binary-tree.png" alt="满二叉树" tabindex="0"><figcaption>满二叉树</figcaption></figure><h3 id="完全二叉树" tabindex="-1"><a class="header-anchor" href="#完全二叉树"><span>完全二叉树</span></a></h3><p>除最后一层外，若其余层都是满的，并且最后一层或者是满的，或者是在右边缺少连续若干节点，则这个二叉树就是 <strong>完全二叉树</strong> 。</p><p>大家可以想象为一棵树从根结点开始扩展，扩展完左子节点才能开始扩展右子节点，每扩展完一层，才能继续扩展下一层。如下图所示：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/complete-binary-tree.png" alt="完全二叉树" tabindex="0"><figcaption>完全二叉树</figcaption></figure><p>完全二叉树有一个很好的性质：<strong>父结点和子节点的序号有着对应关系。</strong></p><p>细心的小伙伴可能发现了，当根节点的值为 1 的情况下，若父结点的序号是 i，那么左子节点的序号就是 2i，右子节点的序号是 2i+1。这个性质使得完全二叉树利用数组存储时可以极大地节省空间，以及利用序号找到某个节点的父结点和子节点，后续二叉树的存储会详细介绍。</p><h3 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树"><span>平衡二叉树</span></a></h3><p><strong>平衡二叉树</strong> 是一棵二叉排序树，且具有以下性质：</p><ol><li>可以是一棵空树</li><li>如果不是空树，它的左右两个子树的高度差的绝对值不超过 1，并且左右两个子树都是一棵平衡二叉树。</li></ol><p>平衡二叉树的常用实现方法有 <strong>红黑树</strong>、<strong>AVL 树</strong>、<strong>替罪羊树</strong>、<strong>加权平衡树</strong>、<strong>伸展树</strong> 等。</p><p>在给大家展示平衡二叉树之前，先给大家看一棵树：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/oblique-tree.png" alt="斜树" tabindex="0"><figcaption>斜树</figcaption></figure><p><strong>你管这玩意儿叫树？？？</strong></p><p>没错，这玩意儿还真叫树，只不过这棵树已经退化为一个链表了，我们管它叫 <strong>斜树</strong>。</p><p><strong>如果这样，那我为啥不直接用链表呢?</strong></p><p>谁说不是呢？</p><p>二叉树相比于链表，由于父子节点以及兄弟节点之间往往具有某种特殊的关系，这种关系使得我们在树中对数据进行<strong>搜索</strong>和<strong>修改</strong>时，相对于链表更加快捷便利。</p><p>但是，如果二叉树退化为一个链表了，那么那么树所具有的优秀性质就难以表现出来，效率也会大打折，为了避免这样的情况，我们希望每个做 “家长”（父结点） 的，都 <strong>一碗水端平</strong>，分给左儿子和分给右儿子的尽可能一样多，相差最多不超过一层，如下图所示：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/balanced-binary-tree.png" alt="平衡二叉树" tabindex="0"><figcaption>平衡二叉树</figcaption></figure><h2 id="二叉树的存储" tabindex="-1"><a class="header-anchor" href="#二叉树的存储"><span>二叉树的存储</span></a></h2><p>二叉树的存储主要分为 <strong>链式存储</strong> 和 <strong>顺序存储</strong> 两种：</p><h3 id="链式存储" tabindex="-1"><a class="header-anchor" href="#链式存储"><span>链式存储</span></a></h3><p>和链表类似，二叉树的链式存储依靠指针将各个节点串联起来，不需要连续的存储空间。</p><p>每个节点包括三个属性：</p><ul><li>数据 data。data 不一定是单一的数据，根据不同情况，可以是多个具有不同类型的数据。</li><li>左节点指针 left</li><li>右节点指针 right。</li></ul><p>可是 JAVA 没有指针啊！</p><p>那就直接引用对象呗（别问我对象哪里找）</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/chain-store-binary-tree.png" alt="链式存储二叉树" tabindex="0"><figcaption>链式存储二叉树</figcaption></figure><h3 id="顺序存储" tabindex="-1"><a class="header-anchor" href="#顺序存储"><span>顺序存储</span></a></h3><p>顺序存储就是利用数组进行存储，数组中的每一个位置仅存储节点的 data，不存储左右子节点的指针，子节点的索引通过数组下标完成。根结点的序号为 1，对于每个节点 Node，假设它存储在数组中下标为 i 的位置，那么它的左子节点就存储在 2i 的位置，它的右子节点存储在下标为 2i+1 的位置。</p><p>一棵完全二叉树的数组顺序存储如下图所示：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/sequential-storage.png" alt="完全二叉树的数组顺序存储" tabindex="0"><figcaption>完全二叉树的数组顺序存储</figcaption></figure><p>大家可以试着填写一下存储如下二叉树的数组，比较一下和完全二叉树的顺序存储有何区别：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/sequential-storage2.png" alt="非完全二叉树的数组顺序存储" tabindex="0"><figcaption>非完全二叉树的数组顺序存储</figcaption></figure><p>可以看到，如果我们要存储的二叉树不是完全二叉树，在数组中就会出现空隙，导致内存利用率降低</p><h2 id="二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历"><span>二叉树的遍历</span></a></h2><h3 id="先序遍历" tabindex="-1"><a class="header-anchor" href="#先序遍历"><span>先序遍历</span></a></h3><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/preorder-traversal.png" alt="先序遍历" tabindex="0"><figcaption>先序遍历</figcaption></figure><p>二叉树的先序遍历，就是先输出根结点，再遍历左子树，最后遍历右子树，遍历左子树和右子树的时候，同样遵循先序遍历的规则，也就是说，我们可以递归实现先序遍历。</p><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">preOrder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	system<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">preOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历"><span>中序遍历</span></a></h3><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/inorder-traversal.png" alt="中序遍历" tabindex="0"><figcaption>中序遍历</figcaption></figure><p>二叉树的中序遍历，就是先递归中序遍历左子树，再输出根结点的值，再递归中序遍历右子树，大家可以想象成一巴掌把树压扁，父结点被拍到了左子节点和右子节点的中间，如下图所示：</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/inorder-traversal2.png" alt="中序遍历" tabindex="0"><figcaption>中序遍历</figcaption></figure><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">inOrder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	system<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历"><span>后序遍历</span></a></h3><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/postorder-traversal.png" alt="后序遍历" tabindex="0"><figcaption>后序遍历</figcaption></figure><p>二叉树的后序遍历，就是先递归后序遍历左子树，再递归后序遍历右子树，最后输出根结点的值</p><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postOrder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
 <span class="token function">postOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">postOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	system<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://oss.javaguide.cn/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>`,57);function f(m,j){const t=p("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[a("关于树的深度和高度的定义可以看 stackoverflow 上的这个问题："),n("a",l,[a("What is the difference between tree depth and height?"),e(t)]),a(" 。")])]),d,n("p",null,[g,a(" 的第 i 层至多拥有 "),h,a(" 个节点，深度为 k 的二叉树至多总共有 "),v,a(" 个节点（满二叉树的情况），至少有 2^(k) 个节点（关于节点的深度的定义国内争议比较多，我个人比较认可维基百科对"),n("a",k,[a("节点深度的定义"),e(t)]),a("）。")]),b])}const _=i(r,[["render",f],["__file","tree.html.vue"]]),w=JSON.parse(`{"path":"/cs-basics/data-structure/tree.html","title":"树","lang":"zh-CN","frontmatter":{"title":"树","category":"计算机基础","tag":["数据结构"],"gitInclude":["../../snippets/article-footer.snippet.md"],"description":"树就是一种类似现实生活中的树的数据结构（倒置的树）。任何一颗非空树只有一个根节点。 一棵树具有以下特点： 一棵树中的任意两个结点有且仅有唯一的一条路径连通。 一棵树如果有 n 个结点，那么它一定恰好有 n-1 条边。 一棵树不包含回路。 下图就是一颗树，并且是一颗二叉树。 二叉树二叉树 如上图所示，通过上面这张图说明一下树中的常用概念： 节点：树中的每...","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/cs-basics/data-structure/tree.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"树"}],["meta",{"property":"og:description","content":"树就是一种类似现实生活中的树的数据结构（倒置的树）。任何一颗非空树只有一个根节点。 一棵树具有以下特点： 一棵树中的任意两个结点有且仅有唯一的一条路径连通。 一棵树如果有 n 个结点，那么它一定恰好有 n-1 条边。 一棵树不包含回路。 下图就是一颗树，并且是一颗二叉树。 二叉树二叉树 如上图所示，通过上面这张图说明一下树中的常用概念： 节点：树中的每..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/%E4%BA%8C%E5%8F%89%E6%A0%91-2.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T05:10:55.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:modified_time","content":"2024-08-31T05:10:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/%E4%BA%8C%E5%8F%89%E6%A0%91-2.png\\",\\"https://oss.javaguide.cn/github/javaguide/image-20220119112736158.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/full-binary-tree.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/complete-binary-tree.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/oblique-tree.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/balanced-binary-tree.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/chain-store-binary-tree.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/sequential-storage.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/sequential-storage2.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/preorder-traversal.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/inorder-traversal.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/inorder-traversal2.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/postorder-traversal.png\\"],\\"dateModified\\":\\"2024-08-31T05:10:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"二叉树的分类","slug":"二叉树的分类","link":"#二叉树的分类","children":[{"level":3,"title":"满二叉树","slug":"满二叉树","link":"#满二叉树","children":[]},{"level":3,"title":"完全二叉树","slug":"完全二叉树","link":"#完全二叉树","children":[]},{"level":3,"title":"平衡二叉树","slug":"平衡二叉树","link":"#平衡二叉树","children":[]}]},{"level":2,"title":"二叉树的存储","slug":"二叉树的存储","link":"#二叉树的存储","children":[{"level":3,"title":"链式存储","slug":"链式存储","link":"#链式存储","children":[]},{"level":3,"title":"顺序存储","slug":"顺序存储","link":"#顺序存储","children":[]}]},{"level":2,"title":"二叉树的遍历","slug":"二叉树的遍历","link":"#二叉树的遍历","children":[{"level":3,"title":"先序遍历","slug":"先序遍历","link":"#先序遍历","children":[]},{"level":3,"title":"中序遍历","slug":"中序遍历","link":"#中序遍历","children":[]},{"level":3,"title":"后序遍历","slug":"后序遍历","link":"#后序遍历","children":[]}]}],"git":{"createdTime":1725081055000,"updatedTime":1725081055000,"contributors":[{"name":"tonygong","email":"280880907@163.com","commits":1}]},"readingTime":{"minutes":7.13,"words":2138},"filePathRelative":"cs-basics/data-structure/tree.md","localizedDate":"2024年8月31日","excerpt":"<p>树就是一种类似现实生活中的树的数据结构（倒置的树）。任何一颗非空树只有一个根节点。</p>\\n<p>一棵树具有以下特点：</p>\\n<ol>\\n<li>一棵树中的任意两个结点有且仅有唯一的一条路径连通。</li>\\n<li>一棵树如果有 n 个结点，那么它一定恰好有 n-1 条边。</li>\\n<li>一棵树不包含回路。</li>\\n</ol>\\n<p>下图就是一颗树，并且是一颗二叉树。</p>\\n<figure><img src=\\"https://oss.javaguide.cn/github/javaguide/cs-basics/data-structure/二叉树-2.png\\" alt=\\"二叉树\\" tabindex=\\"0\\"><figcaption>二叉树</figcaption></figure>","autoDesc":true}`);export{_ as comp,w as data};
