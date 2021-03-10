import React from 'react'
import {
  withKnobs,
  color,
  boolean,
  text,
  files,
  number
} from '@storybook/addon-knobs'
import { Slider as SliderComponent } from './slider'

export default {
  title: 'Playground/React Components',
  decorators: [withKnobs],
  component: SliderComponent
}

export const Slider = () => {
  const manualColor = color('Color', '#7474e7')
  const vertical = boolean('Vertical', false)
  const timing = number('Timing', 3000)
  const images = files('Images', '.png, .jpe, .jpeg, .svg', [])
  const showText = boolean('Show text', false)
  const paragraph = text(
    'Paragraph',
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut eveniet ad exercitationem, ducimus mollitia alias debitis magnam atque animi illo officiis eum numquam iure suscipit, iste nisi. Excepturi, rem!`
  )
  const textColor = color('Text color', '#F1EAEA')
  const backgroundColor = color('Background color', '#4949D8')

  return (
    <>
      <SliderComponent
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
