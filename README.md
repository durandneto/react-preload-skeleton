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
# animated Skeletons

![Screen Shot 2020-02-27 at 11 26 15](https://user-images.githubusercontent.com/6095547/75479558-99c26400-5954-11ea-9225-25a5fee21e92.png)
![Screen Shot 2020-02-27 at 11 26 03](https://user-images.githubusercontent.com/6095547/75479562-9af39100-5954-11ea-9a58-fd3e33f78df5.png)
