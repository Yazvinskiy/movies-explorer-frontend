const apiConfig = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
};

export default class MoviesApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
  }

  _getResponse(res) {
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  async getMovies() {
    const res = await fetch(`${this._baseUrl}`, {
      method: 'GET',
    });
    return this._getResponse(res);
  }
}

export const apiMovies = new MoviesApi(apiConfig);
