export default class Api {
    constructor() {
        this.url = './db.json'
    }

    getData() {
        return fetch(`${this.url}`);
    }
}