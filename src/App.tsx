export default function App() {
  return (
    <div className="covered">
      <div className="Hcentered">&nbsp;</div>
      <div className="Vcentered">
        <h1 className="Hcentered boxed rounded quad bg-elvish:ltr">
          Elvish.css
        </h1>
        <div className="Hcentered">&nbsp;</div>
        <div className="sidebar-left">
          <aside className="Hcentered">
            <nav className="stacked">
              <h2>Sidebar</h2>
              <div>
                <div>
                  <a href="/">home</a>
                </div>
                <div>
                  <a href="/">blog</a>
                </div>
                <div>
                  <a href="/">portfolio</a>
                </div>
                <div>
                  <a href="/">contact</a>
                </div>
              </div>
            </nav>
          </aside>
          <main className="Hcentered covered">
            <h2 className="Vcentered">Main Area</h2>
            <section className="stacked">
              <p>
                This project strives to exhibit a responsive design without the
                traditional media queries techniques, leveraging only handspun
                resets, global styles, and utilty classes. It is heavily
                inspired by Every Layout <sup>(tm)</sup> by Heydon Pickering and
                Andy Bell. All differences are my own, including not relying on
                custom elements.
              </p>
              <div className="grid">
                <div className="boxed rounded">
                  <div className="quad stacked">
                    <h3>.boxed</h3>
                    <div>
                      A `boxed` element provides a border and padding around the
                      elements's content. It may have rounded corners with a
                      `.rounded` class. It does not change the background color.
                    </div>
                    <div className="boxed rounded">Boxed (Rounded)</div>
                  </div>
                </div>
                <div className="boxed rounded">
                  <div className="quad stacked">
                    <h3>.quad</h3>
                    <div>
                      A `quad` element is similar to a `boxed` element, in that
                      it provides padding, but it provides a background color
                      and does not deal with a border. The color scheme may
                      additionally be inverted by use of a `.inverted` class.
                    </div>
                    <div className="quad inverted">Quad (Inverted)</div>
                  </div>
                </div>
                <div className="boxed rounded">
                  <div className="quad stacked">
                    <h3>.stacked</h3>
                    <div>
                      The `stacked` element will stack its children according to
                      the modular scale. There are normal and `stacked-tight`
                      variations, as well as a `stacked-deep` variation for
                      tree-like nesting.
                    </div>
                    <div className="stacked-tight">
                      <label className="clustered l">email</label>
                      <input type="email" />
                    </div>
                    <div className="stacked-tight">
                      <label className="clustered l">password</label>
                      <input type="password" />
                    </div>
                  </div>
                </div>
                <div className="boxed rounded">
                  <div className="quad stacked">
                    <h3>.grid</h3>
                    <div>
                      A simple grid class to make a responsive grid using
                      `display: grid`. A flexbox based version exists as well
                      (`.flex-grid`)
                    </div>
                    <div>
                      <div className="flex-grid">
                        <div className="boxed rounded">1</div>
                        <div className="boxed rounded">2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boxed rounded">
                  <div className="quad stacked">
                    <h3>.clustered</h3>
                    <div>
                      Clustered elements can be made to go to the left or to the
                      right of the containing context.
                    </div>
                    <div className="clustered l">
                      <b>.clustered.l</b>
                    </div>
                    <div className="clustered r">
                      <b>.clustered.r</b>
                    </div>
                  </div>
                </div>
                <div className="boxed rounded">
                  <div className="quad stacked">
                    <h3>More...</h3>
                    <div>
                      Additional classes include: `sidebar-left`,
                      `sidebar-right`, `covered`, `overcast`, `switching`,
                      `covered`, `Vcentered`, `Hcentered`, `frame`,
                      `side-scrolling`, & `icon`
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <div className="Hcentered">&nbsp;</div>
    </div>
  );
}
