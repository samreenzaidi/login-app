import fetchIntercept from 'fetch-intercept';
 
fetchIntercept.register({
    request: function (url, config) {
        const token = window.localStorage.getItem("TOKEN"); 
        config.headers.Authorization= 'Bearer '+ token;
        return [url, config];
    },
 
    requestError: function (error) {
        return Promise.reject(error);
    },
 
    response: function (response) {
        if(response.status === 400){
            window.location.href = '/';
        }
        return response;
    },
 
    responseError: function (error) {
        return Promise.reject(error);
    }
});