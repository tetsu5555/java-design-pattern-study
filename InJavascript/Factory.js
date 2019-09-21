class Factory {
    constructor() {
        if (new.target === Factory) {
            throw new TypeError("Cannot construct Factory instances directly");
        };
        if (this.createProduct === undefined || this.registerProduct === undefined) {
            throw TypeError("Must override method");
        };
    }
    create(string) {
        const p = this.createProduct(string);
        this.registerProduct(p);
        return p;
    }
}

class IDCardFactory extends Factory {
    constructor() {
        super();
        this.cards = [];
    }
    createProduct(string) {
        return new IDCard(string, 1, "hogehoge");
    };
    registerProduct(card) {
        this.cards.push(card);
    };
};

class Product {
    constructor() {
        if (this.use === undefined) {
            throw TypeError("Must override method");
        }
    }
}

class IDCard extends Product {
    constructor(name, number, id) {
        super();
        this.name = name;
        this.number = number;
        this.id = id;
    }
    use() {
        console.log(`${this.name}さんのIDCardが使用されました。このカードは${this.number}番目に作成されました。`);
    }
};


const f = new IDCardFactory()
const card = f.create("hogehoge");
card.use();
