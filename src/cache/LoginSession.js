import {history, storage} from "App";

class LoginSession {

  constructor() {
    this.logged = this.get();
  }

  get = () => {
    this.logged = this.logged || storage.get("logged") || {};
    return this.logged;
  };

  save = (user) => {
    this.logged = {
      id: user.id,
      expiresAt: Date.now() + (900 * 1000) // 15 min
      // expiresAt: Date.now() + (5 * 1000) // 5 sec
    };
    storage.set("logged", this.logged);
    setTimeout(this.logout, this.expiresAt() - Date.now());
  };

  clear = () => {
    storage.remove("logged");
    this.logged = {};
  };

  logout = () => history.push("/logout");

  isLogged = () => {
    const isLogged = Date.now() < (this.expiresAt() || 0);
    if (!isLogged) this.logout();
    return isLogged;
  };

  id = () => this.get().id;
  expiresAt = () => this.get().expiresAt;

}

export default LoginSession;
