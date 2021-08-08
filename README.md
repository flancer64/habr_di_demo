# habr_di_demo

Demo to use Dependency Injection with functions.

https://habr.com/ru/post/571598/comments/#comment_23348096

# Install & run

```shell
$ npm install
...
$ npm start

Alex Gusev (private)

```

# Factories and functions

There are 2 kinds of export in es6-module:

* **factories**: load dependencies then create function as result of factory run;
* **functions**: perform some useful activity with input data;

We use factories to chain functions.

## Factory

```javascript
export function Factory(spec) {
    const dep1 = spec['Vnd_Prj_Mod#export1'];
    const dep2 = spec['Vnd_Prj_Mod#export2'];

    return function (data) {
        return dep1(dep2(data));
    }
}
```

## Function

```javascript
export function Fn(data) {
    // do something with data
}
```
