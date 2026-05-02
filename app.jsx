/* global React, ReactDOM */
const { useState, useEffect } = React;

function App() {
  const [route, setRoute] = useState({ page: "home", id: null });
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const data = window.WMC_DATA;

  useEffect(() => { window.scrollTo(0, 0); }, [route]);

  const go = (page, id = null) => setRoute({ page, id });

  const addToCart = (p, qty = 1, opts = {}) => {
    setCart(prev => {
      const key = p.id + "|" + (opts.size || "") + "|" + (opts.wrap || "");
      const i = prev.findIndex(x => x.key === key);
      if (i >= 0) return prev.map((x, idx) => idx === i ? { ...x, qty: x.qty + qty } : x);
      return [...prev, { key, id: p.id, jp: p.jp, img: p.img, price: p.price, qty, size: opts.size || p.options.size[0], wrap: opts.wrap || p.options.wrap[0] }];
    });
    setToast(`${p.jp} をカートに追加しました`);
    setTimeout(() => setToast(""), 2200);
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const isPaperPage = route.page === "faq";

  let pageEl = null;
  if (route.page === "home") pageEl = <window.HomePage go={go} addToCart={addToCart} data={data}/>;
  else if (route.page === "products") pageEl = <window.ProductsPage go={go} addToCart={addToCart} data={data}/>;
  else if (route.page === "product") pageEl = <window.ProductDetail go={go} addToCart={addToCart} data={data} productId={route.id}/>;
  else if (route.page === "about") pageEl = <window.AboutPage go={go} data={data}/>;
  else if (route.page === "gift") pageEl = <window.GiftPage go={go} addToCart={addToCart} data={data}/>;
  else if (route.page === "story") pageEl = <window.StoryPage go={go} data={data}/>;
  else if (route.page === "faq") pageEl = <window.FaqPage go={go} data={data}/>;

  return (
    <div className="app">
      <window.Nav page={route.page} go={go} cartCount={cartCount} openCart={() => setCartOpen(true)} paper={isPaperPage}/>
      {pageEl}
      <window.Footer go={go}/>
      <window.CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} setCart={setCart} go={go}/>
      <div className={"toast" + (toast ? " is-show" : "")}>{toast}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
