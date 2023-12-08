import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/animals'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${animalId}`, );

    return result;
}

// export const getLatest = async () => {
//     // const query = new URLSearchParams({
//     //     sortBy: `_createdOn desc`,
//     //     offset: 0,
//     //     pageSize: 3,
//     // });

//     const query = encodeURIComponent(`offset=0&pageSize=3`);
//     console.log(query);
//     const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

//     return result;
// }

export const create = async (animalData) => {
    const result = await request.post(baseUrl, animalData);

    return result;
};

export const edit = async (animalId, animalData) => {
    const result = await request.put(`${baseUrl}/${animalId}`, animalData);

    return result;
};

export const remove = async (animalId) => request.remove(`${baseUrl}/${animalId}`);