import { useState, useEffect } from 'react';

const EditStudentForm = ({ studentId }) => {
    const [studentData, setStudentData] = useState({
        fullName: '',
        fatherName: '',
        motherName: '',
        class: '',
        rollNumber: '',
        addressLine1: '',
        addressLine2: '',
        pin: '',
        district: '',
    });

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`/api/students/:${studentId}`);
                const data = await response.json();
                setStudentData(data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        fetchStudentData();
    }, [studentId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/students/${studentId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(studentData),
            });

            if (!response.ok) {
                throw new Error('Failed to update student data');
            }

            const updatedStudent = await response.json();
            console.log('Student data updated:', updatedStudent);
        } catch (error) {
            console.error('Error updating student data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Full Name:
                <input type="text" name="fullName" value={studentData.fullName} onChange={handleChange} />
            </label>
            <label>
                Father Name:
                <input type="text" name="fatherName" value={studentData.fatherName} onChange={handleChange} />
            </label>
            <label>
                Mother Name:
                <input type="text" name="motherName" value={studentData.motherName} onChange={handleChange} />
            </label>
            <label>
                Class:
                <input type="text" name="class" value={studentData.class} onChange={handleChange} />
            </label>
            <label>
                Roll Number:
                <input type="text" name="rollNumber" value={studentData.rollNumber} onChange={handleChange} />
            </label>
            <label>
                Address Line 1:
                <input type="text" name="addressLine1" value={studentData.addressLine1} onChange={handleChange} />
            </label>
            <label>
                Address Line 2:
                <input type="text" name="addressLine2" value={studentData.addressLine2} onChange={handleChange} />
            </label>
            <label>
                Pin:
                <input type="text" name="pin" value={studentData.pin} onChange={handleChange} />
            </label>
            <label>
                District:
                <input type="text" name="district" value={studentData.district} onChange={handleChange} />
            </label>
            <button type="submit">Update Student</button>
        </form>
    );
};

export default EditStudentForm;