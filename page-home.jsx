/* global React, Icon, BrandMark, yen, ProductCard */
const { useState: useStateP } = React;

// =============== HOME ===============
function HomePage({ go, addToCart, data }) {
  const featured = data.products.filter(p => p.tags.includes("best") || p.tags.includes("new")).slice(0, 4);
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span>From Maui · Est. 2014</span></div>
          <h1 className="hero-title">Hand-painted<br/>like the <em>island sky</em>.</h1>
          <p className="hero-jp">マウイ島の太陽、リリコイの香り、カウアイの海塩。<br/>島の恵みを一粒ひとつぶ、手描きで仕立てた<br/>ボンボンが、海を渡って届きます。</p>
          <div className="hero-actions">
            <a className="btn btn--solid btn--lg" onClick={() => go("products")}>Shop the Collection <Icon.Arrow/></a>
            <a className="btn btn--ghost btn--lg" onClick={() => go("about")}>Our Story</a>
          </div>
          <div className="hero-meta">
            <span>Bean to Bonbon</span>
            <span>From Hawaii to Japan</span>
            <span>Made by Hand</span>
          </div>
        </div>
        <div className="hero-image" style={{ backgroundImage: "url(assets/bonbon-grid-boxes.png)" }}>
          <div className="hero-tag">
            <div className="num">12</div>
            <div className="label">Hand-Painted Flavors</div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <div className="value-strip">
        {[
          { n: "01", t: "Bean to Bonbon", d: "ハワイ産カカオ豆から、自社工房で一貫製造。" },
          { n: "02", t: "Maui Ingredients", d: "リリコイ・海塩・マカダミアなど島の素材を使用。" },
          { n: "03", t: "Hand-Painted", d: "カカオバターで一粒ずつ手描き。同じものは二つとない。" },
          { n: "04", t: "Cool Chain to Japan", d: "クール便で発送日より7〜14日の鮮度。" },
        ].map(v => (
          <div key={v.n} className="value-cell">
            <span className="num">— {v.n}</span>
            <h4>{v.t}</h4>
            <p>{v.d}</p>
          </div>
        ))}
      </div>

      {/* FEATURED PRODUCTS */}
      <section className="section container">
        <div className="section-head">
          <span className="eyebrow"><span>Collection · 01</span></span>
          <h2 className="section-title">人気の<em>逸品</em>。</h2>
          <p className="section-sub">マウイの色を最も美しく映す、シグネチャーから新作まで。<br/>初めての方には、まずここから。</p>
        </div>
        <div className="product-grid product-grid--4">
          {featured.map(p => <ProductCard key={p.id} p={p} go={go} addToCart={addToCart}/>)}
        </div>
        <div style={{textAlign:"center", marginTop:64}}>
          <a className="link-arrow" onClick={() => go("products")}>すべての商品を見る <Icon.Arrow/></a>
        </div>
      </section>

      {/* STORY TILE — Cacao Orchard */}
      <section className="section section--cocoa">
        <div className="container">
          <div className="story-grid">
            <div className="story-image" style={{ backgroundImage: "url(assets/cacao-orchard.png)" }}>
              <span className="badge">Kamananui Cacao Orchards</span>
            </div>
            <div className="story-text">
              <span className="eyebrow"><span>Our Origin</span></span>
              <h3>The orchard that<br/>made <em>everything possible.</em></h3>
              <p>オアフ島の山あいに広がる Kamananui Cacao Orchards。火山性土壌と熱帯のスコールで育つカカオは、ハワイにしかない花のような香りを宿します。私たちはここで採れたカカオ豆だけを、年1度の収穫から選び抜き使っています。</p>
              <a className="link-arrow" onClick={() => go("story")}>素材のストーリーを読む <Icon.Arrow/></a>
            </div>
          </div>
        </div>
      </section>

      {/* GIFT TILES */}
      <section className="section container">
        <div className="section-head">
          <span className="eyebrow"><span>Gift · for every occasion</span></span>
          <h2 className="section-title">贈る、<em>シーン</em>から選ぶ。</h2>
        </div>
        <div className="gift-grid">
          {data.giftScenes.slice(0,3).map(g => (
            <a key={g.id} className="gift-tile" onClick={() => go("gift")}>
              <img src={g.img} alt={g.jp}/>
              <div className="gift-tile-content">
                <h4>{g.en}</h4>
                <div className="jp">{g.jp}</div>
                <div className="meta"><span>{g.line}</span><span>{g.price}</span></div>
              </div>
            </a>
          ))}
        </div>
        <div style={{textAlign:"center", marginTop:48}}>
          <a className="link-arrow" onClick={() => go("gift")}>用途別ギフトを見る <Icon.Arrow/></a>
        </div>
      </section>

      {/* INGREDIENT FEATURE — Lilikoi */}
      <section className="section section--cocoa">
        <div className="container">
          <div className="story-grid is-reverse">
            <div className="story-text">
              <span className="eyebrow"><span>Featured · Lilikoi</span></span>
              <h3>The fruit that smells<br/>like <em>summer at sundown.</em></h3>
              <p>リリコイ。日本ではパッションフルーツと呼ばれるこの果実は、ハワイの夕暮れの香りそのもの。果汁の酸味と、ホワイトチョコレートの優しい甘さが溶け合った瞬間、ふっと南国の風が口に広がります。</p>
              <a className="link-arrow" onClick={() => go("product", "lilikoi-bonbon")}>リリコイ・ボンボンを見る <Icon.Arrow/></a>
            </div>
            <div className="story-image" style={{ backgroundImage: "url(assets/lilikoi-stringing.png)" }}>
              <span className="badge">Lilikoi Ganache · Hand-piped</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section container">
        <div className="section-head section-head--center">
          <span className="eyebrow"><span>From our customers</span></span>
          <h2 className="section-title">いただいた、<em>声</em>。</h2>
        </div>
        <div className="trust-row">
          {data.reviews.map((r, i) => (
            <div key={i} className="trust-cell">
              <div className="stars">★★★★★</div>
              <blockquote>「{r.text}」</blockquote>
              <cite>— {r.name} ／ {r.area}</cite>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--lg" style={{
        backgroundImage: "linear-gradient(rgba(14,10,6,0.55), rgba(14,10,6,0.85)), url(assets/tabletop-display.png)",
        backgroundSize: "cover", backgroundPosition: "center"
      }}>
        <div className="container--narrow" style={{textAlign:"center"}}>
          <span className="eyebrow"><span>Subscribe</span></span>
          <h2 className="section-title" style={{margin:"18px 0 24px"}}>マウイ便、<em>はじめませんか。</em></h2>
          <p className="section-sub" style={{margin:"0 auto 36px"}}>毎月、テーマの異なる12粒をお届けする「マンスリー・マウイ便」。<br/>初月20%オフ、いつでも休止できます。</p>
          <div style={{display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap"}}>
            <a className="btn btn--solid btn--lg" onClick={() => go("product", "signature-bonbons-12")}>定期便を始める <Icon.Arrow/></a>
            <a className="btn btn--ghost btn--lg" onClick={() => go("about")}>ブランドについて</a>
          </div>
        </div>
      </section>
    </main>
  );
}

window.HomePage = HomePage;
