import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from '../../Base'
import { Row, Container } from '../../../Grid'
import TitleDescription from '../TitleDescription'
import Description from '../Description'

const PostDescription = props => {
    return (
        <Row style={{ backgroundColor: "#fff", padding: "12px"}}>
            <Row>
                <TitleDescription />
            </Row>
            <Row marginBottom3>
                <Description />
            </Row>
            <Row row marginBottom3>
                <Row autoWidth paddingRight8>
                    <BaseSkeleton
                        w={57}
                        h={15}
                        round={"25%"}
                    />
                </Row>
                <Row autoWidth paddingRight8>
                    <BaseSkeleton
                        w={57}
                        h={15}
                        round={"25%"}
                        color={"black-20"}
                    />
                </Row>
                <Row autoWidth>
                    <BaseSkeleton
                        w={57}
                        h={15}
                        round={"25%"}
                    />
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
