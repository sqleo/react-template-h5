import ky from "ky";

const httpClient = ky.create({
    prefixUrl: 'https://app.kkid.vip',
    hooks: {
        beforeRequest: [
            (request, options) => {
                console.log("beforeRequest", request, options);
            },
        ],
        afterResponse: [
            (request, options, response) => {
                console.log("afterResponse", request, options, response);
                if (response.status >= 200 && response.status < 400) {
                    return response.json(); // 返回数据
                } else {
                    console.log('Response status not in range 200-399');
                }
            },
        ],
    },
});

export default httpClient;
