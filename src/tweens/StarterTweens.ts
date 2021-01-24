import { TimelineLite, Power2 } from 'gsap'

export const StarterTweens = (selector: HTMLElement | any) => {
  const starterTween = new TimelineLite()

  starterTween
    .to('.cover-logo', 1, {
      opacity: 1,
      ease: Power2.easeInOut,
      delay: 0.2
    })
    .to(selector, 1.3, {
      y: '-100%',
      ease: Power2.easeInOut,
      delay: 0.5
    })
    .to(
      '.cover-logo',
      0.55,
      {
        opacity: 0,
        ease: Power2.easeInOut
      },
      '-=1.2'
    )
    .to(
      '.page',
      1.2,
      {
        opacity: 1,
        ease: Power2.easeInOut
      },
      '-=0.9'
    )
    .to(selector, 0, {
      opacity: 0,
      display: 'none',
      delay: 0.5
    })
}
