const productRoute = require('./product.router');

const appRouter = (app) => {
    app.use('/api/products', productRoute);
}

module.exports = appRouter;