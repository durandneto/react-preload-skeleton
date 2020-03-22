import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from '../../Base'
import { Row, Container } from '../../../Grid'
import TitleDescription from '../TitleDescription'
import Description from '../Description'
import Chip from '../Chip'

const PostDescription = props => {
    return (
        <Row style={{ width:'calc(100% - 18px)'}}>
            <Row>
                <TitleDescription />
            </Row>
            <Row marginBottom3>
                <Description />
            </Row>
            <Row row marginBottom3>
                <Row autoWidth paddingRight8>
                    <Chip />
                </Row>
                <Row autoWidth paddingRight8>
                    <Chip color={"black-20"} />
                </Row>
                <Row autoWidth>
                    <Chip />
                </Row>
            </Row>
        </Row>
    )
}
PostDescription.defaultProps = {
}

PostDescription.propTypes = {
}

export default PostDescription
