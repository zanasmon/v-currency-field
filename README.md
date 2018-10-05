# Currency Mask for Vuetify

## Features

- All features from v-money as v-text-field of vuetify.

## Usage

### Globally

```js
import Vue from 'vue'
import currency from 'v-currency-field'

Vue.use(currency)
```

### Example

```html
<template>
  <div>
    <v-currency-field label="Value" v-bind="currency_config" :error-messages="errors.price" v-model="price"></v-currency-field>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        errors: {},
        price: 123.45,
        currency_config: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' #',
          precision: 2,
          masked: false,
          allowBlank: false,
          min: Number.MIN_SAFE_INTEGER,
          max: Number.MAX_SAFE_INTEGER
        }
      }
    }
  }
</script>
```

## Properties

All v-money properties

| property   | Required | Type    | Default                 | Description                                             |
|------------|----------|---------|-------------------------|---------------------------------------------------------|
| precision  | **true** | Number  | 2                       | How many decimal places                                 |
| decimal    | false    | String  | "."                     | Decimal separator                                       |
| thousands  | false    | String  | ","                     | Thousands separator                                     |
| prefix     | false    | String  | ""                      | Currency symbol followed by a Space, like "R$ "         |
| suffix     | false    | String  | ""                      | Percentage for example: " %"                            |
| masked     | false    | Boolean | false                   | If the component output should include the mask or not  |
| allowBlank | false    | Boolean | false                   | If the field can start blank and be cleared out by user |
| min        | false    | Number  | Number.MIN_SAFE_INTEGER | The min value allowed                                   |
| max        | false    | Number  | Number.MAX_SAFE_INTEGER | The max value allowed                                   |

And all vuetify properties

| property              | Required | Type      | 
|-----------------------|----------|-----------|
| appendOuterIcon       | false    | String    | 
| appendOuterIconCb     | false    | Function  | 
| autofocus             | false    | Boolean   | 
| box                   | false    | Boolean   | 
| browserAutocomplete   | false    | String    | 
| clearable             | false    | Boolean   | 
| clearIcon             | false    | String    | 
| clearIconCb           | false    | Number    | 
| color                 | false    | String    | 
| flat                  | false    | Boolean   | 
| fullWidth             | false    | Boolean   | 
| label                 | false    | String    | 
| outline               | false    | Boolean   | 
| placeholder           | false    | String    | 
| prependInnerIcon      | false    | String    | 
| prependInnerIconCb    | false    | Function  | 
| reverse               | false    | Boolean   | 
| singleLine            | false    | Boolean   | 
| solo                  | false    | Boolean   | 
| soloInverted          | false    | Boolean   | 


### References

- https://github.com/64robots/v-money
- https://vuetifyjs.com/pt-BR/components/text-fields
