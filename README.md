# svelte-transition-extras

A set of [Svelte](https://github.com/sveltejs/svelte) transition effects that wrap [the built-in transition functions](https://svelte.dev/docs#run-time-svelte-transition) (`fade`, `slide`, etc.), allowing for a _bit_ more control over their execution.

## Installing

```bash
npm install svelte-transition-extras --save
```

Or, if you're using Yarn:

```bash
yarn add svelte-transition-extras
```

## Summary

This library is comprised of two sub-modules:

| Submodule |                                                                                         |
| --------- | --------------------------------------------------------------------------------------- |
| if        | Runs a transition only if the supplied `condition` property is true                     |
| once      | Runs a transition only once in the app's lifetime, keyed off the supplied `id` property |

As an example, for conditional transitions:

```svelte
<script>
  import { fade } from 'svelte-transition-extras/if'

  export let transitionHeader = true
</script>

<!-- Fade the H1 element in if the component's `transitionHeader` prop is true;
otherwise perform no transition. -->

<h1 in:fade={{ condition: transitionHeader }}>Hello!</h1>
```

And for a transition that will only run once during the application's lifetime:

```svelte
<script>
  import { fade } from 'svelte-transition-extras/once'

  // In order to track elements, an `id` property must be supplied as an
  // argument to the transition. When using TypeScript, you'll receive
  // an error if it's not supplied.

  // The identifier could just as easily be randomnly-generated (a
  // v4 UUID should work well enough in most cases)

  const h1Id = 'this-component-h1-id'
</script>

<h1 in:fade={{ id: h1Id }}>Hello!</h1>
```

## More details

For more information on the Svelte transition this library wraps, see [Svelte's documentation](https://svelte.dev/docs#run-time-svelte-transition).

## Aliases

For convenience -- and to help prevent overlap with Svelte's built-ins -- all the included transitions are also available as aliases in the core `svelte-transition-extras` package:

| if      | once      |
| ------- | --------- |
| blurIf  | blurOnce  |
| drawIf  | drawOnce  |
| fadeIf  | fadeOnce  |
| flyIf   | flyOnce   |
| scaleIf | scaleOnce |
| slideIf | slideOnce |

## TODO

- `crossfade`!

## License

[MIT](LICENSE.md)
