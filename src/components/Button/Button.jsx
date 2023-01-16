import PropTypes from 'prop-types';

export function Button ({onClick}) {

return <button type='button' className='button-load' onClick={onClick}>Load more</button>;

}

Button.propTypes = {
    onClick: PropTypes.func,
}