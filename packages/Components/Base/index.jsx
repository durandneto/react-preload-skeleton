import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from './styles'

const Skeleton = props => (
        <BaseSkeleton
            color={props.color}
            radius={props.radius}
            w={props.w}
            h={props.h}
            shineColor={props.shineColor}
        />
    )

Skeleton.defaultProps = {
}

Skeleton.propTypes = {
}

export default Skeleton
