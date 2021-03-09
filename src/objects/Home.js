import React from 'react'
import { Row, Col, Card } from 'antd';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const nextPage = (news) => {
        console.log(news);
        navigate("/factory",{ state: news });
    }
    return (
        <div style={{backgroundColor: 'lightblue',}}>
            <Row gutter={[16, 254]}>
            <Col span={6} />
            <Col span={6} />
            <Col span={6} />
            <Col span={6} />
            <Col span={6} />
            <Col span={6} >
                <h1>Sport News</h1>
                    <Card hoverable style={{
                        borderRadius: "16px",
                        marginRight: "24px",
                        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"
                    }}
                    onClick={()=>nextPage('SP')}>
                        <h1 style={{fontSize:64}}><img src="https://www.sportsfusion.us/wp-content/uploads/2017/09/085e79a65fc32c9a4c0531e3fb4f7acb.jpg" style={{height:220,width:390}}></img></h1>
                    </Card>
                </Col>
                <Col span={6} >
                    <h1>IT News</h1>
                    <Card hoverable style={{
                        borderRadius: "16px",
                        marginRight: "24px",
                        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"
                    }}
                    onClick={()=>nextPage('IT')}>
                        <h1 style={{fontSize:64}}><img src="https://www.mkh.go.th/it/wp-content/uploads/2019/09/security.png" style={{height:220,width:390}}></img></h1>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}
export default Home;