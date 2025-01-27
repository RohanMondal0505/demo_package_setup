import Admin from "pillar9_npm_admin";
import { App } from "pillar9_npm_user";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test/Test";

const index = () => {
	return (
		<>
			<Routes>
				<Route path="/demo" element={<Test />} />
			</Routes>
			<AdminWrapper />
			<UserWrapper />
		</>
	);
};

export default index;

const UserWrapper = () => {
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
	const logoutUrl = "/demo";
	const logoutFunction = () => {
		toast.warn("Logout");
	};

	const X_API_KEY = "tOKMV0hOEK3B8vrsjVk9B2TWpRgOKTyT2f7C6qT0";
	const API_BASE_URL = "https://pilar9-backend.vercel.app";

	return (
		<>
			<App
				token={token}
				user={user}
				X_API_KEY={X_API_KEY}
				API_BASE_URL={API_BASE_URL}
				logoutUrl={logoutUrl}
				logoutFunction={logoutFunction}
			/>
		</>
	);
};

const AdminWrapper = () => {
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDU3MjM1YTRlMjBkNDUxZTZmY2Q4YiIsImV4cCI6MTc2OTI0OTMxMSwiaWF0IjoxNzM3NzEzMzExfQ.pcjSLKir1PwNDDvu15s7SQZkHPJE5wRZlTpt0EtGKZs";
	const adminData = {
		_id: "67457235a4e20d451e6fcd8b",
		name: "Super Admin",
		email: "superadmin@gmail.com",
		profilePic:
			"https://firebasestorage.googleapis.com/v0/b/princecollege-b5027.appspot.com/o/Pilar9%2FSuper%20Admins%20Profile%2Fdownload1.jpeg.jpeg?alt=media&token=87ca67ba-229c-4431-951c-2c6f3e6630ea",
		password: "$2a$08$hYGuk3BJOlKP/nv64ZtXXeL4fYSmY2A9Dl3kL.IjKq9yK0wRBj1nK",
		isActive: true,
		isDeleted: false,
		createdAt: "2024-11-26T07:01:09.997Z",
		updatedAt: "2024-11-26T07:01:09.997Z",
		__v: 0,
	};
	const X_API_KEY = "tOKMV0hOEK3B8vrsjVk9B2TWpRgOKTyT2f7C6qT0";
	const API_BASE_URL = "https://pilar9-backend.vercel.app";
	const logoutUrl = "/demo";
	const logoutFunction = () => {
		toast.warn("Logout");
	};
	return (
		<>
			<Admin
				token={token}
				adminData={adminData}
				X_API_KEY={X_API_KEY}
				API_BASE_URL={API_BASE_URL}
				logoutUrl={logoutUrl}
				logoutFunction={logoutFunction}
			/>
		</>
	);
};
