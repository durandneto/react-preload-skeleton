import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from './../../Base'

const DescriptionSkeleton = props => {
    return (
        <BaseSkeleton
            radius={'5px'}
            w={'100%'}
            color={props.color}
            h={100}
        />
    )
}
DescriptionSkeleton.defaultProps = {
}

DescriptionSkeleton.propTypes = {
}

export default DescriptionSkeleton
