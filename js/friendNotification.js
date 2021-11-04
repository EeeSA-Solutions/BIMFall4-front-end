import { getDataByName } from "./fetches.js"

/* vi behöver hämta friend requests. (tror vi har en fetch för det) --KLART
    efter det display notifaction box över friend i "menyn". --KLART
    vi behöver även ta bort den efter att clienten sett/gått in på social sidan. 
    
    Metod som hämtar requests och sedan skapar divven för notification. --Måste implementeras
    Kolla om vi behöver en ny fetch.¨¨¨  --NEJ --KLART
    
    EMAIL VALIDATION IN FRIEND BE. wtf vi har gjort det!!!
    */

    export const friendRequests = async () => {
        const friendlist = getDataByName("Friend")
       checkNotifacion(await friendlist)
        
    }

const checkNotifacion = (list) => {
    list.forEach(element => {
        
        if (element.List_ID === 1) {
            const div = document.createElement('div')
            const social = document.getElementsByClassName('social')
            const text=document.createElement('p')
            const textnode = document.createTextNode('!')
            div.id="notificationDiv"
            text.id="notificationText"
            div.appendChild(text)
            text.appendChild(textnode)
            social[0].append(div)
        }
    });
}
