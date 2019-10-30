export const CLIENT_ID = process.env.NODE_ENV === "development" ? "e791aa2a7a64b3f766a2" : "b3a3c46bd66318367efa";
export const CLIENT_SECRET = process.env.NODE_ENV === "development" ? "e80cde65c7071286086077892f3336bc2a3f4576" : "dfd9fdc1da6a6b10e473280bf0a379513f1d154d";

export const SM_MS_PROXY = "https://cors-anywhere.herokuapp.com/https://sm.ms/api/upload";
// 图床上传地址
export const UPLOAD_API = '图床上传地址';
export const ACCESS_TOKEN = "ACCESS_TOKEN";

export const CONTENT = "content";
export const STYLE = "style";
export const TEMPLATE_NUM = "template_num";
export const CODE_NUM = "code_num";
export const VERSION = 'version';
export const IS_PASTE_CHECK_OPEN = 'is_paste_check_open';
export const IS_STYLE_READ_CACHE_OPEN = false;

export const BASIC_THEME_ID = "basic-theme";
export const CODE_THEME_ID = "code-theme";
export const MARKDOWN_THEME_ID = "markdown-theme";
export const FONT_THEME_ID = "font-theme";

export const ENTER_DELAY = 0.5;
export const LEAVE_DELAY = 0.0;

export const TEMPLATE_OPTIONS = [
  {
    id: "normal",
    name: "默认主题",
    author: "zhning12"
  },
  {
    id: "orange",
    name: "小橙",
    author: "zhning12"
  },
  {
    id: "ink",
    name: "墨黑",
    author: "Mayandev"
  },
  {
    id: "purple",
    name: "姹紫",
    author: "djmaxwow"
  },
  {
    id: "cyan",
    name: "嫩青",
    author: "画手"
  },
  {
    id: "green",
    name: "绿意",
    author: "夜尽天明"
  },
  {
    id: "wechatFormat",
    name: "WeChat-Format",
    author: "画手"
  },
  {
    id: "custom",
    name: "自定义",
    author: ""
  },
  {
    id: "cdk8s",
    name: "cdk8s",
    author: "cdk8s"
  },
  {
    id: "carol",
    name: "carol",
    author: "carol"
  }
];

export const TEMPLATE_CUSTOM_NUM = TEMPLATE_OPTIONS.length - 1;

export const CODE_OPTIONS = [
  {
    id: "wechat",
    name: "微信代码主题"
  },
  {
    id: "atomOneDark",
    name: "atom-one-dark"
  },
  {
    id: "atomOneLight",
    name: "atom-one-light"
  },
  {
    id: "monokai",
    name: "monokai"
  },
  {
    id: "github",
    name: "github"
  },
  {
    id: "vs2015",
    name: "vs2015"
  },
  {
    id: "xcode",
    name: "xcode"
  }
];

export const VERSION_NUM = '1.0.2';

export const VERSION_TIMELINE = [
  "2019-08-13 v1.0.2 支持TOC，示例请重置后查看「第17条」",
  "2019-08-12 v1.0.1 新增粘贴时语法检测功能，可转换微信外链",
  "2019-08-07 新增主题「绿意」与「wechat-format」",
  "2019-07-13 新增主题「嫩青」",
  "2019-05-08 v0.1.0 版本发布",
  "2019-02-02 第一次提交"
];
