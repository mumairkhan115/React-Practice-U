import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <Card>
      <h2>Welcome to your dashboard!</h2>
      <Button type="primary" onClick={() => navigate('/practice')}>
        Go to Practice
      </Button>
    </Card>
  );
}

export default DashboardPage;
