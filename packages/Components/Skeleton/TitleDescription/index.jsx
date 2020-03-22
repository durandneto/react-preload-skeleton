import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from '../../Base'
import { Row } from '../../../Grid'
import Text from '../Text'

const TitleDescription = props => {
    return (
        <Row>
            <Row marginBottom3 width={"50%"}>
                <BaseSkeleton
                    w={"100%"}
                    h={24}
                    color={props.reverse ? "black-10" : null}
                    />
            </Row>
            <Row marginBottom3 width={"100%"}>
                <BaseSkeleton
                    w={"100%"}
                    color={props.reverse ? null: "black-10"}
                    h={27}
                />
            </Row>
            {
                props.extraLine && (
                    <Row marginBottom3 width={"25%"}>
                        <Text/>
                    </Row>
                )
            }
        </Row>
    )
}
TitleDescription.defaultProps = {
}

TitleDescription.propTypes = {
}

export default TitleDescription
