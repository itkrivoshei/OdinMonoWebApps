import React, { useState } from 'react';

const Counter = () => {
	let [num, setNum] = useState(0);

	function inc() {
		setNum(++num);
	}

	function dec() {
		setNum(--num);
	}

	return (
		<div>
			<h1>{num}</h1>
			<button onClick={inc}>+</button>
			<button onClick={dec}>-</button>
		</div>
	);
};

export default Counter;
