import mongoose from "mongoose";
import crypto from "crypto";

interface UserDocument {
	username: string;
	name: string;
	email: string;
	profile: string;
	hashed_password: string;
	salt: string;
	role: number;
	photo: string;
	resetPasswordLink: string;
}

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
		user_url: {
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

userSchema
	.virtual("password")
	.set(function (password: string) {
		this._password = password;
		this.salt = this.makeSalt();
		this.hashed_password = this.encryptPassword(password);
	})
	.get(function () {
		return this._password;
	});

userSchema.methods = {
	authenticate: function(plainPassword: string): boolean {
		let doesPasswordMatch: boolean = this.encryptPassword(plainPassword) === this.hashed_password;
		return doesPasswordMatch;
	},
	makeSalt: function (): string {
		let salt: string = Math.round(new Date().valueOf() + Math.random()) + "";
		return salt;
	},
	encryptPassword: function (password: string): string {
		if (!password) {
			return "";
		}
		try {
			return crypto
				.createHmac("sha256", this.salt)
				.update(password)
				.digest("hex");
		} catch (error) {
			return "";
		}
	},
};

const User = mongoose.model<UserDocument>("User", userSchema);
export default User;