import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from './../../Base'

const DescriptionSkeleton = props => {
    return (
        <BaseSkeleton
            radius={'3px'}
            w={'100%'}
            color={props.color}
            h={12}
        />
    )
}
DescriptionSkeleton.defaultProps = {
}

DescriptionSkeleton.propTypes = {
}

export default DescriptionSkeleton
