import React from "react";

export default function YoutubeVideo(props) {
	return (
		<iframe
			src={`https://www.youtube-nocookie.com/embed/${props.id}`}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		></iframe>
	);
}
