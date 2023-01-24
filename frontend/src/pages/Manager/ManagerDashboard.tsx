import { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserCard from '../../components/Cards/UserCard/UserCard';
import Header from '../../components/header/Header';
import { getAllUsers } from '../../utils/apis/UserApi';

const UsersContainer = styled.div`
  position: relative;
  top: 10vh;
  left: 0;
  right: 0;
  width: 90%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-directon: row;
  flex-wrap: wrap;
`;
const Label = styled.div`
  font-size: 34px;
  font-weight: 800;
`;
const ManagerDashboard = () => {
  const [users, setUsers] = useState<any>({});
  console.log(users);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers({ ...(res?.data.users || {}) });
    });
  }, []);

  const onDelete = (user_id: string, role: string) => {
    if (role === 'Technician') {
      console.log('HERE deleting tech');
      setUsers({ ...users, technicians: [...users.technicians.filter((user: any) => user.id !== user_id)] });
    }

    if (role === 'Selector') {
      console.log('HERE deleting select');
      setUsers({ ...users, selectors: [...users.selectors.filter((user: any) => user.id !== user_id)] });
    }

    if (role === 'Client') {
      console.log('HERE deleting clients');
      setUsers({ ...users, clients: [...users.clients.filter((user: any) => user.id !== user_id)] });
    }
  };

  return (
    <div>
      <Header></Header>
      <UsersContainer>
        <Label>Clients</Label>
        <Container>
          {users?.clients?.map((user: any, index: number) => {
            return (
              <div key={index}>
                <UserCard onDelete={onDelete} user={user} role="Client" />
              </div>
            );
          })}
        </Container>

        <Label>Selectors</Label>
        <Container>
          {users?.selectors?.map((user: any, index: number) => {
            return (
              <div key={index}>
                <UserCard onDelete={onDelete} user={user} role="Technician" />
              </div>
            );
          })}
        </Container>

        <Label>Technicians</Label>
        <Container>
          {users?.technicians?.map((user: any, index: number) => {
            return (
              <div key={index}>
                <UserCard user={user} role="Selector" onDelete={onDelete} />
              </div>
            );
          })}
        </Container>
      </UsersContainer>
    </div>
  );
};

export default ManagerDashboard;
