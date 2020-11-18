
export default class LoadService {

    _apiBase = 'https://jsonplaceholder.typicode.com';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllPeople = async () => {
        return await this.getResource(`/users`);
        
    };
    

    _transformPerson = (person) => {
        return {
            id: person.id,
            name: person.name,
            username: person.username,
            email: person.email,
           
        }
    }
}