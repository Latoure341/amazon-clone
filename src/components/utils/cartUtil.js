
const STORAGE_KEY = "cart";

function lineKey(item) {
  return item.title ?? item.name ?? "";
}

// Get cart from localStorage
function getCart() {
  const cart = localStorage.getItem(STORAGE_KEY);
  if (cart) {
    try {
      const parsed = JSON.parse(cart);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Error parsing cart from localStorage:", e);
      return [];
    }
  }
  return [];
}

// Save cart to localStorage
function saveCart(nextCart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCart));
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("cartUpdated"));
  }
}

// Add item to cart (merges quantity for the same product line)
function addToCart(item, addQuantity = 1) {
  const cart = getCart();
  const qtyToAdd = Math.max(1, Number(addQuantity) || 1);
  const key = lineKey(item);
  const idx = key ? cart.findIndex((entry) => lineKey(entry) === key) : -1;

  if (idx >= 0) {
    const existing = cart[idx];
    const nextQty = Number(existing.quantity ?? 1) + qtyToAdd;
    cart[idx] = { ...existing, quantity: nextQty };
  } else {
    cart.push({ ...item, quantity: qtyToAdd });
  }
  saveCart(cart);
}

function removeFromCart(name) {
  const cart = getCart().filter((item) => lineKey(item) != name);
  saveCart(cart);
}

function updateCartItemQuantity(name, nextQuantity) {
  const cart = getCart();
  const n = Number(nextQuantity);
  const idx = cart.findIndex((item) => lineKey(item) === name);
  if (idx < 0) {
    return;
  }
  if (!Number.isFinite(n) || n < 1) {
    cart.splice(idx, 1);
  } else {
    cart[idx] = { ...cart[idx], quantity: n };
  }
  saveCart(cart);
}

// Total number of units (sums line quantities)
function getCartCount() {
  return getCart().reduce((sum, item) => sum + Number(item.quantity ?? 1), 0);
}

export {
  addToCart,
  getCart,
  getCartCount,
  removeFromCart,
  updateCartItemQuantity,
};
