$( document ).ready(function() {
  console.log( "ready!" );



  var zipcodeObj = [
    {
      "CountryCode":"US",
      "PostalFormat":"11111 or 11111-1111",
      "PostalRegEx":"(^\\d{5}$)|(^\\d{5}-\\d{4}$)"
    },
    {
      "CountryCode":"CA",
      "PostalFormat":"X1X 1X1",
      "PostalRegEx":"^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\\d{1}[A-Za-z]{1} \\d{1}[A-Za-z]{1}\\d{1}$"
    },
    {
      "CountryCode":"AF",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"AL",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"DZ",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"AS",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"AD",
      "PostalFormat":"XX111",
      "PostalRegEx":"(^[A-Za-z]{2}\\d{3}$)"
    },
    {
      "CountryCode":"AO",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"AI",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"AQ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"AG",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"AR",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"AM",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"AW",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"AU",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"AT",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"AZ",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"BS",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BH",
      "PostalFormat":"111",
      "PostalRegEx":"^([0-9]{3})$"
    },
    {
      "CountryCode":"BD",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BB",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BY",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"BE",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BZ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BJ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BM",
      "PostalFormat":"XX 11",
      "PostalRegEx":"(^[A-Za-z]{2} \\d{2}$)"
    },
    {
      "CountryCode":"BT",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BO",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BA",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"BW",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BV",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BR",
      "PostalFormat":"11111-111",
      "PostalRegEx":"(^\\d{5}-\\d{3}$)"
    },
    {
      "CountryCode":"IO",
      "PostalFormat":"NULL",
      "PostalRegEx":"NULL"
    },
    {
      "CountryCode":"BN",
      "PostalFormat":"XX1111",
      "PostalRegEx":"(^[A-Za-z]{2}\\d{4}$)"
    },
    {
      "CountryCode":"BG",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"BF",
      "PostalFormat":"11",
      "PostalRegEx":"^([0-9]{2})$"
    },
    {
      "CountryCode":"BI",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"KH",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CV",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"KY",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CF",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TD",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CL",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CN",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"CX",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CC",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CO",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"KM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CG",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CD",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CK",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CR",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"CI",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"HR",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"CU",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CY",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"CZ",
      "PostalFormat":"111 11",
      "PostalRegEx":"(^\\d{3} \\d{2}$)"
    },
    {
      "CountryCode":"DK",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"DJ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"DM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"DO",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TP",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"EC",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"EG",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"SV",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"EE",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"FK",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"FO",
      "PostalFormat":"111",
      "PostalRegEx":"^([0-9]{3})$"
    },
    {
      "CountryCode":"FJ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"FI",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"FR",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"FX",
      "PostalFormat":"NULL",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"GF",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PF",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TF",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GA",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GE",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"DE",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"GH",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GI",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GR",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"GL",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GD",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GP",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GU",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GT",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GN",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GW",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GY",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"HT",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"HM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"VA",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"HN",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"HK",
      "PostalFormat":"1",
      "PostalRegEx":"^([0-9]{1})$"
    },
    {
      "CountryCode":"HU",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"IS",
      "PostalFormat":"111",
      "PostalRegEx":"^([0-9]{3})$"
    },
    {
      "CountryCode":"IN",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"ID",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"IR",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"IQ",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"IE",
      "PostalFormat":"1",
      "PostalRegEx":"^([0-9]{1})$"
    },
    {
      "CountryCode":"IL",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"IT",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"JM",
      "PostalFormat":"11",
      "PostalRegEx":"^([0-9]{2})$"
    },
    {
      "CountryCode":"JP",
      "PostalFormat":"111-1111",
      "PostalRegEx":"(^\\d{3}-\\d{4}$)"
    },
    {
      "CountryCode":"JO",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"KZ",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"KE",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"KI",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"KP",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"KR",
      "PostalFormat":"111-111",
      "PostalRegEx":"(^\\d{3}-\\d{3}$)"
    },
    {
      "CountryCode":"KW",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"KG",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"LA",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"LV",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"LB",
      "PostalFormat":"1111 1111",
      "PostalRegEx":"(^\\d{4} \\d{4}$)"
    },
    {
      "CountryCode":"LS",
      "PostalFormat":"111",
      "PostalRegEx":"^([0-9]{3})$"
    },
    {
      "CountryCode":"LR",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"LY",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"LI",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"LT",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"LU",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MO",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MK",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MG",
      "PostalFormat":"111",
      "PostalRegEx":"^([0-9]{3})$"
    },
    {
      "CountryCode":"MW",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MY",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"MV",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"ML",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MT",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MH",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MQ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MR",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MU",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"YT",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MX",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"FM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MD",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MC",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"MN",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MS",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MA",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MZ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NA",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NR",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NP",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"NL",
      "PostalFormat":"1111 XX",
      "PostalRegEx":"(^\\d{4} [A-Za-z]{2}$)"
    },
    {
      "CountryCode":"AN",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NC",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NZ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NI",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NE",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NG",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NU",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NF",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"MP",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"NO",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"OM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PK",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"PW",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PS",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PA",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PG",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PY",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PE",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PH",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PN",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PL",
      "PostalFormat":"11-111",
      "PostalRegEx":"(^\\d{2}-\\d{3}$)"
    },
    {
      "CountryCode":"PT",
      "PostalFormat":"1111-111",
      "PostalRegEx":"(^\\d{4}-\\d{3}$)"
    },
    {
      "CountryCode":"PR",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"QA",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"RE",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"RO",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"RU",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"RW",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"KN",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"LC",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"VC",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"WS",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"ST",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SA",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"SN",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"RS",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"SC",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SL",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SG",
      "PostalFormat":"111111",
      "PostalRegEx":"^([0-9]{6})$"
    },
    {
      "CountryCode":"SK",
      "PostalFormat":"111 11",
      "PostalRegEx":"(^\\d{3} \\d{2}$)"
    },
    {
      "CountryCode":"SI",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SB",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SO",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"ZA",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GS",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"ES",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"LK",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SH",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"PM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SD",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SR",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SJ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SZ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SE",
      "PostalFormat":"111 11",
      "PostalRegEx":"(^\\d{3} \\d{2}$)"
    },
    {
      "CountryCode":"CH",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"SY",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TW",
      "PostalFormat":"111",
      "PostalRegEx":"^([0-9]{3})$"
    },
    {
      "CountryCode":"TW",
      "PostalFormat":"111",
      "PostalRegEx":"^([0-9]{3})$"
    },
    {
      "CountryCode":"TJ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TZ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TH",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"TG",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TK",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TO",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TT",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TN",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TR",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"TM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TC",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"TV",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"UG",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"UA",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"AE",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"GB",
      "PostalFormat":"XX1X 1XX or XX1 1XX",
      "PostalRegEx":"[a-zA-Z]{1,2}[0-9R][0-9a-zA-Z]? [0-9][abd-hjnp-uw-zABD-HJLNP-UW-Z]{2}"
    },
    {
      "CountryCode":"UM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"UY",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"UZ",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"VU",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"VE",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"VN",
      "PostalFormat":"11111",
      "PostalRegEx":"^([0-9]{5})$"
    },
    {
      "CountryCode":"VG",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"VI",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"WF",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"EH",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"YE",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"ZM",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    },
    {
      "CountryCode":"ZW",
      "PostalFormat":"1111",
      "PostalRegEx":"^([0-9]{4})$"
    }
  ];


  // on page load display message
  var country_code = $("select[name$='country']").val();

  zipcodeObj.map(function (country) {
    if (country.CountryCode == country_code) {
      $("input[id$='postal_code']").after("<span class='zip_message'> Postal Code Format: " + country.PostalFormat + "</span>");
    } 
  });

  //  add event listener and on change remove message and add new message
  $("select[name$='country']").change(function() {
    $(".zip_message").remove();
    var country_code = $(this).val();

    zipcodeObj.map(function (country) {
      if (country.CountryCode == country_code) {
        $("input[id$='postal_code']").after("<span class='zip_message'> Postal Code Format: " + country.PostalFormat + "</span>");
      } 
    });
  });
}); 