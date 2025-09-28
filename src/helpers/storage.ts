export const getItemFromStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item;
};

export const setItemToStorage = (key: string, value: string | number) => {
  localStorage.setItem(key, value.toString());
};
export const removeItemFromStorage = (key: string) => {
  localStorage.removeItem(key);
};
