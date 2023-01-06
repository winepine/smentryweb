import { Button } from "@chakra-ui/react"
import {inviteEntry} from '../../services/inviteEntry'
const InvitesActions = ({invite}:any)=>{
    return <>
    {invite.numberplate===''&&
    <Button onClick={()=>inviteEntry(invite.id)} >Grant Entry</Button>}
    </>
}
export default InvitesActions