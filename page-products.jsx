/* global React, Icon, ProductCard, yen */

// =============== PRODUCTS LIST ===============
function ProductsPage({ go, addToCart, data }) {
  const [filter, setFilter] = React.useState("all");
  const filters = [
    { id: "all", label: "すべて" },
    { id: "bonbon", label: "ボンボン" },
    { id: "heart", label: "ハート" },
    { id: "truffle", label: "生トリュフ" },
    { id: "bar", label: "ブロック" },
    { id: "egg", label: "エッグ" },
    { id: "set", label: "セット" },
  ];
  const items = filter === "all" ? data.products : data.products.filter(p => p.collection === filter);
  return (
    <main>
      <div className="container">
        <div className="crumbs">
          <a onClick={() => go("home")}>HOME</a><span className="sep">/</span>
          <span>PRODUCTS</span>
        </div>
        <div className="col-head">
          <span className="eyebrow"><span>The Collection · 全{data.products.length}品</span></span>
          <h1>The <em>Collection</em></h1>
          <p className="lead">マウイ島の工房で、すべて手作り。<br/>ボンボン・ハート・生トリュフ・ブロック・季節限定品まで、すべての商品をご覧いただけます。</p>
        </div>
        <div className="filters">
          {filters.map(f => (
            <button key={f.id} className={"filter-pill" + (filter === f.id ? " is-active" : "")} onClick={() => setFilter(f.id)}>{f.label}</button>
          ))}
          <span style={{marginLeft:"auto", fontFamily:"var(--mono)", fontSize:10, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(244,237,226,.5)"}}>{items.length} ITEMS</span>
        </div>
        <div className="product-grid product-grid--4">
          {items.map(p => <ProductCard key={p.id} p={p} go={go} addToCart={addToCart}/>)}
        </div>
      </div>
      <div style={{height:120}}/>
    </main>
  );
}

// =============== PRODUCT DETAIL ===============
function ProductDetail({ go, addToCart, data, productId }) {
  const p = data.products.find(x => x.id === productId) || data.products[0];
  const [main, setMain] = React.useState(0);
  const [size, setSize] = React.useState(p.options.size[1] || p.options.size[0]);
  const [wrap, setWrap] = React.useState(p.options.wrap[0]);
  const [qty, setQty] = React.useState(1);
  const related = data.products.filter(x => x.id !== p.id && x.collection === p.collection).slice(0, 4);
  const fallback = data.products.filter(x => x.id !== p.id).slice(0, 4 - related.length);
  const recs = [...related, ...fallback].slice(0, 4);

  return (
    <main>
      <div className="container">
        <div className="crumbs">
          <a onClick={() => go("home")}>HOME</a><span className="sep">/</span>
          <a onClick={() => go("products")}>PRODUCTS</a><span className="sep">/</span>
          <span>{p.jp}</span>
        </div>
        <div className="detail">
          <div className="detail-gallery">
            <div className="main" style={{backgroundImage:`url(${p.gallery[main]})`}}/>
            <div className="thumbs">
              {p.gallery.map((g, i) => (
                <button key={i} className={i === main ? "is-active" : ""} style={{backgroundImage:`url(${g})`}} onClick={() => setMain(i)}/>
              ))}
            </div>
          </div>
          <div className="detail-info">
            <span className="eyebrow"><span>{p.collection.toUpperCase()} COLLECTION</span></span>
            <div className="jp-name">{p.jpSub}</div>
            <h1><em>{p.en}</em></h1>
            <div className="jp-name" style={{marginTop:8}}>{p.jp}</div>
            <div className="card-rating" style={{margin:"14px 0"}}>★ {p.rating} <span style={{opacity:.5}}>({p.reviews}件のレビュー)</span></div>
            <div className="price">{yen(p.price)}<small>税込・送料別</small></div>
            <p className="desc">{p.desc}</p>

            <div className="opt-group">
              <span className="label">— SIZE / 容量</span>
              <div className="opt-row">
                {p.options.size.map(s => (
                  <button key={s} className={"opt-pill" + (size === s ? " is-active" : "")} onClick={() => setSize(s)}>{s}</button>
                ))}
              </div>
            </div>
            <div className="opt-group">
              <span className="label">— WRAPPING / 包装</span>
              <div className="opt-row">
                {p.options.wrap.map(w => (
                  <button key={w} className={"opt-pill" + (wrap === w ? " is-active" : "")} onClick={() => setWrap(w)}>{w}</button>
                ))}
              </div>
            </div>
            <div className="opt-group">
              <span className="label">— QUANTITY / 数量</span>
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>

            <div className="detail-actions">
              <button className="btn btn--solid btn--lg" onClick={() => addToCart(p, qty, { size, wrap })}>カートに追加 — {yen(p.price * qty)}</button>
              <button className="btn btn--ghost btn--lg" title="お気に入り"><Icon.Heart/></button>
            </div>

            <div className="spec-table">
              {Object.entries(p.specs).map(([k, v]) => (
                <div key={k} className="row">
                  <div className="k">{k}</div>
                  <div className="v">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* recommendations */}
        <section style={{padding:"80px 0"}}>
          <div className="section-head">
            <span className="eyebrow"><span>You may also like</span></span>
            <h2 className="section-title">合わせて<em>選ばれる</em>。</h2>
          </div>
          <div className="product-grid product-grid--4">
            {recs.map(r => <ProductCard key={r.id} p={r} go={go} addToCart={addToCart}/>)}
          </div>
        </section>
      </div>
    </main>
  );
}

window.ProductsPage = ProductsPage;
window.ProductDetail = ProductDetail;
