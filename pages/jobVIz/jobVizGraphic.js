import React, { useEffect} from 'react'
import initJobVizGraphic from './initJobVizGraphic'
import JobVizGraphic from "./jobVizGraphic";

const JobVizGraphic = () => {

	useEffect(()=>{
		initJobVizGraphic()
		console.log('we loaded')
		return function cleanUp() {
			const svgs = document.getElementsByTagName("svg");
			console.log('cleanin it up!', svgs)
			svgs.length > 0 && svgs[0].remove();
			console.log('cleaned it up!', svgs)
		}
	},[])

return (
  <>
    <div>
			Job Viz
    </div>
  </>
);
}

export default JobVizGraphic;
