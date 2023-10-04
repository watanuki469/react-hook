import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const ModalAddNew = (props) => {
    const { show, handleClose } = props
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const handlerSaveUser=()=>{
        console.log(">>check: ","name=",name)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <div class="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name}
                                onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Job</label>
                            <input type="text" className="form-control" value={job}
                                onChange={(event) => setJob(event.target.value)} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=> handlerSaveUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddNew


