/**
 * Returns the round version of a given number based on a round value
 * @param   {number} n : number to round
 * @param   {number} r : round value
 * @returns {number}   : rounded number
 */
const round = (n: number, r: number): number => Math.round(n * r) /r

/**
 * Returns the percentage based on a given numerator and total
 * @param   {number} n : numerator
 * @param   {number} t : total
 * @returns {number}   : percentage
 */
const percent = (n: number, t: number): number => n / t * 100 || 0

/**
 * Apply a given percentage on a given total
 * @param   {number} t : total on which apply the percentage
 * @param   {number} p : percentage to apply
 * @returns {number}   : number
 */
const appPercent = (t: number, p: number) : number => t * p * 0.01

/**
 * Returns the circumference of a circle based on its radius
 * @param   {number} r : radius
 * @returns {number}   : circumference
 */
const circ = (r: number) : number => 2 * Math.PI * r

/**
 * Returns full circle rotation based on a percentage
 * @param   {number} per : percentage
 * @param   {number} max : max rotation (e.g. 360, 180, etc.)
 * @returns {number}     : rotation
 */
const perRotation = (per: number, max: number = 360 | 180): number => per * 0.01 * max

/**
 * Returns a circle stroke offset based on its perimeter and a percentage
 * @param   {number} peri : circle perimeter
 * @param   {number} perc : percent to use
 * @returns {number}      : stroke offset
 */
const strokeOffset = (peri: number, perc: number): number => peri - peri * perc * 0.01

/**
 * Returns the radians correspunding to the given angle
 * @param   {number} a : angle 
 * @returns {number}   : radians
 */
const angRad = (a: number) : number => a * (Math.PI / 180)

/**
 * Returns cartesian coordinates based on a radius, an angle and offset coordinates
 * Cartesian coordinates can be used to place element around a circle
 * @param   {number}   r      : circle radius
 * @param   {number}   a      : angle
 * @param   {number[]} offset : offset coordinates
 * @returns {number[]}        : coordinates
 */
const cartesXY = (r: number, a: number, offset: number[]) : number[] => [ r * Math.cos(angRad(a)) + offset[0], r * Math.sin(angRad(a)) + offset[1] ]

/**
 * Keeps a given value inside the given interval based on a min and max value.
 * @param   {number}   n : number to limit
 * @param   {number[]} i : interval
 * @returns {number}     : limited value
 */
const limit = (n: number, i: number[]) : number => Math.min(Math.max(n, i[0]), i[1])

/**
 * Checks whether the given number is inside the given interval
 * @param   {number}   n   : number to check
 * @param   {number[]} i   : interval
 * @param   {boolean}  inc : should the interval be inclusive or not
 * @returns {boolean}      : whether the number is inside the interval or not
 */
const between = (n: number, i: number[], inc: boolean = false): boolean => {
  const [min, max] = i
  if (max < min)
    throw new Error(`The given interval is invalid! Min value (${min}) > Max value (${max}) !`)

  return inc ? (n >= min && n <= max) : (n > min && n < max)
}

/**
 * Generates a random number between min and max value
 * @param   {number} min : min value
 * @param   {number} max : max value
 * @returns {number}     : random number
 */
const randomInt = (min: number, max: number) : number => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)

/**
 * Returns the angle between x axis and a point based on its coordinates
 * @param   {number[]} origin : origin coordinates
 * @param   {number[]} target : target coordinates
 * @returns {number}          : resulting theta angle
 */
 const arctangent = (origin: number[], target: number[]) => {
  const [ox, oy] = origin,
        [tx, ty] = target;
  const dx = ox - tx,
        dy = oy - ty;

  let theta = Math.atan2(-dy, -dx);

  theta *= 180 / Math.PI;
  if (theta < 0) theta += 360;

  return theta;
}

export {
  round,
  percent,
  appPercent,
  circ,
  perRotation,
  strokeOffset,
  angRad,
  cartesXY,
  limit,
  between,
  randomInt,
  arctangent
}