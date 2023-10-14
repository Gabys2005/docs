import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

const pages = [
	{
		name: "GIFs",
		link: "gifs",
	},
	{
		name: "Televoting",
		link: "televoting",
	},
	{
		name: "Adorner",
		link: "adorner",
	},
];

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				{/* <div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						Docusaurus Tutorial - 5min ⏱️
					</Link>
				</div> */}
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={siteConfig.title} description="Docs for products made by me">
			<HomepageHeader />
			<main>
				{/* <HomepageFeatures /> */}
				<div className="container">
					<div className="row">
						{pages.map((page) => (
							<div className="col col--4">
								<Link to={page.link} className="button button--secondary button--lg">
									{page.name}
								</Link>
							</div>
						))}
					</div>
				</div>
			</main>
		</Layout>
	);
}
