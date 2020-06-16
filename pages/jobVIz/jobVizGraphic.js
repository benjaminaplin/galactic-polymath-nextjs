import React, { useEffect} from 'react'
import initJobVizGraphic from './initJobVizGraphic'

const JobVizGraphic = () => {
	var margin = { top: 0, right: 60, bottom: 0, left: 30 };
	useEffect(()=>{
		const width = Math.max(window.innerWidth, 1800) - margin.right - margin.left;
		const height = window.innerHeight - margin.top - margin.bottom;
		// initJobVizGraphic(width, height)
		// console.log('we loaded')
		// return function cleanUp() {
		// 	const svgs = document.getElementsByTagName("svg");
		// 	console.log('cleanin it up!', svgs)
		// 	svgs.length > 0 && svgs[0].remove();
		// 	console.log('cleaned it up!', svgs)
		// }
		console.log('width: ', width, 'height: ', height)
	},[width, height])

return (
  <iv>
		Job Viz
  </iv>
);
}

export default JobVizGraphic;
