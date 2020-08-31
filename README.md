# react-tinacms-prompts

This package allows one to add prompts to pop to when the cms is enabled (edit mode) amd a condition is met.

### Getting started

> NOTE: this is a plugin for tinacms and assumes that you are familiar with tinacms. If you are not [check it out](https://tinacms.org)

### Install the package

```bash
yarn add react-tinacms-prompts
```

### Wrap your app in a provider

```jsx
<TinaProvider cms={this.cms}>
  <PromptProvider>
    <App {...props} />
  </PromptProvider>
</TinaProvider>
```

### Prompts plugin interface

```ts
export interface PromptPlugin<ComponentProps = Record<string, any>> {
  __type: 'prompt'
  name: string
  Component(props: ComponentProps): React.ReactElement
  condition: boolean
  props?: ComponentProps
}
```

| key       | usage                                                           |
| --------- | --------------------------------------------------------------- |
| \_\_type  | always `prompt`                                                 |
| name      | the name or id you want to give to your prompt                  |
| Component | The react component that is rendered when the condition is true |
| condition | if this condition is true the Component will be rendered        |
| props     | the props that are passed to the component                      |

### Registering the plugin in your app

```ts
import { useCMS } from 'tinacms'

const cms = useCMS()
const isNewUser = ...

cms.plugins.add<PromptPlugin<MyProps>>({
  __type: 'prompt',
  Component: MyComponent,
  name: 'hello-prompt',
  condition: isNewUser,
  props: {},
})

```

Now when `isNewUser` is `true` and the cms is enabled a `MyComponent` will be registered

> Note: this is only one way to register a plugin [check out the tinacms docs for the full list](https://tinacms.org/docs/plugins)
