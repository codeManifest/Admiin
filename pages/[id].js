
import { useRouter } from 'next/router';
import EditStudentForm from '../Components/EditStudentForm';

const EditStudentPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return id ? <EditStudentForm studentId={id} /> : <p>Loading...</p>;
};

export default EditStudentPage;