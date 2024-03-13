import React from 'react';
import Banner from './Banner/Banner';
import WhatIDo from './WhatIDO/Skills';
import Projects from '../../components/Projects/Projects';
import Contract from '../../components/Contract/Contract';
import Education from '../../components/Edu/Education';
// import Certification from './certification/certification';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <WhatIDo></WhatIDo>                  
          <Projects></Projects>          
          <Education></Education>
          
          <Contract></Contract>


        </div>
    );
};

export default Home;