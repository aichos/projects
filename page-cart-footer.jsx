/* global React, Icon, BrandMark, yen */

// =============== CART DRAWER ===============
function CartDrawer({ open, onClose, cart, setCart, go }) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const ship = subtotal >= 10000 ? 0 : 980;
  const total = subtotal + ship;
  return (
    <>
      <div className={"drawer-mask" + (open ? " is-open" : "")} onClick={onClose}/>
      <aside className={"drawer" + (open ? " is-open" : "")}>
        <div className="drawer-head">
          <h3>Your <em>Bag</em></h3>
          <button className="icon-btn" onClick={onClose} style={{color:"var(--ink)"}}><Icon.X/></button>
        </div>
        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <BrandMark size={28} color="rgba(14,10,6,0.4)"/>
              <p style={{marginTop:18}}>カートは空です。</p>
              <button className="btn btn--paper" style={{marginTop:18}} onClick={() => { onClose(); go("products"); }}>商品を見る</button>
            </div>
          ) : cart.map((it, idx) => (
            <div key={idx} className="cart-item">
              <div className="img" style={{backgroundImage:`url(${it.img})`}}/>
              <div>
                <h4>{it.jp}</h4>
                <div className="opt">{it.size || ""}{it.wrap && it.wrap !== "なし" ? " ／ " + it.wrap : ""}</div>
                <div className="qty-mini">
                  <button onClick={() => setCart(cart.map((c,i) => i===idx ? {...c, qty: Math.max(1, c.qty-1)} : c))}>−</button>
                  <span>{it.qty}</span>
                  <button onClick={() => setCart(cart.map((c,i) => i===idx ? {...c, qty: c.qty+1} : c))}>+</button>
                </div>
              </div>
              <div style={{textAlign:"right"}}>
                <div className="price">{yen(it.price * it.qty)}</div>
                <button className="remove" onClick={() => setCart(cart.filter((_,i) => i!==idx))}>削除</button>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="drawer-foot">
            <div className="totals">
              <div className="row"><span>小計</span><span>{yen(subtotal)}</span></div>
              <div className="row"><span>送料</span><span>{ship === 0 ? "無料" : yen(ship)}</span></div>
              {ship > 0 && <div style={{fontFamily:"var(--mono)", fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--gold-soft)"}}>あと {yen(10000 - subtotal)} で送料無料</div>}
              <div className="row total"><span>合計</span><span>{yen(total)}</span></div>
            </div>
            <button className="btn btn--paper btn--block btn--lg" style={{background:"var(--ink)", color:"var(--paper)", borderColor:"var(--ink)"}}>レジへ進む <Icon.Arrow/></button>
          </div>
        )}
      </aside>
    </>
  );
}

// =============== FOOTER ===============
function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-mark">
            <div className="mark">West Maui</div>
            <p>マウイ島の手描きチョコレート。<br/>2026年、日本上陸。</p>
            <div className="newsletter">
              <input type="email" placeholder="newsletter@example.com"/>
              <button>購読</button>
            </div>
          </div>
          <div>
            <h5>Shop</h5>
            <ul>
              <li><a onClick={() => go("products")}>すべての商品</a></li>
              <li><a onClick={() => go("products")}>ボンボン</a></li>
              <li><a onClick={() => go("products")}>生トリュフ</a></li>
              <li><a onClick={() => go("gift")}>ギフトを選ぶ</a></li>
              <li><a onClick={() => go("home")}>定期便</a></li>
            </ul>
          </div>
          <div>
            <h5>About</h5>
            <ul>
              <li><a onClick={() => go("about")}>ブランドストーリー</a></li>
              <li><a onClick={() => go("story")}>素材について</a></li>
              <li><a onClick={() => go("about")}>銀座サロン</a></li>
              <li><a>採用情報</a></li>
              <li><a>取材・卸</a></li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li><a onClick={() => go("faq")}>よくある質問</a></li>
              <li><a>配送について</a></li>
              <li><a>返品・交換</a></li>
              <li><a>特定商取引法</a></li>
              <li><a>お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 West Maui Chocolatier · All rights reserved.</div>
          <div style={{display:"flex", gap:24}}>
            <a style={{color:"inherit", textDecoration:"none", cursor:"pointer"}}>Instagram</a>
            <a style={{color:"inherit", textDecoration:"none", cursor:"pointer"}}>X (Twitter)</a>
            <a style={{color:"inherit", textDecoration:"none", cursor:"pointer"}}>Privacy</a>
            <a style={{color:"inherit", textDecoration:"none", cursor:"pointer"}}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.CartDrawer = CartDrawer;
window.Footer = Footer;
