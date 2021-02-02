import React from 'react';
import PropTypes from 'prop-types';

Sizes.propTypes = {
    
};

function Sizes({sizes}) {
    return (
              <div className="size">
                       {
                        sizes.map((sz, index) => (
                            <button key={index}>{sz}</button>
                        ))
                       }
                    </div>
    );
}

export default Sizes;