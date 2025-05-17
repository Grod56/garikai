"use client";

import Head from "next/head";
import { mediaStyles } from "./Media";

function FresnelHead() {
	return (
		<Head>
			<style
				key="fresnel-css"
				dangerouslySetInnerHTML={{ __html: mediaStyles }}
				type="text/css"
			/>
		</Head>
	);
}

export default FresnelHead;
