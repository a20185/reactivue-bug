import React from 'React'
import { useSetup, ref, computed, onUnmounted } from 'reactivue'


export default function MyCounter(Props) {
  const state = useSetup(
    (props) => { // props is a reactive object in Vue
      const counter = ref(props.value)
      const doubled = computed(() => counter.value * 2)
      const inc = () => {
        counter.value += 1
        console.log('Counter::', counter.value, doubled.value)
      }

      onUnmounted(() => console.log('Goodbye World'))
      window.logger = console.log(counter, doubled, inc)
      return { counter, doubled, inc }
    },
    Props // pass React props to it
  )

  // state is a plain object just like React state
  const { inc } = state
  console.log(state)

  return (
    <div>
      <div>{state.counter} x 2 = {state.doubled}</div>
      <button onClick={inc}>Increase</button>
    </div>
  )
}