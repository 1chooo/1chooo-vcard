// PostsDataConfig.tsx

import noAdsImage from "../../Assets/images/posts/no_ads.png";
import gitTipsImage from "../../Assets/images/posts/git_tips.png";
import nuphyUnboxingImage from "../../Assets/images/posts/nuphy_unboxing.png";
import reactMappingTipsImage from "../../Assets/images/posts/react_mapping_tips.png";

export interface Post {
  title     : JSX.Element;
  category  : string;
  imageUrl  : string;
  date      : string;
  content   : JSX.Element;
  link      : string;
  alt       : string;
}

export const postsData: Post[] = [
  {
    title: (
      <h3 className="h3 blog-item-title">
        如何透過 <code>map()</code> 讓你的 <code>React TypeScript</code> 專案更加優雅？
      </h3>
    ),
    category: 'Projects',
    imageUrl: reactMappingTipsImage,
    date: 'Fab 15, 2024',
    content: (
      <p className="blog-text">
        透過 <code>React TypeScript</code> 和 <code>map()</code>  方法打造更優雅的個人部落格。在這篇文章中，我分享了如何利用 <code>map()</code>  方法來處理部落格文章列表的動態渲染，並展示了 ChatGPT 提供的修改建議和實作過程中的思考。
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E5%A6%82%E4%BD%95%E9%80%8F%E9%81%8E-map-%E8%AE%93%E4%BD%A0%E7%9A%84-react-typescript-%E5%B0%88%E6%A1%88%E6%9B%B4%E5%8A%A0%E5%84%AA%E9%9B%85-f1e5bdca1710',
    alt: '如何透過 map() 讓你的 React TypeScript 專案更加優雅？'
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        忘掉 YouTube Premium！這些無廣告瀏覽器讓你愛不釋手！
      </h3>
    ),
    category: 'Unboxing',
    imageUrl: noAdsImage,
    date: 'Feb 11, 2024',
    content: (
      <p className="blog-text">
        在這個廣告橫行的 YouTube 時代，享受影片卻不被廣告干擾的感覺真是太棒了！透過 Brave 瀏覽器，我終於找到了解脫的方法，而且完全不必花錢購買 Premium。讓我們一起換個方式，享受無廣告的 YouTube 世界吧！
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E5%BF%98%E6%8E%89-youtube-premium-%E9%80%99%E4%BA%9B%E7%84%A1%E5%BB%A3%E5%91%8A%E7%80%8F%E8%A6%BD%E5%99%A8%E8%AE%93%E4%BD%A0%E6%84%9B%E4%B8%8D%E9%87%8B%E6%89%8B-901f7d15a59a',
    alt: '忘掉 YouTube Premium！這些無廣告瀏覽器讓你愛不釋手！',
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        踏入 Git 的世界：使用 ssh 與 GitHub 連線 👨🏻‍💻
      </h3>
    ),
    category: 'DevOps',
    imageUrl: gitTipsImage,
    date: 'Fab 23, 2022',
    content: (
      <p className="blog-text">
        兼顧安全及隱私，利用 <code>ssh key</code>，<code>push</code> 到 GitHub 再也不需要打密碼了 🔑
      </p>
    ),
    link: 'https://medium.com/@1chooo/%E8%B8%8F%E5%85%A5-git-%E7%9A%84%E4%B8%96%E7%95%8C-%E4%BD%BF%E7%94%A8-ssh-%E8%88%87-github-%E9%80%A3%E7%B7%9A-7324b01349dd',
    alt: '踏入 Git 的世界：使用 ssh 與 GitHub 連線 👨🏻‍💻',
  },
  {
    title: (
      <h3 className="h3 blog-item-title">
        兼具顏值手感的 Nuphy 鍵盤初體驗！！！
      </h3>
    ),
    category: 'Unboxing',
    imageUrl: nuphyUnboxingImage,
    date: 'Fab 23, 2022',
    content: (
      <p className="blog-text">
        對於機械鍵盤小白的我來說，每個軸體、手感、鍵帽等⋯⋯挑選鍵盤的考量對我來說都非常新奇，身為曾經買過一把機械鍵盤的我來說，正是個適合探索更多鍵盤的時機，於是決定購入觀望已久的鍵盤品牌 Nuphy — Halo 65。
      </p>
    ),
    link: 'https://medium.com/@1chooo/nuphy-%E9%8D%B5%E7%9B%A4%E5%88%9D%E9%AB%94%E9%A9%97-5af2a52970cb',
    alt: '兼具顏值手感的 Nuphy 鍵盤初體驗！！！',
  },
];
