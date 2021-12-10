import React from 'react';
import PropTypes from 'prop-types';
import univerBuilding from '../../../images/building.png';
import { ReactComponent as EditIcon } from '../../../images/edit.svg';
import { ReactComponent as DelitIcon } from '../../../images/delete.svg';

const Card = ({ name }) => {
  // const isAdmin = true;         Для закоментированого условия ниже
  return (
    <div>
      Card
      <div>
        <img src={univerBuilding} alt="University" />
      </div>
      <p>университет</p>
      <h3>{name}</h3>
      <div>
        {/* {isAdmin && (<button>
                    <EditIcon />
                </button>)}

                {!isAdmin && (<button>
                    <DelitIcon />
                </button>)} */}

        {/* первый вариант - удоюно и понятно */}

        {/* {isAdmin ? (<button>
                    <EditIcon />
                </button>) : (<button>
                    <DelitIcon />
                </button>)} */}

        <button>
          <DelitIcon />
        </button>

        <button>
          <EditIcon />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
