import React, { Component, useState } from "react";
import "./../styles/App.css";
// Do not alter the states const and values inside it.
import State from "./State";
const states = [
  {
    name: "West Bengal",
    cities: [
      {
        name: "asansol",
        towns: [
          {
            name: "Raha lane"
          },
          {
            name: "Jublee"
          }
        ]
      },
      {
        name: Durgapur,
        towns: [
          {
            name: "City centre"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "Chirkunda"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Ranchi",
        towns: [
          {
            name: "Bariatu"
          },
          {
            name: "Booty more"
          }
        ]
      },
      {
        name: "Daltonganj",
        towns: [
          {
            name: "Chattarpur"
          },
          {
            name: "Netarhat"
          }
        ]
      }
    ]
  },
  {
    name: "Odisha",
    cities: [
      {
        name: "Bhubaneshwar",
        towns: [
          {
            name: "lingeshwar mandir"
          },
          {
            name: "nandan kanan"
          }
        ]
      },
      {
        name: "puri",
        towns: [
          {
            name: "sea beach"
          },
          {
            name: "jagnnath mandir"
          }
        ]
      }
    ]
  }
];

function App() {
  return (
    <div id="main">
      <State states={states} />
    </div>
  );
}

export default App;
