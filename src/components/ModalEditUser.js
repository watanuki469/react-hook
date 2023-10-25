import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { putUpdateUser } from '../services/UserService';

const ModalEditUser = (props) => {
    const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props
    const [name, setName] = useState("")
    const [job, setJob] = useState("")


    const handleEditUser = async () => {
        let res = await putUpdateUser(name, job)
        if (res && res.updatedAt) {
            handleEditUserFromModal({
                first_name: name,
                id: dataUserEdit.id
            })
            handleClose();
            toast.success("update successfully");
        }
    }

    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name)
        }
    }, [show, dataUserEdit]);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit a users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name}
                                onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
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
                    <Button variant="primary" onClick={() => handleEditUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEditUser

