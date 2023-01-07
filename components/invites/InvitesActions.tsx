import { Button } from "@chakra-ui/react"
import {inviteEntry} from '../../services/inviteEntry'
const InvitesActions = ({invite}:any)=>{
    return <>
    {invite.numberplate===''&&
    
        invite.status!=='Entered'&&
        <Button fontSize={'xs'} size='xs' onClick={()=>inviteEntry(invite.id)} >Grant Entry</Button>}
    
    </>
}
export default InvitesActions