class Storage {

  get = key => JSON.parse(localStorage.getItem(key));
  set = (key, data) => localStorage.setItem(key, JSON.stringify(data));
  remove = key => localStorage.removeItem(key);
  clear = () => localStorage.clear();

}

export default Storage;
