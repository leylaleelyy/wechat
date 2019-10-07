import React, { Component ,Fragment} from "react";
import './passage.css';
export default class Passage extends Component {
    render() {
        return (
            <Fragment>
                <header className='passage-header'>
                    <div className='img-back'
                         onClick={()=>{window.location.href="/home"}} >
                             </div>
                    <span className='page-title'>订阅号消息</span>
                </header>
                <div className='always'>
                    <div>常读的订阅号</div>
                    <div className="menu">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                </div>
                <section className="block" >
                    <input type="checkbox" />
                        <div className="case-block">
                            <div>展开</div>
                            <div>收起</div>
                        </div>
                        <div className="detail">
                            <div className='detail-img'>

                            </div>
                            <div>《前夜》讲的是一个升国旗背后的小故事，但又不是仅仅只是一个小故事，它想让我们看到的是无数先烈为之奋斗和努力事业，以及他们的坚持。
                                另外一个就是讨论的非常多，好评也非常多的徐峥导演的《夺冠》，讲的是中国女排夺冠的故事。但是却是以东东和小美的乒乓球开始的。</div>
                            <div>看似轻描淡写的两小无猜的故事，以东东的经历讲述女排的关注度和夺冠的过程，以及三十年后两人的再次相遇又是一个夺冠时刻。以小见大的叙事方式，从两个人的经历来反应历史的变迁，并穿插幽默、诙谐、戏剧性的画面。整个风格都很“徐峥”，也受到很多“徐峥迷”的喜爱。</div>
                            <div>一千个观众有一千个哈姆雷特。
                                小编最喜欢的是《北京你好》。通过出租车司机张北京这个小人物来呈现2008年北京奥运会的故事，与《夺冠》异曲同工。北京你好有一个非常明显的特色是，配乐，融合京剧特色和《回到那一天》，非常有北京特色的音乐呈现，给观众最直观的冲击。
                                有的观众喜欢北京你好，还因为葛大爷的演技，一个不靠谱而又靠谱的人的经历，让一个汶川地震中幸存的孩子实现他的梦想。情节不是特别复杂，感情却是更加细腻。</div>
                            <div>而《护航》则主要就是小宋佳了。女性的阴柔和阳刚之气集于一身，有理想有抱负，有集体荣誉感，又有战友情怀。那句“给我整个8”也成了微博的段子，护航精神也十分清晰。
                            </div>
                        </div>
                </section>
                <section className="block" >
                    <input type="checkbox" />
                    <div className="case-block">
                        <div>展开</div>
                        <div>收起</div>
                    </div>
                    <div className="detail">
                        <div className='detail-img2'>

                        </div>
                        <div>《攀登者》多好的名字，这三个字正是我国珠穆朗玛登山队的不畏艰难险阻，突破人类极限的气度。我们国人从最险的北面征服了这座高峰，也有底气地向全世界人民宣示我国对这片土地的主权。</div>
                        <div>就像电影中所说：珠穆朗玛的高度！中国的高度！这部电影改编自中国登山队征服珠穆朗玛峰的真实事件，主演吴京、张译等人，也在拍摄过程中吃了不少苦头，幸而这部电影最终成功拍摄，真实还原了当时登山队员的艰难困苦，也向年轻一辈展示了中国登山队的风貌。</div>
                        <div>这部电影的主线正是围绕着征服珠穆朗玛峰这一故事开始的，1960年中国登山队登峰途中遭遇不测，仅剩三人成功登顶，没有相机记录这一伟大壮举，引起全球范围内对登峰事件的怀疑，认为中国政府存在造假可能。十三年后，方五洲带领新的队员重新对珠峰发起挑战，并克服种种困难再次成功登顶。</div>
                        <div>在这一过程中，方五洲是经历者，也是见证者。这其中有队员的受伤、离世，甚至自己深爱着的徐缨也因为不顾身体安危地测量天气，找到最适合登顶的事件而去世。整部电影恢弘磅礴，让人感叹前人的伟大，也让人叹息中国人顽强进取，拼搏的心。
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
