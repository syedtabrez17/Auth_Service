const { where } = require('sequelize');
const { User } = require('../models/index');

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async destroy(userID) {
        try {
            await User.destroy({
                where: {
                    id: userID
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository