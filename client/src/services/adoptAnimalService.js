import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/animals";
const doctorsUrl = "http://localhost:3030/data/doctors";
const servicesUrl = "http://localhost:3030/data/services";
const questionsUrl = "http://localhost:3030/data/questions";

//get collections
export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};
export const getAllDoctors = async () => {
  const result = await request.get(doctorsUrl);

  return result;
};
export const getAllServices = async () => {
  const result = await request.get(servicesUrl);

  return result;
};
export const getAllQuestions = async () => {
  const result = await request.get(questionsUrl);

  return result;
};

//animals collection requests

export const create = async ({
  yourName,
  yourEmail,
  petName,
  assumedAge,
  animalType,
  animalImage,
  animalInfo,
}) => {
  const result = await request.post(baseUrl, {
    yourName,
    yourEmail,
    petName,
    assumedAge,
    animalType,
    animalImage,
    animalInfo,
  });

  return result;
};

export const getOne = async (animalId) => {
  const result = await request.get(`${baseUrl}/${animalId}`);

  return result;
};

export const edit = async (animalId, animalData) => {
  const result = await request.put(`${baseUrl}/${animalId}`, animalData);

  return result;
};

export const remove = async (animalId) =>
  request.remove(`${baseUrl}/${animalId}`);

//questions
export const createQuestions = async ({
  ownerName,
  email,
  petName,
  age,
  type,
  breed,
  question,
}) => {
  const result = await request.post(questionsUrl, {
    ownerName,
    email,
    petName,
    age,
    type,
    breed,
    question,
  });

  return result;
};
