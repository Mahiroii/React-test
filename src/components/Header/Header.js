import React from "react";

import header from "./Header.module.css";

import favi from "../../assets/favicon.svg";


export default function Header() {
	return (
		<header className={header.header}>
			<div
				class={header.logo}
				
                onClick={(e) => {
					window.location.href = "/";
				}}
			>
				<img src={favi} alt="app_logo" />
				
                <span>Thunder</span>
			</div>
		</header>
	);
}