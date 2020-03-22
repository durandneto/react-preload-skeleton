import React from 'react'
import PropTypes from 'prop-types'
import BaseSkeleton from './../../Base'
import Color from '../../../Colors'

const InputSkeleton = props => {
    const lines = new Array(props.lines || 1).fill('');
    return (
        <>
        {
            lines.map(line => (
                <div style={{width:'98%',
                padding: '12px',
                border: `solid 1px ${Color['black-10']}`,
                borderRadius: "6px",
                margin: '12px 0'}}
                >
                    <BaseSkeleton
                        radius={'9px'}
                        w={'100%'}
                        color={props.color}
                        h={10}
                    />
                </div>
            ))
        }
        </>
    )
}
InputSkeleton.defaultProps = {
}

InputSkeleton.propTypes = {
}

export default InputSkeleton
