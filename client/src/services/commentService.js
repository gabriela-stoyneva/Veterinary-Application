import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/animals';

export const getAll = async (animalId) => {
    const query = new URLSearchParams({
        where: `animalId="${animalId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (animalId, text) => {
    const newComment = await request.post(baseUrl, {
        animalId,
        text,
    });

    return newComment;
};