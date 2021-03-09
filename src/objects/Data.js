import React from 'react'
import { Row, Col, Card } from 'antd';
import { useNavigate } from "react-router-dom";
import {
    LeftCircleOutlined
} from '@ant-design/icons';

const { Meta } = Card;
function Data({news}) {
    const navigate = useNavigate();
    console.log(news);
    const back = () => {
        navigate('/');
    }
    return (
        <div style={{backgroundColor: 'lightblue',}}>
            <Row type="flex" align="middle" >
                <Col span={12} offset={6}>
                    <Row>
                    <LeftCircleOutlined style={{ fontSize: "30px", marginTop: 80 }} onClick={() => back()} />
                    <h3 style={{ fontSize: "30px", marginTop: 70, marginLeft:20}}>{news.title}</h3>
                    </Row>
                    <Card hoverable style={{
                        marginTop: 20,
                        maxWidth: 1500, width: 900,
                        borderRadius: "16px",
                        marginRight: "24px",
                        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",

                    }}
                        cover={<img alt="example" src="https://motionarray.imgix.net/preview-328095-gNWCObG9we-high_0004.jpg?w=660&q=60&fit=max&auto=format" />}>
                        <Meta title={news.title} description={news.des} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Data;