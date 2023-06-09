export default class MainApi {
    constructor(config) {
        this._baseUrl = config.baseUrl;
    }

    _getResponse(res) {
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      }

      async saveMovie(data) {
        const res = await fetch(`${this._baseUrl}/movies`, {
          method: 'POST',
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            nameRU: data.nameRU || '',
            nameEN: data.nameEN || '',
            country: data.country || '',
            director: data.director || '',
            duration: data.duration || '',
            year: data.year || '',
            description: data.description || '',
            image: `https://api.nomoreparties.co${data.image.url}` || '',
            trailerLink: data.trailerLink || '',
            thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}` || '',
            movieId: data.id,
          })
      });
        return this._getResponse(res);
      }

      async deleteMovie(id) {
        const res = await fetch(`${this._baseUrl}/movies/${id}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        }
      });
      return this._getResponse(res);
      }

      
      async getSavedMovies() {
        const res = await fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json'
          }
        });
        return this._getResponse(res);
      }

      async getUserData() {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json'
          }
        });
        return this._getResponse(res);
      }

      async setUserData({name, email}) {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-Type': 'application/json'
          },
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
  };

  export const mainApi = new MainApi(apiConfig);