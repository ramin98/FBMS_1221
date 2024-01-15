function ModalWindows({setShowModal}) {

    return (
        <div className="modal-container">
        <div className="modal">
            <button className="modalExit" onClick={() => setShowModal(false)}>X</button>
            <h2>LOGIN</h2>
            <input type="text" placeholder="Name"/>
            <input type="password" placeholder="Password"/>
            <button>LOGIN</button>
        </div>
        </div>
    )
}

export default ModalWindows