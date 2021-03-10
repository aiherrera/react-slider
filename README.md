# Slider for React

A simple and easy to use react slider

## Installation

Requires **React 16 or later**

`npm i --save @aiherrera/react-slider`

`# or`

`yarn add @aiherrera/react-slider`

## Demo

You can check all the configurations in this [Ai-CoderLab](https://coderlab.aiherrera.com/?path=/story/playground-react-components--slider)

## Usage

`{ Slider }`

```
// ES5 syntax
const Slider = require('@aiherrera/react-slider')

// ES6 syntax
import Slider from '@aiherrera/react-slider'

```

### Full example

```typescript
import React from 'react'

import Slider from '@aiherrera/react-slider'

const App = () => {
  const manualColor = '#7474e7'
  const vertical = false
  const timing = 3000
  const images = []
  const showText = false
  const paragraph =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut eveniet ad exercitationem, ducimus mollitia alias debitis magnam atque animi illo officiis eum numquam iure suscipit, iste nisi. Excepturi, rem!'
  const textColor = '#F1EAEA'
  const backgroundColor = '#4949D8'

  return (
    <>
      <Slider
        color={manualColor}
        textColor={textColor}
        backgroundColor={backgroundColor}
        timing={timing}
        showText={showText}
        paragraph={paragraph}
        vertical={vertical}
        images={images}
      />
    </>
  )
}
```

## Props

All these props are passed as defaults and can be overriden any time.

| Name            | Type    | Unit | Description                                        | Default |
| --------------- | ------- | ---- | -------------------------------------------------- | ------- |
| color           | string  | N/A  | Manual navigation color                            | #7474e7 |
| textColor       | string  | N/A  | Paragraph color                                    | #F1EAEA |
| backgroundColor | string  | N/A  | Paragraph background color                         | #4949D8 |
| timing          | number  | N/A  | Time in ms of slides transition                    | 3000ms  |
| showText        | boolean | N/A  | Wether or not to show the paragraph                | false   |
| paragraph       | string  | N/A  | The text of the paragraph                          | ''      |
| vertical        | boolean | N/A  | Switches the manual navigation vertical/horizontal | false   |
| images          | array   | N/A  | A collection of images for the slides              | []      |
