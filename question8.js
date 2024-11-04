const person = {
    name: 'Alice',
    age: 25,
    address: {
    city: 'Wonderland'
    }
    };
    const { name, address: { city }, country = 'Unknown' } = person;
    console.log(name, city, country);