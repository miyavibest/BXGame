// importing relevant module
import React from 'react';

// importing component
import Scroll from '.';

// 
export default {
	title: 'Components/Scroll',
	component: Scroll
};
// template
const Template = (args: JSX.IntrinsicAttributes) => {
	return <Scroll  {...args} />;
};
// default
export const Default: any = Template.bind({});
Default.args = {};
