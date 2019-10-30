export default `
/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
.layout {  
  color: #666666;
  font-size:14px;
  font-family:-apple-system-font,BlinkMacSystemFont,"Microsoft YaHei UI","Microsoft YaHei","PingFang SC","Helvetica Neue","Hiragino Sans GB",Arial,sans-serif;
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
p {
  color: #666666;
  font-size:14px;
}

/* 一级标题 */
h1 {
}

/* 一级标题内容 */
h1 span {
}

/* 一级标题修饰 请参考有实例的主题 */
h1:after {
}

/* 二级标题 */
h2 {
  font-size: 20px;
  text-align:center;
  background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png); 
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 75px;
  line-height:75px;
  margin-top: 30px;
}

/* 二级标题内容 */
h2 span {
  color: rgb(60, 112, 198);
  border-bottom:2px solid #3C7076;
}

/* 二级标题修饰 请参考有实例的主题 */
h2:after {
}

/* 三级标题 */
h3 {
  border-bottom: 2px solid rgb(239, 112, 96);
  margin-bottom: 30px;
  color: rgb(239, 112, 96);
}

/* 三级标题内容 */
h3 span {
  font-size: 18px;
  display: inline-block;
  border-bottom: 2px solid rgb(239, 112, 96);
}

/* 三级标题修饰 请参考有实例的主题 */
h3:after {
}

/* 四级标题 */
h4 {
  border-bottom: 2px solid #35b378;
}
/* 四级标题内容 */
h4 span{
  display: inline-block;
  font-weight: bold;
  background: #35b378;
  color: #ffffff;
  padding: 3px 10px 1px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin-right: 3px;
  font-size: 16px;
}

/* 四级标题修饰 请参考有实例的主题 */
h4:after {
  display: inline-block;
  content: " ";
  vertical-align: bottom;
  border-bottom: 28px solid #efebe9;
  border-right: 16px solid transparent;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
ul {
}

/* 无序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
ol {
}

/* 列表内容，不要设置li
 */
li section {
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
blockquote {
  border-left-color: rgb(239, 112, 96);
  background: #fff9f9;
}

/* 引用文字 */
blockquote p {
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
a {
  color: rgb(239, 112, 96);
  border-bottom: 1px solid rgb(239, 112, 96);
}

/* 加粗 */
strong {
}

/* 斜体 */
em {
}

/* 加粗斜体 */
strong em {
}

/* 删除线 */
del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
hr {
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
img {
}

/* 图片描述文字 */
figcaption {
}

/* 行内代码 */
p code, li code {
  color: rgb(239, 112, 96);
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
table tr th,
table tr td {
  font-size: 13px;
}

/* 脚注文字 */
.footnote-word {
  color: #ff3502;
}

/* 脚注上标 */
.footnote-ref {
  color: rgb(239, 112, 96);
}

/* "参考资料"四个字 */
.footnotes-sep {
}

/* 参考资料编号 */
.footnote-num {
}

/* 参考资料文字 */
.footnote-item p { 
}

/* 参考资料解释 */
.footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
.block-equation svg {
}

/* 行内公式
 */
.inline-equation svg {  
}

`;
