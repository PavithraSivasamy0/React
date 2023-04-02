# Chapter 1 Theory

### 1. What is Emmet?

Emmet is a kind of toolkit to developers which allows us to type shortcuts which are then converted into full piece of coding.

### 2. Difference between library and framework?

- _Framework_ strongly suggest how our application should be structured
- _library_ is a collectiopn of pakcges that allows us to perform specific operations, it contains n number of methods that we developers can call while writing a code.
- Major difference between them is complexity.

### 3. What is CDN? Why do we need to use it?

It's a content delivery network, which is basically a network of servers that distributes content from _origin_ server to throughout the world. The main advantage of using cdn is that delivers content thorugh the netwrok of servers in efficient and secured way.

### 4. Whay is React known as react?

It is called as react, because of its ability to `react to the changes in data`. React is a `javascript UI library` developed by facebook devlopers.

### 5. what is cross origin in the script tag?

cors is a mehcanism which uses additional http headers to tell the browser that a particular web app can make a call with aother web ap or not. The main purpose is to share resources from one domain to another domain. The cross origin attribute is used to check cors request that checks whether it is safe to share resources from one domain to another domain.

### 6. what is the difference between react and reactdom?

React and ReactDOM both are javascript library, ReactDOM allows react to interact with the DOM.

### 7. what is the difference between development.js and production.js fies via CDN?

prouction versions are much optimised and minimised and also 3-5 x times faster than development version.

### 8. what is the difference between async and defer attributes in js?

Both are booleen attributes which is used along with script tags which is helpful in loading the external scripts to our webpage efficiently.

`When a webpage starts loading there are two major things will happen`

- HTML Parsing
- loading of scripts (fetching the script from network and executing it on browser)

** without use of the aync and defer **

- While loading a web page when a browser encounters the script tag, then html parsing will be stopped or paused (blocks the HTML DOM construction process while fetching).
- After that it fetches the script from network and executes the scripts
- Then the html parsing will be resumed.

** with async attribute **

- The script is downloaded in parallel, as soon as the script is fetched, it pauses the html parsing (blocks the HTML DOM construction process while executing).
- And executes the scripts
- Then html parsing will be resumed

** with defer attribute **

- The script is downloaded in parallel and continues to parse while fetching
- Once the html parsing (DOM Construction is done) is completed it startes executing the script.
- It maintains the order of execution.
