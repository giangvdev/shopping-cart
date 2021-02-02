import React from 'react';
import PropTypes from 'prop-types';

Colors.propTypes = {
    
};

function Colors({colors}) {
    return (
        <div className="colors">
        {
          colors.map((colors, index) => (
             <button key={index} style={{background:colors}}></button>
         ))
        }
      </div>
    );
}

export default Colors;