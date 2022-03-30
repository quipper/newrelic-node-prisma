# New Relic Prisma Integration

This is an unofficial library for integrating [node-newrelic](https://github.com/newrelic/node-newrelic) and [prisma](https://github.com/prisma/prisma).

Note: Installation of [newrelic](https://www.npmjs.com/package/newrelic) is required to use this plugin

## Installation

```session
$ npm install newrelic
$ npm install git+https://github.com/quipper/newrelic-node-prisma.git
```

```js
// register-newrelic.js
require('newrelic-node-prisma')
```

```session
$ # require before the app starts
$ node -r register-newrelic.js index.js
```

## TypeScript

Of course, this can be used in conjunction with TypeScript

```ts
// register-newrelic.ts
import 'newrelic-node-prisma'
```

```session
$ ts-node -r register-newrelic.ts index.ts
```

Or compile and then

```session
$ tsc
$ node -r register-newrelic.js index.js
```
