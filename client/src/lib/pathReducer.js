export const pathReducer = (path, params) => {

    const url = Object.keys(params).reduce((result, currentParameter) => {
        return result?.replace(`:${currentParameter}`, params[currentParameter]);
            }, path);

         return url;
};
