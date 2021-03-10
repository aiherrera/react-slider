import React, { createRef, FC, useEffect } from 'react'
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
  const containerRef = createRef<HTMLDivElement>()

  let interval
  let counter = 0
  let timingLastValue = 3000

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

  const clearTiming = () => {
    counter = 0
    timingLastValue = 3000
    clearInterval(interval)
  }

  useEffect(() => {
    containerRef.current.addEventListener('mouseenter', () => {
      clearTiming()
    })

    containerRef.current.addEventListener('mouseleave', () => {
      clearTiming()
      Timing()
    })

    if (length > 0) {
      Timing()
    }

    return () => {
      clearTiming()
      containerRef.current?.removeEventListener('mouseenter', () => {})
      containerRef.current?.removeEventListener('mouseout', () => {})
    }
  }, [images, timing])

  return (
    <>
      <Container ref={containerRef}>
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
