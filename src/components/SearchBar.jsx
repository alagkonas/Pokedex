import { Input } from 'antd';


function SearchBar() {

  return (
    <Search
    id='search-input'
    placeholder='input search text'
    size='large'
    style={styles}
    enterButton
  />

  )
}

export default SearchBar

const { Search } = Input;

const styles = {
    width: '40%',
    display: 'block',
    margin: '40px auto 40px auto'
}  