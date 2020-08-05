import React from 'react';

const Home = () => {
	const [state, setState] = React.useState(0);
	return (
		<main>
			<p>{state}</p>
			<button onClick={() => setState(state + 2)}>Increment</button>
		</main>
	);
};

export default Home;
