import React from 'react';
import './MainSinglePostList.css';
import PropTypes from 'prop-types';

const MainSinglePostList = (props) => {

    const {comment, title, body, name} = props;

    return ( 
        <div className='content'>

            <div className="artist-card" >

                <figure>
                     <figcaption>
                        <p className="artist-card__name userSizeText">User : {name}</p>
                        <p className="artist-card__name userSizeText">Title : {title}</p>
                        <p className="artist-card__number-albums textSize">Text : {body}</p>
                        <p className="artist-card__name color-red textSize">Comments : {comment}</p>
                     </figcaption>
                </figure>

            </div>

        </div>
      );
};


MainSinglePostList.propTypes = {
    comment: PropTypes.array,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
MainSinglePostList.defaultProps = {
    comment: ['lorem'],
    body: 'text',
    title: 'lorem',
    name: 'Alexandr'
}

export default MainSinglePostList;