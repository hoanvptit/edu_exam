var Regex = require("regex");

export const validEmail = new Regex(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
 export const validPassword = new Regex('^([a-zA-Z]*[0-9])');
 