import { createSignal } from 'solid-js'
import { client } from '~/lib/trpc'
import './Counter.css'

export default function Counter() {
	const [count, setCount] = createSignal(0)
	return (
		<button
			class="increment"
			onClick={() => {
				setCount(count() + 1)
				client.ping.query()
			}}
		>
			Clicks: {count()}
		</button>
	)
}
