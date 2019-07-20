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
const scrambler = require("gps-scramble");
console.log(scrambler.init(40.758896, -73.98513).withinDistance(100, "m")); // within a 100 meters from Times Square
console.log(scrambler.init("Times Square").withinDistance(1, "km")); // somewhere in New York
```

## Geocoding

To enable geocoding support (powered by Bing Maps Geocoding API), you must get an API key.
The process of getting a key is described [here](https://docs.microsoft.com/en-us/bingmaps/getting-started/bing-maps-dev-center-help/getting-a-bing-maps-key)
