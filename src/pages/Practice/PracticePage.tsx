
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

      <Col span={8}>
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

      <Col span={8}>
        <Card>
          <p>// Write 3 console lines: a name variable, an age variable, and a console.log printing both (predict output first)</p>

          <p>let name = "Umair";<br />
              let age = 25;<br />
              console.log(name, age);<br /> <br />

              // Output: Umair 25
          </p>
        </Card>
      </Col>

      <Col span={8}>
        <Card>
          <p>// Template literals</p>
          <p>{`const message = \`${personName} has ${personCart} items in the cart.\`;`}</p>
        </Card>
      </Col>

      <Col span={8}>
        <Card>
          <p>// Write isEven as an arrow function, rewrite square() as a one-line arrow, and explain why x =&gt; {'{ x * 2 }'} returns undefined</p>
          <p>Write isEven as an arrow function</p>
          <p>{`const isEven = (num) => num % 2 === 0;`}</p>
          <p>{`console.log(isEven(4)); // true`}</p>
          <p>{`console.log(isEven(5)); // false`}</p>
          <p>Agar number 2 se divide hone par remainder 0 ho, to number even hai.</p>
          <p>Rewrite square() as a one-line arrow function</p>
          <p>Normal function:</p>
          <p>{`function square(x) { return x * x; }`}</p>
          <p>One-line arrow function:</p>
          <p>{`const square = (x) => x * x;`}</p>
          <p>{`console.log(square(5)); // 25`}</p>
          <p>Key point: Jab arrow function mein {'{}'} use nahi karte, to expression automatically return hota hai. Isay implicit return kehte hain.</p>
          <p>Why does x =&gt; {'{ x * 2 }'} return undefined?</p>
          <p>{`const double = x => { x * 2; };`}</p>
          <p>{`console.log(double(5)); // undefined`}</p>
          <p>Reason: Curly braces {'{}'} use karne par function body start hoti hai. Is case mein return statement missing hai, is liye function undefined return karta hai.</p>
          <p>Correct approach 1 — Explicit return:</p>
          <p>{`const double = x => { return x * 2; };`}</p>
          <p>{`console.log(double(5)); // 10`}</p>
          <p>Correct approach 2 — Implicit return:</p>
          <p>{`const double = x => x * 2;`}</p>
          <p>{`console.log(double(5)); // 10`}</p>
          <p>Interview tip: Arrow function mein {'{}'} use karo to return likhna hota hai. {'{}'} hata do to expression automatically return hota hai.</p>
        </Card>
      </Col>
    </Row>
    
  );
}

export default PracticePage;