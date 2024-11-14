import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
import hanaFamilyTogether from '../../assets/img/HanaFamilyTogether.png'
import iconUser from '../../assets/img/icon_user.png'
import trendKeyword from '../../assets/img/trendKeyword_seocho.png'
import labelDistrict from '../../assets/img/label_district.png';
import logoSeocho from '../../assets/img/logo_seocho.png';
import labelRegulation from '../../assets/img/label_regulation.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../hoc/store';

import '../../App.css';

// 구 플래그 컴포넌트
const GuBadge: React.FC = () => {
  return (
    <div style={guContainerStyle}>
      <img src={logoSeocho} style={{padding: '15px'}}></img>
    </div>
  );
};

// 규제 플래그 컴포넌트
const RegulationBadge: React.FC = () => {
    return (
      <div style={regulationContainerStyle}>
        <span style={flagRegulationTextStyle}>부동산 <br/>규제지역</span>
      </div>
    );
  };

  const guContainerStyle = {
    backgroundImage: `url(${labelDistrict})`,
    backgroundSize: 'cover',
    color: '#fff',
    fontWeight: 'bold',
    padding: '0px 0', // Removed top padding by setting it to 0
    textAlign: 'center' as const,
    fontSize: '20px',
    width: '120px',
    height: '100px',
    margin: '0 auto',
    display: 'inline-block',
    lineHeight: '4',
  };
  

const regulationContainerStyle = {
    backgroundImage: `url(${labelRegulation})`,
    backgroundSize: 'cover',
    color: '#fff',
    fontWeight: 'bold',
    padding: '7px 0', // Removed top padding by setting it to 0
    textAlign: 'center' as const,
    fontSize: '20px',
    width: '120px',
    height: '100px',
    margin: '0 auto',
    display: 'inline-block',
    lineHeight: '4',
  };
  

const flagGuTextStyle = {
  display: 'block',
  lineHeight: '4'
};

const flagRegulationTextStyle = {
    display: 'block',
    lineHeight: '1.5'
} 

const CardContent = ({ type, date, likes,views, content }: { type: string, date: string, likes: string, views:string, content: string }) => (
  <div style={{ textAlign: 'left', padding:'10px',marginTop:'10px' }}>
      <div style={{ marginTop: '10px', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#FF6F61' }}>{type}</span>
          <span style={{ fontSize: '14px', color: '#888888', marginLeft:'20px' }}> {date}</span>
      </div>
      <div style={{ fontSize: '22px', color: '#000', marginTop: '10px' }}>{content}</div>
      <div style={{ marginTop: '10px', justifyContent: 'space-between', textAlign:'end' }}>
          <span style={{ fontSize: '14px', color: '#888888', marginRight:'20px' }}>좋아요 {likes}</span>
          <span style={{ fontSize: '14px', color: '#888888' }}>👀조회수 {views}</span>
      </div>
      <hr style={{marginTop:'20px', color:'black'}}/>
  </div>
);

const Seocho: React.FC = () => {
  //const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const userRole = useSelector((state: RootState) => state.auth.userRole);
  const userEmail = useSelector((state: RootState) => state.auth.userEmail);

  useEffect(() => {
    console.log('User Role:', userRole);
    console.log('User Email:', userEmail);
    console.log('Is Authenticated:', isAuthenticated);
  }, [userRole, userEmail, isAuthenticated]);


  return (
    <div style={{ width: '100%', padding: '20 20' }}>
      <div style={{ textAlign: 'center', marginTop:'20px' }}>
        <Row
          gutter={[16, 16]}
          style={{ backgroundColor: '#00848515', height: '600px' }}
        >
          <Col span={12}>
            <div style={{ marginLeft: '100px', display: 'flex', justifyContent: 'start' }}>
                <div style={{ display: 'flex', gap: '30px', width: '300px' }}>
                <GuBadge />
                <RegulationBadge />
                </div>
            </div>

            
            <img
              src={hanaFamilyTogether}
              alt="hanaFamilyTogether"
              width={700}
            />
          </Col>

          <Col span={12} style={{ alignContent: 'left', marginLeft: '0px' }}>
            
            <h1
              style={{
                color: 'black',
                fontSize: '40px',
                lineHeight: '1.2',
                textAlign: 'left',
              }}
            >
            <strong>
                <span style={{ color: 'black', fontSize:'20px' }}> 지금 <span style={{fontSize:'30px'}}>서초구</span> 사람들은 <br/> 여기에 관심이 있어요</span>
            </strong>
            </h1>

            <div className='flex justify-center items-center w-full p-6'>
              <img
                style={{ marginLeft: '0px', padding: '0px ' }}
                src={trendKeyword}
                alt='trendKeyword'
                width={350}
              />
            </div>
            <strong>
                <span style={{ color: 'black', fontSize:'20px',textAlign:'left' }}> 오늘 서초구에서 <span style={{fontSize:'30px'}}>1,231개</span>의 질문, <span style={{fontSize:'30px'}}>210개</span>의 답변이 등록되었습니다!</span>
            </strong>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ backgroundColor: '#ffffff' }}>
          <Col span={24} style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
              
            </h2>
          </Col>

          <Col xs={24} sm={8}>
          <Card
                    
                    title={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>🔥 HOT 금융 게시물</span>}
                    style={{ textAlign: 'center', fontSize: '20px' }}
                    //onClick={() => navigate('/feature-a')}
                >
                    <CardContent
                        type="대출"
                        date="2024.10.30 10:31"
                        likes={'2.5K개'}
                        views={'21.2K회'}
                        content="서초구에서 전세자금 대출 상담 잘해주는 곳"
                    />
                    <CardContent
                        type="소비"
                        date="2024.10.29 09:15"
                        likes={'1.0K개'}
                        views={'12.1K회'}
                        content="서초구 맛집 리스트 공유해요"
                    />
                    <CardContent
                        type="주식"
                        date="2024.10.30 10:31"
                        likes={'2.5K개'}
                        views={'21.2K회'}
                        content="서초구 사람들 주식 어떤 종목 투자해요?"
                    />
                </Card>
          </Col>
          <Col xs={24} sm={8}>
                <Card
                title={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>✒️ 방금 답변이 작성된 Q&A</span>}
                style={{ textAlign: 'center' }}
                //onClick={() => navigate('/feature-b')}
                >
                    <CardContent
                        type="대출"
                        date="2024.10.31 10:31"
                        likes={'122개'}
                        views={'1.0K회'}
                        content="사업자 대출 조건이 궁금합니다"
                    />

                    <CardContent
                        type="외환"
                        date="2024.11.03 10:31"
                        likes={'182개'}
                        views={'2.0K회'}
                        content="외화 통장 개설 관련 문의"
                    />
                </Card>
            </Col>

            <Col xs={24} sm={8}>
                <Card
                title={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>🏆 오늘의 열혈 답변가</span>}
                style={{ textAlign: 'center' }}
                //onClick={() => navigate('/feature-c')}
                >
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#ffC0CB60', padding: '20px', borderRadius: '10px', marginBottom: '10px', marginLeft:'0px',textAlign:'left' }}>
                    <div style={{ fontSize: '36px', marginRight: '15px' }}>🥇</div>
                    <img src={iconUser} alt="User Icon" style={{ width: '100px', height: '100px', marginRight: '15px', marginLeft: '0px'}} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>보섭살김하나</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>LV24</div>
                        <div style={{ fontSize: '18px'}}>활동🥁: 46</div>
                        <div style={{ fontSize: '18px'}}>좋아요👍🏻: 89</div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center',  backgroundColor: '#f6FE8060', padding: '20px', borderRadius: '10px', marginBottom: '10px', marginLeft: '0px', width: '100%',textAlign:'left' }}>
                    <span style={{ fontSize: '36px', marginRight: '20px', lineHeight: '1' }}>🥈</span>
                    <div style={{display: 'grid', gridTemplateColumns: '150px auto auto auto', alignItems: 'center', width: '100%', gap: '10px' }}>
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>별돌이도내꺼야</span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>LV18</span>
                        <span style={{ fontSize: '18px' }}>활동🥁: 46</span>
                        <span style={{ fontSize: '18px' }}>좋아요👍🏻: 89</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center',  backgroundColor: '#ADC8E650', padding: '20px', borderRadius: '10px', marginBottom: '10px', marginLeft: '0px', width: '100%',textAlign:'left' }}>
                    <span style={{ fontSize: '36px', marginRight: '20px', lineHeight: '1' }}>🥉</span>
                    <div style={{display: 'grid', gridTemplateColumns: '150px auto auto auto', alignItems: 'center', width: '100%', gap: '10px'}}>
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>나폴리맛피아</span>
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>LV42</span>
                        <span style={{ fontSize: '18px' }}>활동🥁: 16</span>
                        <span style={{ fontSize: '18px' }}>좋아요👍🏻: 24</span>
                    </div>
                </div>
                </Card>
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default Seocho;
