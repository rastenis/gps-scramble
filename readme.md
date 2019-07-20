# gps-scramble

A tool for controlled randomization of GPS coordinates.

## Features

- Generate similar coordinates within [Distance, Street, City, Country]
- Location name based coordinate generation (geocoding)

## Install

```console
$ npm install gps-scramble
```

## Usage

```js
const { Scrambler } = require("gps-scramble");
let scrambler = new Scrambler([40.758896, -73.98513]);
console.log(scrambler.within(100, "m")); // randomized location within 100 meters from given coordinates.
console.log(scrambler.near()); // randomized location near given coordinates.
```

## Advanced usage (Geocoding)

```js
const { ScramblerAsync } = require("gps-scramble");
let scrambler = new ScramblerAsync("Times Square");

let location = await scrambler.within(100, "m");
console.log(location.x, location.y); // randomized location within 100 meters from Times Square

location = await scrambler.near();
console.log(location.x, location.y); // randomized location near Times Square
```

## Geocoding support

To enable geocoding support (powered by Bing Maps Geocoding API), you must get an API key.
The process of getting a key is described [here](https://docs.microsoft.com/en-us/bingmaps/getting-started/bing-maps-dev-center-help/getting-a-bing-maps-key)

The key must be loaded as an enviromental variable named `BING_API_KEY`.

## Units

Supported units are: "mm" - milimeters, "cm" - centimeters, "m" - meters (default), "dm" - decimeters, "km" - kilometers.

## API

All gps-scrambler methods return Location objects, which contain coordinates.

They can be accessed like this:

```js
const { Scrambler } = require("gps-scramble");
let scrambler = new Scrambler([40.758896, -73.98513]);
let location = scrambler.near();

location.x; // X coordinate
location.y; // Y coordinate
location[0]; // X coordinate alternative
location[1]; // Y coordinate alternative
```

The same method for access works with scramblers themselves. Their initial states can be accessed like so:

```js
const { Scrambler } = require("gps-scramble");
let scrambler = new Scrambler([40.758896, -73.98513]);

scrambler.x; // initial X coordinate
scrambler.y; // initial Y coordinate
// ...
```
