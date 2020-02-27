import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from './../../Base'

const VHSkeletonAvatar = props => {
    return (
        <BaseSkeleton
            radius={'50%'}
            w={32}
            color={props.color}
            h={32}
        />
    )
}
VHSkeletonAvatar.defaultProps = {
}

VHSkeletonAvatar.propTypes = {
}

export default VHSkeletonAvatar
