const amazonScraper = require('amazon-buddy');
const { successResponse } = require('../config/response.config');
const HTTP_STATUS = require('../config/statusCode.config');

module.exports = {
    getProducts: async (req, res) => {
        const { keyword, pageSize } = req.query
        const limited = pageSize || 5;
        const response = await amazonScraper.products({ keyword: keyword, number: limited });
        const products = response.result?.slice(0, limited);

        if (products.length > 0) {
            const data = [];
            for (let index = 0; index < products.length; index++) {
                let element = products[index];
                const productAsin = await amazonScraper.asin({ asin: element.asin });
                element.featureBullets = [];
                element.description = "";
                if (productAsin.result.length > 0) {
                    featureBullets = productAsin.result[0]?.feature_bullets;
                    element.featureBullets = featureBullets ? featureBullets.filter(item => item.replace(/^\s+|\s+$/gm,'').length > 0) : [];
                    element.description = productAsin.result[0]?.description || "";
                }
                data.push(element);
            }
            return successResponse(res, data, HTTP_STATUS.OK);
        }
        return successResponse(res, [], HTTP_STATUS.OK);
    }
};