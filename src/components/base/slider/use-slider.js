import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, onUnmounted, ref } from 'vue'
BScroll.use(Slide)

export default function useSlider(wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    const sliderValue = (slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true
    }))
    sliderValue.on('slideWillChange', (page) => {
        // 即将要切换的页面
        currentPageIndex.value = page.pageX
      })
  })
  onUnmounted(() => {
    slider.value.destroy()
  })
  return {
    slider,
    currentPageIndex
  }
}
