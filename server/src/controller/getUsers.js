import faker from "faker";

const getUsers = (req, res) => {
    const randomName = faker.name.findName();
    const randomEmail = faker.internet.email();
    const jobType = faker.name.jobType();

    const params = req.query;

    res.send(
        new Array(parseInt(params.count)).fill({
            randomName,
            randomEmail,
            jobType,
        }),
    );
};

export default getUsers;
