const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			maxlength: 32,
			unique: true,
			index: true,
			lowercase: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
			maxlength: 32,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			ma: 32,
			unique: true,
			lowercase: true,
		},
		profile: {
			type: String,
			required: true,
		},
		hashed_password: {
			type: String,
			required: true,
		},
		salt: String,
		about: {
			type: String,
		},
		role: {
			type: Number,
			trim: true,
		},
		photo: {
			data: Buffer,
			contentType: String,
		},
		resetPasswordLink: {
			type: String,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("User", userSchema);