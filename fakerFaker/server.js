const express = require('express'),
    faker = require('faker'),
    port=8000,
    app=express(),
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

class User{
    constructor(){
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

console.log(new User());

class Company{
    constructor(){
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

console.log(new Company());

app.get('/api/users/new', (req, res) => {
    var user = new User();
    res.json({results: user});
})

app.get('/api/company/new', (req, res) => {
    var company = new Company();
    res.json({results: company});
})

app.get('/api/user/company', (req, res) => {
    res.json({results: {company: new Company(), user: new User()}});
})