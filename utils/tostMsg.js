import {
    toast
} from 'react-toastify';
const successMessage = (e) => {
    toast.success(e, {
        position: toast.POSITION.TOP_RIGHT
    });
};
const errorMessage = (e) => {
    toast.error(e, {
        position: toast.POSITION.TOP_RIGHT
    });
};

export  {
    successMessage,
    errorMessage
}