import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        私のスキル一覧
      </h1>

      <div className="mt-5 flex-col gap-3 text-slate-900">
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>

      <div className="py-1 flex flex-col">
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => {
            return (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-front rounded-xl justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className={skill.name === 'Python' ? 'w-[300px] h-[100px] object-contain absolute right-6 ' : skill.name === 'React' ? 'w-18 h-18 object-contain absolute right-3 bottom-3' : skill.name === 'Tailwind CSS' ? 'absolute top-3' : 'w-18 h-18 object-contain'
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">経歴・職歴</h3>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {[
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(50, 180, 80)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(50, 180, 80)' }}
              date={<span style={{ color: 'black' }}> 現在</span>}
              iconStyle={{ background: 'rgb(50, 180, 80)', color: '#fff' }}
              key="2024-present"
            >
              <h3 className="vertical-timeline-element-title">大学2年生</h3>
              <h4 className="vertical-timeline-element-subtitle">8月～9月</h4>
              <p>
                さらに立体のある面白いポートフォリオサイトを作りたいと考えるようになり、Three.js・Reactを用いたポートフォリオサイトを新しく作成する。
              </p>
              <p>さらにJavaScriptのCanvasを学習し、テトリスやパズルゲーム、迷路やTodoリストなどのWebアプリを作成。</p>
              <p>Next.js・chatgptAPTを用いたAIチャットアプリケーションを作成。</p>
            </VerticalTimelineElement>,
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2024"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              key="2024"
            >
              <h3 className="vertical-timeline-element-title">大学2年生</h3>
              <h4 className="vertical-timeline-element-subtitle">8月19日～8月23日</h4>
              <p>
                株式会社エスピックのインターンを経験。
              </p>
              <p>
              会社で開発されているシステムを利用しているお客様のヒアリングを行い、設計図を組み立て、実際にプログラミングをして改修を行うという上流工程からプログラミングまで一通り体験を行えるインターン。5人1チームで行い、自分は主にヒアリングの内容をまとめてある一部分のプログラミング改修に携わる。
              </p>
            </VerticalTimelineElement>,
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2024"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              key="2024"
            >
              <h3 className="vertical-timeline-element-title">大学2年生</h3>
              <h4 className="vertical-timeline-element-subtitle">7月</h4>
              <p>
                reactとPythonを学習する。
              </p>
            </VerticalTimelineElement>,
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2024"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              key="2024"
            >
               <h3 className="vertical-timeline-element-title">大学2年生</h3>
              <h4 className="vertical-timeline-element-subtitle">4月～6月</h4>
              <p>
                自分でWebサイトを作りたいと考えるようになり、HTML/CSSを一通り終わらせる。さらにそこからJavaScriptを学習し、様々なミニアプリを作成する。さらにこれらを用いて自分のポートフォリオサイトを作成する。
              </p>
            </VerticalTimelineElement>,
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              key="November 2012"
            >
              <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
              <h4 className="vertical-timeline-element-subtitle">Certification</h4>
              <p>
                Creative Direction, User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
          ].reverse()}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default About;
