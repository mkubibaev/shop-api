const mongoose = require('mongoose');
const config = require('./config');

const Category = require('./models/Category');
const Product = require('./models/Product');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;
    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const categories = await Category.create(
        {title: 'CPUs', description: 'Central Processin Units'},
        {title: 'HDDs', description: 'Hard Disk Frive'}
    );

    await Product.create(
        {
            title: 'Intel Core i7',
            price: 500,
            description: 'Very cool CPU',
            category: categories[0]._id,
            image: 'cpu.jpg'
        },
        {
            title: 'Toshiba 500GB',
            price: 60,
            description: 'Just a single HDD',
            category: categories[1]._id,
            image: 'hdd.jpg'
        },
    );

    await connection.close();
}

run().catch(error => {
    console.error('Something went wrong');
});