import React from 'react'

import App from '../pages/App'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RealmAppProvider, useRealmApp } from '../provider/RealmApp'
import { appId } from '../realm.json'

const APP_ID = appId
export default function IndexPage() {

    return (

        <RealmAppProvider appId={APP_ID}>
        <App/>
        </RealmAppProvider >

    )
}