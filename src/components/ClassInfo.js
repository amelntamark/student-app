import React from 'react';

const ClassInfo = (props) => {
  const studentCount = props.classSize;
  return ( 
    // valid JSX elements have just one parent element, so without wrapping this content in a <section> element, an error would have reulted
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {studentCount}</li>
      </ul>
    </section>
  );
};

export default ClassInfo;