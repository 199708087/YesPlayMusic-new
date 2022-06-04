import Icon from './Icon'
import { cx, css, keyframes } from '@emotion/css'

const move = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
}
`

const DailyTracksCard = () => {
  return (
    <div className='relative h-[198px] cursor-pointer overflow-hidden rounded-2xl'>
      {/*  Cover  */}
      <img
        className={cx(
          'absolute top-0 left-0 w-full will-change-transform',
          css`
            animation: ${move} 38s infinite;
            animation-direction: alternate;
          `
        )}
        src='https://p2.music.126.net/QxJA2mr4hhb9DZyucIOIQw==/109951165422200291.jpg?param=1024y1024'
      />

      {/* 每日推荐 */}
      <div className='absolute flex h-full w-1/2 items-center bg-gradient-to-r from-[#0000004d] to-transparent pl-8'>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 text-[64px] font-semibold leading-[64px] text-white opacity-[96]'>
          {Array.from('每日推荐').map(word => (
            <div key={word}>{word}</div>
          ))}
        </div>
      </div>

      {/* Play button */}
      <button className='btn-pressed-animation absolute right-6 bottom-6 grid h-11 w-11 cursor-default place-content-center rounded-full border border-white border-opacity-[.08] bg-white bg-opacity-[.14] text-white backdrop-blur backdrop-filter transition-all hover:bg-opacity-[.44]'>
        <Icon name='play-fill' className='ml-0.5 h-6 w-6' />
      </button>
    </div>
  )
}

export default DailyTracksCard
