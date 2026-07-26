const store = [];

async function listWidgets() {
  return store;
}

async function createWidget({ name }) {
  const widget = { id: store.length + 1, name };
  store.push(widget);
  return widget;
}

module.exports = { listWidgets, createWidget };

async function deleteWidget(id) {
  const idx = store.findIndex((w) => w.id === id);
  if (idx === -1) return false;
  store.splice(idx, 1);
  return true;
}

module.exports.deleteWidget = deleteWidget;
