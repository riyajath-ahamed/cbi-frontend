// After Creating the components, we need to export them so that they can be imported in the App.js file.
// So this help use in the import statment in the App.js file.
// Lets Broke the components into smaller parts and export them.
// and if the component have css file then we can save the css file inside the components folder .

export {default as Home} from './home/home.jsx';
export {default as BlogHome} from './blog/home.jsx';
export {default as ProjectHome} from './projects/ProjectHome/projectHome.jsx';
export {default as WhatWeDoHome} from './whatwedo/whatWeDoHome.jsx';

export {default as NavigationBar} from './navbar/NavigationBar.js';
export {default as Whatwedo} from './whatwedo/whatwedo.jsx';
export {default as ImageCarousel} from './imageCarousel/imageCarousel.jsx';
export {default as Whoarewe} from './whoarewe/whoarewe.jsx';
export {default as WhereWeWork} from './whereWeWork/whereWeWork.jsx';
export {default as MissionCard} from './missionCard/missionCard.jsx';
export {default as OurImpact} from './ourImpact/ourImpact.jsx';
export {default as QuotesSlider} from './quotesSlider/quoteSlider.jsx';
export {default as Project} from './projects/project.jsx';
export {default as Blog} from './blog/blog.jsx';
export {default as Gallery} from './gallery/gallery.jsx';
export {default as Footer} from './footer/footer.jsx';
export {default as DonatePage} from './donateUs/donateNow.js';
export {default as AboutUs} from './aboutUsPage/AboutUsPage.js';
export {default as ContactUs} from './contactUs/contactUs.js';

export {default as BlogPost} from './blog/post.jsx';