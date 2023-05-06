import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero";
import ServiceDown from './components/ServiceDown'

import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Hero />
		<ServiceDown/>		
	</React.StrictMode>
);
