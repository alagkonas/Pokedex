import { PageHeader } from 'antd';

function Header() {
  return (
    <>
      <PageHeader
        avatar={{src:'../assets/images/logo2.jpg'}}
        className='site-page-header'
        title='Pokédex'
        ghost={true}
        style={headerStyles}
      />
    </>
  );
}

export default Header;

const headerStyles = {
  backgroundColor: '#35CE13',
}