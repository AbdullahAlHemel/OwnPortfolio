import React from 'react';
import Banner from './Banner/Banner';
import WhatIDo from './WhatIDO/WhatIDo';
import Projects from '../../components/Projects/Projects';
import Contract from '../../components/Contract/Contract';
import Education from '../../components/Edu/Education';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <WhatIDo></WhatIDo>                  
          <Projects></Projects>          
          <Contract></Contract>
          <Education></Education>

          
        </div>
    );
};

export default Home;