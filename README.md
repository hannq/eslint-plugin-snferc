# eslint-plugin-snferc

snferc

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-snferc`:

```
$ npm install eslint-plugin-snferc --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-snferc` globally.

## Usage

Add `snferc` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "snferc"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "snferc/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





