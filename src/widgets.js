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
