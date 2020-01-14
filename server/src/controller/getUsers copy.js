import faker from "faker";

const getUsers = (req, res) => {
    console.log(req, res);
    const randomName = faker.name.findName();
    const randomEmail = faker.internet.email();
    const jobType = faker.name.jobType();

    return new Array(100).fill({randomName, randomEmail, jobType});
};

export default getUsers;
