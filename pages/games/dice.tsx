// importing relevant modules
import { NextPage } from 'next';
import React from 'react';
import { mockData_CoinsProps } from '../../ui/widgets/Coins/MOCK_DATA';
import DiceGame from '../../ui/widgets/DiceGame';
import Layout from '../../ui/widgets/Layout';

// JSX Component
const Dice: NextPage = (): JSX.Element => {
	return (
		<Layout background={true}>
			<DiceGame {...mockData_CoinsProps} />
		</Layout>
	);
};

export default Dice;