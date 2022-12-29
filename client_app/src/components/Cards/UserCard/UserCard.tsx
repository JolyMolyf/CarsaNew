import styled from "styled-components";

const UserCardContainer = styled.div`
    width: 150px; 
    height: 150px;
    background-color: #D8B669;
    margin: 5px;
    border-radius: 5px;
`

interface UserCardProps {
    user:any
}

const UserCard = (props:UserCardProps) => {
    return (
        <UserCardContainer>

        </UserCardContainer>
    )
}

export default UserCard;