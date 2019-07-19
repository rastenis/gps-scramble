
# gps-scramble

A tool for controlled randomization of GPS coordinates.


## Features

- Generate similar coordinates within [Distance, Street, City, Country]
- Location based coordinate generation


## Install

```console
$ npm install gps-scramble
```


## Usage

```js
const scrambler = require('gps-scramble');
console.log(scrambler.init(40.758896, -73.985130).withinDistance(100,"m")); // within a 100 meters from Times Square
console.log(scrambler.init("Times Square").withinCity()); // somewhere in New York
```