# Usage

```javascript
import React from 'react'

import { AvatarSkeleton, TextSkeleton, DescriptionSkeleton } from 'react-preload-skeleton'

const MyComponent = props => {
    return (
      <>
        <AvatarSkeleton color={'blue-light'} />
        <TextSkeleton color={'blue-light'} />
        <DescriptionSkeleton color={'blue-light'} />
      </>
    )
}
MyComponent.defaultProps = {
}

MyComponent.propTypes = {
}

export default MyComponent

```
