// import Admin from "pillar9_npm_admin";
import { App } from "pillar9_user_package";
import React from "react";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { BiLockAlt, BiSolidLockOpen } from "react-icons/bi";
import { BsLockFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaCaretSquareDown, FaCaretSquareUp } from "react-icons/fa";
import { IoSave } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import "./Style.scss";

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

	const X_API_KEY = "Your Api Key";
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

	//custom widget
	const CustomWidget1 = () => {
		return (
			<div className="Widget1Style">
				<h1>Your Custom Widget Component Here</h1>
				<h2>You can Apply Style Here By directly applying styles by className in your custom widget component</h2>
				<button>Dummy Button</button>
			</div>
		);
	};
	const CustomWidget2 = () => {
		return (
			<div className="Widget2Style">
				<p>me without header😊</p>
				<button>Press Me</button>
				<button>Click Me</button>
				<button>Test</button>
			</div>
		);
	};
	const CustomWidget3 = () => {
		return (
			<div>
				<h1>Lorem ipsum dolor sit amet.</h1>
				<h2>widget 3</h2>
				<button>Press Me</button>
			</div>
		);
	};
	const CustomWidget4 = () => {
		return (
			<div>
				<button>Widget 4</button>
				<button>Enter</button>
			</div>
		);
	};
	const CustomWidget5 = () => {
		return (
			<div>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque vel voluptatibus cum accusamus? Nulla ullam rem ipsa
					nihil labore.
				</h2>
			</div>
		);
	};

	const existingMenu = [
		{
			name: "Collapse",
			item: <FaCaretSquareUp size={"20px"} color="red" />,
		},
		{
			name: "UnCollapse",
			item: <FaCaretSquareDown size={"20px"} color="green" />,
		},
		{
			name: "FullScreen",
			item: <SlSizeFullscreen size={"17px"} color="green" />,
		},
		{
			name: "CloseFullScreen",
			item: <AiOutlineFullscreenExit size={"20px"} color="green" />,
		},
		{
			name: "ThreeDot",
			item: <BsThreeDotsVertical size={"20px"} color="green" />,
		},
		{
			name: "LockMenu",
			item: (
				<>
					Lock
					<BsLockFill />
				</>
			),
		},
		{
			name: "UnlockMenu",
			item: (
				<>
					Unlock
					<BiSolidLockOpen />
				</>
			),
		},
		{
			name: "LockIcon",
			item: <BiLockAlt size={"20px"} color="red" />,
		},
	];
	const CustomHeader = {
		existingMenu,
		additionalMenu: [
			{
				name: "addMenu1",
				item: "L-Menu1",
				onClick: () => alert("C-Menu1 Clicked"),
			},
			{
				name: "addMenu2",
				item: "L-Menu2",
				onClick: () => console.log("C-Menu2 Clicked"),
			},
		],
	};
	const CustomHeader1 = {
		existingMenu,
		additionalMenu: [
			{
				name: "addMenu1",
				item: "S-Menu1",
				onClick: () => alert("Segment Menu1 Clicked"),
			},
			{
				name: "addMenu2",
				item: "S-Menu2",
				onClick: () => console.log("Segment Menu2 Clicked"),
			},
		],
	};

	const customWidget = {
		widgets: [
			{
				name: "ListAgent",
				isLocked: false,
				isCollapsed: false,
				show: false,
				showHeader: true,
				component: CustomWidget1,
				headerItems: CustomHeader,
			},
			{
				name: "Dimensions",
				isLocked: false,
				isCollapsed: false,
				show: false,
				showHeader: false,
				component: CustomWidget2,
				headerItems: CustomHeader,
			},
			{
				name: "Segments",
				isLocked: false,
				isCollapsed: false,
				show: true,
				showHeader: true,
				component: CustomWidget3,
				headerItems: CustomHeader1,
			},
			{
				name: "Time",
				isLocked: false,
				isCollapsed: false,
				show: true,
				showHeader: true,
				component: CustomWidget4,
				headerItems: CustomHeader,
			},
			{
				name: "Filter",
				isLocked: false,
				isCollapsed: false,
				show: true,
				showHeader: true,
				component: CustomWidget5,
				headerItems: CustomHeader,
			},
		],
		layout: [
			{
				i: "box1",
				x: 0,
				y: 0,
				w: 12,
				h: 13,
				isDraggable: true,
				isResizable: true,
			},
			{
				i: "box2",
				x: 0,
				y: 13,
				w: 6,
				h: 8,
				isDraggable: true,
				isResizable: true,
			},
			{
				i: "box3",
				x: 6,
				y: 13,
				w: 6,
				h: 8,
				isDraggable: true,
				isResizable: true,
			},
			{
				i: "box4",
				x: 0,
				y: 21,
				w: 6,
				h: 8,
				isDraggable: true,
				isResizable: true,
			},
			{
				i: "box5",
				x: 6,
				y: 21,
				w: 6,
				h: 8,
				isDraggable: true,
				isResizable: true,
			},
		],
	};

	const buttonItems = {
		manageWidget: {
			item: "Manage Widgets",
		},
		cancelButton: {
			item: <MdOutlineCancel size={"20px"} color="red" />,
		},
		saveButton: {
			item: <IoSave size={"20px"} color="green" />,
		},
	};

	const customStyle = {
		title: {
			color: "blue",
		},
		titleClass: "YourClassName",
		cancelButton: {},
		cancelButtonClass: "CancelButton",
		saveButton: {},
		saveButtonClass: "SaveButton",
		manageButton: {},
		manageButtonClass: "ManageWidgetButton",
		dashboard: {
			backgroundColor: "#fff",
			padding: "2rem",
		},
		dashboardClass: "dashboardClass",
		widgetTitle: {
			fontSize: "1.2rem",
			color: "#444",
		},
		widgetTitleClass: "WidgetTitleClassName",
		headerStyle: {
			backgroundColor: "skyblue",
			color: "#000",
		},
		headerClass: "headerClass",
		fullScreenStyle: {
			backgroundColor: "#fff",
		},
		fullScreenClassName: "fullScreenClassName",
	};
	const title = "Your Custom Title";
	const handleSaveLayout = (data) => {
		console.log(data);
	};

	return (
		<>
			{/* custom-dashboard */}
			<App
				type={"CustomDashboard"}
				customWidget={customWidget}
				handleSaveLayout={handleSaveLayout}
				title={title}
				customStyle={customStyle}
				buttonItems={buttonItems}
			/>

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
			{/* <App
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
			/> */}
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
// 	const X_API_KEY = "Your Api Key";
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
