import React from "react";
// import App from "./Router";
import { App } from "piller9_npm_user";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDA3ZjQxYmM4YzIxZmY3MDFiYTNiYiIsImV4cCI6MTc2OTE1MzgxMiwiaWF0IjoxNzM3NjE3ODEyfQ.S9yHmZD0q9JLANRoQ1fQN0qWtffHTXCr7oyC20bFzDw";
const user = {
	profilePic:
		"https://firebasestorage.googleapis.com/v0/b/file-upload-demo-213de.appspot.com/o/defaultAvatar.jpg?alt=media&token=56f59056-fc87-47cb-9f42-98f8406f892a",
	_id: "67407f41bc8c21ff701ba3bb",
	name: "Test User",
	email: "user@gmail.com",
	password: "$2a$08$KpFEw.oUYKvZp/v8Rr0HNeQv/QujkWpLHDKQcFZSvw1RK4fuNIWe.",
	isActive: true,
	isDeleted: false,
	createdAt: "2024-11-22T12:55:29.345Z",
	updatedAt: "2024-11-22T13:05:38.716Z",
	__v: 0,
	userName: "user191283",
};

const X_API_KEY = "tOKMV0hOEK3B8vrsjVk9B2TWpRgOKTyT2f7C6qT0";
const API_BASE_URL = "https://pilar9-backend.vercel.app";


const index = () => {

	return (
		<>
			<App token={token} user={user} X_API_KEY={X_API_KEY} API_BASE_URL={API_BASE_URL} />
		</>
	);
};

export default index;
