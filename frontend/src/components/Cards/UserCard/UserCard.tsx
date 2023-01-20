import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteUser, updateUser } from '../../../utils/apis/UserApi';
import Button, { ButtonSize } from '../../common/button/Button';
import DropDown from '../../common/dropdown/DropDown';
import LocationApi from '../../../utils/apis/LocationApi';

const UserCardContainer = styled.div`
  width: 300px;
  height: 250px;
  background-color: #d8b669;
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
`;
const Label = styled.div`
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;
const SmallInfo = styled.div`
  font-size: 12px;
  color: white;
`;
const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

interface UserCardProps {
  user: any;
  role?: string;
}

const userRoles = [
  { id: 0, name: 'Client', inactive: true },
  { id: 1, name: 'Technician' },
  { id: 2, name: 'Selector' }
];

const UserCard = (props: UserCardProps) => {
  const { user, role } = props;
  const [editing, setEditing] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<string>();
  const [selectedLocation, setSelectedLocation] = useState<any>();
  const [locations, setLocations] = useState<Array<any>>([]);

  const handleEditing = () => {
    if (editing) {
      updateUser({ ...user, role: selectedRole, location: selectedLocation });
    }
    setEditing(!editing);
  };

  const handleOptionChoose = (e: any) => {
    setSelectedRole(e.name);
  };

  const handleLocationSelection = (e: any) => {
    setSelectedLocation(e.id);
  };

  useEffect(() => {
    if (selectedRole === 'Technician') {
      LocationApi.getAllLocations().then((locs: any) => {
        setLocations(locs);
      });
    }
  }, [selectedRole]);

  return (
    <UserCardContainer>
      <Label>
        {user.first_name} {user.last_name}
      </Label>
      <SmallInfo>
        {user.email} {user?.phone}
      </SmallInfo>
      <EditWrapper>
        <DropDown
          disabled={!editing}
          placeholder="Role"
          options={userRoles}
          initialValue={role}
          onChange={handleOptionChoose}
        ></DropDown>
        {selectedRole === 'Technician' && (
          <DropDown placeholder="Location" options={locations} onChange={handleLocationSelection}></DropDown>
        )}
        <Button
          disabled={selectedRole === 'Technician' && selectedLocation === undefined}
          size={ButtonSize.SMALL}
          name={editing ? 'Save' : 'Edit'}
          onClick={handleEditing}
          type={false}
        ></Button>
      </EditWrapper>
      <Button
        style={{ margin: '0 auto', backgroundColor: 'rgba(255,99,71, .7)', color: '#fff' }}
        type={false}
        name="Delete"
        onClick={() => {
          deleteUser(user);
        }}
      ></Button>
    </UserCardContainer>
  );
};

export default UserCard;
