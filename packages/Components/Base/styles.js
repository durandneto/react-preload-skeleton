import styled, { keyframes } from 'styled-components'
import Color from '../../Colors'

const baseOffset = 24

const shineAvatarFixed = w => keyframes`
    0%   {
        background-position: -${w}px;
    }
    40% { background-position: ${w}px;}
    100% { background-position: ${w + 100}px;}
`;

const shineAvatar100 = keyframes`
    0%   {
        background-position: -100px;
    }
    40% { background-position: 200px}
    100% { background-position: 1000px}
`;

const shineAvatar = w => {
    return w && w.toString().indexOf('%') !== -1 ? shineAvatar100 : shineAvatarFixed(w)
};

export default styled.div`
    width: ${props => props.w ? props.w : baseOffset}px;
    height: ${props => props.h ? props.h : baseOffset}px;
    background-color: #ccc;
    border-radius:  ${props => props.radius ? props.radius : `0%`};
    background-image: linear-gradient(90deg,
        ${props => Color[props.color] ? Color[props.color] : Color['gray-10']} 0px,
        ${props => Color[props.shineColor] ? Color[props.shineColor] : Color["gray-20"]} 40px,
        ${props => Color[props.color] ? Color[props.color] : Color['gray-10']}  80px);
    animation: ${props => props.w ? shineAvatar(props.w) : shineAvatar(baseOffset)} 6s  infinite linear;
`
