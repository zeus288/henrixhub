/* ============================================================
   HenrixHub — App Logic
   ============================================================ */

/* ── STATE ── */
let cart     = JSON.parse(localStorage.getItem('hxCart4') || '[]');
let activeCat = 'All';
let prevPage  = 'home';
let curPage   = 'home';

/* ── UTILS ── */
const $   = id  => document.getElementById(id);
const fmt = n   => '₦' + Number(n).toLocaleString('en-NG');
const starsHTML = r => `<span class="stars">${r >= 4.8 ? '★★★★★' : '★★★★☆'}</span>`;

function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

/* ── NAVIGATION ── */
function goPage(page) {
  if (page !== 'detail') prevPage = curPage;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  $('page-' + page).classList.add('active');
  curPage = page;
  ['home','shop','about','contact'].forEach(p => {
    const l = $('nl-' + p);
    if (l) l.classList.toggle('active', p === page);
  });
  $('siteFooter').style.display = page === 'detail' ? 'none' : 'block';
  window.scrollTo(0, 0);
  if (page === 'shop') renderShop();
}

function goBack()        { goPage(prevPage === 'detail' ? 'shop' : prevPage); }
function goShopCat(cat)  { activeCat = cat; goPage('shop'); }
function toggleMob()     { $('mobNav').classList.toggle('open'); }

function navSearchGo(e) {
  if (e.key === 'Enter') {
    const q = $('navSearch').value.trim();
    if (q) {
      activeCat = 'All';
      goPage('shop');
      setTimeout(() => { $('shopSearch').value = q; applyFilters(); }, 60);
    }
  }
}

/* ── CART ── */
function saveCart() { localStorage.setItem('hxCart4', JSON.stringify(cart)); }

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  $('cartCount').textContent    = count;
  $('cartQtyLabel').textContent = count;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  $('cartTotal').textContent = fmt(total);

  const container = $('cartItems');
  if (!cart.length) {
    container.innerHTML = '<div class="d-empty"><span>🛒</span>Your cart is empty</div>';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-img">
        <img src="${item.img}" alt="${item.name}"
          onerror="this.style.display='none'">
      </div>
      <div>
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">${fmt(item.price)}</div>
        <div class="ci-qty">
          <button class="ci-qb" onclick="chgQty(${item.id}, -1)">−</button>
          <span class="ci-qv">${item.qty}</span>
          <button class="ci-qb" onclick="chgQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="ci-rm" onclick="rmCart(${item.id})">✕</button>
    </div>`).join('');
}

function addToCart(id) {
  const p  = PRODUCTS.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) {
    ex.qty++;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, img: p.imgs[0], qty: 1 });
  }
  saveCart();
  updateCartUI();
  toast(`✅ ${p.name} added to cart`);
}

function chgQty(id, d) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
}

function rmCart(id)  { cart = cart.filter(x => x.id !== id); saveCart(); updateCartUI(); }
function clearCart() { cart = []; saveCart(); updateCartUI(); }
function toggleCart() {
  $('drawer').classList.toggle('open');
  $('overlay').classList.toggle('open');
}

function orderWA() {
  if (!cart.length) { toast('Your cart is empty!'); return; }
  const lines = cart.map(i => `• ${i.name} x${i.qty} — ${fmt(i.price * i.qty)}`).join('%0A');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const msg = `Hello HenrixHub! 👋%0A%0AI'd like to order:%0A%0A${lines}%0A%0ATotal: ${fmt(total)}%0A%0APlease confirm availability. Thank you!`;
  window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
}

/* ── PRODUCT CARD ── */
function prodCard(p) {
  const badgeBg = p.badge === 'New' ? 'background:var(--dark)' : 'background:var(--red)';
  return `
  <div class="prod-card" onclick="openDetail(${p.id})">
    ${p.badge ? `<div class="prod-badge" style="${badgeBg}">${p.badge}</div>` : ''}
    <div class="prod-img">
      <img
        src="${p.imgs[0]}"
        alt="${p.name}"
        loading="lazy"
        onerror="this.style.display='none';this.parentElement.innerHTML+='<span style=font-size:4rem>📱</span>'">
    </div>
    <div class="prod-info">
      <div class="prod-brand">${p.brand}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-price">
        ${fmt(p.price)}
        ${p.old ? `<span class="prod-old">${fmt(p.old)}</span>` : ''}
      </div>
      <div class="prod-cond">${p.cond} · ${p.year}</div>
      <div class="prod-rating">${starsHTML(p.rating)} ${p.rating} (${p.reviews})</div>
      <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
    </div>
  </div>`;
}

/* ── HOME ── */
function renderHome() {
  // Category grid
  $('homeCats').innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" onclick="goShopCat('${c.name}')">
      <span class="cat-ic">${c.icon}</span>
      <span class="cat-nm">${c.name}</span>
    </div>`).join('');

  // Featured — 8 iPhones first, then fill with others
  const iPhones = PRODUCTS.filter(p => p.cat === 'iPhones').slice(0, 6);
  const others  = PRODUCTS.filter(p => p.cat !== 'iPhones').slice(0, 2);
  $('featuredGrid').innerHTML = [...iPhones, ...others].map(prodCard).join('');
}

/* ── SHOP ── */
function renderShop() {
  const allCats = ['All', ...CATEGORIES.map(c => c.name)];

  // Category pills
  $('shopPills').innerHTML = allCats.map(c =>
    `<button class="pill ${activeCat === c ? 'active' : ''}" onclick="setCat('${c}')">${c}</button>`
  ).join('');

  // Sidebar category radios
  $('filterCatList').innerHTML = allCats.map(c => `
    <label class="f-opt">
      <input type="radio" name="fcat" value="${c}" ${activeCat === c ? 'checked' : ''}
        onchange="setCat('${c}')"> ${c}
    </label>`).join('');

  // iPhone generation filter
  $('filterModelList').innerHTML = IPHONE_MODELS.map(m => `
    <label class="f-opt">
      <input type="checkbox" class="model-cb" value="${m}" onchange="applyFilters()"> ${m}
    </label>`).join('');

  applyFilters();
}

function setCat(cat) { activeCat = cat; renderShop(); }

function applyFilters() {
  let list = [...PRODUCTS];

  // Category filter
  if (activeCat !== 'All') list = list.filter(p => p.cat === activeCat);

  // Search
  const q = ($('shopSearch')?.value || '').toLowerCase().trim();
  if (q) list = list.filter(p =>
    p.name.toLowerCase().includes(q)  ||
    p.brand.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q)   ||
    (p.model && p.model.toLowerCase().includes(q))
  );

  // Condition checkboxes
  const conds = [...document.querySelectorAll(
    '.filters input[type=checkbox][value="New"]:checked,' +
    '.filters input[type=checkbox][value="Used"]:checked,' +
    '.filters input[type=checkbox][value="Open Box"]:checked'
  )].map(x => x.value);
  if (conds.length) list = list.filter(p => conds.includes(p.cond));

  // iPhone model filter
  const models = [...document.querySelectorAll('.model-cb:checked')].map(x => x.value);
  if (models.length) list = list.filter(p => p.model && models.includes(p.model));

  // Price range
  const mn = parseFloat($('priceMin')?.value) || 0;
  const mx = parseFloat($('priceMax')?.value) || Infinity;
  if (mn || mx < Infinity) list = list.filter(p => p.price >= mn && p.price <= mx);

  // Sort
  const sort = $('shopSort')?.value || 'default';
  if      (sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  else if (sort === 'name-az')    list.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'rating')     list.sort((a, b) => b.rating - a.rating);
  else if (sort === 'newest')     list.sort((a, b) => b.year - a.year);

  $('shopCount').textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;
  $('shopGrid').innerHTML = list.length
    ? list.map(prodCard).join('')
    : `<div class="no-res"><span>🔍</span>No products found. Try different filters.</div>`;

  // Sync pills active state
  document.querySelectorAll('.pill').forEach(p =>
    p.classList.toggle('active', p.textContent === activeCat)
  );
}

function resetFilters() {
  activeCat = 'All';
  if ($('shopSearch')) $('shopSearch').value = '';
  if ($('priceMin'))   $('priceMin').value   = '';
  if ($('priceMax'))   $('priceMax').value   = '';
  document.querySelectorAll('.filters input[type=checkbox]').forEach(c => c.checked = false);
  document.querySelectorAll('.filters input[type=radio][value="All"]').forEach(r => r.checked = true);
  if ($('shopSort')) $('shopSort').value = 'default';
  renderShop();
}

/* ── PRODUCT DETAIL ── */
function openDetail(id) {
  prevPage = curPage;
  const p       = PRODUCTS.find(x => x.id === id);
  const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== id).slice(0, 4);
  const condBg  = p.cond === 'New' ? 'var(--dark)' : 'var(--red)';

  $('detailContent').innerHTML = `
    <div>
      <div class="d-img-main">
        <img id="mainImg" src="${p.imgs[0]}" alt="${p.name}"
          onerror="this.outerHTML='<div style=font-size:9rem;display:flex;align-items:center;justify-content:center;width:100%;height:100%>📱</div>'">
      </div>
      <div class="d-thumbs">
        ${p.imgs.map((img, i) => `
          <div class="thumb ${i === 0 ? 'active-t' : ''}" onclick="switchImg('${img}', this)">
            <img src="${img}" alt="${p.name} view ${i+1}" onerror="this.style.display='none'">
          </div>`).join('')}
      </div>
    </div>

    <div class="d-right">
      <div class="d-brand">${p.brand} · ${p.cat}</div>
      <h1 class="d-name">${p.name}</h1>
      <div class="d-rating">
        ${starsHTML(p.rating)}
        <strong>${p.rating}</strong>
        <span>(${p.reviews} reviews)</span>
        <span class="cond-pill" style="background:${condBg}">${p.cond}</span>
        <span style="font-size:.75rem;color:#999">${p.year}</span>
      </div>
      <div class="d-price">
        ${fmt(p.price)}
        ${p.old ? `<span class="d-old">${fmt(p.old)}</span>` : ''}
      </div>
      <div class="d-tagline">${p.desc}</div>

      ${p.specs ? `
        <div style="margin:1rem 0">
          <div class="d-specs-title">Specifications</div>
          ${p.specs.map(s => `
            <div class="spec-row">
              <span class="spec-key">${s[0]}</span>
              <span class="spec-val">${s[1]}</span>
            </div>`).join('')}
        </div>` : ''}

      <div class="qty-row">
        <button class="q-btn" onclick="chgDQ(-1)">−</button>
        <input class="q-val" id="dQty" type="number" value="1" min="1" max="10" readonly>
        <button class="q-btn" onclick="chgDQ(1)">+</button>
        <span style="font-size:.76rem;color:#999;margin-left:.8rem">units</span>
      </div>

      <div class="d-actions">
        <button class="d-action-btn wa" onclick="waDirect(${p.id})">💬 WhatsApp</button>
        <button class="d-action-btn ig" onclick="window.open('https://instagram.com/henrixhub','_blank')">📸 Instagram</button>
        <button class="d-action-btn tk" onclick="window.open('https://tiktok.com/@henrixhub','_blank')">🎵 TikTok</button>
      </div>
      <button class="d-cart-btn" onclick="addToCart(${p.id})">+ Add to Cart</button>
    </div>

    ${related.length ? `
      <div class="related-section">
        <div class="related-title">Related <span>Products</span></div>
        <div class="prod-grid">${related.map(prodCard).join('')}</div>
      </div>` : ''}
  `;

  goPage('detail');
}

function switchImg(src, el) {
  const main = $('mainImg');
  if (main) main.src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active-t'));
  el.classList.add('active-t');
}

function chgDQ(d) {
  const i = $('dQty');
  if (!i) return;
  i.value = Math.max(1, Math.min(10, parseInt(i.value) + d));
}

function waDirect(id) {
  const p   = PRODUCTS.find(x => x.id === id);
  const qty = parseInt($('dQty')?.value || 1);
  const msg = `Hello HenrixHub! 👋%0A%0AI want to order:%0A%0A*${p.name}* (${p.cond}, ${p.year})%0AQty: ${qty}%0APrice: ${fmt(p.price)}%0A%0APlease confirm availability. Thank you!`;
  window.open(`https://wa.me/2348000000000?text=${msg}`, '_blank');
}

/* ── COUNTDOWN ── */
function tick() {
  const now = new Date(), end = new Date();
  end.setHours(23, 59, 59, 0);
  let d = Math.max(0, Math.floor((end - now) / 1000));
  const h = Math.floor(d / 3600); d %= 3600;
  const m = Math.floor(d / 60);
  const s = d % 60;
  if ($('hrs'))  $('hrs').textContent  = String(h).padStart(2, '0');
  if ($('mins')) $('mins').textContent = String(m).padStart(2, '0');
  if ($('secs')) $('secs').textContent = String(s).padStart(2, '0');
}
setInterval(tick, 1000);
tick();

/* ── FORMS ── */
function submitForm() {
  $('formOk').style.display = 'block';
  setTimeout(() => $('formOk').style.display = 'none', 5000);
  toast('✅ Message sent!');
}

function subNL() {
  const v = $('nlEmail')?.value;
  if (v && v.includes('@')) {
    toast('✅ Subscribed!');
    $('nlEmail').value = '';
  } else {
    toast('⚠️ Enter a valid email.');
  }
}

/* ── INIT ── */
renderHome();
updateCartUI();
