// import Admin from "pillar9_npm_admin";
import { App } from "pillar9_user_package";
import React from "react";

const index = () => {
	return (
		<>
			{/* <Routes>
				<Route path="/demo" element={<Test />} />
			</Routes> */}
			{/* <AdminWrapper /> */}
			<UserWrapper />
		</>
	);
};

export default index;

const UserWrapper = () => {
	const user = {
		_id: "6746dafcdcaf297ede0d9724",
		name: "New User",
		userName: "new3627",
		email: "new@gmail.com",
		profilePic:
			"https://firebasestorage.googleapis.com/v0/b/princecollege-b5027.appspot.com/o/Pilar9%2FUsers%20Profile%2FBeautiful%20blonde%20in%20black%20with%20hat%20on%20her%20had.png.png?alt=media&token=19824029-541f-48c1-b050-eef7366bcfb0",
		password: "$2a$08$OksjnFGV3YQC2q6UdS.cmercOTmybHL5laXRii4mqMjrAx9zTV9BG",
		isActive: true,
		isDeleted: false,
		createdAt: "2024-11-27T08:40:28.933Z",
		updatedAt: "2024-11-27T08:40:28.933Z",
		__v: 0,
	};
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDZkYWZjZGNhZjI5N2VkZTBkOTcyNCIsImV4cCI6MTc2OTU3NzAyNCwiaWF0IjoxNzM4MDQxMDI0fQ.4VYJ1IvfsMWqzX9f46F0wnEZlTDkyelC6ts6BoPX05c";

	const X_API_KEY = "tOKMV0hOEK3B8vrsjVk9B2TWpRgOKTyT2f7C6qT0";
	const API_BASE_URL = "https://pilar9-backend.vercel.app";

	//dashboard
	const defaultLayout = [
		{ i: "box1", x: 0, y: 0, w: 12, h: 8, isDraggable: true, isResizable: true },
		{ i: "box2", x: 0, y: 8, w: 6, h: 8, isDraggable: true, isResizable: true },
		{ i: "box3", x: 6, y: 8, w: 6, h: 8, isDraggable: true, isResizable: true },
		{ i: "box4", x: 0, y: 16, w: 8, h: 8, isDraggable: true, isResizable: true },
		{ i: "box5", x: 8, y: 16, w: 4, h: 8, isDraggable: true, isResizable: true },
	];
	const widgetButtons = ["ListAgent", "Dimensions", "Segments", "Time", "Filter"];
	const userId = "6746dafcdcaf297ede0d9724";
	const padding = "2rem";
	const agentIdType = "RMAWANIR";
	const defaultFields = ["UniqueID", "StandardStatus", "PropertyType", "UnparsedAddress", "City", "ListAgentMlsId"];

	return (
		<>
			{/* dashboard */}
			{/* <App
				token={token}
				user={user}
				X_API_KEY={X_API_KEY}
				API_BASE_URL={API_BASE_URL}
				type={"Dashboard"}
				defaultLayout={defaultLayout}
				widgetButtons={widgetButtons}
				userId={userId}
				padding={padding}
				agentIdType={agentIdType}
				defaultFields={defaultFields}
			/> */}

			{/* Request Widgets */}
			{/* <App
				token={token}
				user={user}
				X_API_KEY={X_API_KEY}
				API_BASE_URL={API_BASE_URL}
				type={"RequestWidget"}
				padding={padding}
			/> */}

			{/*Multi dashboard */}
			<App
				token={token}
				user={user}
				X_API_KEY={X_API_KEY}
				API_BASE_URL={API_BASE_URL}
				type={"MultiDashboard"}
				defaultLayout={defaultLayout}
				widgetButtons={widgetButtons}
				userId={userId}
				padding={padding}
				agentIdType={agentIdType}
				defaultFields={defaultFields}
			/>
		</>
	);
};

// const AdminWrapper = () => {
// 	const token =
// 		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDU3MjM1YTRlMjBkNDUxZTZmY2Q4YiIsImV4cCI6MTc2OTI0OTMxMSwiaWF0IjoxNzM3NzEzMzExfQ.pcjSLKir1PwNDDvu15s7SQZkHPJE5wRZlTpt0EtGKZs";
// 	const adminData = {
// 		_id: "67457235a4e20d451e6fcd8b",
// 		name: "Super Admin",
// 		email: "superadmin@gmail.com",
// 		profilePic:
// 			"https://firebasestorage.googleapis.com/v0/b/princecollege-b5027.appspot.com/o/Pilar9%2FSuper%20Admins%20Profile%2Fdownload1.jpeg.jpeg?alt=media&token=87ca67ba-229c-4431-951c-2c6f3e6630ea",
// 		password: "$2a$08$hYGuk3BJOlKP/nv64ZtXXeL4fYSmY2A9Dl3kL.IjKq9yK0wRBj1nK",
// 		isActive: true,
// 		isDeleted: false,
// 		createdAt: "2024-11-26T07:01:09.997Z",
// 		updatedAt: "2024-11-26T07:01:09.997Z",
// 		__v: 0,
// 	};
// 	const X_API_KEY = "tOKMV0hOEK3B8vrsjVk9B2TWpRgOKTyT2f7C6qT0";
// 	const API_BASE_URL = "https://pilar9-backend.vercel.app";
// 	const logoutUrl = "/demo";
// 	const logoutFunction = () => {
// 		toast.warn("Logout");
// 	};
// 	return (
// 		<>
// 			<Admin
// 				token={token}
// 				adminData={adminData}
// 				X_API_KEY={X_API_KEY}
// 				API_BASE_URL={API_BASE_URL}
// 				logoutUrl={logoutUrl}
// 				logoutFunction={logoutFunction}
// 			/>
// 		</>
// 	);
// };
