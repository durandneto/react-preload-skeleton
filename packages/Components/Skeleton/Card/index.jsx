import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from './../../Base'
import { Row, Container } from './../../../Grid'

const VHSkeletonAvatar = props => {
    return (
        <Container style={{ backgroundColor: "#fff", padding: "12px"}}>
            {props.title && (
                <Row marginBottom={12}>
                    <BaseSkeleton
                        w={218}
                        color={"black-20"}
                        h={24}
                    />
                </Row>
            )}
            <Row marginBottom3>
                <BaseSkeleton
                    w={220}
                    h={24}
                />
            </Row>
            <Row marginBottom3>
                <BaseSkeleton
                    w={345}
                    color={"black-10"}
                    h={27}
                />
            </Row>
            <Row marginBottom={10}>
                <BaseSkeleton
                    w={57}
                    h={15}
                />
            </Row>
            {props.button && (
                <Row>
                    <BaseSkeleton
                        w={150}
                        color={"blue-dark"}
                        h={30}
                        radius={"3px"}
                    />
                </Row>
            )}
        </Container>
    )
}
VHSkeletonAvatar.defaultProps = {
}

VHSkeletonAvatar.propTypes = {
}

export default VHSkeletonAvatar
