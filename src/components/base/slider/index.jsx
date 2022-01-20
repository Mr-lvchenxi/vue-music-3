import { defineComponent, ref } from 'vue'
import useSlider from './use-slider'
import './index.scss'

export default defineComponent({
  name: 'slider',
  props: {
    sliders: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const rootRef = ref(null)
    const { currentPageIndex } = useSlider(rootRef)

    return () => (
      <div class="slider" ref={(ref) => { rootRef.value = ref }}>
        <div class="slider-group">
          {props.sliders.map((val) => (
            <div class="slider-page" key={val.id}>
              <a href={val.link}>
                <img src={val.pic} />
              </a>
            </div>
          ))}
        </div>
        <div class="dots-wrapper">
          {props.sliders.map((val, index) => (
            <span
              class={['dot', currentPageIndex.value === index ? 'active' : '']}
              key={val.id}
            ></span>
          ))}
        </div>
      </div>
    )
  }
})
