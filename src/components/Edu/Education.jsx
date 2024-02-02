import React from 'react';

import czn from '../../assets/czn.jpg'

const Education = () => {
    return (
        <div>
            <h2 className='text-center mt-10  text-2xl font-bold text-rose-500'>Education</h2>
          <div className='flex  p-10'>
          <div className='w-2/5 pl-16'> <img src={czn} alt="" /></div> 
           <div className='w-4/5'>
            <p className='text-xl text-center py-20 mx-5'>
                <h2 className='text-2xl'>University of Dhaka</h2>
                <p>
                 Bachelor of social science, Department of Peace and conflict studies</p>
                </p></div>
            </div>
        </div>
    );
};

export default Education;