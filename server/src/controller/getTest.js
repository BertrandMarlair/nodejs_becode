import {query} from "../core/mongo";

const getTest = async (req, res) => {
    const data = await query("test", {});

    console.log(data);

    res.send(data);
};

export default getTest;
