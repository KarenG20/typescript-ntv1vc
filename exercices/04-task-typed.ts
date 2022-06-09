interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

interface Address {
  street: string;
  country: string;
  city: string;
}

const supeHero: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: 'Main St',
    country: 'USA',
    city: 'NY',
  },

  showAddress() {
    return this.name + ', ' + this.address.city + ', ' + this.address.country;
  },
};

const address = supeHero.showAddress();
console.log(address);
