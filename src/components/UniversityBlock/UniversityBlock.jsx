import Paper from '../common/Paper/Paper';
import Card from './Card/Card';

const UniversityBlock = ({ name, descr }) => {
  return (
    <div>
      <Paper>
        <Card name={name} />
      </Paper>
      <Paper>
        <p>{descr}</p>
      </Paper>
    </div>
  );
};

export default UniversityBlock;
