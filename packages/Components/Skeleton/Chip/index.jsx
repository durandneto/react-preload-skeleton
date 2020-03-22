import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from './../../Base'
import Color from '../../../Colors'

const ChipSkeleton = props => {
    return (
        <div style={{width:'69px', padding: '9px', border: `solid 1px ${Color['black-10']}`, borderRadius: "6px"}}  >
            <BaseSkeleton
                radius={'9px'}
                w={'100%'}
                color={props.color}
                h={6}
            />
        </div>
    )
}
ChipSkeleton.defaultProps = {
}

ChipSkeleton.propTypes = {
}

export default ChipSkeleton
