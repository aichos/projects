/* global React, Icon */

// =============== ABOUT ===============
function AboutPage({ go, data }) {
  return (
    <main>
      <section className="about-hero" style={{backgroundImage:"url(assets/founder-studio.png)"}}>
        <div className="inner">
          <span className="eyebrow"><span>Our Story · since 2014</span></span>
          <h1 style={{marginTop:24}}><em>From the hands</em><br/>of Maui.</h1>
          <p className="lead">マウイ島の小さな工房で、Yuriが一人で始めたチョコレート作り。<br/>10年経った今も、すべての粒は、彼女と仲間の手から生まれます。</p>
        </div>
      </section>

      <section className="section container--narrow">
        <div className="about-cols">
          <figure style={{backgroundImage:"url(assets/founder-selfie.png)"}}/>
          <div className="text">
            <span className="eyebrow"><span>Founder · Yuri</span></span>
            <p className="lead-jp">「美しいものを、口にする幸せ。それは贅沢ではなく、日々を肯定する小さな儀式だと思うのです。」</p>
            <p>東京で生まれ育ち、20代でハワイへ移住。マウイ島ラハイナのキッチンで独学のチョコレート作りを始めた Yuri は、ハワイ産カカオの可能性に惹かれていきました。</p>
            <p>2014年、自宅の一角を改装した工房で West Maui Chocolatier を創業。手描きのカカオバターで一粒ずつ仕上げるボンボンは、SNSで話題となり、ハワイ州知事公邸の公式ギフトにも採用されました。</p>
            <p>2026年、彼女のルーツである日本へ。「島の景色を、もう一度母国に届けたい」という想いから、銀座に小さなショールームを開きました。</p>
          </div>
        </div>
      </section>

      <section className="section section--cocoa">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow"><span>Timeline</span></span>
            <h2 className="section-title">10年の、<em>歩み</em>。</h2>
          </div>
          <div className="timeline">
            {data.timeline.map((t, i) => (
              <div key={i} className="tl-row">
                <div className="yr">{t.yr}</div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
                <figure style={{backgroundImage:`url(${t.img})`}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container--narrow" style={{textAlign:"center"}}>
        <span className="eyebrow"><span>Visit Us</span></span>
        <h2 className="section-title" style={{margin:"18px 0 24px"}}>東京・銀座<br/><em>テイスティングサロン</em></h2>
        <p className="section-sub" style={{margin:"0 auto 36px"}}>
          銀座6丁目の小さなサロンで、季節のボンボンとマウイのコーヒーをご用意しています。<br/>完全予約制・1日6席。
        </p>
        <a className="btn btn--solid btn--lg" onClick={() => go("home")}>予約する <Icon.Arrow/></a>
      </section>
    </main>
  );
}

// =============== GIFT ===============
function GiftPage({ go, addToCart, data }) {
  const giftPicks = data.products.filter(p => p.tags.includes("gift") || p.tags.includes("best")).slice(0, 4);
  return (
    <main>
      <div className="container">
        <div className="crumbs">
          <a onClick={() => go("home")}>HOME</a><span className="sep">/</span><span>GIFT</span>
        </div>
        <div className="col-head">
          <span className="eyebrow"><span>Gift Guide</span></span>
          <h1>For <em>every</em><br/>occasion.</h1>
          <p className="lead">大切な日に、大切な人へ。シーン別にお選びいただける、West Maui のギフトコレクション。<br/>すべてのお品にメッセージカード（無料）をお付けできます。</p>
        </div>
      </div>

      <section className="container">
        <div className="gift-grid">
          {data.giftScenes.map(g => (
            <a key={g.id} className="gift-tile" onClick={() => go("products")}>
              <img src={g.img} alt={g.jp}/>
              <div className="gift-tile-content">
                <h4>{g.en}</h4>
                <div className="jp">{g.jp}</div>
                <div className="meta"><span>{g.line}</span><span>{g.price}</span></div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow"><span>Most Gifted</span></span>
          <h2 className="section-title">贈り物に<em>選ばれる</em>。</h2>
        </div>
        <div className="product-grid product-grid--4">
          {giftPicks.map(p => <window.ProductCard key={p.id} p={p} go={go} addToCart={addToCart}/>)}
        </div>
      </section>

      <section className="section section--cocoa">
        <div className="container--narrow">
          <div className="section-head section-head--center">
            <span className="eyebrow"><span>Wrapping & Card</span></span>
            <h2 className="section-title"><em>包む</em>、まで。</h2>
            <p className="section-sub">ギフト包装（+¥500）、京都の風呂敷職人による包み（+¥1,500）、桐箱（一部商品 +¥800）からお選びいただけます。手書きのメッセージカードは、すべて無料でお付けします。</p>
          </div>
          <div className="trust-row">
            <div className="trust-cell"><div className="stars">— 01</div><blockquote>ギフトボックス<br/><span style={{fontSize:13, color:"rgba(244,237,226,.6)"}}>マットブラックに金箔ロゴの専用箱。</span></blockquote></div>
            <div className="trust-cell"><div className="stars">— 02</div><blockquote>風呂敷包み<br/><span style={{fontSize:13, color:"rgba(244,237,226,.6)"}}>京都の職人による、絹の和柄。</span></blockquote></div>
            <div className="trust-cell"><div className="stars">— 03</div><blockquote>メッセージカード<br/><span style={{fontSize:13, color:"rgba(244,237,226,.6)"}}>手書き対応。100文字まで無料。</span></blockquote></div>
          </div>
        </div>
      </section>
    </main>
  );
}

// =============== STORY (Ingredient) ===============
function StoryPage({ go, data }) {
  return (
    <main>
      <section className="about-hero" style={{backgroundImage:"url(assets/cacao-orchard.png)", minHeight:"60vh"}}>
        <div className="inner">
          <span className="eyebrow"><span>Ingredient Story</span></span>
          <h1 style={{marginTop:24, fontSize:"clamp(48px, 6vw, 110px)"}}><em>Every grain</em><br/>has a place.</h1>
          <p className="lead">私たちが使う素材の、ひとつひとつに物語があります。</p>
        </div>
      </section>

      <section className="section container">
        <div className="ing-grid">
          {data.ingredients.map(i => (
            <article key={i.en} className="ing-card">
              <figure style={{backgroundImage:`url(${i.img})`}}/>
              <div className="body">
                <h3>{i.en}</h3>
                <div className="jp">{i.jp}</div>
                <p>{i.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--cocoa">
        <div className="container">
          <div className="story-grid">
            <div className="story-image" style={{backgroundImage:"url(assets/lilikoi-bonbon-tray.png)"}}>
              <span className="badge">Bean to Bonbon</span>
            </div>
            <div className="story-text">
              <span className="eyebrow"><span>Process</span></span>
              <h3>From bean<br/>to <em>finished bonbon</em>.</h3>
              <p>カカオ豆の発酵・乾燥（オアフ島・農園）→ ロースト・グラインド・コンチング（マウイ島・工房）→ 各種ガナッシュ仕込み → 型抜き・カカオバター手描き → 検品・箱詰め。<br/><br/>すべてマウイ島の小さな工房内で完結する、Bean to Bonbon の一貫生産。最後の手描きの工程だけで、毎日10時間以上かけています。</p>
              <a className="link-arrow" onClick={() => go("products")}>商品を見る <Icon.Arrow/></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// =============== FAQ ===============
function FaqPage({ go, data }) {
  const [open, setOpen] = React.useState(0);
  return (
    <main>
      <section className="section--paper">
        <div className="container--narrow">
          <div className="crumbs">
            <a onClick={() => go("home")}>HOME</a><span className="sep">/</span><span>FAQ</span>
          </div>
          <div style={{padding:"40px 0 56px"}}>
            <span className="eyebrow"><span>Frequently Asked Questions</span></span>
            <h1 style={{fontFamily:"var(--serif-en)", fontSize:"clamp(56px,7vw,110px)", lineHeight:1, margin:"16px 0 24px", fontWeight:400, color:"var(--ink)"}}>Need to <em style={{fontStyle:"italic", color:"var(--gold-soft)"}}>know?</em></h1>
            <p style={{fontFamily:"var(--serif-jp)", fontSize:15, lineHeight:2, color:"rgba(14,10,6,.7)", maxWidth:560}}>よくいただくご質問をまとめました。<br/>ご不明な点があれば、お気軽にお問い合わせください。</p>
          </div>
          <div className="faq-list">
            {data.faqs.map((f, i) => (
              <div key={i} className={"faq-row" + (open === i ? " is-open" : "")}>
                <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span><span className="marker">{String(i + 1).padStart(2, "0")}</span>{f.q}</span>
                  <span className="toggle">{open === i ? "−" : "+"}</span>
                </div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:64, padding:"40px 0", borderTop:"1px solid rgba(14,10,6,.12)", textAlign:"center"}}>
            <p style={{fontFamily:"var(--serif-jp)", fontSize:15, color:"rgba(14,10,6,.7)", margin:"0 0 18px"}}>その他のご質問・法人ロット注文のご相談</p>
            <a className="btn btn--paper btn--lg">お問い合わせ <Icon.Arrow/></a>
          </div>
        </div>
      </section>
    </main>
  );
}

window.AboutPage = AboutPage;
window.GiftPage = GiftPage;
window.StoryPage = StoryPage;
window.FaqPage = FaqPage;
