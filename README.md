# vue-inline-editable
Edit in place for VueJS

## Demo
https://mihnsen.github.io/vue-inline-editable/


## Installation
```
npm install vue-inline-editable
or
yarn add vue-inline-editable
```

## Usage
```
import VueInlineEditable from 'vue-inline-editable';

// Use it
VueInlineEditable(
  type="text",
  v-model="name",
)

// Or list
VueInlineEditable(
  type="textarea",
  label="Edit me",
  resource="user",
  field="username",
  pk="1",
  placement="popup"
  v-model="name",
)

// CSS
@import '~vue-inline-editable/src/assets/scss/index'
```

#### Props
| Props          | Required    | Default     | Description                                |
| -------------- | ----------- | ----------- | ------------------------------------------ |
| v-model        | Yes         | Null        | Vue Model                                  |
| type           | Yes         | text        | Field type                                 |
| label          | No          | Null        | Form label                                 |
| resource       | No          | Null        | Resource in data model, ex: user_table     |
| field          | No          | Null        | Field in data model, ex: username          |
| pk             | No          | Null        | Primary key in model, ex: user has id = 1  |
| placement      | No          | 'inline'    | Show editable as inline or popover         |

## Development
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
