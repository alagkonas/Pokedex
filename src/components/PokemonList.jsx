import { Col, Row } from 'antd';
import PokemonItem from './PokemonItem';
import PokemonStatsModal from './PokemonStatsModal';

function PokemonList() {
  return (
    <Row gutter={gutter} style={rowStyle}>
      <Col className='gutter-row' xs={12} sm={8} lg={6} xxl={4}>
        <div style={divStyle}>
          <PokemonItem />
          <PokemonStatsModal/>
        </div>
      </Col>
      <Col className='gutter-row' xs={12} sm={8} lg={6} xxl={4}>
        <div style={divStyle}>
          <PokemonItem />
        </div>
      </Col>
      <Col className='gutter-row' xs={12} sm={8} lg={6} xxl={4}>
        <div style={divStyle}>
          <PokemonItem />
        </div>
      </Col>
      <Col className='gutter-row' xs={12} sm={8} lg={6} xxl={4}>
        <div style={divStyle}>
          <PokemonItem />
        </div>
      </Col>
      <Col className='gutter-row' xs={12} sm={8} lg={6} xxl={4}>
        <div style={divStyle}>
          <PokemonItem />
        </div>
      </Col>
      <Col className='gutter-row' xs={12} sm={8} lg={6} xxl={4}>
        <div style={divStyle}>
          <PokemonItem />
        </div>
      </Col>
    </Row>
  );
}

export default PokemonList;

const gutter = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
};

const rowStyle = {
  width: '100%',
  justify: 'space-between',
  margin: 'auto',
};

const divStyle = {
  background: '#0092ff',
  margin: '15px 0 15px 0',
};
