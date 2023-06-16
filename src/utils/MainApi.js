export default class MainApi {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }

    _getResponse(res) {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      }

      ////
      async getSavedMovies() {
        const res = await fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: this._headers
        });
        return this._getResponse(res);
      }
////user
      async getUserData() {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        });
        return this._getResponse(res);
      }

      async setUserData({name, email}) {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name,
                email
            })
        });
        return this._getResponse(res);
      }


}

const apiConfig = {
    baseUrl: 'https://api.diploma.nomoredomains.rocks',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  };

  export const mainApi = new MainApi(apiConfig);