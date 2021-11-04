import { getDataByName } from "./fetches.js"

/* vi behöver hämta friend requests. (tror vi har en fetch för det)
    efter det display notifaction box över friend i "menyn".
    vi behöver även ta bort den efter att clienten sett/gått in på social sidan.
    
    Metod som hämtar requests och sedan skapar divven för notification.
    skapa div med notifaction box > event listener  som sakpar den? 
    Kolla om vi behöver en ny fetch.¨¨¨
    
    EMAIL VALIDATION IN FRIEND BE. wtf vi har gjort det!!!
    */

    export const friendRequests = async () => {
        const friendlist = getDataByName("Friend")
       checkNotifacion(await friendlist)
        
    }

const checkNotifacion = (list) => {
    list.forEach(element => {
        
        if (element.List_ID === 1) {
            const social = document.getElementsByClassName('social')
            const text=document.createElement('p')
            const textnode = document.createTextNode('!')
            text.id="notification"
            text.appendChild(textnode)
            social[0].append(text)
        }
    });
}
