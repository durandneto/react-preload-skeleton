import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from '../../Base'
import { Row } from '../../../Grid'
import TitleDescription from '../TitleDescription'


const RelocationSection = props => {
    return (
        <Row>
            <Row>
                <Row autoWidth  marginBottom={5}>
                    <BaseSkeleton
                        w={188}
                        h={21}
                    />
                </Row>
                <Row row autoWidth marginBottom={7}>
                    <Row row>
                        <Row row autoWidth>
                            <Row autoWidth>
                                <BaseSkeleton
                                    radius={'50%'}
                                    w={24}
                                    color={"black-10"}
                                    h={24}
                                />
                            </Row>
                            <Row autoWidth style={{ padding: "6px"}}>
                                <BaseSkeleton
                                    w={57}
                                    h={15}
                                    round={"25%"}
                                />
                            </Row>
                        </Row>
                        <Row row autoWidth>
                            <Row autoWidth>
                                <BaseSkeleton
                                    radius={'50%'}
                                    w={24}
                                    color={"black-20"}
                                    h={24}
                                />
                            </Row>
                            <Row autoWidth style={{ padding: "6px"}}>
                                <BaseSkeleton
                                    w={57}
                                    h={15}
                                    round={"25%"}
                                    color={"black-20"}
                                />
                            </Row>
                        </Row>
                    </Row>
                </Row>
                <Row autoWidth marginBottom3>
                    <BaseSkeleton
                        w={188}
                        h={21}
                    />
                </Row>
                <Row row marginBottom={10}>
                    <Row autoWidth style={{ marginRight: "18px"}}>
                        <Row marginBottom3>
                            <BaseSkeleton
                                w={95}
                                h={60}
                            />
                        </Row>
                        <Row>
                            <BaseSkeleton
                                w={48}
                                h={21}
                            />
                        </Row>
                    </Row>
                    <Row autoWidth marginBottom3 style={{ marginRight: "18px"}}>
                        <Row marginBottom3>
                            <BaseSkeleton
                                w={95}
                                h={60}
                            />
                        </Row>
                        <Row>
                            <BaseSkeleton
                                w={48}
                                h={21}
                            />
                        </Row>
                    </Row>
                    <Row autoWidth style={{ marginRight: "18px"}}>
                        <Row marginBottom3>
                            <BaseSkeleton
                                w={95}
                                h={60}
                            />
                        </Row>
                        <Row>
                            <BaseSkeleton
                                w={48}
                                h={21}
                            />
                        </Row>
                    </Row>
                    <Row autoWidth marginBottom3 style={{ marginRight: "18px"}}>
                        <Row marginBottom3>
                            <BaseSkeleton
                                w={95}
                                h={60}
                            />
                        </Row>
                        <Row>
                            <BaseSkeleton
                                w={48}
                                h={21}
                            />
                        </Row>
                    </Row>
                    <Row autoWidth style={{ marginRight: "18px"}}>
                        <Row marginBottom3>
                            <BaseSkeleton
                                w={95}
                                h={60}
                            />
                        </Row>
                        <Row>
                            <BaseSkeleton
                                w={48}
                                h={21}
                            />
                        </Row>
                    </Row>
                    <Row autoWidth marginBottom3 style={{ marginRight: "18px"}}>
                        <Row marginBottom3>
                            <BaseSkeleton
                                w={95}
                                h={60}
                            />
                        </Row>
                        <Row>
                            <BaseSkeleton
                                w={48}
                                h={21}
                            />
                        </Row>
                    </Row>
                </Row>
                <Row row marginBottom={12}>
                    <Row width={"48%"} style={{ marginRight: "12px"}}>
                        <TitleDescription extraLine />
                    </Row>
                    <Row width={"48%"}>
                        <TitleDescription reverse/>
                    </Row>
                </Row>



                <Row row marginBottom={12}>
                    <Row width={"50%"} row autoWidth>
                        <Row row>
                            <Row row autoWidth>
                                <Row autoWidth>
                                    <BaseSkeleton
                                        radius={'50%'}
                                        w={24}
                                        color={"black-10"}
                                        h={24}
                                    />
                                </Row>
                                <Row autoWidth style={{ padding: "6px"}}>
                                    <BaseSkeleton
                                         w={100}
                                         h={15}
                                    />
                                </Row>
                            </Row>
                            <Row row autoWidth>
                                <Row autoWidth>
                                    <BaseSkeleton
                                        radius={'50%'}
                                        w={24}
                                        h={24}
                                    />
                                </Row>
                                <Row autoWidth style={{ padding: "6px"}}>
                                    <BaseSkeleton
                                         w={100}
                                         h={15}
                                    />
                                </Row>
                            </Row>
                        </Row>
                    </Row>
                </Row>
            </Row>
        </Row>
    )
}
RelocationSection.defaultProps = {
}

RelocationSection.propTypes = {
}

export default RelocationSection
