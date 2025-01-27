import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Test.module.scss";

const Test = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.Test}>
			<button onClick={() => navigate(`/admin/dashboard`)}>Admin</button>
			<button onClick={() => navigate(`/user/dashboard`)}>User</button>
		</div>
	);
};

export default Test;
