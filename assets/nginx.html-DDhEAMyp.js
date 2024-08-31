import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as t}from"./app-C4hTQQaE.js";const l={},a=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server {
        listen       82;
        listen       [::]:82;
        server_name  _;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

    		# 这里是添加的内容
        location / {
          root /home/www/webProject/;
          index index.html;
	      try_files $uri $uri/ /index.html;
        }



        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),r=[a];function d(o,s){return n(),i("div",null,r)}const v=e(l,[["render",d],["__file","nginx.html.vue"]]),u=JSON.parse(`{"path":"/linux/nginx.html","title":"nginx","lang":"zh-CN","frontmatter":{"title":"nginx","category":"linux","tag":["nginx"],"head":[["meta",{"property":"og:url","content":"https://javaguide.cn/learning/linux/nginx.html"}],["meta",{"property":"og:site_name","content":"Mua'dib Guide "}],["meta",{"property":"og:title","content":"nginx"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T05:10:55.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:modified_time","content":"2024-08-31T05:10:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-31T05:10:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1725081055000,"updatedTime":1725081055000,"contributors":[{"name":"tonygong","email":"280880907@163.com","commits":1}]},"readingTime":{"minutes":0.18,"words":55},"filePathRelative":"linux/nginx.md","localizedDate":"2024年8月31日","excerpt":"<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>server {\\n        listen       82;\\n        listen       [::]:82;\\n        server_name  _;\\n\\n        # Load configuration files for the default server block.\\n        include /etc/nginx/default.d/*.conf;\\n\\n    \\t\\t# 这里是添加的内容\\n        location / {\\n          root /home/www/webProject/;\\n          index index.html;\\n\\t      try_files $uri $uri/ /index.html;\\n        }\\n\\n\\n\\n        error_page 404 /404.html;\\n            location = /40x.html {\\n        }\\n\\n        error_page 500 502 503 504 /50x.html;\\n            location = /50x.html {\\n        }\\n    }\\n</code></pre></div>"}`);export{v as comp,u as data};
