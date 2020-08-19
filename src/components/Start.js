import React, {useContext} from 'react'
import { Context } from "../Context";

export default function Start() {
	const [user, setUser] = useContext(Context);
	debugger;
	return (
		<div>
			<h1>Welcom back, {user.userName.name}!</h1>
		</div>
	)
}
