import React from 'react';
import Navbar from './navbar';
import tw, { styled } from 'twin.macro';
import Seo from './seo';

const PageContainer = styled.div`
	background: #10101c;
	min-height: 100vh;
	${tw`overflow-hidden pb-4`}
`;

const Layout = ({ children, title }) => {
	return (
		<PageContainer>
			<Seo pageTitle={title} />
			<Navbar />
			{children}
		</PageContainer>
	);
};

export default Layout;
