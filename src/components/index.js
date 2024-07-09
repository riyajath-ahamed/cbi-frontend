// After Creating the components, we need to export them so that they can be imported in the App.js file.
// So this help use in the import statment in the App.js file.
// Lets Broke the components into smaller parts and export them.
// and if the component have css file then we can save the css file inside the components folder .

export {default as NavigationBar} from './navbar/NavigationBar.js';
export {default as Whatwedo} from './whatwedo/whatwedo.jsx';
export {default as ImageCarousel} from './imageCarousel/imageCarousel.jsx';
export {default as Whoarewe} from './whoarewe/whoarewe.jsx';
export {default as MissionCard} from './missionCard/missionCard.jsx';
export {default as OurImpact} from './ourImpact/ourImpact.jsx';