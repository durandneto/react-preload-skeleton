import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from '../../Base'
import { Row, Container } from '../../../Grid'

const VHSkeletonAvatar = props => {
    return (
        <Row style={{ backgroundColor: "#fff"}}>
            <Row marginBottom3>
                <BaseSkeleton
                    w={220}
                    h={24}
                />
            </Row>
            <Row marginBottom3>
                <BaseSkeleton
                    w={"100%"}
                    color={"black-10"}
                    h={27}
                />
            </Row>
        </Row>
    )
}
VHSkeletonAvatar.defaultProps = {
}

VHSkeletonAvatar.propTypes = {
}

export default VHSkeletonAvatar
