# Usage

```javascript
import React from 'react'

import { AvatarSkeleton, TextSkeleton, DescriptionSkeleton } from 'react-preload-skeleton'

const MyComponent = props => {
    return (
      <div style={{padding: '3%'}}>
        <AvatarSkeleton color={'blue-light'} />
        <br />
        <TextSkeleton />
        <br />
        <DescriptionSkeleton color={'green-light'} />
      </div>
    )
}
MyComponent.defaultProps = {
}

MyComponent.propTypes = {
}

export default MyComponent

```
