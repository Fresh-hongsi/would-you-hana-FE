import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { findUser, updateUser } from '../../utils/userStorage';

const { Option } = Select;

const EditProfile: React.FC = () => {
  interface UserProfile {
    email: string;
    nickname: string;
    name: string;
    phone: string;
    birthDate: string;
    location: string[]; // Correctly typed as an array of strings
    password: string;
    userType: string;
    gender: string;
  }

  // State for the user profile
  const [user, setUser] = useState<UserProfile>({
    email: '',
    nickname: '',
    name: '',
    phone: '',
    birthDate: '',
    location: [],
    password: '',
    userType: '',
    gender: '',
  });

  // State for password confirmation input
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // Fetch user data on component mount
  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      const userData = findUser(loggedUser);
      if (userData) {
        // Ensure default values for missing fields
        setUser({
          email: userData.email || '',
          nickname: userData.nickname || '',
          name: userData.name || '',
          phone: userData.phone || '',
          birthDate: userData.birthDate || '',
          location: Array.isArray(userData.location) ? userData.location : [],
          password: userData.password || '',
          userType: userData.userType || '',
          gender: userData.gender || '',
        });
      }
    }
  }, []);

  // Handle generic input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Handle location change specifically for the first element in the array
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      location: [value, ...prevUser.location.slice(1)],
    }));
  };

  // Handle save functionality
  const handleSave = () => {
    if (user.email && user.nickname) {
      if (user.password !== passwordConfirm) {
        message.error('비밀번호가 일치하지 않습니다.');
        return;
      }
      updateUser(user);
      message.success('개인정보가 성공적으로 수정되었습니다!');
    } else {
      message.error('필수 정보를 입력하세요.');
    }
  };

  return (
    <div style={{ width: '100%', paddingLeft: '5%', paddingRight: '15%', paddingTop: '5%', paddingBottom: '5%' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5%' }}>개인정보수정</div>
      <Form
        layout="horizontal"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        labelAlign="left"
        colon={false}
      >
        <Form.Item label="이름" style={{ marginBottom: '20px' }}>
          <Input value={user.name} name="name" disabled style={{ backgroundColor: '#f5f5f5', height: '40px' }} />
        </Form.Item>
        <Form.Item label="이메일" style={{ marginBottom: '20px' }}>
          <Input value={user.email} name="email" disabled style={{ backgroundColor: '#f5f5f5', height: '40px' }} />
        </Form.Item>
        <Form.Item label="비밀번호" required style={{ marginBottom: '20px' }}>
          <Input.Password
            name="password"
            placeholder="8자 이상 비밀번호 입력"
            value={user.password}
            onChange={handleInputChange}
            style={{ height: '40px' }}
          />
        </Form.Item>
        <Form.Item label="비밀번호 확인" required style={{ marginBottom: '20px' }}>
          <Input.Password
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            style={{ height: '40px' }}
          />
        </Form.Item>
        <Form.Item label="근무지역" style={{ marginBottom: '20px' }}>
          <Input
            value={user.location[0]}
            name="location"
            onChange={handleLocationChange}
            style={{ height: '40px' }}
          />
        </Form.Item>

        <Button type="primary" onClick={handleSave} style={{ width: '100%', marginTop: '20px', height: '50px' }}>
          저장
        </Button>
      </Form>
    </div>
  );
};

export default EditProfile;
