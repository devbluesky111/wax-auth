import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Wax } from "@eosdacio/ual-wax";
import { Anchor } from 'ual-anchor';
import { Ledger } from 'ual-ledger';
import { Scatter } from 'ual-scatter';
import { Starteos } from 'ual-starteos';
import { Wombat } from 'ual-wombat';
import { JsonRpc } from 'eosjs';
const { UALProvider, withUAL } = require('ual-reactjs-renderer');

const appName = "wax-auth";

const myChain = {
  chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [
      {
          protocol: 'https',
          host: 'wax.greymass.com',
          port: 443,
      }
  ],
};

const endpoint = `${myChain.rpcEndpoints[0].protocol}://${myChain.rpcEndpoints[0].host}:${myChain.rpcEndpoints[0].port}`;
const rpc = new JsonRpc(endpoint);

const wax = new Wax([myChain]);
const anchor = new Anchor([myChain], {appName : appName});
const ledger = new Ledger([myChain]);
const scatter = new Scatter([myChain], {appName: appName});
const starteos = new Starteos([myChain], {appName: appName});
const wombat = new Wombat([myChain], {appName: appName});

const AppWithUAL = withUAL(App);

ReactDOM.render(
  <UALProvider chains={[myChain]} authenticators={[wax, anchor, ledger, scatter, starteos, wombat]} appName={appName}>
    <AppWithUAL rpc={rpc} />
  </UALProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
