# php-config-loader
php config loader for webpack

## Usage

**config.php**

```php
<?php

return [
    [
        'value' => 'foo',
        'label' => 'Foo label'
    ],
    [
        'value' => 'bar',
        'label' => 'Bar label'
    ]
];

```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.php?$/,
        use: [
          {
            loader: 'php-config-loader'
          },
        ]
      },
      ...
    ],
  },
  ...
};
```
