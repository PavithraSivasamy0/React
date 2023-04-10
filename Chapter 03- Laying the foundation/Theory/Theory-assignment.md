# Chapter 03 - Laying the Foundation

## 1. What is JSX? What are its advantages?

- It is a html like syntax or xml like syntax

## 2. Why JSX is not a HTML inside javascript?

- core React \* :
  `const heading = React.creatElement('h1', {}, "Hi I'm core react")`
- using jsx \* :
  `const heading = <h1>Hi I'm from jsx</h1>`
  - This is not a valid JavaScript, so browsers don't understand, (it is a jsx- so browser won't understand)
- javascript doesn't comes with jsx inside it.
- js is the language or code that browser will get understand
- js engine understands ecma scripts
- When we write code in jsx, that jsx code needs to get transpiled into js which browsers can understand.
- transpiling is taken care by parcel with the help of babel package.

JSX code ===Babel===> React.createElement() object ===ReactDOM===> HTMLElement(gets rendered into browser)

## 3.What are the advantages of babel?

- Bable converts JSX code into React.createElement() ReactElement object
- It also helps in converting the newer version of code to older versions (for outdated browser understandings)

## 4.Role of type attribute in script tag? What options can I use there?

    <script type="module"> </script>

    module: tells the browser that the script is of module type and it may contain imports an exports insdie it.

## 5. What is functional Component?

- It is just a normal js function that returns the jsx basically a reactElement

## 6. What is component composition?

- Composing / calling one component into another component is called component composition (composing two components inside one)

## 7. {TitleComponent} vs `<TitleComponent/> vs <TitleComponent></TitleComponent> `in JSX.

- {TitleComponent} - here TitleComponent is a js expression or a variable
- - <TitleComponent/> vs <TitleComponent></TitleComponent> \* - both are equivalent only difference is <TitleComponent></TitleComponent> is used when we have child component.
