import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center ">
    {text}
    </p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)


const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center
    neo-brutalism-blue py-4 px-8 text-white mx-5">
      日本工業大学2年 先進工学部情報メディア工学科 <span className="font-semibold">加来安東</span>
      です！
      <br />
      ポートフォリオへようこそ！
      <br />
      右矢印キーと左矢印キーで島が動きます！
    </h1>
  ),
  2: (
    <InfoBox 
      text="こちらでは、私のスキル（扱える言語）を掲載しております！"
      link = "/about"
      btnText="詳細はこちらへ"
    />
  ),
  3: (
    <InfoBox 
      text="　こちらでは、私が今まで作成したものを掲載しております！ 　　ぜひご覧ください！ "
      link = "/projects"
      btnText="制作物を見る"
    />
  ),
  4: (
    <InfoBox 
    text="お問い合わせフォームはこちらです！　　　　　　　　　　　　　気軽にお問合せください。"
    link = "/contact"
    btnText="お問合せフォームへ行く"
  />
  )
}



const HomeInfo = ( { currentStage } ) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
