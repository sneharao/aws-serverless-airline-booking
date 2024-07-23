/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFlight = /* GraphQL */ `
  subscription OnCreateFlight {
    onCreateFlight {
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
export const onUpdateFlight = /* GraphQL */ `
  subscription OnUpdateFlight {
    onUpdateFlight {
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
export const onDeleteFlight = /* GraphQL */ `
  subscription OnDeleteFlight {
    onDeleteFlight {
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
export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking($customer: String) {
    onCreateBooking(customer: $customer) {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking($customer: String) {
    onUpdateBooking(customer: $customer) {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking($customer: String) {
    onDeleteBooking(customer: $customer) {
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
