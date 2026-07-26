const store = [];

async function listOrders() {
  return store;
}

async function createOrders(payload) {
  const record = { id: store.length + 1, ...payload, createdAt: new Date().toISOString() };
  store.push(record);
  return record;
}

async function removeOrders(id) {
  const idx = store.findIndex((r) => r.id === id);
  if (idx === -1) return false;
  store.splice(idx, 1);
  return true;
}

module.exports = { listOrders, createOrders, removeOrders };
