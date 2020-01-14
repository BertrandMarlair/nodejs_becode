import {MongoClient} from "mongodb";
import {DATABASE_HOST, DATABASE_PORT, DATABASE_NAME} from "./constant";

const mongo = async () => {
    try {
        const mongoClientPromise = MongoClient.connect(
            `mongodb://${DATABASE_HOST}:${DATABASE_PORT}`,
        );
        const mongoDbPromise = await mongoClientPromise
            .then(client => client.db(DATABASE_NAME))
            .catch(err => {
                console.log(err);
            });

        if (mongoDbPromise) {
            return mongoDbPromise;
        }
        return {error: "Impossible to connect to the database"};
    } catch (err) {
        return {error: err.message};
    }
};

export default mongo;

export const query = async (collection_name, rawQuery) => {
    const db = await mongo();

    return await db
        .collection(collection_name)
        .find(rawQuery)
        .toArray();
};
