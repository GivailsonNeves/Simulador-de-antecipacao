export default class MockInput {
    constructor () {
        this.value = "";
        this.events = [];
    }

    addEventListener(_key, callback) {
        if( !this.events[_key] )
            this.events[_key] = [callback];
        else
            this.events[_key].push(callback);
    }
}