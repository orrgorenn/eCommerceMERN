const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
        min: 5,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    hash_pwd: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'helper', 'admin'],
        default: 'user'
    },
    profilePicture: {
        type: String
    }
}, { timestamps: true });

userSchema.virtual('password').set(function (password) {
    this.hash_pwd = bcrypt.hashSync(password, 10);
});

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compare(password, this.hash_pwd);
    }
}

module.exports = mongoose.model('User', userSchema);