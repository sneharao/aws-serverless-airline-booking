/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFlight = /* GraphQL */ `
  mutation CreateFlight(
    $input: CreateFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    createFlight(input: $input, condition: $condition) {
      id
      departureDate
      departureAirportCode
      departureAirportName
      departureCity
      departureLocale
      arrivalDate
      arrivalAirportCode
      arrivalAirportName
      arrivalCity
      arrivalLocale
      ticketPrice
      ticketCurrency
      flightNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFlight = /* GraphQL */ `
  mutation UpdateFlight(
    $input: UpdateFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    updateFlight(input: $input, condition: $condition) {
      id
      departureDate
      departureAirportCode
      departureAirportName
      departureCity
      departureLocale
      arrivalDate
      arrivalAirportCode
      arrivalAirportName
      arrivalCity
      arrivalLocale
      ticketPrice
      ticketCurrency
      flightNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFlight = /* GraphQL */ `
  mutation DeleteFlight(
    $input: DeleteFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    deleteFlight(input: $input, condition: $condition) {
      id
      departureDate
      departureAirportCode
      departureAirportName
      departureCity
      departureLocale
      arrivalDate
      arrivalAirportCode
      arrivalAirportName
      arrivalCity
      arrivalLocale
      ticketPrice
      ticketCurrency
      flightNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
