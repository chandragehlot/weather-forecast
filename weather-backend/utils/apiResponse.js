module.exports = {
    SUCCESS_CODE : 200,
    ERR_CODE : 400,
    ErrorResponse : function (res) {
        var data = {
            status : 500,
            message: 'Internal Server Error',
        };
        return res.status(500).json(data);
    },
    BadReqResponse : function (res, error) {
        var data = {
            status : 400,
            message : 'Bad Request, Please check api request',
            errors : error.array()
        }
        return res.status(400).json(data);
    }
}