import faker from "faker";

const getUsers = (req, res) => {
    console.log(req);
    return new Array(200).fill({
        name: faker.name.findName(),
        email: faker.internet.email(),
        jobType: faker.name.jobType(),
    });
};

export default getUsers;
