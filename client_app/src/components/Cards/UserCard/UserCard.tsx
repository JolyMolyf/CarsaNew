import { useState } from "react";
import styled from "styled-components";
import { updateUser } from "../../../utils/apis/UserApi";
import Button, { ButtonSize } from "../../common/button/Button";
import DropDown from "../../common/dropdown/DropDown";

const UserCardContainer = styled.div`
    width: 300px; 
    height: 150px;
    background-color: #D8B669;
    margin: 5px;
    border-radius: 5px;
    padding: 5px;
`
const Label = styled.div`
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: white;
`
const SmallInfo = styled.div`
    font-size: 12px;
    color: white;
`
const EditWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

interface UserCardProps {
    user:any
    role?:string
}

const userRoles = [{id: 0, name: 'Client'},{id: 1, name: 'Technician'}, {id: 2, name: 'Selector'}];

const UserCard = (props:UserCardProps) => {
    const { user, role } = props;
    const [ editing, setEditing ] = useState<boolean>(false);
    const [ selectedRole, setSelectedRole ] = useState();
    
    const handleEditing = () => {
        if ( editing ) {
            updateUser({...user, role: selectedRole});
        }
        setEditing(!editing)
    }

    const handleOptionChoose = (e:any) => {
        setSelectedRole(e.name)
    }


    return (
        <UserCardContainer>
            <Label>{ user.first_name } { user.last_name }</Label>
            <SmallInfo>{ user.email } { user?.phone }</SmallInfo>
            <EditWrapper>
                <DropDown disabled={!editing} placeholder='Role' options={userRoles} initialValue={role} onChange={handleOptionChoose} ></DropDown>
                <Button size={ButtonSize.SMALL} name={editing ? 'Save' : 'Edit'} onClick={handleEditing} type={false} ></Button>    
            </EditWrapper>
            <Button style={{ margin: '0 auto', backgroundColor: 'rgba(255,99,71, .7)', color: '#fff' }} type={false} name='Delete' onClick={() => {

            }} ></Button>
            
        </UserCardContainer>
    )
}

export default UserCard;