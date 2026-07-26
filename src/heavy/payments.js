const store = [];

async function listPayments() {
  return store;
}

async function createPayments(payload) {
  const record = { id: store.length + 1, ...payload, createdAt: new Date().toISOString() };
  store.push(record);
  return record;
}

async function removePayments(id) {
  const idx = store.findIndex((r) => r.id === id);
  if (idx === -1) return false;
  store.splice(idx, 1);
  return true;
}

module.exports = { listPayments, createPayments, removePayments };
