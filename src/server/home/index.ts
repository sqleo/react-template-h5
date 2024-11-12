import httpClient from "../base";


export const getSchemeUrl = (query: string, expireType: number) => {
    return httpClient.post('kshop-appc/face/getSchemeUrl', {
        body: JSON.stringify({ query, expireType }),
    });
}
