---
title: Basic Elements
---

## App

There can be only one `App` element per Wasp project. It serves as a starting point and defines global
properties of your app. Currently, it is very simple:

```css
app todoApp {
    title: "ToDo App"
}
```

#### `title: string`
Title of your app. It will be displayed in the browser tab, next to the favicon.

## Page

## Route

## Entity

## Queries and Actions (aka Operations)

In Wasp, main interaction between client and server happens via Operations, of which two types exist: Queries and Actions.

### Query

Queries are NodeJS functions that don't modify any state. Normally they fetch certain resources, process them and return result.

To create a Wasp Query, you need a NodeJS function

```js
// file: ext/foo.js

export getAllTasks = async (args, context) => {
  return [
    { description: "Buy some eggs", isDone: true },
    { description: "Make an omelette", isDone: false }
  ]
}
```

and a `query` declaration in Wasp

```js
// file: main.wasp

query getTasks {
  fn: import { getAllTasks } from "@ext/foo.js"
}
```

NodeJS function above has to be async and will be passed query arguments as first argument and additional context as second argument.

By declaring a NodeJS function as a Wasp query, following happens:
- Wasp generates HTTP API route on the NodeJS server that calls the query function.
- Wasp generates JS function on the client that has the name under which query was declared and takes same arguments as the NodeJS query function. Internally it uses above mentioned HTTP API route to call the NodeJS query function.

On client, you can import generated query JS function as `import getTasks from '@wasp/queries/getTasks.js'`.
Then, you can either use it directly, or you can use it via special `useQuery` React hook (provided by Wasp) to make it reactive.

On server, you can just use it directly (`import { getAllTasks } from "@ext/foo.js"`).

#### useQuery
`useQuery` hook provided by Wasp is actually just a thin wrapper for `useQuery` hook from [react-query](https://github.com/tannerlinsley/react-query).

You can import it as `import { useQuery } from '@wasp/queries'`.

Wasp `useQuery` takes three args:
- `queryFn` -> client query function generated by Wasp based on query declaration, e.g. one from '@wasp/queries/getTasks.js'
- `queryFnArgs`
- `config` -> react-query `config`.

It behaves exactly the same as [useQuery from react-query](https://react-query.tanstack.com/docs/api#usequery), only it doesn't take the key, that is handled automatically instead.

Example of usage:
```js
import React from 'react'
import { useQuery } from '@wasp/queries'
import getTasks from '@wasp/queries/getTasks'

const MyComponent = (props) => {
  const { data: tasks, error } = useQuery(getTasks)
  return <div> { JSON.stringify(tasks || error) } </div>
}
```

#### Error handling
For security reasons, all errors thrown in the query NodeJS function are sent to client via HTTP API as 500 errors, with any further details removed, so that any unpredicted errors don't make it out with possibly sensitive data.

If you do want to throw an error that will pass some information to the client, you can use `HttpError` in your NodeJS query function:
```js
import HttpError from '@wasp/core/HttpError'

export getTasks = async (args, context) => {
  const statusCode = 403
  const message = 'You can\'t do this!'.
  const data = { foo: 'bar' }
  throw new HttpError(statusCode, message, data)
}
```

and then in client it will be thrown as an Error with corresponding `.message` and `.data` fields.


### Action

Actions are very similar to Queries, so similar that we will only list the differences:
1. They can modify state.
2. There is no special React hook for them (like `useQuery` for Queries).
3. They are declared in Wasp in same way as Queries, but keyword is `action`, not `query`.

More differences and action/query specific features will come in the future versions of Wasp.