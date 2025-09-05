// /* 将 Typora 生成的 "![...](<postname>/xxx.png)" 改为 "![...](xxx.png)" */
// hexo.extend.filter.register('before_post_render', function (data) {
//   const m = data.source.match(/([^/\\]+)\.md$/);
//   if (!m) return data;
//   const postname = m[1]; // 文章文件名（不含扩展名）
//   // 匹配 markdown/HTML 两种常见写法
//   const reMd = new RegExp(`(!\\[[^\\]]*\\]\\()\\s*(?:\\.\\/)?${postname}\\/([^\\)]+)\\)`, 'g');
//   const reHtml = new RegExp(`(<img\\b[^>]*?src=["'])\\s*(?:\\.\\/)?${postname}\\/([^"']+)`, 'g');
//   data.content = data.content
//     .replace(reMd, '$1$2)')
//     .replace(reHtml, '$1$2');
//   return data;
// });
