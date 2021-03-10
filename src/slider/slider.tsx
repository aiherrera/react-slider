import React, { FC, useEffect } from 'react'
import { SliderProps } from './slider.types'
import {
  Container,
  SliderContent,
  selectorGenerator,
  Slides,
  Text,
  slideGenerator,
  Navigation
} from './slider.css'

export const importImages = (source) => source.keys().map(source)

export const Slider: FC<SliderProps> = ({
  color,
  vertical,
  images,
  timing,
  showText,
  paragraph,
  textColor,
  backgroundColor
}) => {
  const length = images.length

  let interval
  let counter = 0
  let timingLastValue = 0

  const Timing = () => {
    interval = setInterval(() => {
      const selector = document.getElementById(
        'selector-' + counter
      ) as HTMLInputElement

      selector.checked = true
      counter++

      if (counter >= length) {
        counter = 0
      }

      if (timing === undefined || timing === 0) {
        timing = 3000
        timingLastValue = timing
      } else if (timing !== timingLastValue) {
        timingLastValue = timing
        clearInterval(interval)
        Timing()
      }
    }, timing)
  }

  useEffect(() => {
    if (length > 0) {
      Timing()
    }

    return () => clearInterval(interval)
  }, [images, timing])

  return (
    <>
      <Container>
        <SliderContent>
          <Slides>
            {selectorGenerator(images)}

            {slideGenerator(images)}

            {showText && images.length > 0 ? (
              <Text textColor={textColor} backgroundColor={backgroundColor}>
                {paragraph}
              </Text>
            ) : null}
          </Slides>

          <Navigation color={color} vertical={vertical}>
            {images.map((_, index) => (
              <label key={index} htmlFor={'selector-' + index}></label>
            ))}
          </Navigation>

          <Navigation>
            {images.map((_, index) => (
              <div key={index}></div>
            ))}
          </Navigation>
        </SliderContent>
      </Container>
    </>
  )
}
