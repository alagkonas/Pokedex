import { Modal } from 'antd';

function PokemonStatsModal() {
  return (
    <Modal
        title="Vertically centered modal dialog"
        centered
        // visible={modal2Visible}
        // onOk={() => setModal2Visible(false)}
        // onCancel={() => setModal2Visible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
  )
}

export default PokemonStatsModal