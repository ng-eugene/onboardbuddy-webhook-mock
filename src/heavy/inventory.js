const store = [];

async function listInventory() {
  return store;
}

async function createInventory(payload) {
  const record = { id: store.length + 1, ...payload, createdAt: new Date().toISOString() };
  store.push(record);
  return record;
}

async function removeInventory(id) {
  const idx = store.findIndex((r) => r.id === id);
  if (idx === -1) return false;
  store.splice(idx, 1);
  return true;
}

module.exports = { listInventory, createInventory, removeInventory };
