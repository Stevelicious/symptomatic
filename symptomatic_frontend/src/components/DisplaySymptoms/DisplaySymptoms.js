import React from 'react';

const DisplaySymptoms = ({ symptoms }) => {
    return (
        <div>
        <h3>Current symptoms</h3>
          { symptoms.map((obj, index) => {
              if (obj.value !== 0) {
                return(
                  <div key={index}>
                    {obj.name} : {obj.value}
                  </div>
                );
              }
            })
          }
        </div>
    );
}

export default DisplaySymptoms;
