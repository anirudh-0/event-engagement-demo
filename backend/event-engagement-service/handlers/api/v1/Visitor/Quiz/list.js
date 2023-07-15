'use strict';
/**
 * Operations on /api/v1/Visitor/Quiz/list
 */
module.exports = {
    get: async function (req, res, next) {
        const visitor = await getCurrentUser(req);
        const quizes = listQuizForVisitorMobileNumber(visitor?.mobileNumber);
        res.status(200).send(quizes);
    }
};
