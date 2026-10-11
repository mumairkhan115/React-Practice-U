
import { Card, Row, Col, Typography } from 'antd';

const { Title } = Typography;

function PracticePage() {

      const personName = "Sara";
      const personCart = 3;


  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title level={2}>React Practice</Title>
      </Col>

      <Col span={12}>
        <Card>
          <p>
            // isEven arrow function <br /> <br />
            const isEven = (num) ={'>'} num % 2 === 0; <br />
            console.log(isEven(4)); // true <br />
            console.log(isEven(5)); // false <br /><br />

            <ul>
              <li>num number receive karta hai.</li>
              <li>% remainder check karta hai.</li>
              <li>Agar remainder 0 ho, to number even hai aur result true hoga.</li>
            </ul>
          </p>
        </Card>
      </Col>

      <Col span={12}>
        <Card>
          <p>
            // Template literals <br /> <br />
            const message = `${personName} has ${personCart} items in the cart.`;
          </p>
        </Card>


      </Col>

    </Row>
    
  );
}

export default PracticePage;