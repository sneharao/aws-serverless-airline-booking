/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFlight = /* GraphQL */ `
  query GetFlight($id: ID!) {
    getFlight(id: $id) {
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
      seatAllocation
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFlights = /* GraphQL */ `
  query ListFlights(
    $filter: ModelFlightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        seatAllocation
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
      id
      status
      inboundFlight {
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
        seatAllocation
        createdAt
        updatedAt
        __typename
      }
      outboundFlight {
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
        seatAllocation
        createdAt
        updatedAt
        __typename
      }
      paymentToken
      checkedIn
      customer
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        paymentToken
        checkedIn
        customer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
