import { useEffect, useState } from "react"
import styled from "styled-components"
import UserCard from "../../components/Cards/UserCard/UserCard"
import Header from "../../components/header/Header"
import { getAllUsers } from "../../utils/apis/UserApi"

const UsersContainer = styled.div`
    position: relative;
    top: 10vh;
    left: 0;
    right: 0;
    width: 90%;
    margin: 0 auto;
`

const UsersData = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Label = styled.div`
    font-size: 34px;
    font-weight: 800;
`
const ManagerDashboard = () => {

    const [users, setUsers] = useState<any>({});

    useEffect(() => {
        getAllUsers().then((res) => {
            setUsers({...res?.data.users || {}});
        })
    }, [])

    return(
        <div>
            <Header></Header>
            <UsersContainer>
                <Label>Users</Label>
                <UsersData>
                    { users?.clients?.map((user:any) => {
                        return(
                            <UserCard user={user} role='Client'/>
                        )
                    }) }

                    { users?.selectors?.map((user:any) => {
                        return(
                            <UserCard user={user} role='Technician'/>
                        )
                    }) }

                    { users?.technicians?.map((user:any) => {
                        return(
                            <UserCard user={user} role='Selector'/>
                        )
                    }) }

                </UsersData>
            </UsersContainer>
        </div>
    )
}

export default ManagerDashboard