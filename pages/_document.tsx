import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<{
		styles: JSX.Element;
		html: string;
		head?: JSX.Element[];
	}> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		// console.log(originalRenderPage);

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(
							<>
								<App {...props} />
							</>
						)
				});

			const initialProps = await Document.getInitialProps(ctx);

         // @ts-ignore
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/assets/logo.png" type="image/jpg" sizes="16x16" />
                    <meta
                        name="description"
                        content=" is a gaming platform built on the Polygon blockchain."
                    />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:title"
                        content=" 🎲"
                    />
                    <meta property="og:image" content="/assets/logo.png" />
                    <meta
                        property="og:description"
                        content=" is a gaming platform built on the Polygon blockchain."
                    />
                    <meta
                        name="twitter:title"
                        content=" is a gaming platform built on the Polygon blockchain."
                    />
                    <meta
                        name="twitter:description"
                        content=" is a gaming platform built on the Polygon blockchain.."
                    />
				</Head>
                <title>BXGame</title>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}