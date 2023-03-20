import * as React from 'react'
import * as Realm from 'realm-web'



const RealmAppContext = React.createContext();
export const useRealmApp = () => {

    const app = React.useContext(RealmAppContext)
    const appCreated = app ? true : false;


    console.log(appCreated);
    return app;
}
export const RealmAppProvider = ({ appId, children }) => {
    const [app, setApp] = React.useState(new Realm.App(appId));
    React.useEffect(() => {
        setApp(new Realm.App(appId))

    }, [appId])

    const [currentUser, setCurrentUser] = React.useState(app.currentUser);

    async function logIn(credentials) {
        await app.logIn(credentials);
        setCurrentUser(app.currentUser);
        console.log("login function" + currentUser)
    }
    async function logOut(credentials) {
        await app.currentUser.logOut(credentials);
        setCurrentUser(app.currentUser);
        console.log("logout function" + currentUser)

    }

    const wrapped = { ...app, currentUser, logIn, logOut }

    return (
        <RealmAppContext.Provider value={wrapped}>
        {children}
        </RealmAppContext.Provider>
    )

}