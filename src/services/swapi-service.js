export default class SwapiService {

    _apiBase = 'https://api.themoviedb.org';

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    async getSearchMovies(query) {
        const res = await this.getResource(`/3/search/movie?api_key=864cd2acdebdfd281550947ea6066439&query=${query}`);
        return res.results;
    }

}