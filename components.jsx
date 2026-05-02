/* global React */
const { useState, useEffect, useMemo, useRef } = React;

// ----- Small icons (lucide-style stroked) -----
const Icon = {
  Search: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  Bag: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 7h14l-1 13H6L5 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>,
  Heart: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>,
  User: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
  Menu: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  X: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>,
  Plus: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  Arrow: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  Leaf: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M11 20A7 7 0 0 1 4 13V4h9a7 7 0 0 1 0 14h-2z"/><path d="M2 22 11 13"/></svg>,
};

// Small decorative SVG mark
function BrandMark({ size = 22, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.2">
      <circle cx="16" cy="16" r="14"/>
      <path d="M10 16c0-4 3-7 6-7s6 3 6 7-3 7-6 7-6-3-6-7z"/>
      <path d="M16 9v14M9 16h14"/>
    </svg>
  );
}

// JPY formatter
const yen = (n) => "¥" + n.toLocaleString("ja-JP");

// ---------------- NAV ----------------
function Nav({ page, go, cartCount, openCart, paper }) {
  const links = [
    { id: "products", label: "Products" },
    { id: "gift", label: "Gift" },
    { id: "story", label: "Story" },
    { id: "about", label: "About" },
    { id: "faq", label: "FAQ" },
  ];
  return (
    <>
      <div className="announce">
        <span>¥10,000以上 全国送料無料</span>
        <span className="sep">／</span>
        <span>母の日ギフト 受付中</span>
        <span className="sep">／</span>
        <span>マウイ島直送・クール便</span>
      </div>
      <nav className={"nav" + (paper ? " is-paper" : "")}>
        <div className="nav-left">
          {links.slice(0,3).map(l => (
            <a key={l.id} className={"link" + (page === l.id ? " is-active" : "")} onClick={() => go(l.id)}>{l.label}</a>
          ))}
        </div>
        <div className="brand" onClick={() => go("home")}>
          <span className="mark">West Maui</span>
          <span className="sub">Chocolatier · Japan</span>
        </div>
        <div className="nav-right">
          {links.slice(3).map(l => (
            <a key={l.id} className={"link" + (page === l.id ? " is-active" : "")} onClick={() => go(l.id)}>{l.label}</a>
          ))}
          <div className="nav-actions">
            <button className="icon-btn" title="Search"><Icon.Search/></button>
            <button className="icon-btn" title="Account"><Icon.User/></button>
            <button className="icon-btn" title="Cart" onClick={openCart}>
              <Icon.Bag/>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

// ---------------- PRODUCT CARD ----------------
function ProductCard({ p, go, addToCart }) {
  const tagText = { best: "ベストセラー", gift: "ギフト人気", new: "新作", limited: "限定", valentine: "バレンタイン" };
  const tag = p.tags[0];
  return (
    <a className="card" onClick={() => go("product", p.id)}>
      <div className="card-image">
        <img src={p.img} alt={p.jp} loading="lazy"/>
        {tag && <span className={"card-tag" + (tag === "best" ? " card-tag--gold" : tag === "limited" ? " card-tag--ink" : "")}>{tagText[tag]}</span>}
        <button className="card-quick" onClick={(e) => { e.stopPropagation(); addToCart(p, 1); }} title="カートに追加"><Icon.Plus/></button>
      </div>
      <h3 className="card-name">{p.jp}</h3>
      <div className="card-name-en">{p.en}</div>
      <div className="card-meta">
        <span className="card-price">{yen(p.price)}<small>税込</small></span>
        <span className="card-rating">★ {p.rating} <span style={{opacity:.5}}>({p.reviews})</span></span>
      </div>
    </a>
  );
}

Object.assign(window, { Icon, BrandMark, yen, Nav, ProductCard });
