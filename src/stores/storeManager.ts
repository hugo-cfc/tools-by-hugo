class StoreManager {
  stores: unknown[] = [];

  addStore(store: unknown) {
    this.stores.push(store);
  }

  resetAll() {
    for (const store of this.stores) {
      const state = (store as { getState: () => { reset?: () => void } }).getState();

      if (state.reset && typeof state.reset === "function") {
        const resetFunction = (store as { getState: () => { reset?: () => void } }).getState().reset;

        if (resetFunction) {
          resetFunction();
        }
      }
    }
  }
}

export const storeManager = new StoreManager();
