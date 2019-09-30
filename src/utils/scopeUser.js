import  firebase from './Firebase'


export const scopeUser = (ref) => {

    const [user] = firebase.auth().currentUser.email.split(".")

    const segments = [ref, user]

    return  segments.join("/")   

}