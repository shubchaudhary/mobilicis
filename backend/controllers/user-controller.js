const User = require("../models/user");
const data = require("../sample_data.json");

const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(400).json({ message: "no user found" });
    }
    return res.status(200).json({ users });
};

const loadUsers = async (req, res) => {
    try {
        const result = await User.insertMany(data);
        console.log(`${result.length} documents inserted successfully`);
        res.status(200).json({ message: "Data loaded successfully" });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ message: "Error loading data" });
    }
};

const query1 = async (req, res) => {
    try {
        const result = await User.find({
            $and: [{ income: { $lt: "$5" } }, { car: { $in: ["BMW", "Mercedes"] } }],
        });
        console.log(`Found ${result.length} users`);
        res.header("Access-Control-Allow-Origin", "https://mobilicisdataquery.netlify.app");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
        res.status(200).json(result);
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ message: "Error executing query" });
    }
};

const query2 = async (req, res) => {
    try {
        const result = await User.find({
            $and: [{ gender: "Male" }, { phone_price: { $gt: "10000" } }],
        });
        console.log(`Found ${result.length} users`);
        res.header("Access-Control-Allow-Origin", "https://mobilicisdataquery.netlify.app");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
        res.status(200).json(result);
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ message: "Error executing query" });
    }
};

const query3 = async (req, res) => {
    try {
        const usersWithQuote = await User.find({
            last_name: /^M/,
            quote: { $exists: true, $gt: 15 },
        }).select("last_name");

        const lastNames = usersWithQuote.map((user) => user.last_name);

        const result = await User.find({
            last_name: { $in: lastNames },
            email: { $regex: new RegExp(`.${lastNames.join("|")}.`), $options: "i" },
        });

        console.log(`Found ${result.length} users`);
        res.header("Access-Control-Allow-Origin", "https://mobilicisdataquery.netlify.app");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
        res.status(200).json(result);
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ message: "Error executing query" });
    }
};

const query4 = async (req, res) => {
    try {
        const result = await User.find({
            $and: [{ car: { $in: ["BMW", "Mercedes", "Audi"] } }, { email: { $not: /\d/ } }],
        });

        res.header("Access-Control-Allow-Origin", "https://mobilicisdataquery.netlify.app");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
        res.status(200).json(result);
        console.log(`Found ${result.length} users`);
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ message: "Error executing query" });
    }
};

const query5 = async (req, res) => {
    try {
        const result = await User.aggregate([
            {
                $group: {
                    _id: "$city",
                    count: { $sum: 1 },
                    totalIncome: { $sum: { $toDouble: { $substr: ["$income", 1, -1] } } },
                    users: { $push: "$$ROOT" },
                },
            },
            {
                $project: {
                    _id: 0,
                    city: "$_id",
                    users: 1,
                    averageIncome: { $round: [{ $divide: ["$totalIncome", "$count"] }, 2] },
                },
            },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]);

        console.log(`Found ${result.length} cities`);
        res.header("Access-Control-Allow-Origin", "https://mobilicisdataquery.netlify.app");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { getAllUsers, loadUsers, query1, query2, query3, query4, query5 };
